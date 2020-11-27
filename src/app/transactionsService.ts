import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TransactionsService {
    constructor(private http: Http) {}

    getTransactions ():any {
        return this.http.get('data/transactions.json').map(res => res.json())
    }
}