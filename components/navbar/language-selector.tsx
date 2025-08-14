// components/LanguageSelector.tsx
"use client";

import { FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { languages } from "@/config/languages"; // You'll need to create this config

export function LanguageSelector({
  selectedLang,
  setSelectedLang,
}: {
  selectedLang: string;
  setSelectedLang: (lang: string) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <FaGlobe className="text-primary size-4" />
          <span className="uppercase">{selectedLang}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Select Language</DialogTitle>
          <DialogDescription className="text-center">
            Choose your preferred language from the list below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={selectedLang === language.code ? "default" : "outline"}
              onClick={() => {
                setSelectedLang(language.code);
                document.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "Escape" })
                );
              }}
              className="rounded-full flex justify-between items-center px-6"
            >
              <span>{language.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
