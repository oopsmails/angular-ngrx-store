import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BlockchainService } from '../services/blockchain.service';
import { BlockChainActionTypes, LoadItemsAction, LoadItemsFailureAction, LoadItemsSuccessAction } from './blockchain.action';



@Injectable()
export class BlockChainEffects {

    @Effect() loadShopping$ = this.actions$
        .pipe(
            ofType<LoadItemsAction>(BlockChainActionTypes.LOAD_ITEMS),
            mergeMap(
                () => this.blockchainService.getItems()
                    .pipe(
                        map(data => {
                            console.log("loaded ..., data = " + data);
                            return new LoadItemsSuccessAction(data)
                        }),
                        catchError(error => of(new LoadItemsFailureAction(error)))
                    )
            ),
        )

    // @Effect() addShoppingItem$ = this.actions$
    //     .pipe(
    //         ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    //         mergeMap(
    //             (data) => this.blockchainService.addShoppingItem(data.payload)
    //                 .pipe(
    //                     map(() => new AddItemSuccessAction(data.payload)),
    //                     catchError(error => of(new AddItemFailureAction(error)))
    //                 )
    //         )
    //     )

    // @Effect() deleteShoppingItem$ = this.actions$
    //     .pipe(
    //         ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
    //         mergeMap(
    //             (data) => this.blockchainService.deleteShoppingItem(data.payload)
    //                 .pipe(
    //                     map(() => new DeleteItemSuccessAction(data.payload)),
    //                     catchError(error => of(new AddItemFailureAction(error)))
    //                 )
    //         )
    //     )

    constructor(
        private actions$: Actions,
        private blockchainService: BlockchainService
    ) { }
}