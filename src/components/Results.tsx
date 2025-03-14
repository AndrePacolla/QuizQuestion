import {Question} from "@/types/Question";



type Props = {
    questions: Question[];
    answers: number[];
}


export const ResultsModal = ({questions, answers}: Props) => {

    return(
        <>
        <div >
            {questions.map((item, key) => (
            <div key={key} className="mb-8">
                <div className="font-bold mb-3">{key +1}. {item.question}</div>
                <span>({item.answer === answers[key] ? "Acertou" : "Errou"})- Respota correta: </span>
                <div className="mt-4">{item.options[item.answer]}</div>
                
            </div>
            ))}
                    
        </div>
        <div>
            <h1 className="font-bold text-2xl text-red-500 mb-5">Respostas selecionadas </h1>
            {answers.map((item, key) =>(
                <div key={key} className="mb-8">
                    <div className="font-bold">{questions[key].options[item]}</div>
                </div>
            ))}
        </div>
      </>
    )
}