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

    effectifs = [];
    effectifsHard = ['0 à 9 salariés', '10 à 250 salariés', '250 à 500 salariés'];
    ca = [];
    caHard = ['De 0.5 à 1M', 'De 1M à 2M'];
    region = [];
    regionHard = ['Picardie', 'Ile de France'];
    /** Tous les display. */
    displayZipCodeForm = false;
    displayEffectifsForm = false;
    displayCaForm = false;
    displayRegionForm = false;
    /** Toutes les variables errors. */
    categError = false;
    depError = false;
    effectifsError = false;
    caError = false;
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





    /** STATUS JURIDIQUE **/
    addEffectifs(code: string): void {
        const status = this.checkValue(code, this.effectifs);
        if (status === false) {
            this.effectifs.push(code);
            this.effectifsError = false;
        } else {
            this.effectifsError = true;
        }
    }

    deleteEffectifs(idCode): void {
        console.log(idCode);
        this.effectifs.splice(idCode, 1);
    }

    onSelectEffectifs(): void {
        if (this.displayEffectifsForm) {
            this.displayEffectifsForm = false;
            this.resetErrors();
        } else {
            this.displayEffectifsForm = true;
        }
    }

    /** CHIFFRES D'AFFAIRES **/
    addCa(code: string): void {
        const status = this.checkValue(code, this.ca);
        if (status === false) {
            this.ca.push(code);
            this.caError = false;
        } else {
            this.caError = true;
        }
    }

    deleteCa(idCode): void {
        console.log(idCode);
        this.ca.splice(idCode, 1);
    }

    onSelectCa(): void {
        if (this.displayCaForm) {
            this.displayCaForm = false;
            this.resetErrors();
        } else {
            this.displayCaForm = true;
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
        this.effectifsError = false;
        this.caError = false;
        this.regionError = false;
    }
}

