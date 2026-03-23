"use client";
import React, { useState, useRef } from "react";
import Head from "next/head";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// ============================================================
// 🔧 CONFIG — pulled from .env.local
// ============================================================
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Init Firebase only once
const app = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApps()[0];
const db = getFirestore(app);

// ============================================================

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  status: "draft" | "published";
};

const CATEGORIES = [
  "Content Creation",
  "Content Monetisation",
  "Media & Event Services",
  "Content Management",
  "Content Repurposing",
  "Content Marketing",
];

const renderContent = (text: string) => {
  if (!text) return "";
  return text
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/^(?!<[h|p])(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "");
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #0b0c0e; --surface: #111214; --surface2: #18191d;
    --border: #232428; --border-hover: #3a3b40;
    --text: #f0f0ef; --text-2: #8b8c91; --text-3: #55565c;
    --accent: #e8ff47; --accent-dim: rgba(232,255,71,0.12); --accent-glow: rgba(232,255,71,0.05);
    --red: #ff4d4d; --red-dim: rgba(255,77,77,0.1); --radius: 10px;
  }
  .ab-page { min-height: 100vh; background: #0b0c0e !important; padding: 0 0 80px; font-family: 'DM Sans', sans-serif; color: #f0f0ef !important; }
.ab-page * { color: inherit; }
.ab-page p, .ab-page span, .ab-page label, .ab-page div { color: inherit; }
  .ab-topbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 40px; border-bottom: 1px solid var(--border);
    position: sticky; top: 0; background: rgba(11,12,14,0.92);
    backdrop-filter: blur(12px); z-index: 100;
  }
  .ab-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; letter-spacing: -0.5px; color: var(--text); }
  .ab-logo span { color:#f0f0ef !important; var(--accent); }
  .ab-topbar-actions { display: flex; align-items: center; gap: 10px; }
  .ab-btn-ghost {
    background: none; border: 1px solid var(--border); color: var(--text-2);
    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
    padding: 8px 16px; border-radius: var(--radius); cursor: pointer; transition: all 0.18s;
  }
  .ab-btn-ghost:hover { border-color: var(--border-hover); color: var(--text); }
  .ab-btn-ghost:disabled { opacity: 0.4; cursor: not-allowed; }
  .ab-btn-primary {
    background: var(--accent); border: none; color: #0b0c0e;
    font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
    padding: 8px 20px; border-radius: var(--radius); cursor: pointer; transition: all 0.18s;
    display: inline-flex; align-items: center; gap: 6px;
  }
  .ab-btn-primary:hover:not(:disabled) { background: #d4eb30; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(232,255,71,0.25); }
  .ab-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .ab-status-pill {
    display: flex; align-items: center; gap: 6px; padding: 6px 14px;
    border-radius: 20px; border: 1px solid var(--border); font-size: 12px;
    font-weight: 500; color: var(--text-2); cursor: pointer; transition: all 0.18s;
    background: none; font-family: 'DM Sans', sans-serif;
  }
  .ab-status-pill .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text-3); transition: background 0.2s; }
  .ab-status-pill.published { border-color: rgba(232,255,71,0.3); color: var(--accent); }
  .ab-status-pill.published .dot { background: var(--accent); box-shadow: 0 0 6px var(--accent); }
  .ab-layout { display: grid; grid-template-columns: 1fr 300px; max-width: 1200px; margin: 0 auto; padding: 0 40px; }
  .ab-editor { padding: 48px 48px 48px 0; border-right: 1px solid var(--border); }
  .ab-header-label { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: var(--text-3); text-transform: uppercase; margin-bottom: 32px; }
  .ab-title-input {
    width: 100%; background: none; border: none; outline: none;
    font-family: 'Syne', sans-serif; font-size: 40px; font-weight: 800; color: #f0f0ef !important;var(--text);
    line-height: 1.15; resize: none; letter-spacing: -1px; caret-color: var(--accent); padding: 0; margin-bottom: 4px; display: block;
  }
  .ab-title-input::placeholder { color: var(--text-3); }
  .ab-slug-row { display: flex; align-items: center; gap: 6px; margin-bottom: 36px; margin-top: 8px; }
  .ab-slug-label { font-size: 12px; color: var(--text-3); white-space: nowrap; }
  .ab-slug-value { font-size: 12px; color: var(--accent); font-family: monospace; background: var(--accent-dim); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(232,255,71,0.15); min-width: 40px; }
  .ab-divider { height: 1px; background: var(--border); margin: 28px 0; }
  .ab-field-group { margin-bottom: 28px; }
  .ab-field-label { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--text-3); margin-bottom: 10px; display: block; }
  .ab-field-input {
    width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    color:  #f0f0ef !important; var(--text); font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 300;
    padding: 12px 14px; outline: none; transition: border-color 0.18s, box-shadow 0.18s; resize: none; line-height: 1.6;
  }
  .ab-field-input::placeholder { color: var(--text-3); }
  .ab-field-input:focus { border-color: rgba(232,255,71,0.4); box-shadow: 0 0 0 3px var(--accent-glow); }
  .ab-content-area { min-height: 320px; font-size: 15px; line-height: 1.8; }
  .ab-content-footer { display: flex; justify-content: flex-end; gap: 16px; margin-top: 8px; }
  .ab-content-meta { font-size: 12px; color: var(--text-3); }
  .ab-content-meta strong { color: var(--text-2); font-weight: 500; }
  .ab-cover-uploader { border: 1.5px dashed var(--border); border-radius: var(--radius); overflow: hidden; background: var(--surface); transition: border-color 0.2s; }
  .ab-cover-uploader:hover { border-color: var(--border-hover); }
  .ab-cover-drop-zone { padding: 36px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .ab-upload-icon { font-size: 32px; }
  .ab-upload-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 600; color: var(--text-2); }
  .ab-upload-sub { font-size: 12px; color: var(--text-3); }
  .ab-upload-btn { margin-top: 8px; background: var(--surface2); border: 1px solid var(--border); color: var(--text-2); font-family: 'DM Sans', sans-serif; font-size: 12px; padding: 7px 16px; border-radius: 8px; cursor: pointer; transition: all 0.15s; }
  .ab-upload-btn:hover { border-color: var(--border-hover); color: var(--text); }
  .ab-cover-uploaded { position: relative; }
  .ab-cover-uploaded img { width: 100%; height: 220px; object-fit: cover; display: block; }
  .ab-cover-uploaded-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--surface2); border-top: 1px solid var(--border); }
  .ab-file-name { font-size: 12px; color: var(--text-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px; }
  .ab-status-ok { font-size: 11px; color: var(--accent); font-weight: 600; }
  .ab-status-uploading { font-size: 11px; color: var(--text-3); animation: ab-pulse 1s infinite; }
  @keyframes ab-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
  .ab-remove-btn { background: none; border: none; color: var(--text-3); cursor: pointer; font-size: 16px; padding: 0 4px; transition: color 0.15s; }
  .ab-remove-btn:hover { color: var(--red); }
  .ab-upload-progress { height: 2px; background: var(--border); }
  .ab-upload-progress-bar { height: 100%; background: var(--accent); animation: ab-progress 1.5s ease infinite; }
  @keyframes ab-progress { 0%{width:0%} 100%{width:100%} }
  .ab-error-banner { background: var(--red-dim); border: 1px solid rgba(255,77,77,0.2); border-radius: var(--radius); padding: 10px 14px; font-size: 13px; color: var(--red); margin-top: 8px; }
  .ab-sidebar { padding: 48px 0 48px 32px; }
  .ab-sidebar-section { margin-bottom: 32px; }
  .ab-sidebar-label { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--text-3); margin-bottom: 12px; display: block; }
  .ab-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .ab-chip { padding: 6px 12px; border-radius: 6px; border: 1px solid var(--border); background: none; color: var(--text-2); font-family: 'DM Sans', sans-serif; font-size: 12px; cursor: pointer; transition: all 0.15s; }
  .ab-chip:hover { border-color: var(--border-hover); color: var(--text); }
  .ab-chip.active { background: var(--accent-dim); border-color: rgba(232,255,71,0.35); color: var(--accent); }
  .ab-stats-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; }
  .ab-stat-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border); }
  .ab-stat-row:last-child { border-bottom: none; }
  .ab-stat-key { font-size: 12px; color: var(--text-3); }
  .ab-stat-val { font-size: 13px; font-weight: 500; color: var(--text-2); }
  .ab-stat-val.highlight { color: var(--accent); }
  .ab-required-badge { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--red); margin-left: 5px; vertical-align: middle; position: relative; top: -1px; }
  .ab-submit-area { display: flex; flex-direction: column; gap: 8px; }
  .ab-submit-btn-full { width: 100%; padding: 13px; font-size: 14px; border-radius: var(--radius); justify-content: center; }
  .ab-spinner { width: 14px; height: 14px; border: 2px solid rgba(0,0,0,0.2); border-top-color: #0b0c0e; border-radius: 50%; animation: ab-spin 0.6s linear infinite; }
  @keyframes ab-spin { to { transform: rotate(360deg); } }
  .ab-firebase-note { font-size: 11px; color: var(--text-3); text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px; }
  .ab-firebase-dot { width: 6px; height: 6px; border-radius: 50%; background: #FFA000; display: inline-block; }
  .ab-toast {
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
    background: var(--accent); color: #0b0c0e; font-family: 'Syne', sans-serif;
    font-size: 14px; font-weight: 700; padding: 14px 28px; border-radius: 40px;
    display: flex; align-items: center; gap: 10px; z-index: 9999;
    box-shadow: 0 8px 32px rgba(232,255,71,0.35); animation: ab-slideUp 0.3s ease;
  }
  @keyframes ab-slideUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
  .ab-preview-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
    z-index: 500; display: flex; align-items: flex-start; justify-content: center;
    overflow-y: auto; padding: 40px 20px; animation: ab-fadeIn 0.2s ease;
  }
  @keyframes ab-fadeIn { from{opacity:0} to{opacity:1} }
  .ab-preview-panel { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; width: 100%; max-width: 780px; overflow: hidden; animation: ab-slideDown 0.25s ease; }
  @keyframes ab-slideDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
  .ab-preview-topbar { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; border-bottom: 1px solid var(--border); background: var(--surface); position: sticky; top: 0; z-index: 10; }
  .ab-preview-topbar-left { display: flex; align-items: center; gap: 10px; }
  .ab-preview-badge { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; background: var(--accent-dim); color: var(--accent); border: 1px solid rgba(232,255,71,0.2); padding: 3px 10px; border-radius: 20px; }
  .ab-preview-url { font-size: 12px; color: var(--text-3); font-family: monospace; }
  .ab-preview-close { background: var(--surface2); border: 1px solid var(--border); color: var(--text-2); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 16px; transition: all 0.15s; flex-shrink: 0; }
  .ab-preview-close:hover { border-color: var(--border-hover); color: var(--text); }
  .ab-preview-body { padding: 48px 56px 64px; }
  .ab-preview-category { display: inline-block; font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent); border: 1px solid rgba(232,255,71,0.25); background: var(--accent-dim); padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
  .ab-preview-title { font-family: 'Syne', sans-serif; font-size: 38px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
  .ab-preview-excerpt { font-size: 17px; font-weight: 300; color: var(--text-2); line-height: 1.7; font-style: italic; margin-bottom: 24px; border-left: 2px solid var(--accent); padding-left: 16px; }
  .ab-preview-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; }
  .ab-preview-meta-item { font-size: 12px; color: var(--text-3); }
  .ab-preview-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--text-3); }
  .ab-preview-cover { width: 100%; height: 320px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 40px; }
  .ab-preview-divider { height: 1px; background: var(--border); margin: 32px 0; }
  .ab-preview-content { font-size: 16px; font-weight: 300; line-height: 1.85; color: #c8c8c7; }
  .ab-preview-content h1 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: var(--text); margin: 32px 0 12px; }
  .ab-preview-content h2 { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: var(--text); margin: 28px 0 10px; }
  .ab-preview-content h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 600; color: var(--text); margin: 24px 0 8px; }
  .ab-preview-content p { margin-bottom: 16px; }
  .ab-preview-content strong { color: var(--text); font-weight: 500; }
  .ab-preview-content em { color: var(--text-2); }
  .ab-preview-content code { background: var(--surface2); border: 1px solid var(--border); border-radius: 4px; padding: 2px 6px; font-family: monospace; font-size: 13px; color: var(--accent); }
  .ab-preview-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 40px; }
  .ab-preview-tag { font-size: 12px; color: var(--text-3); border: 1px solid var(--border); border-radius: 6px; padding: 4px 12px; }
  .ab-preview-empty { text-align: center; padding: 60px 40px; color: var(--text-3); }
  .ab-preview-empty .empty-icon { font-size: 40px; margin-bottom: 12px; }
  .ab-preview-empty p { font-size: 14px; line-height: 1.6; }
  @media (max-width: 900px) {
    .ab-layout { grid-template-columns: 1fr; padding: 0 20px; }
    .ab-editor { padding: 32px 0; border-right: none; border-bottom: 1px solid var(--border); }
    .ab-sidebar { padding: 32px 0; }
    .ab-title-input { font-size: 28px; }
    .ab-topbar { padding: 16px 20px; }
    .ab-preview-body { padding: 32px 24px 48px; }
    .ab-preview-title { font-size: 26px; }
  }
