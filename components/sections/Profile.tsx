import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/animations/TypewriterText";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ZennIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
  </svg>
);

export function Profile() {
  const description = `こんにちは！Webエンジニアとして3年程活動しています。Next.js Nest.jsを使った開発がメインです。
    趣味はお酒、サウナ、ランニング、音楽フェス観戦、野球観戦 etc...`;

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="relative w-60 h-60">
            <Image
              src="/icon.jpg"
              alt="アイコン"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <Link href="/profile">
              <h2 className="text-3xl font-bold mb-4">伊藤 直樹</h2>

              <p className="text-xl text-muted-foreground mb-6">
                Software Engineer
              </p>
            </Link>
            <TypewriterText text={description} />
            <div className="flex gap-4 justify-center md:justify-start mt-6">
              <Link
                href="https://github.com/109naoki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <GitHubIcon />
                  <span className="sr-only">GitHub Profile</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/naoki_0525_109"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <XIcon />
                  <span className="sr-only">X Profile</span>
                </Button>
              </Link>
              <Link
                href="https://zenn.dev/109naoki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <ZennIcon />
                  <span className="sr-only">Zenn Profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
