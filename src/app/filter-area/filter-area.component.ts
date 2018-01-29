import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-area',
    templateUrl: './filter-area.component.html',
    styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements OnInit {
    departement = [];
    displayDepartementForm = false;
    depError = false;
    resetAll: boolean;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    // app.componenent.ts

    constructor(private apiFirmService: ApiFirmService) {
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.departement = [];
                this.updateParentListArea();
            }
        });
    }

    ngOnInit() {
    }

    addDepartement(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.departement);
        if (status === false && code !== '') {
            this.departement.push(code);
            this.depError = false;
            this.updateParentListArea();
        } else {
            this.depError = true;
        }
    }

    deleteDepartement(idCode): void {
        console.log(idCode);
        this.departement.splice(idCode, 1);
        this.updateParentListArea();

    }

    onSelectDep(): void {
        if (this.displayDepartementForm) {
            this.displayDepartementForm = false;
            // this.resetErrors();
        } else {
            this.displayDepartementForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.departement);
    }

}