`;

const AddBlog = () => {
  const [form, setForm] = useState<FormState>({
    title: "", slug: "", excerpt: "", content: "", category: "", tags: "", status: "draft",
  });
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverPreviewLocal, setCoverPreviewLocal] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleChange = (field: keyof FormState, value: string) => {
    const updated: FormState = { ...form, [field]: value };
    if (field === "title") updated.slug = autoSlug(value);
    setForm(updated);
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageError("");
    setCoverImageFile(file);
    setCoverPreviewLocal(URL.createObjectURL(file));
    setImageUploading(true);
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, { method: "POST", body: data });
      if (!res.ok) throw new Error("Upload failed");
      const json = await res.json();
      setCoverImageUrl(json.secure_url);
    } catch {
      setImageError("Image upload failed. Check your Cloudinary credentials.");
      setCoverPreviewLocal("");
      setCoverImageFile(null);
    } finally {
      setImageUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setCoverImageUrl(""); setCoverPreviewLocal(""); setCoverImageFile(null); setImageError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content || imageUploading) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const wordCount = form.content.trim().split(/\s+/).length;
      const readTime = Math.max(1, Math.round(wordCount / 200));
      const tagList = form.tags ? form.tags.split(",").map(t => t.trim()).filter(Boolean) : [];
      await addDoc(collection(db, "blogs"), {
        title: form.title, slug: form.slug, excerpt: form.excerpt, content: form.content,
        category: form.category, tags: tagList, coverImage: coverImageUrl || "",
        status: form.status, wordCount, readTime,
        createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      if (form.status === "published") {
        setForm({ title: "", slug: "", excerpt: "", content: "", category: "", tags: "", status: "draft" });
        setCoverImageUrl(""); setCoverPreviewLocal(""); setCoverImageFile(null);
      }
    } catch {
      setSubmitError("Failed to save post. Check your Firebase config.");
    } finally {
      setSubmitting(false);
    }
  };

  const wordCount = form.content.trim() ? form.content.trim().split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.round(wordCount / 200));
  const charCount = form.content.length;
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const tagList = form.tags ? form.tags.split(",").map(t => t.trim()).filter(Boolean) : [];
  const previewCover = coverPreviewLocal || coverImageUrl;

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <div className="ab-page">
        <header className="ab-topbar">
          <div className="ab-logo">thy<span>σ</span>sigma</div>
          <div className="ab-topbar-actions">
            <button
              className={`ab-status-pill ${form.status === "published" ? "published" : ""}`}
              onClick={() => handleChange("status", form.status === "draft" ? "published" : "draft")}
            >
              <span className="dot" />
              {form.status === "draft" ? "Draft" : "Published"}
            </button>
            <button className="ab-btn-ghost" onClick={() => setShowPreview(true)} disabled={submitting}>Preview</button>
            <button
              className="ab-btn-primary"
              onClick={handleSubmit}
              disabled={!form.title || !form.content || submitting || imageUploading}
            >
              {submitting ? <><span className="ab-spinner" />Saving…</> : form.status === "published" ? "Publish →" : "Save Draft"}
            </button>
          </div>
        </header>

        <div className="ab-layout">
          <main className="ab-editor">
            <div className="ab-header-label">New Post</div>

            <textarea
              className="ab-title-input"
              ref={titleRef}
              placeholder="Your post title..."
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              rows={2}
            />

            <div className="ab-slug-row">
              <span className="ab-slug-label">thysigma.com/blog/</span>
              <span className="ab-slug-value">{form.slug || "your-post-slug"}</span>
            </div>

            <div className="ab-field-group">
              <label className="ab-field-label">Excerpt</label>
              <textarea className="ab-field-input" placeholder="A brief summary…" value={form.excerpt} onChange={(e) => handleChange("excerpt", e.target.value)} rows={3} />
            </div>

            <div className="ab-divider" />

            <div className="ab-field-group">
              <label className="ab-field-label">Content <span className="ab-required-badge" /></label>
              <textarea className="ab-field-input ab-content-area" placeholder="Write your full post here. Markdown: # Heading, **bold**, *italic*, `code`" value={form.content} onChange={(e) => handleChange("content", e.target.value)} rows={16} />
              <div className="ab-content-footer">
                <span className="ab-content-meta"><strong>{wordCount}</strong> words</span>
                <span className="ab-content-meta"><strong>{readTime}</strong> min read</span>
                <span className="ab-content-meta"><strong>{charCount}</strong> chars</span>
              </div>
            </div>

            <div className="ab-field-group">
              <label className="ab-field-label">Cover Image</label>
              <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageSelect} />
              <div className="ab-cover-uploader">
                {!coverPreviewLocal ? (
                  <div className="ab-cover-drop-zone" onClick={() => fileInputRef.current?.click()}>
                    <div className="ab-upload-icon">☁️</div>
                    <div className="ab-upload-title">Upload Cover Image</div>
                    <div className="ab-upload-sub">PNG, JPG, WEBP — uploads to Cloudinary</div>
                    <button className="ab-upload-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Choose File</button>
                  </div>
                ) : (
                  <div className="ab-cover-uploaded">
                    {imageUploading && <div className="ab-upload-progress"><div className="ab-upload-progress-bar" /></div>}
                    <img 
  src={coverPreviewLocal} 
  alt={form.title ? `${form.title} blog cover image` : "Corporate event"} 
/>
                    <div className="ab-cover-uploaded-bar">
                      <span className="ab-file-name">{coverImageFile?.name || "cover image"}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {imageUploading ? <span className="ab-status-uploading">Uploading…</span> : <span className="ab-status-ok">✦ Uploaded</span>}
                        <button className="ab-remove-btn" onClick={handleRemoveImage}>✕</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {imageError && <div className="ab-error-banner">{imageError}</div>}
            </div>
          </main>

          <aside className="ab-sidebar">
            <div className="ab-sidebar-section">
              <span className="ab-sidebar-label">Category</span>
              <div className="ab-chips">
                {CATEGORIES.map((cat) => (
                  <button key={cat} className={`ab-chip ${form.category === cat ? "active" : ""}`} onClick={() => handleChange("category", form.category === cat ? "" : cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="ab-sidebar-section">
              <label className="ab-sidebar-label">Tags</label>
              <input className="ab-field-input" style={{ display: "block" }} placeholder="ai, design, product..." value={form.tags} onChange={(e) => handleChange("tags", e.target.value)} />
            </div>

            <div className="ab-sidebar-section">
              <span className="ab-sidebar-label">Post Stats</span>
              <div className="ab-stats-card">
                <div className="ab-stat-row"><span className="ab-stat-key">Words</span><span className={`ab-stat-val ${wordCount > 0 ? "highlight" : ""}`}>{wordCount}</span></div>
                <div className="ab-stat-row"><span className="ab-stat-key">Read Time</span><span className="ab-stat-val">{readTime} min</span></div>
                <div className="ab-stat-row">
                  <span className="ab-stat-key">Cover Image</span>
                  <span className={`ab-stat-val ${coverImageUrl ? "highlight" : ""}`}>{imageUploading ? "Uploading…" : coverImageUrl ? "✦ Ready" : "—"}</span>
                </div>
                <div className="ab-stat-row"><span className="ab-stat-key">Category</span><span className={`ab-stat-val ${form.category ? "highlight" : ""}`}>{form.category || "—"}</span></div>
                <div className="ab-stat-row">
                  <span className="ab-stat-key">Status</span>
                  <span className={`ab-stat-val ${form.status === "published" ? "highlight" : ""}`}>{form.status.charAt(0).toUpperCase() + form.status.slice(1)}</span>
                </div>
                <div className="ab-stat-row">
                  <span className="ab-stat-key">Slug</span>
                  <span className="ab-stat-val" style={{ fontSize: 11, maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{form.slug || "—"}</span>
                </div>
              </div>
            </div>

            <div className="ab-sidebar-section">
              <div className="ab-submit-area">
                <button
                  className="ab-btn-primary ab-submit-btn-full"
                  onClick={handleSubmit}
                  disabled={!form.title || !form.content || submitting || imageUploading}
                >
                  {submitting ? <><div className="ab-spinner" />Saving to Firebase…</> : form.status === "published" ? "✦ Publish Post" : "Save as Draft"}
                </button>
                {(!form.title || !form.content) && !submitting && (
                  <p style={{ fontSize: 11, color: "var(--text-3)", textAlign: "center" }}>Title & content required</p>
                )}
                {imageUploading && <p style={{ fontSize: 11, color: "var(--text-3)", textAlign: "center" }}>Wait for image upload to finish…</p>}
                {submitError && <div className="ab-error-banner">{submitError}</div>}
                <div className="ab-firebase-note"><span className="ab-firebase-dot" />Saves to Firebase Firestore</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showPreview && (
        <div className="ab-preview-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowPreview(false); }}>
          <div className="ab-preview-panel">
            <div className="ab-preview-topbar">
              <div className="ab-preview-topbar-left">
                <span className="ab-preview-badge">Preview</span>
                <span className="ab-preview-url">thysigma.com/blog/{form.slug || "your-post-slug"}</span>
              </div>
              <button className="ab-preview-close" onClick={() => setShowPreview(false)}>✕</button>
            </div>
            <div className="ab-preview-body">
              {!form.title && !form.content ? (
                <div className="ab-preview-empty">
                  <div className="empty-icon">✦</div>
                  <p>Start writing your post to see a live preview.<br />Add a title and content to get started.</p>
                </div>
              ) : (
                <>
                  {form.category && <div className="ab-preview-category">{form.category}</div>}
                  <h1 className="ab-preview-title">{form.title || "Untitled Post"}</h1>
                  {form.excerpt && <p className="ab-preview-excerpt">{form.excerpt}</p>}
                  <div className="ab-preview-meta">
                    <span className="ab-preview-meta-item">thysigma.com</span>
                    <span className="ab-preview-meta-dot" />
                    <span className="ab-preview-meta-item">{today}</span>
                    <span className="ab-preview-meta-dot" />
                    <span className="ab-preview-meta-item">{readTime} min read</span>
                    {wordCount > 0 && <><span className="ab-preview-meta-dot" /><span className="ab-preview-meta-item">{wordCount} words</span></>}
                  </div>
                  {previewCover && <img 
  className="ab-preview-cover" 
  src={previewCover} 
  alt={form.title ? `${form.title} featured image` : "Live event"} 
/>}
                  {form.content && (
                    <>
                      <div className="ab-preview-divider" />
                      <div className="ab-preview-content" dangerouslySetInnerHTML={{ __html: renderContent(form.content) }} />
                    </>
                  )}
                  {tagList.length > 0 && (
                    <>
                      <div className="ab-preview-divider" />
                      <div className="ab-preview-tags">
                        {tagList.map((tag) => <span key={tag} className="ab-preview-tag">#{tag}</span>)}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div className="ab-toast">✦ Post {form.status === "published" ? "published" : "saved"} to Firebase!</div>
      )}
    </>
  );
};

export default AddBlog;