"use client"
import { Results } from "@/components/Results";
import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "../data/questions";
import { useState } from "react";

  const Page = () => {

  const [answers, setAnswers] = useState<number[]>([]); // historico de respostas
  const [currentQuestion, SetCurrentQuestion] = useState(0); 
  const [showResult, setShowResult] = useState(false);

  const title = "Quiz de Culinária";


  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      SetCurrentQuestion(currentQuestion + 1);
    }else {
      setShowResult(true);
    }

  }
  const handleAnswer = (answer: number) => {  // lidando com a resposta , seta array clona e passa resposta do parametro
    setAnswers([... answers, answer]);
    loadNextQuestion();
  }

  const handleResetButton = () =>{
    setAnswers([]);
    SetCurrentQuestion(0);
    setShowResult(false);
  }
    
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">

      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black border-red-400  border-t-4">
        <div className="p-5 font-bold  text-2xl border-b border-gray-400">{title}</div>
        <div className="p-5">
          {!showResult &&

           <QuestionItem 
          question = {questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnswer}
          />   
          }

          {showResult &&

          <Results questions={questions} answers={answers}/>
          }
                                                                                                                                                      
        </div>
        <div className="p-5 text-center border-t border-gray-400 ">
          {!showResult &&
          `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? "" : "s" }`
           }      

           {showResult &&
            <button onClick={handleResetButton} className= "px-5 py-3 rounded-md bg-blue-800 text-white font-bold"> Reiniciar Quiz </button>
           
           } 
        </div>
      </div>

    </div>
  );
}

export default Page;