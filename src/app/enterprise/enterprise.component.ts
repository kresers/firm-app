import { Component, OnInit } from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
    results: string[];
    loaded = false;
    listEnterprise = [];

  constructor(private apiFirmService: ApiFirmService) { }

  ngOnInit(): void {
    this.fetchEnterprises();
  }

  fetchEnterprises() {
    this.apiFirmService.getAllEnterprises().subscribe(data => {
        // Read the result field from the JSON response.
        this.listEnterprise = data['companies'];
        console.log(this.listEnterprise);
        this.loaded = true;
    })
  }
}
