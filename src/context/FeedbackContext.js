import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This item feedback item 3',
      rating: 7,
    },
  ]);

  const addFeedback = (newFeedback) => {
    // generate id
    newFeedback.id = +uuidv4();
    //console.log(typeof newFeedback.id);
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;