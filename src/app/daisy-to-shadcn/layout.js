import ThemeProvider from "@/components/theme-provider";

export const metadata = {
  title: "Shadcn UI with Daisy UI themes",
  description: "Amazing themes from Daisy UI in your Shadcn UI components",
  keywords: ["daisy ui", "shadcn ui", "tailwind css", "next js"],
  openGraph: {
    images: "./tiny/daisy-to-shadcn/og.png",
    width: 1200,
    height: 630,
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
