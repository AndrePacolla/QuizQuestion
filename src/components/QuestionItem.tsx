import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;  //trad. ao responder 

} 
 
 export const  QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null ){ //precisa começar null pq array comeca em zero, ja set como key para digamos trocar o tipo logo no inico.
            onAnswer(key) 
            console.log(key)
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
                    className = {`border border-gray-500 rounded-lg px-3 py-2 text-lg mb-4 cursor-pointer  bg-blue-200
                        ${selectedAnswer !== null ? "cursor-auto" : "hover:opacity-60"}
                        `}
                    >{item} </div>

                ))}
            </div>
        </div>
    );
}