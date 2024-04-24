import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationSectionProps {
  children: ReactNode
  className?: string
}

export function AnimationDiv({ children, className }: AnimationSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  )
}
