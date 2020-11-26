# Money transfer application

This project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description of the application

Index.html file cointains two elements in body section. First of this elements is div block with logo bar at the top of the app. Second element is the div tag with main component: "AppComponent". "AppComponent" contains 2 components: "AddTransfer" and "TransfersList". "AddTransfer" is responsible for creating new money transfer and showing "preview" component. Preview component shows preview of the entered data and finally adding transfer. "TransfersList" shows the history of transactions and allow us to filter transactions by keyword and sort them by date, beneficiary and amount. "AppComponent" also cointains select element in which we can choose language of the application. "AppComponent" get data from the TransactionsService which uses HttpClient.