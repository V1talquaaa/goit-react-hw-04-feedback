import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

 const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return ((good / (good + neutral + bad)) * 100).toFixed(0);
  }

  const onLeaveFeedback = ({ target }) => {
    if(target.name === 'good') {
      setGood((prevState) => prevState + 1)
    } else if(target.name === 'neutral') {
      setNeutral((prevState) => prevState + 1)
    } else if(target.name === 'bad') {
      setBad((prevState) => prevState + 1)
    }
    
  };

  return (<>
        <Section title="Please leave feedback" />
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <Section title="Statistic" />
        {countTotalFeedback() > 0 ? <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics> : <Notification message="There is no feedback"/>}
        </>)
}

