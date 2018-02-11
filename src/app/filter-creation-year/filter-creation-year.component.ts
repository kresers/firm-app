import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-filter-creation-year',
    templateUrl: './filter-creation-year.component.html',
    styleUrls: ['./filter-creation-year.component.css']
})
export class FilterCreationYearComponent implements OnInit {

    anneeCreation = [];
    anneeCreationHard = []
    displayAnneeCreationForm = false;
    anneeCreationError = false;
    resetAll: boolean;
    @Output() outputListArea = new EventEmitter<{}>();

    constructor(private apiFirmService: ApiFirmService, private http: HttpClient) {
        /* we load in the select list the data of creation year */
        this.getCreationYear().subscribe(data => {
            data['facet_groups'][0]['facets'].forEach((year) => {
                this.anneeCreationHard.push(year['name']);
            });
        });
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.anneeCreation = [];
                this.updateParentListArea();
                this.displayAnneeCreationForm = false;
            }
        });
    }

    ngOnInit() {
    }

    /** Start up year **/
    addAnneeCreation(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.anneeCreation)
        if (status === false) {
            this.anneeCreation.push(code);
            this.anneeCreationError = false;
            this.updateParentListArea();
        } else {
            this.anneeCreationError = true;
        }
    }

    deleteAnneeCreation(idCode): void {
        console.log(idCode);
        this.anneeCreation.splice(idCode, 1);
        this.updateParentListArea();
        this.anneeCreationError = false;
    }

    onSelectAnneeCreation(): void {
        if (this.displayAnneeCreationForm) {
            this.displayAnneeCreationForm = false;
            this.anneeCreationError = false;
        } else {
            this.displayAnneeCreationForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.anneeCreation);
    }

    /* this function return the creation year of the api */
    getCreationYear(): Observable<Object> {
        return this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&facet=dcren');
    }
}
