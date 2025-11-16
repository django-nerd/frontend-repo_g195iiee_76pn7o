import { motion } from 'framer-motion'

function Reveal({
  as: Tag = 'div',
  children,
  delay = 0,
  y = 16,
  opacity = 0,
  duration = 0.5,
  once = true,
  className = '',
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity, y }}
      whileInView={{ opacity: 1, y: 0 }}
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

function StaggerItem({ children, y = 14, opacity = 0, duration = 0.45, className = '', ...rest }) {
  const variants = {
    hidden: { opacity, y },
    show: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut' } },
  }
  return (
    <motion.div variants={variants} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

export default Reveal
export { Reveal, StaggerContainer, StaggerItem }
