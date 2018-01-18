import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-total-revenue',
    templateUrl: './filter-total-revenue.component.html',
    styleUrls: ['./filter-total-revenue.component.css']
})
export class FilterTotalRevenueComponent implements OnInit {

    ca = [];
    caHard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    displayCaForm = false;
    caError = false;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

    /** CHIFFRES D'AFFAIRES **/
    addCa(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.ca);
        if (status === false) {
            this.ca.push(code);
            this.caError = false;
            this.updateParentListArea();
        } else {
            this.caError = true;
        }
    }

    deleteCa(idCode): void {
        console.log(idCode);
        this.ca.splice(idCode, 1);
        this.updateParentListArea();
    }

    onSelectCa(): void {
        if (this.displayCaForm) {
            this.displayCaForm = false;
        } else {
            this.displayCaForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.ca);
    }
}
