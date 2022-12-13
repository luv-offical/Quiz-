import React from "react"
import { useState } from "react";
import { createContext } from "react"

const QuizContext = createContext();
const quizzes =[
  {
  "Question" : "Which of the following is used in React.js to increase performance?",
"a" :"Virtual Dom",
"b" :"Orignal Dom",
"c" :"Both A & B",
"d" : "none of this above",
"correct": "a",


},
{
"Question": "Does React.js create a VIRTUAL DOM in the memory?",
  "a": "True",
  "b":"False",
  "c": "Cannot say",
  "d": "None of above",
  "correct": "a",
},
{
  "Question": " Which of the following is used to pass data to a component from outside in React.js?",
  "a": "Render with arguments",
  "b":"PropTypes",
  "c":"SetState",
  "d":"Props",
  "correct": "d",
},
{
  "Question": "What are the two ways to handle data in React?",
  "a": "Services & Components",
  "b":"State & Component",
  "c":"State & Props",
  "d":"State & Services",
  "correct": "c",
},
{
  "Question": "Which of the following is the correct name of React.js?",
  "a": "React.js",
  "b":"React",
  "c":"Reactjs",
  "d":"All of the above",
  "correct": "",
},
{
  "Question": ". What does ES6 stand for?",
  "a": "ECMAJavaScript 6",
  "b":"ECMA 6",
  "c":"ECMAScript 6",
  "d":"EJavaScript 6",
  "correct": "c",
},
{
  "Question": " What is the use of “web pack” command in React.js?",
  "a": "It is a module bundler",
  "b":"The “webpack” command is used to transpile all the JavaScript down into one file",
  "c":"It runs React local development server",
  "d":"None of the above",
  "correct": "a",
},
{
  "Question": "In which of the following directory React.js components are saved?",
  "a": "Inside the vendor/components/",
  "b":"Inside the vendor/",
  "c":"Inside the js/components/",
  "d":"Inside the external/components/",
  "correct": "c",
},
{
  "Question": " Which of the following function is used to change the state of the React.js component?",
  "a": "this.setChangeState",
  "b":"this.State{}",
  "c":"this.setState",
  "d":"None of the above",
  "correct": "c",
},
{
  "Question": " In which of the following condition, the React.js Lifecycle method static get Derived Stae From Props(props, state) is called?",
  "a": "The state of the component is updated",
  "b":"The component is created for the first time",
  "c":"All of above",
  "d":"None",
  "correct": "c",
},
]
export default function Quiz2(props){
  const [start, setStart]=useState(false);
  const[exit, setExist]=useState(false);
  const [correct,setCorrect] = useState(0);
    return(
       <QuizContext.Provider value={{
        start, exit, setStart, setExist, quizzes,correct,setCorrect}}>
         {props.children}
       </QuizContext.Provider>
       
    )
}
export{QuizContext};