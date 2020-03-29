import { Blockchain } from '../models/blockchain.model';
import { BlockChainAction, BlockChainActionTypes } from './blockchain.action';

export interface BlockChainState {
    list: Blockchain[],
    loading: boolean,
    error: Error
}

const initialState: BlockChainState = {
    list: [],
    loading: false,
    error: undefined
};

export function blockChainReducer(state: BlockChainState = initialState, action: BlockChainAction) {
    switch (action.type) {

        case BlockChainActionTypes.LOAD_ITEMS:
            return {
                ...state,
                loading: true
            }
        case BlockChainActionTypes.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }

        case BlockChainActionTypes.LOAD_ITEMS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }


        case BlockChainActionTypes.ADD_ITEM:
            return {
                ...state,
                loading: true
            }
        case BlockChainActionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case BlockChainActionTypes.ADD_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}