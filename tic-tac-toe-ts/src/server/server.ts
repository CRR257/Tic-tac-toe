import { shuffleArray} from '../utils/utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: Array<string>};

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'  
}

export type Breweries = {
//    id: number;
//    name: string;
//    state: string;
//    websiteUrl: string; 
address_2?: string;
address_3: string;
brewery_type: string;
city: string;
country: string;
county_province: string;
created_at:string;
id: number;
latitude: string;
longitude: string;
name: string;
phone: string;
postal_code: string;
state: string;
street: string;
updated_at: string;
website_url: string;
}

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
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


// https://opentdb.com/api_config.php
// https://www.youtube.com/watch?v=oQZJxyMoLws