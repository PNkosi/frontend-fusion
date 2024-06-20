"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useState } from "react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(theme === "dark" ? <IconMoonStars /> : <IconSun />)

  const DARK = "dark";
  const LIGHT = "light";


  const handleThemeChange = () => {
    if (theme === DARK) {
        setTheme(LIGHT)
        setIcon(<IconSun />)
    } else {
        setTheme(DARK)
        setIcon(<IconMoonStars />)
    }
  }

  return (
    <Button
      className='hover:btn-shadow'
      variant="ghost"
      size="sm"
      onClick={handleThemeChange}
    >
      {icon}
    </Button>
  );
}
