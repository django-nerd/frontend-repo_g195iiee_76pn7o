import { useState, useMemo } from 'react'

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fallback,
  width,
  height,
  ...rest
}) {
  const [errored, setErrored] = useState(false)

  const fallbackSrc = useMemo(() => {
    if (fallback) return fallback
    // Default high-contrast placeholder with readable text
    const w = typeof width === 'number' ? width : 800
    const h = typeof height === 'number' ? height : 600
    const text = encodeURIComponent(alt || 'Image')
    return `https://placehold.co/${w}x${h}/eee/111?text=${text}`
  }, [fallback, width, height, alt])

  const currentSrc = errored ? fallbackSrc : src

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}
