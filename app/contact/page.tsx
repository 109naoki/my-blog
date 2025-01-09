"use client";
import React, { useState } from "react";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import emailjs from "emailjs-com";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const inquiryTypes = [
    { value: "freelance", label: "副業の依頼について" },
    { value: "fulltime_offer", label: "正社員オファー" },
    { value: "project_request", label: "作成してもらいたいものがある" },
    { value: "other", label: "その他" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJSでメール送信
    emailjs
      .send(
        "service_id", // EmailJSで作成したサービスID
        "template_bxncq0y", // EmailJSで作成したテンプレートID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          inquiryType: formData.inquiryType,
        },
        "user_id" // EmailJSで取得したユーザーID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowSuccess(true);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("メール送信に失敗しました。再度お試しください。");
        }
      );

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md sm:max-w-lg">
          <Alert className="bg-white dark:bg-gray-800 border-green-500 shadow-lg">
            <AlertDescription className="mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                お問い合わせありがとうございます
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8">
                内容を確認次第、ご連絡させていただきます。
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Topに戻る</span>
              </Link>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            お問い合わせ
          </h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="space-y-6">
                {/* Inquiry Type Select */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      お問い合わせ種別
                    </div>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  >
                    <option value="">選択してください</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* その他のフィールド省略 */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
