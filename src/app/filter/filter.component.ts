import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    zipCode = [] ;
    @Output() outputListZipCode = new EventEmitter<{}>();
    results: string[];
    loaded = false;
    listTest = [];
    displayZipCodeForm = false;

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

    addZipCode(code: string): void {
        this.zipCode.push(code);
        this.updateParentZipCodes();
    }

    deleteZipCode(idCode): void {
        console.log(idCode);
        this.zipCode.splice(idCode, 1);
    }

    onSelect(): void {
        if (this.displayZipCodeForm) {
            this.displayZipCodeForm = false;
        } else {
            this.displayZipCodeForm = true;
        }
    }

    updateParentZipCodes() {
        this.outputListZipCode.emit(this.zipCode);
    }
}
