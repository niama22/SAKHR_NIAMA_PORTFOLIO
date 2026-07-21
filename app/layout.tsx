import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/lib/Languagecontext";
import { profile } from "@/lib/content";
import { content } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const fr = content.fr;

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: `${profile.name} — ${fr.meta.role}`,
  description: fr.meta.intro,
  keywords: fr.meta.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${fr.meta.role}`,
    description: fr.meta.intro,
    url: profile.website,
    siteName: profile.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${fr.meta.role}`,
    description: fr.meta.intro,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}