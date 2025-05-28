"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ArrowLeft,
  Maximize2,
  Download,
  Grid3X3,
  Layers,
  Circle,
  Box,
} from "lucide-react"
import { cn } from "../../lib/utils"

interface Photo {
  src: string
  caption?: string
  height: number
  width?: number
  featured?: boolean
  tags?: string[]
}

interface PhotoWallProps {
  photos: Photo[]
  title?: string
  className?: string
  initialLayout?: "masonry" | "uniform" | "scattered" | "circular" | "3d"
  onBack?: () => void
  backButtonLabel?: string
}

type LayoutType = "masonry" | "uniform" | "scattered" | "circular" | "3d"

export function PhotoWall({
  photos,
  title = "Photo Gallery",
  className,
  initialLayout = "masonry",
  onBack,
  backButtonLabel = "Back",
}: PhotoWallProps) {
  // State
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeLayout, setActiveLayout] = useState<LayoutType>(initialLayout)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [layoutMenuOpen, setLayoutMenuOpen] = useState(false)
  const [columnHeights, setColumnHeights] = useState<number[]>([])

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Layout options with improved naming
  const layouts: LayoutType[] = ["masonry", "uniform", "scattered", "circular", "3d"]
  const layoutNames = {
    masonry: "Masonry Grid",
    uniform: "Uniform Grid",
    scattered: "Scattered Cards",
    circular: "Circular View",
    "3d": "3D Perspective",
  }

  const layoutIcons = {
    masonry: Grid3X3,
    uniform: Layers,
    scattered: Box,
    circular: Circle,
    "3d": Box,
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (typeof window !== "undefined") {
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Calculate optimal columns based on screen size
  const getColumnCount = () => {
    if (windowSize.width < 640) return 1
    if (windowSize.width < 768) return 2
    if (windowSize.width < 1024) return 3
    if (windowSize.width < 1280) return 4
    return 5
  }

  // Initialize column heights for masonry layout
  useEffect(() => {
    const columnCount = getColumnCount()
    setColumnHeights(new Array(columnCount).fill(0))
  }, [windowSize.width, activeLayout])

  // Calculate masonry position for each photo
  const getMasonryPosition = (index: number) => {
    const columnCount = getColumnCount()
    const columnWidth = 100 / columnCount

    // Find the shortest column
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))

    // Calculate aspect ratio and height
    const photo = photos[index]
    const aspectRatio = photo.width && photo.height ? photo.width / photo.height : 1
    const baseHeight = 250 // Base height in pixels
    const calculatedHeight = baseHeight / aspectRatio

    // Update column height
    const newColumnHeights = [...columnHeights]
    newColumnHeights[shortestColumnIndex] += calculatedHeight + 16 // 16px gap
    setColumnHeights(newColumnHeights)

    return {
      left: `${shortestColumnIndex * columnWidth}%`,
      width: `${columnWidth}%`,
      height: `${calculatedHeight}px`,
    }
  }

  // Change layout with transition
  const changeLayout = (layout: LayoutType) => {
    if (isTransitioning || layout === activeLayout) return

    setIsTransitioning(true)
    setActiveLayout(layout)
    setLayoutMenuOpen(false)

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  // Handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  // Open modal with selected photo
  const openModal = (index: number) => {
    setSelectedPhoto(index)
    setIsModalOpen(true)
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden"
    }
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto"
    }
    setTimeout(() => setSelectedPhoto(null), 300)
  }

  // Navigate photos in modal
  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhoto === null) return

    if (direction === "prev") {
      setSelectedPhoto(selectedPhoto > 0 ? selectedPhoto - 1 : photos.length - 1)
    } else {
      setSelectedPhoto(selectedPhoto < photos.length - 1 ? selectedPhoto + 1 : 0)
    }
  }

  // Toggle like
  const toggleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedPhotos((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  // Download image
  const downloadImage = (e: React.MouseEvent, photo: Photo, index: number) => {
    e.stopPropagation()
    const link = document.createElement("a")
    link.href = photo.src
    link.download = `photo-${index + 1}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return

      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "ArrowLeft":
          navigatePhoto("prev")
          break
        case "ArrowRight":
          navigatePhoto("next")
          break
        case "f":
          toggleFullscreen()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, selectedPhoto, photos.length])

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Calculate positions for different layouts
  const getPhotoStyle = (photo: Photo, index: number): React.CSSProperties => {
    switch (activeLayout) {
      case "masonry":
        // Masonry layout with optimized positioning
        const columnCount = getColumnCount()
        const columnIndex = index % columnCount
        const rowIndex = Math.floor(index / columnCount)

        // Calculate dynamic height based on aspect ratio
        const aspectRatio = photo.width && photo.height ? photo.width / photo.height : 1
        const baseHeight = 250
        const dynamicHeight = Math.max(200, Math.min(400, baseHeight / aspectRatio))

        return {
          height: `${dynamicHeight}px`,
        }

      case "uniform":
        // Uniform grid with consistent aspect ratio
        return {
          aspectRatio: "1 / 1", // Square aspect ratio for uniformity
          height: "250px",
        }

      case "scattered":
        const angle = ((index * 17) % 40) - 20
        const translateX = ((index % 5) - 2) * 15
        const translateY = ((Math.floor(index / 5) % 3) - 1) * 8
        return {
          transform: `rotate(${angle}deg) translate(${translateX}px, ${translateY}px)`,
          zIndex: hoveredPhoto === index ? 10 : index % photos.length,
          margin: "8px",
          width: "220px",
          height: "220px",
        }

      case "circular":
        const totalPhotos = photos.length
        const radius = Math.min(windowSize.width * 0.35, windowSize.height * 0.35, 300)
        const angle2 = (index / totalPhotos) * 2 * Math.PI
        const x = radius * Math.cos(angle2)
        const y = radius * Math.sin(angle2)
        return {
          position: "absolute",
          left: `calc(50% + ${x}px - 100px)`,
          top: `calc(50% + ${y}px - 100px)`,
          width: "200px",
          height: "200px",
          transform: `rotate(${angle2 * (180 / Math.PI)}deg)`,
          zIndex: hoveredPhoto === index ? 10 : 1,
        }

      case "3d":
        const itemsPerRow = 4
        const row = Math.floor(index / itemsPerRow)
        const col = index % itemsPerRow
        const translateZ = -50 + (hoveredPhoto === index ? 100 : 0)
        const rotateY = (col - (itemsPerRow - 1) / 2) * 10
        const rotateX = (row - 1) * 8
        return {
          transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transition: "transform 0.5s ease",
          margin: "15px",
          width: "200px",
          height: "200px",
        }

      default:
        return {}
    }
  }

  // Get container class based on active layout
  const getContainerClass = () => {
    const baseClass = "transition-all duration-500 ease-out"
    switch (activeLayout) {
      case "masonry":
        return cn(baseClass, "columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5", "gap-4 space-y-4")
      case "uniform":
        return cn(baseClass, "grid gap-4", "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5")
      case "scattered":
        return cn(baseClass, "flex flex-wrap justify-center items-center min-h-[60vh] p-4")
      case "circular":
        return cn(baseClass, "relative h-[80vh] flex items-center justify-center overflow-hidden")
      case "3d":
        return cn(baseClass, "flex flex-wrap justify-center items-center min-h-[60vh] p-4", "perspective-1000")
      default:
        return baseClass
    }
  }

  const getPhotoItemClass = (photo: Photo, index: number) => {
    const base = cn(
      "overflow-hidden rounded-xl cursor-pointer transition-all duration-500",
      "bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl",
      "border border-gray-200 dark:border-gray-700",
      photo.featured && "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800",
    )

    switch (activeLayout) {
      case "masonry":
        return cn(base, "mb-4 break-inside-avoid", "transform hover:scale-[1.02] hover:-translate-y-1 relative group")
      case "uniform":
        return cn(base, "transform hover:scale-[1.02] hover:-translate-y-1 relative group")
      case "scattered":
        return cn(
          base,
          "transform hover:scale-110 hover:rotate-0 hover:z-20",
          "shadow-xl hover:shadow-2xl relative group",
        )
      case "circular":
        return cn(base, "absolute transform hover:scale-125 hover:z-20", "shadow-xl hover:shadow-2xl relative group")
      case "3d":
        return cn(base, "transform hover:scale-110", "shadow-2xl hover:shadow-3xl relative group")
      default:
        return cn(base, "relative group")
    }
  }

  return (
    <div className={cn("py-8 relative", className)} ref={containerRef}>
      {/* Header with back button and layout selector */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-0">
        <div className="flex items-center gap-4">
          {/* Back button */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all shadow-sm"
              aria-label={backButtonLabel}
            >
              <ArrowLeft size={18} />
              <span>{backButtonLabel}</span>
            </button>
          )}

          {/* Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block group">
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out">
                <a href="/" style={{ textDecoration: 'none' }}>{title}</a>
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full -z-10"></span>
            </h2>
          </div>
        </div>

        {/* Layout selector */}
        <div className="relative">
          <button
            onClick={() => setLayoutMenuOpen(!layoutMenuOpen)}
            className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all shadow-sm flex items-center gap-2"
          >
            <span>Layout</span>
            <svg
              className={`w-4 h-4 transition-transform ${layoutMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {layoutMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-20 border border-gray-200 dark:border-gray-700 overflow-hidden">
              {layouts.map((layout) => {
                const IconComponent = layoutIcons[layout]
                return (
                  <button
                    key={layout}
                    onClick={() => changeLayout(layout)}
                    className={cn(
                      "w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-150",
                      activeLayout === layout
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300",
                    )}
                  >
                    <IconComponent size={16} />
                    <span>{layoutNames[layout]}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Photo Container */}
      <div
        className={getContainerClass()}
        style={
          activeLayout === "3d"
            ? {
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }
            : {}
        }
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className={getPhotoItemClass(photo, index)}
            style={getPhotoStyle(photo, index)}
            onClick={() => openModal(index)}
            onMouseEnter={() => setHoveredPhoto(index)}
            onMouseLeave={() => setHoveredPhoto(null)}
            role="button"
            tabIndex={0}
            aria-label={photo.caption || `View photo ${index + 1}`}
          >
            {/* Loading skeleton */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer"></div>
              </div>
            )}

            {/* Image */}
            <img
              src={photo.src || "/placeholder.svg?height=400&width=400"}
              alt={photo.caption || `Photo ${index + 1}`}
              className={cn(
                "w-full h-full transition-opacity duration-700",
                activeLayout === "uniform" ? "object-cover" : "object-cover",
                loadedImages.has(index) ? "opacity-100" : "opacity-0",
              )}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=400&width=400"
                handleImageLoad(index)
              }}
            />

            {/* Overlay with gradient, caption, tags, and actions */}
            <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex-grow">
                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => toggleLike(index, e)}
                    className={cn(
                      "p-1.5 rounded-full backdrop-blur-sm transition-all duration-200",
                      "opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 delay-100",
                      likedPhotos.has(index) ? "bg-red-500/80 text-white" : "bg-white/20 text-white hover:bg-white/40",
                    )}
                    aria-label={likedPhotos.has(index) ? "Unlike photo" : "Like photo"}
                  >
                    <Heart size={16} className={likedPhotos.has(index) ? "fill-current" : ""} />
                  </button>
                  <button
                    onClick={(e) => downloadImage(e, photo, index)}
                    className="p-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 delay-150 hover:bg-white/40"
                    aria-label="Download photo"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>

              {/* Tags */}
              {photo.tags && photo.tags.length > 0 && (
                <div className="mb-1.5 flex flex-wrap gap-1.5">
                  {photo.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-white/25 backdrop-blur-sm rounded-full text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Caption */}
              {photo.caption && (
                <div>
                  <p className="text-white text-sm font-medium truncate">{photo.caption}</p>
                </div>
              )}
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 group-hover:animate-shine-effect transform -skew-x-12 -translate-x-full group-hover:translate-x-[250%]" />
            </div>
          </div>
        ))}
      </div>

      {/* Layout indicator (mobile) */}
      <div className="mt-6 flex justify-center sm:hidden">
        <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow">
          {layouts.map((layout) => {
            const IconComponent = layoutIcons[layout]
            return (
              <button
                key={layout}
                onClick={() => changeLayout(layout)}
                className={cn(
                  "w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center",
                  activeLayout === layout
                    ? "bg-blue-500 text-white scale-110"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
                )}
                aria-label={`Switch to ${layoutNames[layout]} layout`}
                title={layoutNames[layout]}
              >
                <IconComponent size={14} />
              </button>
            )
          })}
        </div>
      </div>

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="fixed bottom-6 right-6 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all shadow-lg backdrop-blur-sm z-30"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        <Maximize2 size={20} />
      </button>

      {/* Modal */}
      {isModalOpen && selectedPhoto !== null && photos[selectedPhoto] && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4",
            "bg-black/90 backdrop-blur-md",
            "transition-opacity duration-300",
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-caption"
        >
          <div
            className={cn(
              "relative max-w-screen-xl max-h-[95vh] w-auto",
              "transform transition-all duration-300 ease-out",
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 md:top-2 md:-right-12 z-10 p-2 text-white hover:text-gray-300 transition-colors rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Navigation buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={() => navigatePhoto("prev")}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={28} />
                </button>

                <button
                  onClick={() => navigatePhoto("next")}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Next photo"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Main image and info container */}
            <div className="flex flex-col items-center">
              <img
                src={photos[selectedPhoto].src || "/placeholder.svg?height=600&width=800"}
                alt={photos[selectedPhoto].caption || `Photo ${selectedPhoto + 1}`}
                className="block max-w-full max-h-[calc(90vh-120px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=600&width=800"
                }}
              />

              {/* Image controls */}
              <div className="absolute top-4 left-4 flex gap-2.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(selectedPhoto, e)
                  }}
                  className={cn(
                    "p-2.5 rounded-full backdrop-blur-md transition-all duration-200",
                    likedPhotos.has(selectedPhoto)
                      ? "bg-red-500 text-white"
                      : "bg-white/25 text-white hover:bg-white/40",
                  )}
                  aria-label={likedPhotos.has(selectedPhoto) ? "Unlike photo" : "Like photo"}
                >
                  <Heart size={20} className={likedPhotos.has(selectedPhoto) ? "fill-current" : ""} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    downloadImage(e, photos[selectedPhoto], selectedPhoto)
                  }}
                  className="p-2.5 bg-white/25 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all duration-200"
                  aria-label="Download photo"
                >
                  <Download size={20} />
                </button>
              </div>

              {/* Caption and info */}
              <div className="mt-4 text-center px-4 max-w-2xl">
                {photos[selectedPhoto].caption && (
                  <p id="modal-caption" className="text-white text-lg font-medium mb-1">
                    {photos[selectedPhoto].caption}
                  </p>
                )}
                <p className="text-gray-400 text-sm">
                  {selectedPhoto + 1} of {photos.length}
                </p>
              </div>

              {/* Tags in modal */}
              {photos[selectedPhoto].tags && photos[selectedPhoto].tags!.length > 0 && (
                <div className="mt-3 flex justify-center flex-wrap gap-2 px-4 max-w-2xl">
                  {photos[selectedPhoto].tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style >{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes shine-effect {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(250%) skewX(-12deg);
          }
        }
        .animate-shine-effect {
          animation: shine-effect 1s ease-in-out;
        }
      `}</style>
    </div>
  )
}
