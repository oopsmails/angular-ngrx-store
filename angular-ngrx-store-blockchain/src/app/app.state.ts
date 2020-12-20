import { Blockchain } from './models/blockchain.model';

export interface AppState {
    readonly blockchain: Blockchain[];
}