import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);

    /** 
     * Our shoppingItems observable matches the shopping reducer that we defined in our StoreModule.forRoot() earlier. 
     * We also created the AppState interface to match this and give us strong typing.
     * 
     * As a note, we could have also selected our shopping slice by string, providing it matched the reducer definition:
    */
    // this.shoppingItems = this.store.select('shopping');
  }
}
