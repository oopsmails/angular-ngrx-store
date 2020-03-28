import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Blockchain } from '../models/blockchain.model';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  angForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name, price) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain>{
        name: name,
        price: price
      }
    });
  }

  ngOnInit(): void {
  }

}
