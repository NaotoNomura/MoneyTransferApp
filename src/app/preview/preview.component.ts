import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {
    @Output() makeTransaction = new EventEmitter()
    @Input() accountTo: string
    @Input() amount: number
    @Input('language') language: string
    @Input() accountFromRemainingAmount: number

    constructor() {}

    ngOnInit(): void {}

    sendTransaction (): void {
      this.makeTransaction.emit()
    }
}