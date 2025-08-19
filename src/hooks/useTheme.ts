"use client";

import { useState, useEffect } from "react";
import { Theme } from "../types/terminal";

const themes: Record<string, Theme> = {
  dark: {
    name: "dark",
    background: "bg-gray-900",
    text: "text-gray-100",
    primary: "text-green-400",
    secondary: "text-blue-400",
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    scrollbar:
      "scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800",
  },
  light: {
    name: "light",
    background: "bg-gray-100",
    text: "text-gray-900",
    primary: "text-blue-600",
    secondary: "text-purple-600",
    error: "text-red-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    scrollbar:
      "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200",
  },
  matrix: {
    name: "matrix",
    background: "bg-black",
    text: "text-green-400",
    primary: "text-green-300",
    secondary: "text-green-500",
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    scrollbar: "scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-black",
  },
  ubuntu: {
    name: "ubuntu",
    background: "bg-purple-900",
    text: "text-white",
    primary: "text-orange-400",
    secondary: "text-purple-300",
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    scrollbar:
      "scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-800",
  },
  dracula: {
    name: "dracula",
    background: "bg-gray-800",
    text: "text-gray-200",
    primary: "text-pink-400",
    secondary: "text-purple-400",
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    scrollbar:
      "scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700",
  },
  cyberpunk: {
    name: "cyberpunk",
    background: "bg-black",
    text: "text-cyan-400",
    primary: "text-pink-500",
    secondary: "text-yellow-400",
    error: "text-red-500",
    success: "text-green-400",
    warning: "text-yellow-500",
    scrollbar: "scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-black",
  },
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem("terminal-theme", themeName);
    }
  };

  const getAvailableThemes = () => {
    return Object.keys(themes);
  };

  return {
    theme: themes[currentTheme],
    currentTheme,
    changeTheme,
    getAvailableThemes,
    themes,
  };
};
