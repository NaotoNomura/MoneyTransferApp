import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'add-transfer',
  templateUrl: './addTransfer.component.html',
  styleUrls: ['./addTransfer.component.css']
})
export class AddTransferComponent implements OnInit {
  
  accountFrom: String
  accountTo: String
  amount: number
  showPreview: boolean
  showBalanceError: boolean
  accountFromRemainingAmount: number
  @Input('tasks') tasks: Array<any>
  @Input('language') language: string
  @Output() addTransaction = new EventEmitter()

  constructor () {}

  ngOnInit():void {
    this.accountFromRemainingAmount = 5824.76
    this.accountFrom = "Free Checking(4692) - €" + this.accountFromRemainingAmount
    this.showPreview = false
  }

  setShowBalanceError():void {
    if (this.accountFromRemainingAmount - this.amount < -500) {
      this.showBalanceError = true
    } else {
      this.showBalanceError = false
    }
  }

  clearForm():void {
    this.accountTo = ''
    this.amount = null
  }

  updateAccountFromField():void {
    this.accountFrom = "Free Checking(4692) - €" + this.accountFromRemainingAmount
  }

  openPreview():void {
    if (this.accountTo && this.amount) {
      if (this.accountFromRemainingAmount - this.amount < -500) {
        this.showBalanceError = true
      } else {
        this.showPreview = true
      }
    }
  }

  sendTransaction():void {
    if (this.accountTo && this.amount) {
      this.addTransaction.emit({
          accountTo: this.accountTo,
          amount: this.amount
      })
      this.accountFromRemainingAmount -= this.amount
      this.updateAccountFromField()
      this.clearForm()
      this.showPreview = false
    }
  }
}
