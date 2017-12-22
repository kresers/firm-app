import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Enterprise} from '../model/enterprise';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {FilterLinkService} from "../filter-link.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-enterprise',
    templateUrl: './enterprise.component.html',
    styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    listEnterprises = [];
    dtTrigger: Subject<any> = new Subject();
    subscription: Subscription;
    zipCodes = {};

    constructor(private apiFirmService: ApiFirmService, private filterLinkService: FilterLinkService) {
        this.subscription = filterLinkService.loadZipCodeReceived$.subscribe(zipCodes => {
            this.zipCodes = zipCodes;
            console.log(this.zipCodes);
        });
    }

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
        this.apiFirmService.getEnterpriseByParameters(this.zipCodes).subscribe(data => {
            // Read the result field from the JSON response.
            this.listEnterprises = data['companies'];
            this.dtTrigger.next();
            console.log(this.listEnterprises);
        });
    }
}
