import React, { useEffect, useState } from "react";
import Head from "next/head";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: string;
  wordCount: number;
  readTime: number;
  createdAt: any;
};

const CATEGORIES = [
  "All",
  "Content Creation",
  "Content Monetisation",
  "Media & Event Services",
  "Content Management",
  "Content Repurposing",
  "Content Marketing",
];

const formatDate = (ts: any) => {
  if (!ts) return "";
  try {
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch { return ""; }
};

const BLOG_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

  .bl-page { min-height: 100vh; background: #0a0a0a; padding-bottom: 100px; font-family: 'Raleway', sans-serif; }

  /* SEARCH + FILTER SECTION */
  .bl-filter-bar {
    background: linear-gradient(180deg, rgba(6,6,7,0.99), rgba(20,8,31,0.95));
    padding: 40px 40px 48px;
    border-bottom: 1px solid rgba(180,90,20,0.2);
  }
  .bl-search-wrap {
  width: 50%;
  max-width: 500px;
}

  .bl-search-wrap { width: 100%; max-width: 520px; position: relative; }
  .bl-search {
    width: 100%; background: rgba(255,255,255,0.04) !important;
    border: 1px solid rgba(192,80,16,0.3); border-radius: 30px;
    color: #fff !important; font-family: 'Raleway', sans-serif; font-size: 14px;
    padding: 13px 22px 13px 46px; outline: none; transition: all 0.2s;
    letter-spacing: 0.3px;
  }
  .bl-search::placeholder { color: rgba(255,255,255,0.25) !important; }
  .bl-search:focus { border-color: #c05010; background: rgba(192,80,16,0.06) !important; box-shadow: 0 0 0 3px rgba(192,80,16,0.1); }
  .bl-search-icon { position: absolute; left: 17px; top: 50%; transform: translateY(-50%); color: rgba(192,80,16,0.6); font-size: 14px; pointer-events: none; }

  .bl-cats {
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 30px;
  border-left: 1px solid rgba(255,255,255,0.2); /* 🔥 divider */
}
  .bl-cat {
  white-space: nowrap;
}
  .bl-cat:hover { border-color: #c05010; color: #c05010 !important; }
  .bl-cat.active {
    background: #c05010 !important;
    border-color: #c05010;
    color: #fff !important;
  }

  /* CONTAINER */
  .bl-container { max-width: 1300px; margin: 0 auto; padding: 0 40px; }

  /* LOADING / EMPTY / ERROR */
  .bl-loading { text-align: center; padding: 100px 0; }
  .bl-spinner {
    width: 36px; height: 36px;
    border: 2px solid rgba(192,80,16,0.15);
    border-top-color: #c05010; border-radius: 50%;
    animation: bl-spin 0.7s linear infinite; margin: 0 auto 16px;
  }
  @keyframes bl-spin { to { transform: rotate(360deg); } }
  .bl-loading p { font-size: 13px; color: rgba(255,255,255,0.3) !important; letter-spacing: 1px; }

  .bl-empty { text-align: center; padding: 100px 0; }
  .bl-empty-icon { font-size: 36px; margin-bottom: 16px; color: rgba(192,80,16,0.4); }
  .bl-empty h3 { font-family: 'Cinzel', serif; font-size: 18px; color: rgba(255,255,255,0.4) !important; margin-bottom: 8px; }
  .bl-empty p { font-size: 13px; color: rgba(255,255,255,0.25) !important; }

  .bl-error {
    margin: 40px auto; max-width: 600px;
    background: rgba(220,50,30,0.07); border: 1px solid rgba(220,50,30,0.25);
    padding: 16px 20px; color: #e05030 !important; font-size: 13px; border-radius: 4px;
  }

  /* SECTION LABEL */
  .bl-section-label {
    font-family: 'Cinzel', serif; font-size: 10px; font-weight: 600;
    letter-spacing: 3px; text-transform: uppercase;
    color: rgba(192,80,16,0.6) !important; margin-bottom: 20px;
  }

  /* FEATURED */
  .bl-featured-section { padding: 60px 0 0; }
  .bl-featured {
    display: grid; grid-template-columns: 1fr 1fr;
    background: linear-gradient(180deg, rgba(24,24,43,0.98) 0%, rgba(12,12,14,1) 100%);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px; overflow: hidden;
    transition: all 0.35s; text-decoration: none !important;
    position: relative;
  }
  .bl-featured::before {
    content: '';
    position: absolute; inset: -40%;
    background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06), transparent 70%);
    transform: translateX(-100%) rotate(15deg);
    animation: bl-shine 5s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes bl-shine {
    0% { transform: translateX(-120%) rotate(15deg); opacity: 0; }
    30% { opacity: 1; }
    60% { transform: translateX(120%) rotate(15deg); opacity: 0; }
    100% { opacity: 0; }
  }
  .bl-featured:hover { border-color: rgba(192,80,16,0.5); transform: translateY(-3px); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }

  .bl-feat-img { position: relative; overflow: hidden; background: #111; min-height: 260px; }
  .bl-feat-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .bl-featured:hover .bl-feat-img img { transform: scale(1.04); }
  .bl-feat-img-placeholder {
    width: 100%; min-height: 360px; display: flex; align-items: center;
    justify-content: center; font-size: 48px;
    background: linear-gradient(135deg, rgba(24,24,43,0.98), rgba(26,26,34,0.98));
    color: rgba(192,80,16,0.25) !important;
  }

  .bl-feat-body { padding: 28px 32px; display: flex; flex-direction: column; justify-content: center; }
  .bl-feat-cat {
    display: inline-block; font-family: 'Cinzel', serif; font-size: 9px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: #c05010 !important;
    border: 1px solid rgba(192,80,16,0.4); background: rgba(192,80,16,0.08);
    padding: 4px 14px; margin-bottom: 20px; width: fit-content; border-radius: 2px;
  }
  .bl-feat-title {
    font-family: 'Cinzel', serif; font-size: 22px; font-weight: 700;
    color: #fff !important; line-height: 1.25; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .bl-feat-excerpt { font-size: 15px; color: rgba(255,255,255,0.55) !important; font-weight: 300; line-height: 1.75; margin-bottom: 24px; }
  .bl-feat-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
  .bl-meta-item { font-size: 11px; color: rgba(255,255,255,0.35) !important; letter-spacing: 0.3px; }
  .bl-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(192,80,16,0.5); flex-shrink: 0; }
  .bl-feat-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 28px; }
  .bl-tag {
    font-size: 11px; color: rgba(255,255,255,0.35) !important;
    border: 1px solid rgba(255,255,255,0.1); padding: 3px 10px;
    letter-spacing: 0.3px; border-radius: 2px;
  }
  .bl-read-btn {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1px solid #7b61ff;
    color: #fff !important; font-family: 'Raleway', sans-serif; font-size: 13px; font-weight: 600;
    letter-spacing: 1px; padding: 10px 24px; text-decoration: none !important;
    width: fit-content; transition: all 0.25s; border-radius: 30px;
    background: transparent;
  }
  .bl-read-btn:hover { background: #7b61ff; box-shadow: 0 4px 20px rgba(123,97,255,0.35); }

  /* GRID */
  .bl-grid-section { padding: 52px 0 0; }
  .bl-count-bar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 0 20px; border-bottom: 1px solid rgba(255,255,255,0.06); margin-bottom: 32px;
  }
  .bl-count { font-size: 12px; color: rgba(255,255,255,0.3) !important; }
  .bl-count strong { color: rgba(255,255,255,0.55) !important; font-weight: 600; }

  .bl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
  .bl-card {
  border-radius: 12px;
  border: 1px solid #ffffff; /* 🔥 WHITE BORDER */
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  background: #0f0f0f;
}
  
  .bl-card:hover { border-color: rgba(192,80,16,0.4); transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }

  .bl-card-img { position: relative; overflow: hidden; background: #111; }
  .bl-card-img img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.45s ease; }
  .bl-card:hover .bl-card-img img { transform: scale(1.05); }
  .bl-card-img-placeholder {
    height: 200px; display: flex; align-items: center; justify-content: center;
    font-size: 28px; color: rgba(192,80,16,0.2) !important;
  }
  .bl-card-badge {
    position: absolute; top: 14px; left: 14px;
    font-family: 'Cinzel', serif; font-size: 8px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase;
    color: #0a0a0a !important; background: #c05010; padding: 4px 10px; border-radius: 2px;
  }
  .bl-card-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
  .bl-card-title {
    font-family: 'Cinzel', serif; font-size: 15px; font-weight: 600;
    color: #fff !important; line-height: 1.35; margin-bottom: 10px;
    letter-spacing: 0.2px;
  }
  .bl-card-excerpt {
    font-size: 13px; color: rgba(255,255,255,0.45) !important; font-weight: 300;
    line-height: 1.65; margin-bottom: 14px; flex: 1;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .bl-card-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
  .bl-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; margin-top: auto;
  }
  .bl-card-meta { font-size: 11px; color: rgba(255,255,255,0.3) !important; }
  .bl-card-link {
    display: inline-block;
    padding: 6px 16px;
    border: 1px solid #7b61ff;
    border-radius: 30px;
    font-family: 'Raleway', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.8px; text-transform: uppercase;
    color: #fff !important; text-decoration: none !important;
    transition: all 0.2s;
  }
  .bl-card-link:hover { background: #7b61ff; }

  @media (max-width: 1024px) { .bl-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 768px) {
    .bl-container { padding: 0 20px; }
    .bl-filter-bar { padding: 32px 20px 40px; }
    .bl-featured { grid-template-columns: 1fr; }
    .bl-feat-img { min-height: 220px; }
    .bl-feat-body { padding: 28px; }
    .bl-feat-title { font-size: 20px; }
    .bl-grid { grid-template-columns: 1fr; }
  }
    .bl-main-layout {
  display: grid;
  grid-template-columns: 2fr 1px 1fr;
  gap: 30px;
}

/* Divider line */
.bl-main-layout::before {
  content: "";
  grid-column: 2;
  width: 1px;
  background: rgba(255,255,255,0.2);
}

/* LEFT */
.bl-left {
  grid-column: 1;
}

/* RIGHT */
.bl-right {
  grid-column: 3;
}

.bl-side-cats {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 120px;
}

.bl-side-cat {
  padding: 10px 14px;
  text-align: left;
  border: 1px solid rgba(255,255,255,0.2);
  background: transparent;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  transition: 0.2s;
}

.bl-side-cat:hover {
  border-color: #c05010;
  color: #c05010;
}

.bl-side-cat.active {
  background: #c05010;
  color: #fff;
}
  .bl-side-cats {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: sticky;
  top: 140px;
}

.bl-side-cat {
  padding: 12px 16px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: rgba(255,255,255,0.6);
  transition: 0.25s;
}

/* ACTIVE (like orange All button) */
.bl-side-cat.active {
  background: #c05010;
  color: #fff;
  border-color: #c05010;
}
  .bl-featured-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

.bl-featured-left {
  width: 100%;
}

.bl-featured-right {
  padding-top: 40px; /* align with featured title */
}
`;

const cardClass = (i: number) => {
  const classes = ["bl-card-1","bl-card-2","bl-card-3","bl-card-4","bl-card-5","bl-card-6"];
  return classes[i % classes.length];
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setFetchError("");
      try {
        const q = query(
          collection(db, "blogs"),
          where("status", "==", "published")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];

        const sorted = data.sort((a, b) => {
          const aTime = a.createdAt?.toDate?.() ?? new Date(0);
          const bTime = b.createdAt?.toDate?.() ?? new Date(0);
          return bTime.getTime() - aTime.getTime();
        });

        setBlogs(sorted);
      } catch (err: any) {
        console.error("Firestore fetch error:", err);
        setFetchError(err?.message || "Failed to load posts. Check Firebase config.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filtered = blogs.filter((b) => {
    if (b.status?.toLowerCase() !== "published") return false;
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      b.title?.toLowerCase().includes(q) ||
      b.excerpt?.toLowerCase().includes(q) ||
      b.tags?.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: BLOG_CSS }} />
      </Head>

      {/* ── BANNER — matches your site's CmnBanner ── */}
      <CmnBanner title="Blog & Insights" navigation="Blogs" />
        <div className="bl-container">
  <div className="bl-main-layout">
     <div className="bl-left">
          {fetchError && <div className="bl-error">⚠ {fetchError}</div>}

          {loading ? (
            <div className="bl-loading">
              <div className="bl-spinner" />
              <p>Loading posts…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bl-empty">
              <div className="bl-empty-icon">✦</div>
              <h3>No posts found</h3>
              <p>{searchQuery ? `No results for "${searchQuery}"` : "No published posts in this category yet."}</p>
            </div>
          ) : (
            <>
           {/* 🔥 FEATURED (TOP LEFT FIXED) */}
          {featured && (
            <div className="bl-featured-section">
              <div className="bl-section-label">Featured Post</div>

              <Link href={`/blogs/${featured.slug}`} className="bl-featured">
                <div className="bl-feat-img">
                  {featured.coverImage ? (
                    <img src={featured.coverImage} alt={featured.title} />
                  ) : (
                    <div className="bl-feat-img-placeholder">✦</div>
                  )}
                </div>
                <div className="bl-feat-body">
                  {featured.category && (
                    <div className="bl-feat-cat">{featured.category}</div>
                  )}

                  <h2 className="bl-feat-title">{featured.title}</h2>

                  {featured.excerpt && (
                    <p className="bl-feat-excerpt">
                      {featured.excerpt}
                    </p>
                  )}

                  <div className="bl-feat-meta">
                    <span className="bl-meta-item">
                      {formatDate(featured.createdAt)}
                    </span>
                    {featured.readTime && (
                      <>
                        <span className="bl-meta-dot" />
                        <span className="bl-meta-item">
                          {featured.readTime} min read
                        </span>
                      </>
                    )}
                  </div>

                  <span className="bl-read-btn">Read Article →</span>
                </div>
              </Link>
            </div>
          )}
         {/* 🔥 GRID */}
          {rest.length > 0 && (
            <>
              <div className="bl-count-bar">
                <div className="bl-section-label" style={{ marginBottom: 0 }}>
                  {activeCategory === "All" ? "All Posts" : activeCategory}
                </div>
                <span className="bl-count">
                  <strong>{filtered.length}</strong> post
                  {filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="bl-grid">
                {rest.map((blog, i) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.slug}`}
                    className={`bl-card ${cardClass(i)}`}
                  >
                    <div className="bl-card-img">
                      {blog.coverImage ? (
                        <img src={blog.coverImage} alt={blog.title} />
                      ) : (
                        <div className="bl-card-img-placeholder">✦</div>
                      )}
                      {blog.category && (
                        <span className="bl-card-badge">
                          {blog.category}
                        </span>
                         )}
                    </div>

                    <div className="bl-card-body">
                      <h3 className="bl-card-title">{blog.title}</h3>

                      {blog.excerpt && (
                        <p className="bl-card-excerpt">
                          {blog.excerpt}
                        </p>
                      )}



                  {blog.tags?.length > 0 && (
                        <div className="bl-card-tags">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bl-tag">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                          <div className="bl-card-footer">
                        <span className="bl-card-meta">
                          {formatDate(blog.createdAt)}
                          {blog.readTime
                            ? ` · ${blog.readTime} min`
                            : ""}
                        </span>
                        <span className="bl-card-link">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>

        <div className="bl-right">  
        <div className="bl-side-cats">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`bl-side-cat ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
    </div>

  </div>
</div>
 </Layout>
  )};
export default Blogs;