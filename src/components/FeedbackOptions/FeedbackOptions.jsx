import PropTypes from 'prop-types';
import './FeedbackOptions.module.css'


const FeedbackOptions = ({onLeaveFeedback}) => {
   return (
        <>
        <button type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
        </>
   ) 
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}

export {FeedbackOptions}


