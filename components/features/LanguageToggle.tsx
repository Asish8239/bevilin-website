"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export type Language = "en" | "hi";

interface LanguageToggleProps {
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  const [language, setLanguage] = useState<Language>("en");

  const handleToggle = () => {
    const newLang: Language = language === "en" ? "hi" : "en";
    setLanguage(newLang);
    onLanguageChange(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition-colors"
    >
      <Globe className="w-5 h-5 text-primary-600" />
      <span className="font-medium text-gray-700">
        {language === "en" ? "EN" : "हिं"}
      </span>
    </motion.button>
  );
}
