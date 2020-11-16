import React, { useState, useEffect } from 'react';
import { AnswerObject } from '../question/index';
import './index.css';

type QuestionCardProps = {
    question: string;
    answers: Array<string>; // === string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    const [correctA, setCorrectA] = useState<boolean>(false);

    useEffect(() => {
        if (userAnswer) {
            if (userAnswer?.answer) {
                setCorrectA(true);
            } else {
                setCorrectA(false)
            }
        }
    }, [userAnswer]);

    return (
        <div className="question-card">
            <p>Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map((answer: string) => (
                    <div key={answer}>
                        {/* or <button disabled={!!userAnswer} to convert a boolean value*/}
                        {/*  className="btn-answers" style={{display: userAnswer?.correct ? 'correct' : 'wrong'}}> */}
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback} className={"btn-answers " + (correctA ? 'correct' : 'wrong')}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;