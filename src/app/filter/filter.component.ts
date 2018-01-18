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


    /** Tous les display. */
    displayZipCodeForm = false;

    /** Toutes les variables errors. */
    categError = false;
    depError = false;


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
    }
}

