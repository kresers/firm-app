import {Component} from '@angular/core';
import {FilterLinkService} from './filter-link.service';
import {ApiFirmService} from './api-firm.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private filterLinkService: FilterLinkService, private  apiFirmService: ApiFirmService) {
    }

    title = 'app';
    lat = 43;
    lng = 5;

    outputListZipCode(listZipCodes) {
        this.filterLinkService.LoadZipCodes(listZipCodes);
    }
}
