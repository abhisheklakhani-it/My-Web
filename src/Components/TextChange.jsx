import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Abhishek",
    "Welcome to my Portfolio",
    "Let's build something great!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting && charIndex === 0 ? 1000 : typingSpeed;

    const type = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(type);
  }, [charIndex, isDeleting, index, texts]);

  return <span className="transition ease duration-300">{currentText}</span>;
};

export default TextChange;
