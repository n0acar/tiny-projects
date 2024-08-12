"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

function ThemeToggle() {
  const { setTheme, themes, theme: currentTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Themes
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-muted" align="end">
        <ScrollArea className="h-72 w-48">
          {themes.map((theme) => (
            <DropdownMenuItem
              className={cn("m-2 bg-background focus:bg-background", theme)}
              key={theme}
              onClick={() => setTheme(theme)}
            >
              <ThemeItem theme={theme} selected={currentTheme === theme} />
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;

function ThemeItem({ theme, selected }) {
  return (
    <div className="flex justify-between m-2  w-full">
      {selected && <Check className="h-4 w-4" />}
      <span className="font-semibold text-foreground">{theme}</span>
      <span className="grid grid-cols-3 gap-[0.1rem] ">
        <span className="w-2 h-full bg-primary rounded-md"></span>
        <span className="w-2 h-full bg-secondary rounded-md"></span>
        <span className="w-2 h-full bg-accent rounded-md"></span>
        {/* <span className="w-2 h-full bg-destructive"></span> */}
      </span>
    </div>
  );
}
