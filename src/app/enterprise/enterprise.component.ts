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
          lengthMenu: [10, 50, 100, 500, 1000],
          pageLength: 200,
          autoWidth: true,
          scrollY: '500px',
          searching: false,
          deferRender: true,
          language: {url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json'},
          paging: false,
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
