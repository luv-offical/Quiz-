import React from "react"
import { useContext } from "react"
import { QuizContext } from "../main/Quiz2"

export default function Result(){
    const {correct,setExit,setStart,quizzes} = useContext(QuizContext)
    const playAgain  = () =>{
        setExit(false);
        setStart(false);
    }
    return(
        <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%]   border-30px shadow-lg rounded-md overflow-hidden text-center">
            <h1 className="text-4xl p-3">{correct} are correct out of {quizzes.length}</h1>
            <button style={{backgroundColor: "orange",padding: "3px", cursor:"pointer", }} onClick={(playAgain)}>Play Again </button>
        </div>
</div>

    )
}