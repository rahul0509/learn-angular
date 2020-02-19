import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RecipientService} from '../../services/recipient.service';
import {Recipient} from '../../models/recipient.model';
import {DataResult, process, State} from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss'],
})
export class AppGridComponent implements OnInit {
  gridData: DataResult;
  state: State = {
    sort: [{
      field: 'id',
      dir: 'asc'
    }]
  };
  // gridColumns = [
  //   {
  //     title: 'Recipient Id',
  //     field: 'recipientId',
  //     minResizableWidth: 200,
  //     isVisible: false
  //   },
  //   {
  //     title: 'First Name',
  //     field: 'firstName',
  //   },
  //   {
  //     title: 'Last Name',
  //     field: 'lastName',
  //   },
  //   {
  //     title: 'Email',
  //     field: 'email',
  //   },
  //   {
  //     title: 'Date of Birth',
  //     field: 'dob',
  //   },
  //   {
  //     title: 'Income',
  //     field: 'income',
  //   },
  //   {
  //     title: 'Title',
  //     field: 'title',
  //   },
  //   {
  //     title: 'Company',
  //     field: 'company',
  //   },
  //   {
  //     title: 'Work Phone',
  //     field: 'workPhone',
  //   },
  //   {
  //     title: 'Mobile',
  //     field: 'mobile',
  //   },
  //   {
  //     title: 'Address',
  //     field: 'address',
  //   },
  //   {
  //     title: 'City',
  //     field: 'city',
  //   },
  //   {
  //     title: 'State',
  //     field: 'state',
  //   },
  //   {
  //     title: 'Country',
  //     field: 'country',
  //   },
  //   {
  //     title: 'ZIP',
  //     field: 'zip',
  //   },
  //   {
  //     title: 'Is Unsubscribe',
  //     field: 'isUnsubscribe',
  //   }
  // ];
  gridColumns = [
    {
      title: 'ID',
      field: 'id'
    }, {
      title: 'Name',
      field: 'name'
    }, {
      title: 'User Name',
      field: 'username'
    }, {
      title: 'Email',
      field: 'email'
    }, {
      title: 'Street',
      field: 'address.street'
    }, {
      title: 'Suite',
      field: 'address.suite'
    }, {
      title: 'city',
      field: 'address.city'
    }, {
      title: 'Zip Code',
      field: 'address.zipcode'
    }, {
      title: 'Latitude',
      field: 'geo.lat'
    }, {
      title: 'Logitude',
      field: 'geo.lng'
    }, {
      title: 'Phone',
      field: 'phone'
    }, {
      title: 'Website',
      field: 'website'
    }
    ];
  constructor(private gridService: RecipientService ) { }

  ngOnInit() {
    this.gridService.getRecipientGrid().subscribe((data: Recipient[]) => {
        console.log('data', data, this.gridColumns, data[0].address);
        this.gridData = process(data, this.state);
      },
      (error) => {
        throw new Error('Data not found');
      }
    );
  }


}
