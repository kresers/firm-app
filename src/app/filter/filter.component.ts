import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    zipCode = [];
    results: string[];
    loaded = false;
    listTest = [];
    displayZipCodeForm = false;

    constructor(private  http: HttpClient, private apiFirmService: ApiFirmService) {
    }

    ngOnInit(): void {
    }

    getList(): void {
        this.listTest = this.apiFirmService.listEnterprise;
    }

    addZipCode(code: string): void {
        this.zipCode.push(code);
    }

    deleteZipCode(idCode): void {
        console.log(idCode);
        this.zipCode.splice(idCode,1);
    }

    onSelect(): void {
        if (this.displayZipCodeForm) {
            this.displayZipCodeForm = false;
        }else {
            this.displayZipCodeForm = true;
        }
    }
}
