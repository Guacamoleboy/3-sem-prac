"use client"

import React, { useEffect, useState } from "react";

interface DynamicWordProps {
  words: string[];
  typingSpeed?: number;
  pauseBetweenWords?: number;
}

export default function DynamicWord({
  words,
  typingSpeed = 200,
  pauseBetweenWords = 1500,
}: DynamicWordProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = words[currentWordIndex];

    if (typing) {
      if (displayedText.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayedText(word.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseBetweenWords);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(word.slice(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setTyping(true);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentWordIndex, words, typingSpeed, pauseBetweenWords]);

  return <span>{displayedText}</span>;
}