import { ThemeProvider } from "@/components/providers/theme-provider";
import ScrollToTopButton from "@/components/scroll-top-top/ScrollToTopButton";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio Harry Dev",
  description: "Portfolio Harry Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" expand={false} richColors toastOptions={{
            classNames: {
              title: "font-semibold",
              description: "text-muted-foreground",
            }
          }}/>
        </ThemeProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
