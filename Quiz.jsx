import React, { useContext, useState } from "react";
import { QuizContext } from "../main/Quiz2";

export default function Quiz(){
    const [current,setcurrent] = useState(0);
    return(
        <div style={{textAlign: "center", display: "flex", justifyContent: "center" , height: "100vh",placeItems: "center", }}>
                   <Box current={current} handler={setcurrent}/>
        </div>
    )
}
const Box = ({current,handler}) => {
    const {quizzes,correct,setCorrect,setExit} = useContext(QuizContext);
const [ans, setAns] =useState("");
    const saveHandler = () => {
if(quizzes[current].correct === ans){
    setCorrect(correct + 1);
}
setAns("");
if((current+1) === quizzes.length){
    setExit(true)
}
else{
    handler(current+1);
}
handler(current+1); 
    }
       return(
        <div className="w-[50%]   border-30px shadow-lg rounded-md overflow-hidden">
<div className="p-2 text-3x1"> {current+1} {quizzes[current].Question}</div>
<div className="grid grid-cols-2 mt-3">
  <div className={`p-3 border ${ans==="a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=> setAns("a")} >{quizzes[current].a}</div>
  <div className={`p-3 border ${ans==="b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=> setAns("b")}>{quizzes[current].b}</div>
  <div className={`p-3 border ${ans==="c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=> setAns("c")}>{quizzes[current].c}</div>
  <div className={`p-3 border ${ans==="d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=> setAns("d")}>{quizzes[current].d}</div>
</div>
<div className="flex justify-between">
<div style={{backgroundColor: "green",padding: "3px", cursor:"pointer", }} onClick={(saveHandler)}> save & next</div>

<div style={{backgroundColor: "red",padding: "3px", cursor:"pointer"}}onClick={(setExit)}> Exit</div>
</div>
        </div>
    )
}