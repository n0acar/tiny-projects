import {
  formatHex,
  wcagContrast,
  converter,
  formatCss,
  formatRgb,
  getMode,
  parse,
  toGamut,
} from "culori";
import popularColors from "./popular-colors";

export function generateSeedColor() {
  return popularColors[Math.floor(Math.random() * popularColors.length)];
}

export function isDark(color) {
  if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
    return true;
  }
  return false;
}

export function convert(color, type) {
  if (type === "hex") return formatHex(toGamut("rgb")(color));
  if (getMode(color) === type) return color;
  return format(converter(type)(toGamut(type)(color)));
}

export function formatToCss(color) {
  console.log(color, formatCss(color));
  return formatCss(color);
}

function format(color) {
  switch (color.mode) {
    case "hex":
      return color;
    case "rgb":
      return formatRgb(color);
    case "hsl":
      return formatHsl(color);
    case "oklch":
      return formatOklch(color);
    case "lch":
      return formatLch(color);
    default:
      return color;
  }
}

function formatHsl(color) {
  const { h, s, l } = color;
  return `hsl(${cutNumber(h)} ${cutNumber(s * 100)}% ${cutNumber(l * 100)}%)`;
}

function formatOklch(color) {
  const { l, c, h } = color;
  return `oklch(${cutNumber(l * 100)}% ${cutNumber(c)} ${cutNumber(h)})`;
}

function formatLch(color) {
  const { l, c, h } = color;
  return `lch(${cutNumber(l)} ${cutNumber(c)} ${cutNumber(h)})`;
}

function cutNumber(number) {
  return number ? number.toFixed(2) : "0";
}

export function parseColor(color) {
  const parsedColor = parse(color);
  try {
    return toGamut(color.mode)(color);
  } catch (error) {
    return parsedColor;
  }
}
