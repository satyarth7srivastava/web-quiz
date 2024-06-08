import React, { useRef } from "react";
import "./quiz.css";
import { data } from "../../assets/data";
const quiz = () => {
  let [index, setIndex] = React.useState(0);
  let [score, setScore] = React.useState(0);
  let [questions, setQuestions] = React.useState(data[index]);
  let [lock, setLock] = React.useState(false);
  let op1 = useRef(null);
  let op2 = useRef(null);
  let op3 = useRef(null);
  let op4 = useRef(null);
  let op_arr = [op1, op2, op3, op4];
  let [result, setResult] = React.useState(false);
  const checkAnswer = (e, ans) => {
    if (lock == false) {
      if (questions.ans === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        op_arr[questions.ans - 1].current.classList.add("correct");
      }
    }
    e.target.classList.remove("checked");
  }




  return (
    <div className="container">
      <h1>Web Quiz By Satyarth</h1>
      {result ? <div className="result-box">
        <div className="result-inner-box">Your Score is {score}. Thank you for giving this quiz </div>

      </div> : <div>
        <div className="bg-container">
          <div className="box-first">
            <div className="ques-box">{index + 1} of {data.length}. {questions.question}</div>
            <div className="option-box">
              <div className="op-box-l">
                <div ref={op1} className="op-box-l-op op checked" onClick={(e) => { checkAnswer(e, 1) }}>{questions.option1}</div>
                <div ref={op2} className="op-box-l-op op checked" onClick={(e) => { checkAnswer(e, 2) }}>{questions.option2}</div>
              </div>
              <div className="op-box-r">
                <div ref={op3} className="op-box-r-op op checked" onClick={(e) => { checkAnswer(e, 3) }}>{questions.option3}</div>
                <div ref={op4} className="op-box-r-op op checked" onClick={(e) => { checkAnswer(e, 4) }}>{questions.option4}</div>
              </div>
            </div>
            <div className="btn-box">
              <button className="btn" onClick={() => {
                if (lock) {
                  if (index < 4) {
                    setIndex(index + 1);
                    setQuestions(data[index + 1]);
                    setLock(false);
                    document.querySelectorAll(".op").forEach((e) => {
                      e.classList.remove("correct");
                      e.classList.remove("wrong");
                    });
                  } else {
                    setResult(true);
                  }
                } else {
                  alert("Please Select an Option");
                }
              }}>Next</button>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
};

export default quiz;