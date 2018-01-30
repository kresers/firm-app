import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-business-categories',
    templateUrl: './filter-business-categories.component.html',
    styleUrls: ['./filter-business-categories.component.css']
})
export class FilterBusinessCategoriesComponent implements OnInit {

    categEnt = [];
    categEntHard = ['PME', 'PMI', 'TPE', 'ETI', 'GE'];
    categError = false;
    displayCategEnt = false;
    @Output() outputListCateg = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the app.componenet.ts
    resetAll: boolean;

    constructor(private apiFirmService: ApiFirmService) {
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.categEnt = [];
                this.updateParentListCateg();
                this.displayCategEnt = false;
            }
        });
    }

    ngOnInit() {
    }

    /* this function add categ enterprise in the list of filter categ enterprise */
    addCategEnt(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.categEnt);
        if (status === false) {
            this.categEnt.push(code);
            this.categError = false;
            this.updateParentListCateg();
        } else {
            this.categError = true;
        }
    }

    /* this function delete categ enterprise in the list of filter categ enterprise */
    deleteCategEnt(idCode): void {
        this.categEnt.splice(idCode, 1);
        this.updateParentListCateg();
    }


    /* this function display or not the form categ enterprise */
    onSelectCategEnt(): void {
        if (this.displayCategEnt) {
            this.displayCategEnt = false;
            this.categError = false;
        } else {
            this.displayCategEnt = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListCateg() {
        this.outputListCateg.emit(this.categEnt);
    }
}
