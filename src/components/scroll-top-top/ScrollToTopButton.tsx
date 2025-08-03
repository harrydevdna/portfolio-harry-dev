'use client';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="!h-5 !w-5 md:!h-6 md:!w-6" />
      </Button>
    </div>
  )
};

export default ScrollToTopButton;
