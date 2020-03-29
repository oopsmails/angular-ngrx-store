import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Blockchain } from '../models/blockchain.model';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {


  private BLOCK_CHAIN_URL = "http://localhost:13001/blockchains"

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Array<Blockchain>>(this.BLOCK_CHAIN_URL)
      .pipe(
        delay(500)
      )
  }

  addItem(item: Blockchain) {
    return this.http.post(this.BLOCK_CHAIN_URL, item)
      .pipe(
        delay(500)
      )
  }

  deleteItem(name: string) {
    return this.http.delete(`${this.BLOCK_CHAIN_URL}/${name}`)
      .pipe(
        delay(500)
      )
  }
}
