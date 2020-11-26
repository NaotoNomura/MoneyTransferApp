import { TestBed } from '@angular/core/testing';
import { TransactionsService } from './transactionsService';

describe('UsersService', () => {
  let TransactionsService: TransactionsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionsService]
    });

    TransactionsService = TestBed.get(TransactionsService)
  });

  it('should be created', () => {
    expect(TransactionsService).toBeTruthy();
  });
  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
            "iconSrcPath": "../assets/icons/backbase.png",
            "categoryCode": "#12a580",
            "dates": {
              "valueDate": 1600493600000
            },
            "transaction": {
              "amountCurrency": {
                "amount": 5000,
                "currencyCode": "EUR"
              },
              "type": "Salaries",
              "creditDebitIndicator": "CRDT"
            },
            "merchant": {
              "name": "Backbase",
              "accountNumber": "SI64397745065188826"
            }
          }, {
            "iconSrcPath": "../assets/icons/the-tea-lounge.png",
            "categoryCode": "#12a580",
            "dates": {
              "valueDate": 1600387200000
            },
            "transaction": {
              "amountCurrency": {
                "amount": "82.02",
                "currencyCode": "EUR"
              },
              "type": "Card Payment",
              "creditDebitIndicator": "DBIT"
            },
            "merchant": {
              "name": "The Tea Lounge",
              "accountNumber": "SI64397745065188826"
            }
          }
      ];
      let response;
      spyOn(TransactionsService, 'all').and.returnValue(userResponse);

      TransactionsService.getTransactions().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
})
})