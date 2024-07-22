export const metadata = {
  title: "Double Pawty",
  description: "Learn the day you and your puppy will be the same age",
  keywords: ["dog", "dog age", "birthday", "dog age calculator"],
  openGraph: {
    images: "./tiny/double-pawty/og.png",
    width: 1200,
    height: 630,
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
