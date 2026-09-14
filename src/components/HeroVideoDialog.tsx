import { useEffect, useRef, useState } from 'react'
import './HeroVideoDialog.css'

type HeroVideoDialogProps = {
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
  animationStyle?: 'from-center' | 'fade' | 'from-bottom' | 'from-top'
  className?: string
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = 'Video thumbnail',
  animationStyle = 'from-center',
  className = '',
}: HeroVideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onClose = () => setOpen(false)
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  function openDialog() {
    const dialog = dialogRef.current
    if (!dialog) return
    setOpen(true)
    if (typeof dialog.showModal === 'function') dialog.showModal()
  }

  function closeDialog() {
    dialogRef.current?.close()
  }

  return (
    <>
      <button
        type="button"
        className={`hero-video-trigger ${className}`}
        onClick={openDialog}
        aria-label="Play RV University placement office video"
      >
        <img src={thumbnailSrc} alt={thumbnailAlt} loading="lazy" decoding="async" />
        <span className="hero-video-overlay" aria-hidden="true" />
        <span className="hero-video-play" aria-hidden="true">▶</span>
        <span className="hero-video-caption">Placement office walkthrough</span>
      </button>

      <dialog
        ref={dialogRef}
        className={`hero-video-dialog hero-video-dialog--${animationStyle}${open ? ' is-open' : ''}`}
        aria-label="RV University placement office walkthrough"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog()
        }}
      >
        <div className="hero-video-modal">
          <button type="button" className="hero-video-close" onClick={closeDialog} aria-label="Close video">×</button>
          <div className="hero-video-player">
            {open && (
              <iframe
                src={`${videoSrc}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="RV University Placement Office Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  )
}

export default HeroVideoDialog
