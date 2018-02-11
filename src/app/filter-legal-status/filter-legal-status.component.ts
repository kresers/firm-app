import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-filter-legal-status',
    templateUrl: './filter-legal-status.component.html',
    styleUrls: ['./filter-legal-status.component.css']
})
export class FilterLegalStatusComponent implements OnInit {

    statut = [];
    statutHard = [];
    displayStatutForm = false;
    statutError = false;
    resetAll: boolean;
    @Output() outputListZipCode = new EventEmitter<{}>();

    constructor(private apiFirmService: ApiFirmService, private http: HttpClient) {
        /* we load the legal status in the select list of legal status in the html code with the data of openDataDof api */
        this.getlegalStatus().subscribe(data => {
            data['facet_groups'][0]['facets'].forEach((legalStatus) => {
                this.statutHard.push(legalStatus['name']);
            });
        });
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.statut = [];
                this.updateParentListArea();
                this.displayStatutForm = false;
            }
        });
    }

    ngOnInit() {
    }

    /** STATUS JURIDIQUE **/
    addStatut(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.statut);
        if (status === false) {
            this.statut.push(code);
            this.statutError = false;
            this.updateParentListArea();
        } else {
            this.statutError = true;
        }
    }

    deleteStatut(idCode): void {
        this.statutError = false;
        console.log(idCode);
        this.statut.splice(idCode, 1);
    }

    onSelectStatut(): void {
        if (this.displayStatutForm) {
            this.displayStatutForm = false;
            this.updateParentListArea();
        } else {
            this.displayStatutForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListZipCode.emit(this.statut);
    }

    /* this function return the municiality information of the api */
    getlegalStatus(): Observable<Object> {
        return this.http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&facet=libnj');
    }
}
