"use client";
import { Blog } from "@/lib/zenn/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={blog.link} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
          {blog.thumbnail && (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          )}
          <CardHeader>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
              {blog.title}
            </CardTitle>
            {blog.topics && blog.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.topics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="outline"
                    className="transition-colors"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {blog.content}
              </p>
              <time className="text-sm text-muted-foreground block">
                {format(new Date(blog.publishedAt), "PPP")}
              </time>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
