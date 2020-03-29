import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Blockchain } from '../models/blockchain.model';
import { AppState } from '../store/app-state.model';


@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  title: string;

  angForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.title = 'Angular 9 Ngrx Stroe Blockchain';
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name, price) {
    console.log('adding coin .....');
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain>{
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}
