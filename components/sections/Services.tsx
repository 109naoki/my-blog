"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const handleServiceHubClick = () => {
    window.open("https://service-hub.jp/", "_blank");
  };

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">個人開発</h2>

        <Card className="mb-8 border-primary/20 hover:border-primary transition-colors max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Carrer Hub</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 relative w-full md:w-4/5 lg:w-3/4 mx-auto aspect-video">
              <Image
                src="https://service-hub.jp/carrer-hub.png"
                alt="Carrer Hub サービス画像"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Career
              Hubでは、あなたの強みを活かせる転職先を見つけることができます。無料で使える転職アプリとして、転職や副業を考えているあなたに最適な求人とキャリアの選択肢をご提案します。
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleServiceHubClick} className="group">
              サービスを見る
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
