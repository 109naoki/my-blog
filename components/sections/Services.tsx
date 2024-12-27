import { Code2, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "フルスタックな開発経験を活かし、モダンな技術スタック（Next.js、React、TypeScript）を用いた高品質なWebアプリケーションを開発します。パフォーマンスとユーザー体験を重視した実装を提供します。",
  },
  {
    icon: Laptop,
    title: "HP制作",
    description:
      "ご要望に応じたレスポンシブなホームページを制作いたします。SEO対策やアクセシビリティに配慮し、管理のしやすいサイトを構築します。スマートフォンでの表示も最適化します。",
  },
];

export function Services() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
