import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddTransferComponent } from './addTransfer/addTransfer.component'


import { AppComponent } from './app.component';
import { TransfersListComponent } from './transfersList/transfersList.component'
import { PreviewComponent } from './preview/preview.component'
import { TransactionsService } from './transactionsService'
import { Filter } from './filter'

@NgModule({
  declarations: [
    AppComponent,
    AddTransferComponent,
    TransfersListComponent,
    PreviewComponent,
    Filter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
