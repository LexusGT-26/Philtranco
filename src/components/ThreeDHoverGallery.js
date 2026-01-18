'use client';

import React, { useRef, useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const ThreeDHoverGallery = ({
  images = [
    "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32423809/pexels-photo-32423809/free-photo-of-aerial-view-of-kayaking-at-robberg-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32296519/pexels-photo-32296519/free-photo-of-rocky-coastline-of-cape-point-with-turquoise-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32396739/pexels-photo-32396739/free-photo-of-serene-motorcycle-ride-through-bamboo-grove.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32304900/pexels-photo-32304900/free-photo-of-scenic-view-of-cape-town-s-twelve-apostles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32437034/pexels-photo-32437034/free-photo-of-fisherman-holding-freshly-caught-red-drum-fish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/32469847/pexels-photo-32469847/free-photo-of-deer-drinking-from-natural-water-source-in-wilderness.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  itemWidth = 12,
  itemHeight = 20,
  gap = 1.2,
  perspective = 50,
  hoverScale = 15,
  transitionDuration = 1.25,
  backgroundColor,
  grayscaleStrength = 1,
  brightnessLevel = 0.5,
  activeWidth = 45,
  rotationAngle = 35,
  zDepth = 10,
  enableKeyboardNavigation = true,
  autoPlay = false,
  autoPlayDelay = 3000,
  className,
  style,
  onImageClick,
  onImageHover,
  onImageFocus,
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const autoPlayRef = useRef(null);

  // Effect for auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 0) {
      // Clear any existing interval to prevent multiple intervals running
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          // Calculate the next index, looping back to the start if at the end
          const nextIndex = prev === null ? 0 : (prev + 1) % images.length;
          return nextIndex;
        });
      }, autoPlayDelay);

      // Cleanup function to clear the interval when the component unmounts or dependencies change
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }

    // If autoPlay is false or no images, ensure interval is cleared
    if (!autoPlay && autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, [autoPlay, autoPlayDelay, images.length]);

  // Handler for image click event
  const handleImageClick = (index, image) => {
    // Open modal with slow motion effect
    setSelectedImage(image);
    setIsModalOpen(true);
    setActiveIndex(activeIndex === index ? null : index);
    onImageClick?.(index, image);
  };

  // Handler for closing modal
  const handleCloseModal = () => {
    setIsClosing(true);
    // Delay closing for smooth fade-out animation
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setSelectedImage(null);
    }, 2500); // Match the fade-out duration
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Handler for image hover (mouse enter) event
  const handleImageHover = (index, image) => {
    // Only set active index on hover if autoPlay is not enabled
    if (!autoPlay) {
      setActiveIndex(index);
    }
    onImageHover?.(index, image);
  };

  // Handler for image leave (mouse leave) event
  const handleImageLeave = () => {
    // Only clear active index on leave if autoPlay is not enabled
    if (!autoPlay) {
      setActiveIndex(null);
    }
  };

  // Handler for image focus event (e.g., via keyboard navigation)
  const handleImageFocus = (index, image) => {
    setFocusedIndex(index);
    onImageFocus?.(index, image);
  };

  // Handler for keyboard navigation
  const handleKeyDown = (event, index) => {
    if (!enableKeyboardNavigation) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleImageClick(index, images[index]);
        break;
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : images.length - 1;
        (containerRef.current?.children[prevIndex])?.focus();
        break;
      case "ArrowRight":
        event.preventDefault();
        const nextIndex = index < images.length - 1 ? index + 1 : 0;
        (containerRef.current?.children[nextIndex])?.focus();
        break;
    }
  };

  // Function to determine the style for each gallery item
  const getItemStyle = (index) => {
    const isActive = activeIndex === index;
    const isFocused = focusedIndex === index;
    const baseWidthPx = 10;

    return {
      width: isActive
        ? `${activeWidth}vw`
        : `calc(${itemWidth}vw + ${baseWidthPx}px)`,
      height: `calc(${itemHeight}vw + ${itemHeight}vh)`,
      backgroundImage: `url(${images[index]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor,
      cursor: "pointer",
      filter:
        isActive || isFocused
          ? "inherit"
          : `grayscale(${grayscaleStrength}) brightness(${brightnessLevel})`,
      transform: isActive
        ? `translateZ(calc(${hoverScale}vw + ${hoverScale}vh))`
        : "none",
      transition: `transform ${transitionDuration}s cubic-bezier(.1, .7, 0, 1), filter 3s cubic-bezier(.1, .7, 0, 1), width ${transitionDuration}s cubic-bezier(.1, .7, 0, 1)`,
      willChange: "transform, filter, width",
      zIndex: isActive ? 100 : "auto",
      margin: isActive ? "0 0.45vw" : "0",
      outline: isFocused ? "2px solid #3b82f6" : "none",
      outlineOffset: "2px",
      borderRadius: "0.5rem",
    };
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center min-h-screen w-full overflow-hidden bg-background",
          className
        )}
        style={backgroundColor ? { backgroundColor, ...style } : style}
      >
        <div
          ref={containerRef}
          className="flex justify-center items-center w-full"
          style={{
            perspective: `calc(${perspective}vw + ${perspective}vh)`,
            gap: `${gap}rem`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative will-change-transform rounded-lg shadow-lg"
              style={getItemStyle(index)}
              tabIndex={enableKeyboardNavigation ? 0 : -1}
              onClick={() => handleImageClick(index, image)}
              onMouseEnter={() => handleImageHover(index, image)}
              onMouseLeave={handleImageLeave}
              onFocus={() => handleImageFocus(index, image)}
              onBlur={() => setFocusedIndex(null)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              aria-label={`Image ${index + 1} of ${images.length}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      </div>

      {/* Modal with Slow Motion Effects */}
      {isModalOpen && selectedImage && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${
            isClosing ? 'slow-fade-out' : 'slow-fade-in'
          }`}
          onClick={handleCloseModal}
        >
          {/* Backdrop with slow fade-in */}
          <div className={`absolute inset-0 bg-black ${
            isClosing ? 'slow-fade-out' : 'slow-fade-in'
          }`} />

          {/* Modal Content with slow scale-up */}
          <div
            className={`relative z-10 max-w-7xl max-h-[90vh] w-full mx-4 ${
              isClosing ? 'slow-scale-down' : 'slow-scale-up'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size view"
              className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[90vh]"
            />

            {/* Close Button with slow fade-in */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-500 backdrop-blur-sm slow-fade-in-delayed"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDHoverGallery;

