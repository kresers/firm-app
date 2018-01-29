import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-region',
    templateUrl: './filter-region.component.html',
    styleUrls: ['./filter-region.component.css']
})
export class FilterRegionComponent implements OnInit {

    region = [];
    resetAll: boolean;
    /** On a un problème ici. Pour que ça marche il faudrait que ça soit "Ile+de+France" **/
    regionHard = ['Occitanie"', 'Ile de France', 'Corse'];
    regionError = false;
    displayRegionForm = false;
    @Output() outputRegion = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    constructor(private apiFirmService: ApiFirmService) {
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.region = [];
                this.updateParentRegion();
                this.displayRegionForm = false;
            }
        });
    }

    ngOnInit() {
    }

    /** REGION **/
    addRegion(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.region);
        if (status === false) {
            this.region.push(code);
            this.regionError = false;
            this.updateParentRegion();
        } else {
            this.regionError = true;
        }
    }

    deleteRegion(idCode): void {
        console.log(idCode);
        this.region.splice(idCode, 1);
        this.updateParentRegion();
    }

    onSelectRegion(): void {
        if (this.displayRegionForm) {
            this.displayRegionForm = false;
        } else {
            this.displayRegionForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentRegion() {
        this.outputRegion.emit(this.region);
    }

}
