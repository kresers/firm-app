import { Component, OnInit } from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Enterprise} from '../model/enterprise';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    listEnterprises = [];
    dtTrigger: Subject<any> = new Subject();

  constructor(private apiFirmService: ApiFirmService) { }

  ngOnInit(): void {
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10
      };
    this.fetchEnterprises();
  }

  fetchEnterprises() {
    this.apiFirmService.getAllEnterprises().subscribe(data => {
        // Read the result field from the JSON response.
        this.listEnterprises = data['companies'];
        this.dtTrigger.next();
        console.log(this.listEnterprises);
    })
  }
}
