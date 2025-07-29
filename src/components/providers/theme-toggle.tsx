import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Sun className="!h-8 !w-8" />
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size='icon'
        className="rounded-full hover:bg-transparent cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon className="!w-8 !h-8" /> : <Sun className="!w-8 !h-8" />}
      </Button>
    </div>
  )
}