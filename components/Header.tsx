"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Code2 } from "lucide-react";
import { MobileNav } from "./layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2F42] bg-[#181B29]/95 backdrop-blur supports-[backdrop-filter]:bg-[#181B29]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="font-bold">NaoBlog</span>
            </Link>
          </motion.div>
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-6"
          >
            <Link
              href="/profile"
              className="hover:text-primary transition-colors"
            >
              Profile
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </motion.nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
