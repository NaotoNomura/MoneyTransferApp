import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FilterPipe' })
export class Filter implements PipeTransform {
  transform(items: any[], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase()

    return items.filter(item => {
      let regExp = new RegExp('\\b' + searchText, 'gi')
      return regExp.test(item.merchant.name) || regExp.test(item.transaction.type) || regExp.test(item.transaction.amountCurrency.amount.toString())
    })
  }
}
