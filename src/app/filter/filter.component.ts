import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    /** Tous les arrays. */
    zipCode = [];
    departement = [];
    codeApe = [];
    categEnt = [];
    categEntHard = ['PME', 'ETI', 'GE'];
    commune = [];
    communeHard = ['Chantilly', 'Senlis', 'Compiegne', 'Paris', 'Lille'];
    anneeCreation = [];
    anneeCreationHard = ['2017', '2016', '2015'];
    statut = [];
    statutHard = ['6412 - Société mutuelle', '6413 - Union de sociétés mutuelles', '6414 - Autre société non com'];
    effectifs = [];
    effectifsHard = ['0 à 9 salariés', '10 à 250 salariés', '250 à 500 salariés'];
    ca = [];
    caHard = ['De 0.5 à 1M', 'De 1M à 2M'];
    region = [];
    regionHard = ['Picardie', 'Ile de France'];
    /** Tous les display. */
    displayZipCodeForm = false;
    displayDepartementForm = false;
    displayCodeApeForm = false;
    displayCategEnt = false;
    displayCommuneForm = false;
    displayAnneeCreationForm = false;
    displayStatutForm = false;
    displayEffectifsForm = false;
    displayCaForm = false;
    displayRegionForm = false;
    /** Toutes les variables errors. */
    categError = false;
    apeError = false;
    depError = false;
    comError = false;
    anneeCreationError = false;
    statutError = false;
    effectifsError = false;
    caError = false;
    regionError = false;

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
            this.resetErrors();
        } else {
            this.displayZipCodeForm = true;
        }
    }

    /** DEPARTEMENT **/
    addDepartement(code: string): void {
        const status = this.checkValue(code, this.departement)
        if (status === false && code !== '') {
            this.departement.push(code);
            this.depError = false;
        } else {
            this.depError = true;
        }
    }
    deleteDepartement(idCode): void {
        console.log(idCode);
        this.departement.splice(idCode, 1);
    }
    onSelectDep(): void {
        if (this.displayDepartementForm) {
            this.displayDepartementForm = false;
            this.resetErrors();
        } else {
            this.displayDepartementForm = true;
        }
    }
    /** CODE APE **/
    addCodeApe(code: string): void {
        const status = this.checkValue(code, this.codeApe)
        if (status === false && code !== '') {
            this.codeApe.push(code);
            this.apeError = false;
        } else {
            this.apeError = true;
        }
    }
    deleteCodeApe(idCode): void {
        console.log(idCode);
        this.codeApe.splice(idCode, 1);
    }
    onSelectCodeApe(): void {
        if (this.displayCodeApeForm) {
            this.displayCodeApeForm = false;
            this.resetErrors();
        } else {
            this.displayCodeApeForm = true;
        }
    }
    /** CATEGORIE ENTREPRISE **/
    addCategEnt(code: string): void {
        const status = this.checkValue(code, this.categEnt)
        if (status === false) {
            this.categEnt.push(code);
            this.categError = false;
        } else {
            this.categError = true;
        }
    }
    deleteCategEnt(idCode): void {
        console.log(idCode);
        this.categEnt.splice(idCode, 1);
    }
    onSelectCategEnt(): void {
        if (this.displayCategEnt) {
            this.displayCategEnt = false;
            this.resetErrors();
        } else {
            this.displayCategEnt = true;
        }
    }
    /** CATEGORIE ENTREPRISE **/
    addCommune(code: string): void {
        const status = this.checkValue(code, this.commune)
        if (status === false) {
            this.commune.push(code);
            this.comError = false;
        } else {
            this.comError = true;
        }
    }
    deleteCommune(idCode): void {
        console.log(idCode);
        this.commune.splice(idCode, 1);
    }
    onSelectCommune(): void {
        if (this.displayCommuneForm) {
            this.displayCommuneForm = false;
            this.resetErrors();
        } else {
            this.displayCommuneForm = true;
        }
    }
    /** ANNEE DE CREATION **/
    addAnneeCreation(code: string): void {
        const status = this.checkValue(code, this.anneeCreation)
        if (status === false) {
            this.anneeCreation.push(code);
            this.anneeCreationError = false;
        } else {
            this.anneeCreationError = true;
        }
    }
    deleteAnneeCreation(idCode): void {
        console.log(idCode);
        this.anneeCreation.splice(idCode, 1);
    }
    onSelectAnneeCreation(): void {
        if (this.displayAnneeCreationForm) {
            this.displayAnneeCreationForm = false;
            this.resetErrors();
        } else {
            this.displayAnneeCreationForm = true;
        }
    }
    /** STATUS JURIDIQUE **/
    addStatut(code: string): void {
        const status = this.checkValue(code, this.statut)
        if (status === false) {
            this.statut.push(code);
            this.statutError = false;
        } else {
            this.statutError = true;
        }
    }
    deleteStatut(idCode): void {
        console.log(idCode);
        this.statut.splice(idCode, 1);
    }
    onSelectStatut(): void {
        if (this.displayStatutForm) {
            this.displayStatutForm = false;
            this.resetErrors();
        } else {
            this.displayStatutForm = true;
        }
    }
    /** STATUS JURIDIQUE **/
    addEffectifs(code: string): void {
        const status = this.checkValue(code, this.effectifs)
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
        const status = this.checkValue(code, this.ca)
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
        const status = this.checkValue(code, this.region)
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
        this.apeError = false;
        this.depError = false;
        this.anneeCreationError = false;
        this.statutError = false;
        this.effectifsError = false;
        this.caError = false;
        this.regionError = false;
    }
}

