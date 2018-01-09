import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-code-ape',
    templateUrl: './filter-code-ape.component.html',
    styleUrls: ['./filter-code-ape.component.css']
})
export class FilterCodeApeComponent implements OnInit {

    codeApe = [];
    displayCodeApeForm = false;
    apeError = false;
    displayButton = false;
    @Output() outputCodeApe = new EventEmitter<{}>();

    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

    /* this function add APE code in the list of filter code APE */
    addCodeApe(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.codeApe); // call service to check if value exist
        if (status === false && code !== '') { // if doesn't exist
            this.codeApe.push(code); // we push the new APE filter in the list of APE filter
            this.apeError = false; // we have no error
            this.updateParentCodeApe(); // update list code APE
        } else {
            this.apeError = true; // else we have an error
        }
        this.displayButton = true;
    }

    /* this function delete APE code in the list of filter code APE */
    deleteCodeApe(idCode): void {
        this.codeApe.splice(idCode, 1);
        this.displayButton = false;
        this.displayCodeApeForm = false;
        this.updateParentCodeApe();
    }

    /* this function display on click the form to add code APE */
    onSelectCodeApe(): void {
        if (this.displayCodeApeForm) {
            this.displayCodeApeForm = false;
            this.apeError = false;
        } else {
            this.displayCodeApeForm = true;
        }
    }

    updateParentCodeApe() {
        this.outputCodeApe.emit(this.codeApe);
    }
}
