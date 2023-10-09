import { absoluteUrl } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Societal Analytics Lab",
    template: "%s | Societal Analytics Lab",
  },
  description:
    "We are the Societal Analytics Lab of the Faculty of Social Science at the Vrije Universiteit Amsterdam",
  openGraph: {
    title: "Societal Analytics Lab",
    description:
      "We are the Societal Analytics Lab of the Faculty of Social Science at the Vrije Universiteit Amsterdam",
    url: absoluteUrl("/"),
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="relative flex flex-col min-h-screen overflow-y-scroll">
        <Navbar />
        <div className="flex justify-between md:justify-start relative items-center h-full px-4">
          <div className="">
            <VuLogo />
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-12">
          {children}
        </div>
      </body>
    </html>
  );
}

const VuLogo = () => {
  return (
    <div className="flex items-center gap-x-3 py-5 mr-4">
      <Link href="https://vu.nl/nl">
        <img src="/images/logo_vu.svg" alt="logo" className=" w-56" />
      </Link>
      <div className="font-bold text-secondary">
        <h3 className="tracking-wide">Faculty of Social Sciences</h3>
        <h3 className="tracking-[0.115rem] text-primary">
          Societal Analytics Lab
        </h3>
      </div>
    </div>
  );
};
