import {
    GET_HERO,
    GET_HEROES,
    SET_HEROES,
    SET_HERO
} from '../constant/heroes';
import {Action} from './action.i';
import Hero from "../model/Hero";
import {HEROES} from "../reducer/helper/mock-heroes";


// thunk action
type GET_HERO_TYPE = {id: number};
export const getHero = (id: number): Action<GET_HERO_TYPE> => {
    return {
        type: GET_HERO,
        text: `get hero by id:${id}`,
        payload: {
            id
        }
    }
};

type SET_HERO_TYPE = {hero: Hero};
export const setHero = (hero: Hero): Action<SET_HERO_TYPE> => {
    return {
        type: SET_HERO,
        text: `set hero by name:${hero.name}`,
        payload: {
            hero
        }
    };
};

// thunk action
type GET_HEROES_TYPE = {
    heroes: Hero[]
}
export const getHeroes = (): any => {
    return (dispatch: any): any => {
        // dispatch(());
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(setHeroes(HEROES));
        }, 5000);
    };
};

type SET_HEROES_TYPE = {heroes: Hero[]};
export const setHeroes = (heroes: Hero[]): any => {
    return {
        type: SET_HEROES,
        text: 'get all heroes',
        payload: {heroes}
    }
};
/*
 export const MY_ACTION = "MY_ACTION";
 export type MY_ACTION_TYPE = { foo: number, message: string }

 export function doMyAction(message: string): Action<MY_ACTION_TYPE> {
 return {
 type: MY_ACTION,
 payload: {
 foo: 123,
 message
 }
 }
 }
 */