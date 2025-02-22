import { Question } from "@/types/Question";

type Props = {
    questions: Question[];// tenho minha lista
    answers: number[];// tenho meu historico 
}


export const Results = ({questions, answers}: Props) => {
    return(
        <div>
            {questions.map((item, key) => (

                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span>( {item.answer === answers[key] ? "Acertou" : "Errou !!"} ) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>

            ))}
        </div>
    )

};
