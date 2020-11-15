import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/services/shopping.service';
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemSuccessAction, LoadShoppingAction, LoadShoppingFailureAction, LoadShoppingSuccessAction, ShoppingActionTypes } from '../actions/shopping.actions';



@Injectable()
export class ShoppingEffects {

    /**
     * SHOW/DIMISS Spinner
     *
     * @memberof AppEffects
     */
    // @Effect({ dispatch: false }) loading$ = this.actions$
    //     .ofType(Types.FETCH_TOKEN_DATA)
    //     .map(() => this.store.dispatch(this.toastAction.showSpinner()))
    //     .map(() => this.utilsService.sendToDevice(DeviceActions.HIDE_TITLE_BAR));


    // @Effect({ dispatch: false }) dismiss$ = this.actions$
    //     .ofType(
    //         Types.FETCH_TOKEN_ERROR,
    //         Types.GET_ALERTS_PROFILE_FULLFILLED,
    //         Types.GET_ALERTS_PROFILE_ERROR,
    //         Types.NO_ALERTS_PROFILE_ERROR
    //     )
    //     .map(() => this.store.dispatch(this.toastAction.dismissToast()));


    @Effect() loadShopping$ = this.actions$
        .pipe(
            ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
            mergeMap(
                () => this.shoppingService.getShoppingItems()
                    .pipe(
                        map(data => {
                            return new LoadShoppingSuccessAction(data)
                        }),
                        catchError(error => of(new LoadShoppingFailureAction(error)))
                    )
            ),
        )

    @Effect() addShoppingItem$ = this.actions$
        .pipe(
            ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.shoppingService.addShoppingItem(data.payload)
                    .pipe(
                        map(() => new AddItemSuccessAction(data.payload)),
                        catchError(error => of(new AddItemFailureAction(error)))
                    )
            )
        )

    @Effect() deleteShoppingItem$ = this.actions$
        .pipe(
            ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.shoppingService.deleteShoppingItem(data.payload)
                    .pipe(
                        map(() => new DeleteItemSuccessAction(data.payload)),
                        catchError(error => of(new AddItemFailureAction(error)))
                    )
            )
        )

    constructor(
        private actions$: Actions,
        private shoppingService: ShoppingService
    ) { }
}