import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[]}>){
    this.customers = store.pipe(select('customers'));
    console.log("Hello::", this.customers);
  }
}
