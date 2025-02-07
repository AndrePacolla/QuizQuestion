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
        alert("ola mundo!")
    

    }

    return(
        <div>
            <div className="font-bold text-lg mt-3 mb-5"> {count}. {question.question}</div> 
            <div>
                {question.options.map((item, key) => (
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className=" border border-gray-500 rounded-lg px-3 py-2 text-lg mb-4 cursor-pointer hover:opacity-60 bg-blue-200"
                    >{item} </div>

                ))}
            </div>
        </div>
    );
}