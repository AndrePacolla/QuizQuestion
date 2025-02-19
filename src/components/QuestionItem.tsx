import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;  //trad. ao responder 

} 
 
 export const  QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number|null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null ){
            setSelectedAnswer(key)
            
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            },2000);
        }
    
    }



    return(
        <div>
            <div className="font-bold text-lg mt-3 mb-5"> {count}. {question.question}</div> 
            <div>
                {question.options.map((item, key) => (
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className = {`border border-gray-500 mb-2 bg-blue-300 px-3 py-2 rounded-lg 
                           ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:opacity-60"}
                           ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && "bg-green-500 border-green-500"
                           }
                           ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && "bg-red-700 border-red-950"}
                        `}
                    >{item}</div>

                ))}
            </div>
        </div>
    );
}