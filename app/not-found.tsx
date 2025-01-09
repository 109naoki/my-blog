import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen  px-4">
      <div className="rounded-lg p-8 max-w-md w-full text-center">
        <AnimatedTitle>404 Not Found</AnimatedTitle>
        <p className="text-gray-600 text-lg mt-4">
          ページが見つかりませんでした。URLを確認するか、以下のリンクから移動してください。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
