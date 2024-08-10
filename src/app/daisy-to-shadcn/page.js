import ThemeToggle from "./theme-toogle";
import CopyDialog from "./copy-dialog";
import MusicPage from "./(music)";

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
      <div className="bg-secondary p-16">
        <MusicPage />
      </div>
    </>
  );
}
