import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    results: string[];
    loaded = false;
    listTest = [];

    constructor(private  http: HttpClient, private apiFirmService: ApiFirmService) {
    }

    ngOnInit(): void {
        this.http.get('https://firmapi.com/api/v1/companies/803417153').subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data['company'];
            this.loaded = true;
        });


        this.getList();
    }

    getList(): void {
        this.listTest = this.apiFirmService.list;
    }

}
