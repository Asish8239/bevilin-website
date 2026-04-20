"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, X, Clock } from "lucide-react";
import { BlogPost } from "@/types";

function ComingSoonModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Thumbnail */}
        <div className="relative h-48 bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{post.title}</h3>

          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "#0073bd10" }}
          >
            <Clock className="w-5 h-5 flex-shrink-0" style={{ color: "#0073bd" }} />
            <p className="text-sm font-medium" style={{ color: "#0073bd" }}>
              This article will be published soon.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selected, setSelected] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#0073bd" }}
            >
              Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Health <span style={{ color: "#acc437" }}>Blog</span>
            </h2>
            <p className="text-gray-500">Expert tips and insights for better health</p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 font-semibold transition-all hover:gap-3 text-sm"
            style={{ color: "#0073bd" }}
          >
            View All →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              style={{ boxShadow: "0 4px 24px rgba(46,49,146,0.07)" }}
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Coming soon overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <h3
                  className="text-base font-bold text-gray-900 line-clamp-2 mb-2 group-hover:transition-colors"
                  style={{ lineHeight: "1.5" }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ComingSoonModal post={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
