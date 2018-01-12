import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-municipality',
    templateUrl: './filter-municipality.component.html',
    styleUrls: ['./filter-municipality.component.css']
})
export class FilterMunicipalityComponent implements OnInit {

    commune = [];
    communeHard = ['Chantilly', 'Senlis', 'Compiegne', 'Paris', 'Lille'];
    displayCommuneForm = false;
    comError = false;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    // app.componenent.ts
    constructor(private apiFirmService: ApiFirmService) {

    }

    ngOnInit() {
    }

    /** COMMUNE **/
    addCommune(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.commune);
        if (status === false) {
            this.commune.push(code);
            this.comError = false;
            this.updateParentListArea();
        } else {
            this.comError = true;
        }
    }

    deleteCommune(idCode): void {
        console.log(idCode);
        this.commune.splice(idCode, 1);
        this.updateParentListArea();
    }

    onSelectCommune(): void {
        if (this.displayCommuneForm) {
            this.displayCommuneForm = false;
        } else {
            this.displayCommuneForm = true;
        }
    }
    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.commune);
    }

}
