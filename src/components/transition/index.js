import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { timeout } from 'constants/transition'

const Transition = (props) => {
  const { children, location } = props

  const variants = {
    enter: { opacity: 1, delay: timeout, delayChildren: timeout },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      <motion.div variants={variants} key={location.pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Transition
