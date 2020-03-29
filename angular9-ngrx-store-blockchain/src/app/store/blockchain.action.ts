
import { Action } from '@ngrx/store';
import { Blockchain } from '../models/blockchain.model';


export enum BlockChainActionTypes {
    LOAD_ITEMS = '[BLOCK_CHAIN] Load BlockChain',
    LOAD_ITEMS_SUCCESS = '[BLOCK_CHAIN] Load BlockChain Success',
    LOAD_ITEMS_FAILURE = '[BLOCK_CHAIN] Load BlockChain Failure',
    ADD_ITEM = '[BLOCK_CHAIN] Add Item',
    ADD_ITEM_SUCCESS = '[BLOCK_CHAIN] Add Item Success',
    ADD_ITEM_FAILURE = '[BLOCK_CHAIN] Add Item Failure',
    DELETE_ITEM = '[BLOCK_CHAIN] Delete Item',
    DELETE_ITEM_SUCCESS = '[BLOCK_CHAIN] Delete Item Success',
    DELETE_ITEM_FAILURE = '[BLOCK_CHAIN] Delete Item Failure'
}

export class LoadItemsAction implements Action {
    readonly type = BlockChainActionTypes.LOAD_ITEMS
}
export class LoadItemsSuccessAction implements Action {
    readonly type = BlockChainActionTypes.LOAD_ITEMS_SUCCESS

    constructor(public payload: Array<Blockchain>) { }

}
export class LoadItemsFailureAction implements Action {
    readonly type = BlockChainActionTypes.LOAD_ITEMS_FAILURE

    constructor(public payload: string) { }
}

export class AddItemAction implements Action {
    readonly type = BlockChainActionTypes.ADD_ITEM

    constructor(public payload: Blockchain) { }
}
export class AddItemSuccessAction implements Action {
    readonly type = BlockChainActionTypes.ADD_ITEM_SUCCESS

    constructor(public payload: Blockchain) { }
}
export class AddItemFailureAction implements Action {
    readonly type = BlockChainActionTypes.ADD_ITEM_FAILURE

    constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
    readonly type = BlockChainActionTypes.DELETE_ITEM

    constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
    readonly type = BlockChainActionTypes.DELETE_ITEM_SUCCESS

    constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
    readonly type = BlockChainActionTypes.DELETE_ITEM_FAILURE

    constructor(public payload: string) { }
}

export type BlockChainAction = AddItemAction |
    AddItemSuccessAction |
    AddItemFailureAction |
    DeleteItemAction |
    DeleteItemSuccessAction |
    DeleteItemFailureAction |
    LoadItemsAction |
    LoadItemsFailureAction |
    LoadItemsSuccessAction
