export const metadata = {
  title: "Online Color Converter - HEX, RGB, HSL, OKLCH, and LCH",
  description:
    "Effortlessly convert colors between HEX, RGB, HSL, OKLCH, and LCH formats at once.",
  keywords: ["hex", "okhcl", "rgb", "hsl", "color", "converter"],
  openGraph: {
    images: "./tiny/color-converter/og.png",
    width: 1200,
    height: 630,
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
