import {
    GET_HERO,
    GET_HEROES,
    SET_HEROES
} from '../constant/heroes';
import {HEROES} from "./helper/mock-heroes";
import Hero from "../model/Hero";
import {Action} from "../action/action.i";

interface heroesState {

}

const defaultState = (): Hero[] => {
    return [];
};

export const heroes = (state = defaultState(), action: any): any => {

    switch (action.type) {
        case GET_HEROES:
            break;
        case SET_HEROES:
            state = [...action.payload.heroes];
            break;
        case GET_HERO:
            break;
        default:
            break;
    }
    return state;
};