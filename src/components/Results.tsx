import {Question} from "@/types/Question";



type Props = {
    questions: Question[];
    answers: number[]|string[];
}


export const ResultsModal = ({questions, answers}: Props) => {

    return(
        <>
        <div >
            {questions.map((item, key) => (
            <div key={key} className="mb-8">
                <div className="font-bold">{key +1}. {item.question}</div>
                <div>{item.options[item.answer]}</div>
            </div>

            ))}
                    
        </div>
        <div>
            <h1 className="font-bold text-2xl text-red-500 mb-5">Respostas selecionadas </h1>
            {answers.map((item, key) =>(
                <div key={key} className="mb-8">
                    <div className="font-bold"> {item}</div>
                </div>


            ))}
        </div>
      </>
    )
}