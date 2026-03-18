import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Blog Details" navigation="Blog" />

      <section className="section">
        <div className="container">
          <h2>{slug}</h2>

          <p>
            This is the blog content page. You can load blog content based on
            the slug.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;