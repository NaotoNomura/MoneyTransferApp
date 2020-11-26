import { Component } from '@angular/core';
import { TransactionsService } from './transactionsService'
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: string
  tasksList: Array<any>
  error: string
  constructor(private service: TransactionsService) {}

  ngOnInit ():void {
    this.service.getTransactions()
      .subscribe(
        data => this.tasksList = data,
        error => this.error = error.statusText
      )
    this.language = "en"
  }

  onAddTransaction(item):void {
    this.tasksList.push({
      categoryCode: '#12a580',
      iconSrcPath: '../assets/icons/backbase.png',
      dates: {
        valueDate: new Date()
      },
      transaction: {
        amountCurrency: {
          amount: item.amount,
          currencyCode: "EUR"
        },
        type: "Salaries",
        creditDebitIndicator: "CRDT"
      },
      merchant: {
        name: "Backbase",
        accountNumber: item.accountTo
      }
    })
    this.sortByDate()
  }

  sortByDate ():any {
    this.tasksList.sort((a, b) => {
      return <any>new Date(b.dates.valueDate) - <any>new Date(a.dates.valueDate)
    })
  }
}
