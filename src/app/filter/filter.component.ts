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
    displayZipCodeForm = false;
    departement = [];
    displayDepartementForm = false;
    codeApe = [];
    displayCodeApeForm = false;
    categEntHard = ['PME', 'ETI', 'GE'];
    categEnt = [];
    displayCategEnt = false;
    categError = false;
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

    addZipCode(code: string): void {
        this.zipCode.push(code);
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

    addDepartement(code: string): void {
        this.departement.push(code);
    }

    deleteDepartement(idCode): void {
        console.log(idCode);
        this.departement.splice(idCode, 1);
    }

    onSelectDep(): void {
        if (this.displayDepartementForm) {
            this.displayDepartementForm = false;
        } else {
            this.displayDepartementForm = true;
        }
    }

    addCodeApe(code: string): void {
        this.codeApe.push(code);
    }

    deleteCodeApe(idCode): void {
        console.log(idCode);
        this.codeApe.splice(idCode, 1);
    }

    onSelectCodeApe(): void {
        if (this.displayCodeApeForm) {
            this.displayCodeApeForm = false;
        } else {
            this.displayCodeApeForm = true;
        }
    }

    addCategEnt(code: string): void {


        const status = this.checkValue(code, this.categEnt)


        if (status === false) {
            this.categEnt.push(code);
        } else {
            this.categError = true;
        }
    }

    checkValue(value, array) {
        let status = false;
        for (let i = 0; i < array.length; i++) {
            const name = array[i];
            if (name === value) {
                status = true;
                break;
            }
        }
        return status;
    }

    deleteCategEnt(idCode): void {
        console.log(idCode);
        this.categEnt.splice(idCode, 1);
    }

    onSelectCategEnt(): void {
        if (this.displayCategEnt) {
            this.displayCategEnt = false;
        } else {
            this.displayCategEnt = true;
        }
    }
}
