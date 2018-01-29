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
    resetAll: boolean;
    // app.componenent.ts
    constructor(private apiFirmService: ApiFirmService) {
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

    /** COMMUNE **/
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
        console.log(idCode);
        this.commune.splice(idCode, 1);
        this.updateParentMunicipality();
    }

    onSelectCommune(): void {
        if (this.displayCommuneForm) {
            this.displayCommuneForm = false;
        } else {
            this.displayCommuneForm = true;
        }
    }
    /* #SEB  this functon update the value in the app.component.ts */
    updateParentMunicipality() {
        this.outputListArea.emit(this.commune);
    }

}
