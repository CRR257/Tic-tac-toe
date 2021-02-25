import { Breweries } from '../shared/interfaces/brewery';
import { Difficulty, Question } from '../shared/interfaces/quizz';
import { shuffleArray} from '../shared/utils/utils';

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endpoint = `https://uopentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // 1rts we await for fetch data, 2nd await to convert json
    const data = await (await fetch(endpoint)).json();
    console.log(data)
    return data.results.map((question: Question) => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer
            ]),
        }))
};

export const getBreweryData = async() => {
    const endpoint = `https://api.openbrewerydb.org/breweries`;
    const data = await(await (fetch(endpoint))).json()
    console.log(data)
    return data.map((breweries: Breweries) => ({
        ...breweries,
    }));
}
