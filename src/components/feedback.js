import React, {Component} from "react";
import Statistics from "./statistics";
import FeedbackOptions from './feedbackOptions'
import Notification from "./notification";
class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }



onBtnClick = option => {
    this.setState(prevState => {
        return {
          [option]: prevState[option] + 1,
        };
      });
}

TotalFeedback=()=>{

   return this.state.good + this.state.neutral + this.state.bad;
}

PositiveCounter = () => {
    return (this.state.good / this.TotalFeedback()) * 100
}

      render(){
        const options = Object.keys(this.state);
          return(
          <div>
              <FeedbackOptions options={options} onBtnClick={this.onBtnClick}/>
              {this.TotalFeedback() === 0 ? <Notification/> : (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.TotalFeedback()} positivePercentage={this.PositiveCounter()}/>)}
          </div>
            )

        }
}

export default Feedback

