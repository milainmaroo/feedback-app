import { FaTimes, FaEdit } from 'react-icons/fa'; 
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({i}) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display">{i.rating}</div>
        <button onClick={() => deleteFeedback(i.id)} className="close">
            <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(i)} className="edit">
            <FaEdit color='purple' />
        </button>
        <div className="text-display">{i.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    i: PropTypes.object.isRequired,

}

export default FeedbackItem