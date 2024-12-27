"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Tag } from "@/lib/zenn/types";

export function TagFilter({ tags }: { tags: ReadonlyArray<Tag> }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isSelected = (tagId: string) => searchParams.get("tag") === tagId;

  const handleTagClick = (tag: Tag) => {
    // Clear タグの場合は URL をリセット
    if (tag.name === "Clear") {
      router.replace(pathname, { scroll: false });
      return;
    }

    const params = new URLSearchParams(searchParams);

    if (isSelected(tag.id)) {
      params.delete("tag");
    } else {
      params.set("tag", tag.id);
    }

    // Reset page when changing tags
    params.delete("page");

    // Construct new URL
    const newPath = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    router.replace(newPath, { scroll: false });
  };

  if (!tags?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <motion.div
          key={tag.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant={
              tag.name === "Clear"
                ? "destructive"
                : isSelected(tag.id)
                ? "default"
                : "outline"
            }
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleTagClick(tag)}
          >
            {tag.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
