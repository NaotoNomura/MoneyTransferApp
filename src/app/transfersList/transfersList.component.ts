import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'transfers-list',
  templateUrl: './transfersList.component.html',
  styleUrls: ['./transfersList.component.css']
})
export class TransfersListComponent implements OnInit {

  @Input() transactions: Array<any>
  searchText: string
  dateSortAscendingIndicator: boolean
  amountSortAscendingIndicator: boolean
  beneficiarySortAscendingIndicator: boolean
  @Input('language') language: string
  constructor () {}

  ngOnInit(): void {
    this.dateSortAscendingIndicator = true
    this.amountSortAscendingIndicator = true
    this.beneficiarySortAscendingIndicator = true
    this.searchText = ''
  }

  onDateSort (): void {
    this.dateSortAscendingIndicator = !this.dateSortAscendingIndicator
    this.sortByDate()
  }

  clearFilter (): void {
    this.searchText = ''
  }

  sortByDate (): any {
    if(this.dateSortAscendingIndicator) {
      return this.transactions.sort((a, b) => {
        return <any>new Date(b.dates.valueDate) - <any>new Date(a.dates.valueDate)
      })
    }
    else {
      return this.transactions.sort((a, b) => {
        return <any>new Date(a.dates.valueDate) - <any>new Date(b.dates.valueDate)
      })
    }
  }

  onAmountSort (): void {
    this.amountSortAscendingIndicator = !this.amountSortAscendingIndicator
    this.sortByAmouont()
  }

  sortByAmouont ():any {
    if(this.amountSortAscendingIndicator) {
      return this.transactions.sort((a, b) => {
        return b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount
      })
    }
    else {
      return this.transactions.sort((a, b) => {
        return a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount
      })
    }
  }

  onBeneficiarySort ():void {
    this.beneficiarySortAscendingIndicator = !this.beneficiarySortAscendingIndicator
    this.sortByBeneficiary()
  }

  sortByBeneficiary ():any {
    if(this.beneficiarySortAscendingIndicator) {
      return this.transactions.sort((a,b) => {
        return b.merchant.name.localeCompare(a.merchant.name)
      })
    }
    else {
      return this.transactions.sort((a,b) => {
        return a.merchant.name.localeCompare(b.merchant.name)
      })
    }
  }
}
