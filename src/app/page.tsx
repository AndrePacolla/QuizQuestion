"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "../data/questions";
import { useState } from "react";

  const Page = () => {

  const [currentQuestion, SetCurrentQuestion] = useState(0); 
  const title = "Quiz de Culinária";

  const handleAnswer = (answer: number) => {

  }
    
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">

      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black border-red-400  border-t-4">
        <div className="p-5 font-bold  text-2xl border-b border-gray-400">{title}</div>
        <div className="p-5">
          <QuestionItem 
          question = {questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnswer}
          />
         
        </div>
        <div className="p-5 text-center border-t border-gray-400 ">
          {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? "" : "s" }
        </div>
      </div>

    </div>
  );
}


export default Page;