import {Component, OnInit} from '@angular/core';
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

    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

    /* this function add APE code in the list of filter code APE */
    addCodeApe(code: string): void {
        const status = ApiFirmService.checkValue(code, this.codeApe); // call service to check if value exist
        if (status === false && code !== '') { // if doesn't exist
            this.codeApe.push(code); // we push the new APE filter in the list of APE filter
            this.apeError = false; // we have no error
        } else {
            this.apeError = true; // else we have an error
        }
    }

    /* this function delete APE code in the list of filter code APE */
    deleteCodeApe(idCode): void {
        this.codeApe.splice(idCode, 1);
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
}
