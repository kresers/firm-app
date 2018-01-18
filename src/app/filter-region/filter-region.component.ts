import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-region',
    templateUrl: './filter-region.component.html',
    styleUrls: ['./filter-region.component.css']
})
export class FilterRegionComponent implements OnInit {

    region = [];
    /** On a un problème ici. Pour que ça marche il faudrait que ça soit "Ile+de+France" **/
    regionHard = ['Occitanie"', 'Ile de France', 'Corse'];
    regionError = false;
    displayRegionForm = false;
    @Output() outputRegion = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the
    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

    /** REGION **/
    addRegion(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.region);
        if (status === false) {
            this.region.push(code);
            this.regionError = false;
            this.updateParentListArea();
        } else {
            this.regionError = true;
        }
    }

    deleteRegion(idCode): void {
        console.log(idCode);
        this.region.splice(idCode, 1);
        this.updateParentListArea();
    }

    onSelectRegion(): void {
        if (this.displayRegionForm) {
            this.displayRegionForm = false;
        } else {
            this.displayRegionForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputRegion.emit(this.region);
    }

}
