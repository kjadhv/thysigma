"use client";

import { useEffect } from "react";

export default function InstagramEmbed({
  url,
  height = 420,
}: {
  url: string;
  height?: number;
}) {
  useEffect(() => {
    const load = () => {
      // @ts-ignore
      window?.instgrm?.Embeds?.process?.();
    };

    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = load;
      document.body.appendChild(script);
    } else {
      load();
    }
  }, [url]);

  return (
    <div
      style={{
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius: 18,
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          margin: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
