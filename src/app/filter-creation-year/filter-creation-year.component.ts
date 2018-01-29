import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-creation-year',
    templateUrl: './filter-creation-year.component.html',
    styleUrls: ['./filter-creation-year.component.css']
})
export class FilterCreationYearComponent implements OnInit {

    anneeCreation = [];
    anneeCreationHard = ['2017', '2016', '2015'];
    displayAnneeCreationForm = false;
    anneeCreationError = false;
    resetAll: boolean;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the

    constructor(private apiFirmService: ApiFirmService) {
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

    /** ANNEE DE CREATION **/
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
        this.anneeCreation.splice(idCode,   1);
        this.updateParentListArea();
    }

    onSelectAnneeCreation(): void {
        if (this.displayAnneeCreationForm) {
            this.displayAnneeCreationForm = false;
        } else {
            this.displayAnneeCreationForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.anneeCreation);
    }
}
