import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "«Лучик» - Детский центр современных знаний",
  description: "Детский центр современных знаний. Комплексные развивающие занятия, мини-сад, творческие студии и современные технологии для детей.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

