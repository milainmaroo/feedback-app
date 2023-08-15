import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>
    }

    // With Animation
    return (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
              key={item.id}
              initial={{opacity: 0}} // default
              animate={{opacity: 1}} // visible - fade in
              exit={{opacity: 0}} // fade out
            >
              <FeedbackItem key={item.id} i={item} />

            </motion.div>
          ))}
        </AnimatePresence>

      </div>
    )

    // Without Animation
  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((item) => (
  //           <FeedbackItem key={item.id} i={item} 
  //           handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )
}


export default FeedbackList
