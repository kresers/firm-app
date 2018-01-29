import {Component, OnInit} from '@angular/core';
import {FilterLinkService} from '../filter-link.service';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    nbResult = 0;

    constructor(private apifirmService: ApiFirmService) {
        apifirmService.loadNbResultReceived$.subscribe(data => {
            this.nbResult = data;
        });
    }


    ngOnInit() {
    }

    resetAllFilter(): void {
        this.apifirmService.resetAll();
    }

}
