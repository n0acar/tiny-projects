import ThemeToggle from "./theme-toogle";
import MusicPage from "./(music)";
import CopyDialog from "./copy-dialog";
import Instructions from "./instructions";

export default function Page() {
  return (
    <>
      <div className="py-2 px-16 flex justify-between">
        <h1 className="text-3xl font-bold">Daisy UI Themes for Shadcn UI</h1>
        <div className="space-x-2">
          <ThemeToggle />
          <CopyDialog />
        </div>
      </div>
      <div className="bg-muted p-2 md:px-16 md:py-8">
        <MusicPage />
      </div>
      <div className="p-2 md:px-16 md:py-8 flex justify-center">
        <Instructions />
      </div>
    </>
  );
}
