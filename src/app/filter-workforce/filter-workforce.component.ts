import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-workforce',
    templateUrl: './filter-workforce.component.html',
    styleUrls: ['./filter-workforce.component.css']
})
export class FilterWorkforceComponent implements OnInit {

    effectifs = [];
    effectifsHard = ['01', '02', '03', '11', '11', '12', '21', '22', '31', '32', '41', '42', '51', '52', '53' +
    ' salariés'];
    displayEffectifsForm = false;
    effectifsError = false;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the

    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

    /** WORKFORCE **/
    addEffectifs(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.effectifs);
        if (status === false) {
            this.effectifs.push(code);
            this.effectifsError = false;
            this.updateParentListArea();
        } else {
            this.effectifsError = true;
        }
    }

    deleteEffectifs(idCode): void {
        console.log(idCode);
        this.effectifs.splice(idCode, 1);
        this.updateParentListArea();
    }

    onSelectEffectifs(): void {
        if (this.displayEffectifsForm) {
            this.displayEffectifsForm = false;
        } else {
            this.displayEffectifsForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListArea.emit(this.effectifs);
    }
}
