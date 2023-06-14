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

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     return ((good / (good + neutral + bad)) * 100).toFixed(0);
//   }

//   onLeaveFeedback = ({ target }) => {
//     this.setState(prevState => {
//       return { [target.name]: prevState[target.name] + 1 };
//     });
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback" />
//         <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
//         <Section title="Statistic" />
//         {totalFeedback > 0 ? <Statistics 
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         ></Statistics> : <Notification message="There is no feedback"/>}

        
//       </>
//     );
//   }
// }
