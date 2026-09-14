import { useInView, useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  from?: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  startWhen?: boolean
  separator?: string
  onStart?: () => void
  onEnd?: () => void
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 0.42,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const motionValue = useMotionValue(direction === 'down' ? to : from)
  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 * (1 / duration)
  const springValue = useSpring(motionValue, { damping, stiffness })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const getDecimalPlaces = (num: number) => {
    const str = num.toString()
    if (!str.includes('.')) return 0
    const decimals = str.split('.')[1]
    return parseInt(decimals, 10) !== 0 ? decimals.length : 0
  }

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to))

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  const formatValue = useCallback((latest: number) => {
    const hasDecimals = maxDecimals > 0
    const options: Intl.NumberFormatOptions = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    }
    const formatted = Intl.NumberFormat('en-US', options).format(latest)
    return separator ? formatted.replace(/,/g, separator) : formatted
  }, [maxDecimals, separator])

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from)
    }
  }, [from, to, direction, formatValue])

  useEffect(() => {
    if (!isInView || !startWhen) return

    const target = direction === 'down' ? from : to
    onStart?.()

    if (reduceMotion) {
      motionValue.jump(target)
      onEnd?.()
      return
    }

    const timeoutId = window.setTimeout(() => {
      motionValue.set(target)
    }, delay * 1000)
    const endTimeoutId = window.setTimeout(() => {
      onEnd?.()
    }, delay * 1000 + duration * 1000)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearTimeout(endTimeoutId)
    }
  }, [delay, direction, duration, from, isInView, motionValue, onEnd, onStart, reduceMotion, startWhen, to])

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) ref.current.textContent = formatValue(latest)
    })
    return () => unsubscribe()
  }, [springValue, formatValue])

  return <span className={className} ref={ref} />
}
