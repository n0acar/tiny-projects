"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useState } from "react";

import { Copy, CopyCheck } from "lucide-react";

import { useTheme } from "next-themes";

function CopyDialog() {
  const { theme } = useTheme();

  const [copied, setCopied] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Copy Theme</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 rounded-md border">
          <p className="whitespace-pre-wrap m-4">{themes[theme]}</p>
        </ScrollArea>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(themes[theme]);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
              setCopied(true);
            }}
          >
            {copied ? (
              <CopyCheck className="mr-2" />
            ) : (
              <Copy className="mr-2" />
            )}
            Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CopyDialog;

const themes = {
  aqua: ".aqua {\n  --border: 219 11% 89%;\n  --input: 219 11% 89%;\n  --ring: 219 11% 89%;\n  --background: 219 53% 43%;\n  --foreground: 219 11% 89%;\n  --primary: 182 93% 49%;\n  --primary-foreground: 181 100% 17%;\n  --secondary: 274 31% 57%;\n  --secondary-foreground: 274 6% 11%;\n  --destructive: 5 100% 70%;\n  --destructive-foreground: 5 24% 15%;\n  --muted: 219 45% 37%;\n  --muted-foreground: 219 11% 89%;\n  --accent: 47 100% 80%;\n  --accent-foreground: 47 20% 16%;\n  --popover: 219 53% 43%;\n  --popover-foreground: 219 11% 89%;\n  --card: 219 53% 43%;\n  --card-foreground: 219 11% 89%;\n}",
  black:
    ".black {\n  --border: 224 0% 84%;\n  --input: 224 0% 84%;\n  --ring: 224 0% 84%;\n  --background: 0 0% 0%;\n  --foreground: 224 0% 84%;\n  --primary: 224 0% 22%;\n  --primary-foreground: 0 0% 84%;\n  --secondary: 224 0% 22%;\n  --secondary-foreground: 0 0% 84%;\n  --destructive: 0 100% 50%;\n  --destructive-foreground: 0 20% 10%;\n  --muted: 224 0% 15%;\n  --muted-foreground: 224 0% 84%;\n  --accent: 224 0% 22%;\n  --accent-foreground: 0 0% 84%;\n  --popover: 0 0% 0%;\n  --popover-foreground: 224 0% 84%;\n  --card: 0 0% 0%;\n  --card-foreground: 224 0% 84%;\n}",
  bumblebee:
    ".bumblebee {\n  --border: 224 -35% 20%;\n  --input: 224 -35% 20%;\n  --ring: 224 -35% 20%;\n  --background: 0 0% 100%;\n  --foreground: 224 -35% 20%;\n  --primary: 51 100% 50%;\n  --primary-foreground: 49 31% 23%;\n  --secondary: 39 100% 50%;\n  --secondary-foreground: 34 59% 23%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 224 -148% 86%;\n  --muted-foreground: 224 -35% 20%;\n  --accent: 28 100% 67%;\n  --accent-foreground: 27 24% 14%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 224 -35% 20%;\n  --card: 0 0% 100%;\n  --card-foreground: 224 -35% 20%;\n}",
  cmyk: ".cmyk {\n  --border: 224 -35% 20%;\n  --input: 224 -35% 20%;\n  --ring: 224 -35% 20%;\n  --background: 0 0% 100%;\n  --foreground: 224 -35% 20%;\n  --primary: 203 83% 60%;\n  --primary-foreground: 203 17% 12%;\n  --secondary: 335 78% 60%;\n  --secondary-foreground: 335 16% 12%;\n  --destructive: 4 81% 56%;\n  --destructive-foreground: 4 16% 11%;\n  --muted: 224 -148% 86%;\n  --muted-foreground: 224 -35% 20%;\n  --accent: 56 100% 60%;\n  --accent-foreground: 56 20% 12%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 224 -35% 20%;\n  --card: 0 0% 100%;\n  --card-foreground: 224 -35% 20%;\n}",
  corporate:
    ".corporate {\n  --border: 233 27% 13%;\n  --input: 233 27% 13%;\n  --ring: 233 27% 13%;\n  --background: 0 0% 100%;\n  --foreground: 233 27% 13%;\n  --primary: 229 100% 65%;\n  --primary-foreground: 229 22% 13%;\n  --secondary: 215 26% 59%;\n  --secondary-foreground: 215 5% 12%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 224 -148% 86%;\n  --muted-foreground: 233 27% 13%;\n  --accent: 154 49% 60%;\n  --accent-foreground: 154 10% 12%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 233 27% 13%;\n  --card: 0 0% 100%;\n  --card-foreground: 233 27% 13%;\n}",
  cupcake:
    ".cupcake {\n  --border: 280 46% 14%;\n  --input: 280 46% 14%;\n  --ring: 280 46% 14%;\n  --background: 24 33% 97%;\n  --foreground: 280 46% 14%;\n  --primary: 183 47% 59%;\n  --primary-foreground: 183 9% 12%;\n  --secondary: 338 71% 78%;\n  --secondary-foreground: 338 14% 16%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 23 14% 89%;\n  --muted-foreground: 280 46% 14%;\n  --accent: 39 84% 58%;\n  --accent-foreground: 39 17% 12%;\n  --popover: 24 33% 97%;\n  --popover-foreground: 280 46% 14%;\n  --card: 24 33% 97%;\n  --card-foreground: 280 46% 14%;\n}",
  cyberpunk:
    ".cyberpunk {\n  --border: 55 20% 13%;\n  --input: 55 20% 13%;\n  --ring: 55 20% 13%;\n  --background: 56 100% 64%;\n  --foreground: 55 20% 13%;\n  --primary: 343 100% 72%;\n  --primary-foreground: 343 26% 15%;\n  --secondary: 185 100% 49%;\n  --secondary-foreground: 184 50% 6%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 55 88% 55%;\n  --muted-foreground: 55 20% 13%;\n  --accent: 279 100% 73%;\n  --accent-foreground: 277 22% 15%;\n  --popover: 56 100% 64%;\n  --popover-foreground: 55 20% 13%;\n  --card: 56 100% 64%;\n  --card-foreground: 55 20% 13%;\n}",
  dark: ".dark {\n  --border: 220 13% 69%;\n  --input: 220 13% 69%;\n  --ring: 220 13% 69%;\n  --background: 212 18% 14%;\n  --foreground: 220 13% 69%;\n  --primary: 235 100% 73%;\n  --primary-foreground: 235 22% 15%;\n  --secondary: 316 100% 69%;\n  --secondary-foreground: 318 25% 14%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 213 18% 10%;\n  --muted-foreground: 220 13% 69%;\n  --accent: 174 100% 40%;\n  --accent-foreground: 176 51% 5%;\n  --popover: 212 18% 14%;\n  --popover-foreground: 220 13% 69%;\n  --card: 212 18% 14%;\n  --card-foreground: 220 13% 69%;\n}",
  dracula:
    ".dracula {\n  --border: 60 30% 96%;\n  --input: 60 30% 96%;\n  --ring: 60 30% 96%;\n  --background: 231 15% 18%;\n  --foreground: 60 30% 96%;\n  --primary: 326 100% 74%;\n  --primary-foreground: 326 20% 15%;\n  --secondary: 265 89% 78%;\n  --secondary-foreground: 265 18% 16%;\n  --destructive: 0 100% 67%;\n  --destructive-foreground: 0 20% 13%;\n  --muted: 231 13% 16%;\n  --muted-foreground: 60 30% 96%;\n  --accent: 31 100% 71%;\n  --accent-foreground: 31 20% 14%;\n  --popover: 231 15% 18%;\n  --popover-foreground: 60 30% 96%;\n  --card: 231 15% 18%;\n  --card-foreground: 60 30% 96%;\n}",
  emerald:
    ".emerald {\n  --border: 219 20% 25%;\n  --input: 219 20% 25%;\n  --ring: 219 20% 25%;\n  --background: 0 0% 100%;\n  --foreground: 219 20% 25%;\n  --primary: 141 50% 60%;\n  --primary-foreground: 151 28% 19%;\n  --secondary: 219 96% 60%;\n  --secondary-foreground: 180 100% 100%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 224 -148% 86%;\n  --muted-foreground: 219 20% 25%;\n  --accent: 10 89% 68%;\n  --accent-foreground: 0 0% 0%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 219 20% 25%;\n  --card: 0 0% 100%;\n  --card-foreground: 219 20% 25%;\n}",
  fantasy:
    ".fantasy {\n  --border: 215 28% 17%;\n  --input: 215 28% 17%;\n  --ring: 215 28% 17%;\n  --background: 0 0% 100%;\n  --foreground: 215 28% 17%;\n  --primary: 296 100% 23%;\n  --primary-foreground: 296 26% 84%;\n  --secondary: 203 100% 37%;\n  --secondary-foreground: 199 35% 86%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 224 -148% 86%;\n  --muted-foreground: 215 28% 17%;\n  --accent: 32 100% 50%;\n  --accent-foreground: 35 29% 9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 215 28% 17%;\n  --card: 0 0% 100%;\n  --card-foreground: 215 28% 17%;\n}",
  forest:
    ".forest {\n  --border: 0 2% 82%;\n  --input: 0 2% 82%;\n  --ring: 0 2% 82%;\n  --background: 0 12% 8%;\n  --foreground: 0 2% 82%;\n  --primary: 141 72% 42%;\n  --primary-foreground: 0 0% 0%;\n  --secondary: 164 73% 42%;\n  --secondary-foreground: 164 15% 8%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 0 10% 7%;\n  --muted-foreground: 0 2% 82%;\n  --accent: 175 73% 42%;\n  --accent-foreground: 175 15% 8%;\n  --popover: 0 12% 8%;\n  --popover-foreground: 0 2% 82%;\n  --card: 0 12% 8%;\n  --card-foreground: 0 2% 82%;\n}",
  garden:
    ".garden {\n  --border: 0 3% 6%;\n  --input: 0 3% 6%;\n  --ring: 0 3% 6%;\n  --background: 0 4% 91%;\n  --foreground: 0 3% 6%;\n  --primary: 332 100% 49%;\n  --primary-foreground: 180 100% 100%;\n  --secondary: 334 37% 41%;\n  --secondary-foreground: 334 7% 88%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 0 4% 78%;\n  --muted-foreground: 0 3% 6%;\n  --accent: 139 16% 43%;\n  --accent-foreground: 139 3% 9%;\n  --popover: 0 4% 91%;\n  --popover-foreground: 0 3% 6%;\n  --card: 0 4% 91%;\n  --card-foreground: 0 3% 6%;\n}",
  halloween:
    ".halloween {\n  --border: 0 0% 83%;\n  --input: 0 0% 83%;\n  --ring: 0 0% 83%;\n  --background: 224 0% 13%;\n  --foreground: 0 0% 83%;\n  --primary: 34 100% 50%;\n  --primary-foreground: 180 7% 8%;\n  --secondary: 278 100% 38%;\n  --secondary-foreground: 279 24% 87%;\n  --destructive: 3 87% 62%;\n  --destructive-foreground: 3 17% 12%;\n  --muted: 0 0% 11%;\n  --muted-foreground: 0 0% 83%;\n  --accent: 96 100% 33%;\n  --accent-foreground: 0 0% 0%;\n  --popover: 224 0% 13%;\n  --popover-foreground: 0 0% 83%;\n  --card: 224 0% 13%;\n  --card-foreground: 0 0% 83%;\n}",
  light:
    ".light {\n  --border: 215 28% 17%;\n  --input: 215 28% 17%;\n  --ring: 215 28% 17%;\n  --background: 0 0% 100%;\n  --foreground: 215 28% 17%;\n  --primary: 257 100% 50%;\n  --primary-foreground: 258 22% 90%;\n  --secondary: 313 100% 56%;\n  --secondary-foreground: 320 100% 99%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 180 2% 90%;\n  --muted-foreground: 215 28% 17%;\n  --accent: 174 100% 41%;\n  --accent-foreground: 176 59% 4%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 215 28% 17%;\n  --card: 0 0% 100%;\n  --card-foreground: 215 28% 17%;\n}",
  lofi: ".lofi {\n  --border: 0 0% 0%;\n  --input: 0 0% 0%;\n  --ring: 0 0% 0%;\n  --background: 0 0% 100%;\n  --foreground: 0 0% 0%;\n  --primary: 224 0% 5%;\n  --primary-foreground: 0 0% 100%;\n  --secondary: 0 2% 10%;\n  --secondary-foreground: 0 0% 100%;\n  --destructive: 7 100% 76%;\n  --destructive-foreground: 7 24% 16%;\n  --muted: 0 2% 90%;\n  --muted-foreground: 0 0% 0%;\n  --accent: 224 0% 15%;\n  --accent-foreground: 0 0% 100%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 0 0% 0%;\n  --card: 0 0% 100%;\n  --card-foreground: 0 0% 0%;\n}",
  luxury:
    ".luxury {\n  --border: 37 67% 58%;\n  --input: 37 67% 58%;\n  --ring: 37 67% 58%;\n  --background: 240 10% 4%;\n  --foreground: 37 67% 58%;\n  --primary: 0 0% 100%;\n  --primary-foreground: 224 -35% 20%;\n  --secondary: 218 54% 18%;\n  --secondary-foreground: 218 11% 84%;\n  --destructive: 0 100% 72%;\n  --destructive-foreground: 0 20% 14%;\n  --muted: 270 2% 18%;\n  --muted-foreground: 37 67% 58%;\n  --accent: 319 22% 26%;\n  --accent-foreground: 319 4% 85%;\n  --popover: 240 10% 4%;\n  --popover-foreground: 37 67% 58%;\n  --card: 240 10% 4%;\n  --card-foreground: 37 67% 58%;\n}",
  pastel:
    ".pastel {\n  --border: 224 -35% 20%;\n  --input: 224 -35% 20%;\n  --ring: 224 -35% 20%;\n  --background: 0 0% 100%;\n  --foreground: 224 -35% 20%;\n  --primary: 284 22% 80%;\n  --primary-foreground: 284 4% 16%;\n  --secondary: 352 70% 88%;\n  --secondary-foreground: 352 14% 18%;\n  --destructive: 358.25 100% 69%;\n  --destructive-foreground: 0 0% 0%;\n  --muted: 216 12% 84%;\n  --muted-foreground: 224 -35% 20%;\n  --accent: 158 55% 81%;\n  --accent-foreground: 158 11% 16%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 224 -35% 20%;\n  --card: 0 0% 100%;\n  --card-foreground: 224 -35% 20%;\n}",
  retro:
    ".retro {\n  --border: 345 5% 15%;\n  --input: 345 5% 15%;\n  --ring: 345 5% 15%;\n  --background: 44 47% 86%;\n  --foreground: 345 5% 15%;\n  --primary: 3 74% 76%;\n  --primary-foreground: 345 5% 15%;\n  --secondary: 145 27% 72%;\n  --secondary-foreground: 345 5% 15%;\n  --destructive: 3 87% 62%;\n  --destructive-foreground: 3 17% 12%;\n  --muted: 44 47% 73%;\n  --muted-foreground: 345 5% 15%;\n  --accent: 24 67% 59%;\n  --accent-foreground: 345 5% 15%;\n  --popover: 44 47% 86%;\n  --popover-foreground: 345 5% 15%;\n  --card: 44 47% 86%;\n  --card-foreground: 345 5% 15%;\n}",
  synthwave:
    ".synthwave {\n  --border: 260 60% 98%;\n  --input: 260 60% 98%;\n  --ring: 260 60% 98%;\n  --background: 253 58% 15%;\n  --foreground: 260 60% 98%;\n  --primary: 321 70% 69%;\n  --primary-foreground: 321 14% 14%;\n  --secondary: 197 87% 65%;\n  --secondary-foreground: 197 17% 13%;\n  --destructive: 10 75% 70%;\n  --destructive-foreground: 257 63% 17%;\n  --muted: 253 50% 13%;\n  --muted-foreground: 260 60% 98%;\n  --accent: 50 100% 50%;\n  --accent-foreground: 51 35% 7%;\n  --popover: 253 58% 15%;\n  --popover-foreground: 260 60% 98%;\n  --card: 253 58% 15%;\n  --card-foreground: 260 60% 98%;\n}",
  valentine:
    ".valentine {\n  --border: 344 38% 28%;\n  --input: 344 38% 28%;\n  --ring: 344 38% 28%;\n  --background: 319 66% 94%;\n  --foreground: 344 38% 28%;\n  --primary: 353 74% 67%;\n  --primary-foreground: 353 15% 13%;\n  --secondary: 254 86% 77%;\n  --secondary-foreground: 254 17% 15%;\n  --destructive: 5 100% 69%;\n  --destructive-foreground: 4 25% 14%;\n  --muted: 319 56% 81%;\n  --muted-foreground: 344 38% 28%;\n  --accent: 182 34% 55%;\n  --accent-foreground: 182 7% 11%;\n  --popover: 319 66% 94%;\n  --popover-foreground: 344 38% 28%;\n  --card: 319 66% 94%;\n  --card-foreground: 344 38% 28%;\n}",
  wireframe:
    ".wireframe {\n  --border: 224 -35% 20%;\n  --input: 224 -35% 20%;\n  --ring: 224 -35% 20%;\n  --background: 0 0% 100%;\n  --foreground: 224 -35% 20%;\n  --primary: 224 0% 72%;\n  --primary-foreground: 0 0% 14%;\n  --secondary: 224 0% 72%;\n  --secondary-foreground: 0 0% 14%;\n  --destructive: 0 100% 50%;\n  --destructive-foreground: 0 20% 10%;\n  --muted: 224 0% 87%;\n  --muted-foreground: 224 -35% 20%;\n  --accent: 224 0% 72%;\n  --accent-foreground: 0 0% 14%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 224 -35% 20%;\n  --card: 0 0% 100%;\n  --card-foreground: 224 -35% 20%;\n}",
  autumn:
    ".autumn {\n  --border: 0 0% 19%;\n  --input: 0 0% 19%;\n  --ring: 0 0% 19%;\n  --background: 224 0% 95%;\n  --foreground: 0 0% 19%;\n  --primary: 344 96% 28%;\n  --primary-foreground: 344 19% 86%;\n  --secondary: 0 63% 58%;\n  --secondary-foreground: 0 13% 12%;\n  --destructive: 353 100% 41%;\n  --destructive-foreground: 346 29% 87%;\n  --muted: 0 0% 81%;\n  --muted-foreground: 0 0% 19%;\n  --accent: 27 56% 63%;\n  --accent-foreground: 27 11% 13%;\n  --popover: 224 0% 95%;\n  --popover-foreground: 0 0% 19%;\n  --card: 224 0% 95%;\n  --card-foreground: 0 0% 19%;\n}",
  business:
    ".business {\n  --border: 0 0% 83%;\n  --input: 0 0% 83%;\n  --ring: 0 0% 83%;\n  --background: 224 0% 13%;\n  --foreground: 0 0% 83%;\n  --primary: 210 64% 31%;\n  --primary-foreground: 210 13% 86%;\n  --secondary: 200 13% 55%;\n  --secondary-foreground: 200 3% 11%;\n  --destructive: 6 56% 43%;\n  --destructive-foreground: 6 11% 89%;\n  --muted: 0 0% 11%;\n  --muted-foreground: 0 0% 83%;\n  --accent: 13 80% 60%;\n  --accent-foreground: 13 16% 12%;\n  --popover: 224 0% 13%;\n  --popover-foreground: 0 0% 83%;\n  --card: 224 0% 13%;\n  --card-foreground: 0 0% 83%;\n}",
  acid: ".acid {\n  --border: 0 0% 20%;\n  --input: 0 0% 20%;\n  --ring: 0 0% 20%;\n  --background: 224 0% 98%;\n  --foreground: 0 0% 20%;\n  --primary: 300 100% 53%;\n  --primary-foreground: 302 30% 9%;\n  --secondary: 28 100% 50%;\n  --secondary-foreground: 30 29% 9%;\n  --destructive: 2 100% 51%;\n  --destructive-foreground: 357 29% 9%;\n  --muted: 0 0% 84%;\n  --muted-foreground: 0 0% 20%;\n  --accent: 73 100% 50%;\n  --accent-foreground: 70 39% 7%;\n  --popover: 224 0% 98%;\n  --popover-foreground: 0 0% 20%;\n  --card: 224 0% 98%;\n  --card-foreground: 0 0% 20%;\n}",
  lemonade:
    ".lemonade {\n  --border: 83 16% 19%;\n  --input: 83 16% 19%;\n  --ring: 83 16% 19%;\n  --background: 83 82% 97%;\n  --foreground: 83 16% 19%;\n  --primary: 93 100% 29%;\n  --primary-foreground: 86 36% 4%;\n  --secondary: 61 100% 38%;\n  --secondary-foreground: 61 39% 5%;\n  --destructive: 6 59% 85%;\n  --destructive-foreground: 6 12% 17%;\n  --muted: 83 70% 83%;\n  --muted-foreground: 83 16% 19%;\n  --accent: 53 100% 46%;\n  --accent-foreground: 54 35% 7%;\n  --popover: 83 82% 97%;\n  --popover-foreground: 83 16% 19%;\n  --card: 83 82% 97%;\n  --card-foreground: 83 16% 19%;\n}",
  night:
    ".night {\n  --border: 222 9% 82%;\n  --input: 222 9% 82%;\n  --ring: 222 9% 82%;\n  --background: 222 47% 11%;\n  --foreground: 222 9% 82%;\n  --primary: 198 93% 60%;\n  --primary-foreground: 198 19% 12%;\n  --secondary: 234 89% 74%;\n  --secondary-foreground: 234 18% 15%;\n  --destructive: 351 95% 71%;\n  --destructive-foreground: 351 19% 14%;\n  --muted: 222 41% 10%;\n  --muted-foreground: 222 9% 82%;\n  --accent: 329 86% 70%;\n  --accent-foreground: 329 17% 14%;\n  --popover: 222 47% 11%;\n  --popover-foreground: 222 9% 82%;\n  --card: 222 47% 11%;\n  --card-foreground: 222 9% 82%;\n}",
  coffee:
    ".coffee {\n  --border: 37 47% 57%;\n  --input: 37 47% 57%;\n  --ring: 37 47% 57%;\n  --background: 306 19% 11%;\n  --foreground: 37 47% 57%;\n  --primary: 30 67% 58%;\n  --primary-foreground: 30 13% 12%;\n  --secondary: 182 25% 20%;\n  --secondary-foreground: 182 5% 84%;\n  --destructive: 10 95% 75%;\n  --destructive-foreground: 10 19% 15%;\n  --muted: 306 16% 9%;\n  --muted-foreground: 37 47% 57%;\n  --accent: 194 74% 25%;\n  --accent-foreground: 194 15% 85%;\n  --popover: 306 19% 11%;\n  --popover-foreground: 37 47% 57%;\n  --card: 306 19% 11%;\n  --card-foreground: 37 47% 57%;\n}",
  winter:
    ".winter {\n  --border: 214 30% 32%;\n  --input: 214 30% 32%;\n  --ring: 214 30% 32%;\n  --background: 0 0% 100%;\n  --foreground: 214 30% 32%;\n  --primary: 215 100% 50%;\n  --primary-foreground: 211 28% 89%;\n  --secondary: 247 47% 43%;\n  --secondary-foreground: 247 9% 89%;\n  --destructive: 0 63% 72%;\n  --destructive-foreground: 0 13% 14%;\n  --muted: 219 44% 92%;\n  --muted-foreground: 214 30% 32%;\n  --accent: 310 49% 52%;\n  --accent-foreground: 310 10% 10%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 214 30% 32%;\n  --card: 0 0% 100%;\n  --card-foreground: 214 30% 32%;\n}",
  dim: ".dim {\n  --border: 197 31% 77%;\n  --input: 197 31% 77%;\n  --ring: 197 31% 77%;\n  --background: 220 18% 20%;\n  --foreground: 197 31% 77%;\n  --primary: 108 66% 73%;\n  --primary-foreground: 108 13% 15%;\n  --secondary: 12 100% 68%;\n  --secondary-foreground: 12 20% 14%;\n  --destructive: 11 100% 80%;\n  --destructive-foreground: 11 20% 16%;\n  --muted: 219 18% 15%;\n  --muted-foreground: 197 31% 77%;\n  --accent: 277 66% 74%;\n  --accent-foreground: 277 13% 15%;\n  --popover: 220 18% 20%;\n  --popover-foreground: 197 31% 77%;\n  --card: 220 18% 20%;\n  --card-foreground: 197 31% 77%;\n}",
  nord: ".nord {\n  --border: 220 16% 22%;\n  --input: 220 16% 22%;\n  --ring: 220 16% 22%;\n  --background: 217 27% 94%;\n  --foreground: 220 16% 22%;\n  --primary: 213 32% 52%;\n  --primary-foreground: 213 6% 10%;\n  --secondary: 210 34% 63%;\n  --secondary-foreground: 210 7% 13%;\n  --destructive: 354 42% 56%;\n  --destructive-foreground: 354 8% 11%;\n  --muted: 219 28% 88%;\n  --muted-foreground: 220 16% 22%;\n  --accent: 193 43% 67%;\n  --accent-foreground: 193 9% 13%;\n  --popover: 217 27% 94%;\n  --popover-foreground: 220 16% 22%;\n  --card: 217 27% 94%;\n  --card-foreground: 220 16% 22%;\n}",
  sunset:
    ".sunset {\n  --border: 208 34% 72%;\n  --input: 208 34% 72%;\n  --ring: 208 34% 72%;\n  --background: 204 31% 10%;\n  --foreground: 208 34% 72%;\n  --primary: 16 100% 68%;\n  --primary-foreground: 16 20% 14%;\n  --secondary: 341 97% 71%;\n  --secondary-foreground: 341 19% 14%;\n  --destructive: 358 100% 87%;\n  --destructive-foreground: 358 20% 17%;\n  --muted: 204 45% 7%;\n  --muted-foreground: 208 34% 72%;\n  --accent: 263 92% 75%;\n  --accent-foreground: 263 18% 15%;\n  --popover: 204 31% 10%;\n  --popover-foreground: 208 34% 72%;\n  --card: 204 31% 10%;\n  --card-foreground: 208 34% 72%;\n}",
};
