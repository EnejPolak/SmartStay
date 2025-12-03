'use client';

import React from 'react';

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <>
      <div
        className="post-content prose blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx>{`
        .post-content :global(h1),
        .post-content :global(h2),
        .post-content :global(h3),
        .post-content :global(h4),
        .post-content :global(h5),
        .post-content :global(h6) {
          font-weight: 800;
          line-height: 1.2;
          margin-top: 2em;
          margin-bottom: 1em;
          letter-spacing: -0.02em;
          text-decoration: none !important;
        }

        .post-content :global(h1 a),
        .post-content :global(h2 a),
        .post-content :global(h3 a),
        .post-content :global(h4 a),
        .post-content :global(h5 a),
        .post-content :global(h6 a) {
          text-decoration: none !important;
        }

        .post-content :global(h1) {
          font-size: 2.5em;
          background: linear-gradient(
            90deg,
            #7db8ff 0%,
            #a29eff 50%,
            #7c5fd9 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .post-content :global(h2) {
          font-size: 2em;
          color: #0f0f0f;
        }

        .post-content :global(h3) {
          font-size: 1.5em;
          color: #0f0f0f;
        }

        .post-content :global(p) {
          font-size: 18px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 1.5em;
        }

        .post-content :global(a) {
          color: #7c5fd9;
          text-decoration: none !important;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .post-content :global(a:hover) {
          color: #7db8ff;
          text-decoration: none !important;
        }

        .post-content :global(img) {
          border-radius: 16px;
          margin: 2em 0;
          box-shadow: 0 20px 40px rgba(125, 184, 255, 0.15);
          max-width: 100%;
          height: auto;
        }

        .post-content :global(blockquote) {
          border-left: 4px solid #7c5fd9;
          padding-left: 24px;
          margin: 2em 0;
          font-style: italic;
          color: #737373;
          font-size: 1.1em;
          background: rgba(125, 184, 255, 0.05);
          padding: 24px;
          border-radius: 8px;
        }

        .post-content :global(ul),
        .post-content :global(ol) {
          margin: 1.5em 0;
          padding-left: 2em;
        }

        .post-content :global(li) {
          margin-bottom: 0.75em;
          line-height: 1.7;
          color: #374151;
        }

        .post-content :global(strong) {
          font-weight: 700;
          color: #0f0f0f;
        }

        .post-content :global(code) {
          background: rgba(124, 95, 217, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9em;
          color: #7c5fd9;
        }

        .post-content :global(pre) {
          background: rgba(15, 15, 15, 0.05);
          padding: 24px;
          border-radius: 12px;
          overflow-x: auto;
          margin: 2em 0;
        }

        .post-content :global(pre code) {
          background: none;
          padding: 0;
          color: #0f0f0f;
        }

        @media (max-width: 768px) {
          .post-content :global(h1) {
            font-size: 2em;
          }

          .post-content :global(h2) {
            font-size: 1.75em;
          }

          .post-content :global(h3) {
            font-size: 1.5em;
          }

          .post-content :global(p) {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}

