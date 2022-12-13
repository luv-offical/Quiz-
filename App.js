/* eslint-disable no-unused-vars */
import Result from "./components/Result";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import { QuizContext } from "./main/Quiz2";
import SocialFollow from "./SocialFollow";
import { useContext } from "react";
function App() {
  const{start,exit} = useContext(QuizContext);

  return (
    
< div>
<SocialFollow/>
{
  exit === false
  ?
  
  <>

  {
  start === true
  ?
<Quiz/>
:
<Start/> 
}

</>
: <Result/>


  }
 


</div>

  );
}

export default App;
