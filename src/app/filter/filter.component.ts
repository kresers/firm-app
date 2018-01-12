import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
    /** Tous les arrays. */
    zipCode = [];


    region = [];
    regionHard = ['Picardie', 'Ile de France'];
    /** Tous les display. */
    displayZipCodeForm = false;


    displayRegionForm = false;
    /** Toutes les variables errors. */
    categError = false;
    depError = false;


    regionError = false;
    listTest = [];


    constructor(private  http: HttpClient, private apiFirmService: ApiFirmService) {
    }

    ngOnInit(): void {
    }

    getList(): void {
        this.listTest = this.apiFirmService.listEnterprise;
    }

    /** Example with zipCode**/

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
            this.resetErrors();
        } else {
            this.displayZipCodeForm = true;
        }
    }


    /** REGION **/
    addRegion(code: string): void {
        const status = this.checkValue(code, this.region);
        if (status === false) {
            this.region.push(code);
            this.regionError = false;
        } else {
            this.regionError = true;
        }
    }

    deleteRegion(idCode): void {
        console.log(idCode);
        this.region.splice(idCode, 1);
    }

    onSelectRegion(): void {
        if (this.displayRegionForm) {
            this.displayRegionForm = false;
            this.resetErrors();
        } else {
            this.displayRegionForm = true;
        }
    }

    /** AUTRE FONCTION **/
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

    resetErrors() {
        this.categError = false;
        this.depError = false;
        this.regionError = false;
    }
}

