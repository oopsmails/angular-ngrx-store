import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Blockchain } from '../models/blockchain.model';
import { AppState } from '../store/app-state.model';
import { LoadItemsAction } from '../store/blockchain.action';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.coins = this.store.select(state => state.blockchain.list);
    this.loading$ = this.store.select(store => store.blockchain.loading);
    this.error$ = this.store.select(store => store.blockchain.error);

    this.store.dispatch(new LoadItemsAction());
  }

}
