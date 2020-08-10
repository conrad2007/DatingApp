import { Component } from '@angular/core';
import { ValueComponent } from './value/value.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   //template: '
   // <div>
   //   <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
   // </div>'
})
export class AppComponent {
  title = 'app';

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

}
