'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If hero is not in viewport, we're scrolled
          setIsScrolled(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of hero is visible
        rootMargin: '-100px 0px', // Add margin for earlier trigger
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-wrapper">
        <div className="logo">
          <img
            src="/philtranco-logo.svg"
            alt="Philtranco logo"
            className="logo-mark"
          />
          PHILTRANCO
        </div>
      </div>
    </nav>
  );
}

