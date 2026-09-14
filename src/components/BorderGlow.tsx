import { useCallback, useEffect, useRef, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import './BorderGlow.css'

type BorderGlowProps = {
  children: ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
}

const gradientPositions = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%']
const gradientKeys = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven']
const colorMap = [0, 1, 2, 0, 1, 2, 1]

function parseHSL(value: string) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)
  if (!match) return { h: 40, s: 61, l: 60 }
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) }
}

function glowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor)
  const base = `${h}deg ${s}% ${l}%`
  const opacities = [100, 60, 50, 40, 30, 20, 10]
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10']
  const vars: Record<string, string> = {}
  opacities.forEach((opacity, index) => {
    vars[`--glow-color${keys[index]}`] = `hsl(${base} / ${Math.min(opacity * intensity, 100)}%)`
  })
  return vars
}

function gradientVars(colors: string[]) {
  const vars: Record<string, string> = {}
  gradientKeys.forEach((key, index) => {
    const color = colors[Math.min(colorMap[index], colors.length - 1)]
    const position = gradientPositions[index]
    vars[key] = `radial-gradient(at ${position}, ${color} 0px, transparent 50%)`
  })
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`
  return vars
}

function isLight(color: string) {
  const value = color.trim().replace('#', '')
  if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(value)) return false
  const hex = value.length === 3 ? value.split('').map(char => char + char).join('') : value
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return r * 0.2126 + g * 0.7152 + b * 0.0722 > 180
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3) }
function easeInCubic(x: number) { return x * x * x }

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: {
  start?: number
  end?: number
  duration?: number
  delay?: number
  ease?: (value: number) => number
  onUpdate: (value: number) => void
  onEnd?: () => void
}) {
  const t0 = performance.now() + delay
  function tick() {
    const elapsed = performance.now() - t0
    const t = Math.min(elapsed / duration, 1)
    onUpdate(start + (end - start) * ease(t))
    if (t < 1) requestAnimationFrame(tick)
    else onEnd?.()
  }
  window.setTimeout(() => requestAnimationFrame(tick), delay)
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 61 60',
  backgroundColor = '#233039',
  borderRadius = 0,
  glowRadius = 32,
  glowIntensity = 0.8,
  coneSpread = 25,
  animated = true,
  colors = ['#D7AC54', '#233039', '#D7AC54'],
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const center = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect()
    return [width / 2, height / 2]
  }, [])

  const edgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = center(el)
    const dx = x - cx
    const dy = y - cy
    let kx = Infinity
    let ky = Infinity
    if (dx !== 0) kx = cx / Math.abs(dx)
    if (dy !== 0) ky = cy / Math.abs(dy)
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1)
  }, [center])

  const cursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = center(el)
    const dx = x - cx
    const dy = y - cy
    if (dx === 0 && dy === 0) return 0
    let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (degrees < 0) degrees += 360
    return degrees
  }, [center])

  useEffect(() => {
    const card = cardRef.current
    if (!card || !animated || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    card.classList.add('sweep-active')
    card.style.setProperty('--cursor-angle', '110deg')

    animateValue({ duration: 400, onUpdate: value => card.style.setProperty('--edge-proximity', `${value}`) })
    animateValue({ ease: easeInCubic, duration: 900, end: 50, onUpdate: value => {
      const angle = 110 + (465 - 110) * (value / 100)
      card.style.setProperty('--cursor-angle', `${angle}deg`)
    }})
    animateValue({ ease: easeOutCubic, delay: 900, duration: 1400, start: 50, end: 100, onUpdate: value => {
      const angle = 110 + (465 - 110) * (value / 100)
      card.style.setProperty('--cursor-angle', `${angle}deg`)
    }})
    animateValue({ ease: easeInCubic, delay: 1600, duration: 900, start: 100, end: 0, onUpdate: value => {
      card.style.setProperty('--edge-proximity', `${value}`)
    }, onEnd: () => card.classList.remove('sweep-active') })
  }, [animated])

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.setProperty('--edge-proximity', `${(edgeProximity(card, x, y) * 100).toFixed(3)}`)
    card.style.setProperty('--cursor-angle', `${cursorAngle(card, x, y).toFixed(3)}deg`)
  }, [cursorAngle, edgeProximity])

  const lightSurface = isLight(backgroundColor)
  const styles = {
    '--card-bg': backgroundColor,
    '--edge-sensitivity': edgeSensitivity,
    '--border-radius': `${borderRadius}px`,
    '--glow-padding': `${glowRadius}px`,
    '--cone-spread': coneSpread,
    ...glowVars(glowColor, glowIntensity),
    ...gradientVars(colors),
  } as CSSProperties

  return (
    <div
      ref={cardRef}
      className={`border-glow-card${lightSurface ? ' border-glow-card--light' : ''} ${className}`}
      style={styles}
      onPointerMove={handlePointerMove}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  )
}
