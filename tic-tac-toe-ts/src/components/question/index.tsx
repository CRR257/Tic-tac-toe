import React, { useState } from 'react';
import QuestionCard from '../questionCard';
import { fetchQuizQuestions, Difficulty, QuestionState } from '../../server/server';
import './index.css';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const Question = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

        setQuestions(newQuestions);
        console.log(newQuestions)
        // error handling
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) {
                setScore(prev => prev + 1);
            }
            // save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer: answer, // answer
                correct: correct, // correct
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div>
            <p className="title"> Quizz</p>
            <div className="container quizz">
                {!gameOver && <p> Score: {score}</p>}
                    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? <button onClick={startTrivia}>Start Quizz</button> : null}
                    {loading && <p> Loading questions...</p>}
                    {!loading && !gameOver && (<QuestionCard
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />)}
                    {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
                        <button onClick={nextQuestion}> Next question</button>)}
            </div>  
        </div>
    )
}

export default Question;