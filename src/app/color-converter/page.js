"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  generateSeedColor,
  isDark,
  convert,
  formatToCss,
  parseColor,
} from "./utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Copy, CopyCheck } from "lucide-react";

export default function Page() {
  const [color, setColor] = useState(generateSeedColor());
  const [spaces, setSpaces] = useState(["hex", "rgb", "hsl", "oklch", "lch"]);

  const moveSpace = (type, direction) => {
    const newSpaces = [...spaces];
    const currentIndex = newSpaces.indexOf(type);
    const newIndex =
      direction === "right"
        ? (currentIndex + 1) % newSpaces.length
        : currentIndex - 1;
    const temp = newSpaces[currentIndex];
    newSpaces[currentIndex] = newSpaces[newIndex];
    newSpaces[newIndex] = temp;
    setSpaces(newSpaces);
  };

  return (
    <div className="font-concert-one h-screen w-screen grid lg:grid-flow-col">
      {spaces.map((type, i) => (
        <ColorSpace
          key={type}
          type={type}
          color={color}
          setColor={setColor}
          moveType={moveSpace}
          isFirst={i === 0}
          isLast={i === spaces.length - 1}
        />
      ))}
    </div>
  );
}

const ColorSpace = ({ type, color, setColor, moveType, isFirst, isLast }) => {
  const [formattedColor, setFormattedColor] = useState("");

  const [invalidColor, setinvalidColor] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (color !== formattedColor) {
      setFormattedColor(convert(color, type));
      setinvalidColor("");
      setInputColor("");
    }
  }, [color]);

  const handleInputChange = (value) => {
    setInputColor(value);
    if (type === "hex" && value.length !== 7) {
      setinvalidColor(value);
      return;
    }
    const color = parseColor(value);
    if (!color) {
      setinvalidColor(value);
    } else {
      setinvalidColor("");
    }
  };

  const handleColorChange = (value) => {
    if (invalidColor) return;
    if (value !== formattedColor) {
      setColor(value);
    }
  };

  return formattedColor ? (
    <div
      style={{
        transition: "background-color 0.5s ease",
        backgroundColor: formattedColor,
      }}
      className={`${
        isDark(color) ? "border-white" : "border-black"
      } border-b-2 border-r-0 lg:border-r-2 lg:border-b-0 flex flex-col justify-center items-center`}
    >
      <Input
        type="text"
        value={invalidColor || inputColor || formattedColor}
        onChange={(e) => handleInputChange(e.target.value)}
        onBlur={(e) => handleColorChange(e.target.value)}
        onKeyDown={(e) => {
          {
            if (e.key === "Enter") {
              handleColorChange(e.target.value);
            }
          }
        }}
        className={`font-bold text-xl text-center  ${
          invalidColor ? "bg-red-500" : "bg-transparent"
        } h-12 w-full ${
          isDark(color) ? "text-white" : "text-black"
        } border-none focus-visible:ring-0 focus-visible:ring-offset-0`}
        placeholder={`Enter ${type} color`}
      />
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="hover:bg-transparent hidden lg:block"
          disabled={isFirst}
          onClick={() => moveType(type, "left")}
        >
          <ChevronLeft
            className={cn(
              "h-12 w-12 ",
              isDark(color) ? "text-white" : "text-black"
            )}
          />
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-transparent hidden lg:block"
          disabled={isLast}
          onClick={() => moveType(type, "right")}
        >
          <ChevronRight
            className={cn(
              "h-12 w-12",
              isDark(color) ? "text-white" : "text-black"
            )}
          />
        </Button>
      </div>
      <Button
        variant="ghost"
        className="hover:bg-transparent"
        onClick={() => {
          navigator.clipboard.writeText(formattedColor);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
          setCopied(true);
        }}
      >
        {copied ? (
          <CopyCheck
            className={cn(
              "h-8 w-8",
              isDark(color) ? "text-white" : "text-black"
            )}
          />
        ) : (
          <Copy
            className={cn(
              "h-8 w-8",
              isDark(color) ? "text-white" : "text-black"
            )}
          />
        )}
      </Button>
    </div>
  ) : null;
};
