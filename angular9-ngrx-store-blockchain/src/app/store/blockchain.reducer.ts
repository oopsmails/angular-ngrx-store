import { Blockchain } from '../models/blockchain.model';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: Blockchain[] = [], action) {
    switch (action.type) {
        case ADD_COIN:
            return [...state, action.payload];
        default:
            return state;
    }
}