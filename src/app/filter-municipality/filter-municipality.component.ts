import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-filter-municipality',
    templateUrl: './filter-municipality.component.html',
    styleUrls: ['./filter-municipality.component.css']
})
export class FilterMunicipalityComponent implements OnInit {

    commune = [];
    apiFacetComune = this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&facet=libcom');
    displayCommuneForm = false;
    comError = false;
    communeHard = [];
    @Output() outputListArea = new EventEmitter<{}>();
    resetAll: boolean;

    constructor(private apiFirmService: ApiFirmService, private http: HttpClient) {
        /* we  load the munipality of the api in communeHard to complete the select in the html code */
        this.getMunicipality().subscribe(data => {
            data['facet_groups'][0]['facets'].forEach((municipality) => {
                this.communeHard.push(municipality['name']);
            });
        });
        /* this function listen the resetAll variable */
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.commune = [];
                this.updateParentMunicipality();
                this.displayCommuneForm = false;
            }
        });
    }

    ngOnInit() {
    }
    addCommune(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.commune);
        if (status === false) {
            this.commune.push(code);
            this.comError = false;
            this.updateParentMunicipality();
        } else {
            this.comError = true;
        }
    }

    deleteCommune(idCode): void {
        this.comError = false;
        console.log(idCode);
        this.commune.splice(idCode, 1);
        this.updateParentMunicipality();
    }

    onSelectCommune(): void {
        if (this.displayCommuneForm) {
            this.displayCommuneForm = false;
            this.comError = false;
        } else {
            this.displayCommuneForm = true;
        }
    }

    /* this function update the value in the app.component.ts */
    updateParentMunicipality() {
        this.outputListArea.emit(this.commune);
    }

    /* this function return the municiality information of the api */
    getMunicipality(): Observable<Object> {
        return this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&facet=libcom');
    }
}
