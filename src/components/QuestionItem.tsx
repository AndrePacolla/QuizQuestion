import { useState } from "react";
import {Question} from "../types/Question";


type Props = {
    question: Question;
    count: number;
    onAnswer: ( key: number) => void;
};




export const QuestionItem = ({ question, count, onAnswer }: Props) => {


    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
   
        if(selectedAnswer === null){
            setSelectedAnswer(key)

            setTimeout(() => {


                onAnswer(key)
                setSelectedAnswer(null);
            }, 2000)

        }
    }

    return(
        <div className="p-7"> 
            <div className="mb-7 text-2xl font-bold">{count}. {question.question}</div>
            <div>{question.options.map((item, key) => (
                <div
                 key={key}
                 onClick={() => checkQuestion(key)}
                 className={`p-5 bg-blue-300 font-bold border border-blue-500 rounded-md mb-7
                    ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:opacity-60"}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && "bg-green-600 " }
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && "bg-red-600 " }
                    
                    
                `} 
                 >{item}</div>


            ))}</div>
        </div>
    )

}