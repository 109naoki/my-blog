"use client";

import { Blog } from "@/lib/microcms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${blog.id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          {blog.eyecatch && (
            <div className="relative h-48 w-full">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{blog.category.name}</Badge>
              {blog.tags.map((tag) => (
                <Badge key={tag.id} variant="outline">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <time className="text-sm text-muted-foreground">
              {format(new Date(blog.publishedAt), "PPP")}
            </time>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}