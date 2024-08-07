export const metadata = {
  title: "Online Color Converter",
  description: "Convert colors easily at once",
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
