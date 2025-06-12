import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          お問い合わせ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          以下のボタンをクリックしてGoogleフォームからお問い合わせください。
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScvKSxN9u6sv-O77RELLTJTnS2ON1pCU4hwQRwf_Hqc0y1xlQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
        >
          Googleフォームを開く
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}
