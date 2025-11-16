import { motion } from 'framer-motion'

function Reveal({
  as: Tag = 'div',
  children,
  delay = 0,
  x = 0,
  y = 16,
  opacity = 0,
  duration = 0.5,
  once = true,
  className = '',
  ...rest
}) {
  const initial = { opacity, x, y }
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

function StaggerContainer({
  children,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  className = '',
  ...rest
}) {
  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10% 0px' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({
  children,
  x = 0,
  y = 14,
  direction, // 'left' | 'right' | 'up' | 'down'
  distance = 24,
  opacity = 0,
  duration = 0.45,
  className = '',
  ...rest
}) {
  let xOffset = x
  let yOffset = y
  if (direction === 'left') xOffset = -Math.abs(distance)
  if (direction === 'right') xOffset = Math.abs(distance)
  if (direction === 'up') yOffset = -Math.abs(distance)
  if (direction === 'down') yOffset = Math.abs(distance)

  const variants = {
    hidden: { opacity, x: xOffset, y: yOffset },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, ease: 'easeOut' } },
  }
  return (
    <motion.div variants={variants} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

export default Reveal
export { Reveal, StaggerContainer, StaggerItem }
