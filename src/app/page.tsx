"use client"
import { QuestionItem } from "@/components/QuestionItem";
import {ResultsModal} from "@/components/Results";
import { questions } from "../data/questions";
import { useState } from "react";

  const Page = () => {
  const [currentQuestion, SetCurrentQuestion] = useState(0); 
  const [answers, setAnswers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);


  const title = "Quiz de Culinária";

  const loadProxQuestion = () => {
    if(questions[currentQuestion + 1 ]  ){
      SetCurrentQuestion(currentQuestion + 1 )
    }else{
      setShowModal(true);
    }
  };

  const handleAnswered = ( answer: number) =>{
    setAnswers([...answers, answer ]);
    loadProxQuestion();
  };

    
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
          <div className="w-full max-w-2xl bg-gray-100/75  border border-black rounded-lg">
            <h1 className=" text-black text-4xl font-bold border-gray-400  border-b-2 p-5">{title}</h1>
            <div className="border-gray-400  border-b-2 p-3">

              {!showModal &&
              
              <QuestionItem
                question={questions[currentQuestion]}
                count={currentQuestion +1}
                onAnswer={handleAnswered}
              />
              }

            {showModal &&
              <ResultsModal
                questions={questions}
                answers={answers}              
              />
            }
            </div>

            {!showModal &&
            <div className="text-center font-bold p-5">
              {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1  ? "" : "s"}
            </div>
            }


            
              

          </div>
    </div>
  );
}

export default Page;  