import {Component} from '@angular/core';
import {FilterLinkService} from './filter-link.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private filterLinkService: FilterLinkService) {
    }

    title = 'app';
    lat = 43;
    lng = 5;

    outputCodeApe(codeApe) {
        this.filterLinkService.LoadCodeApe(codeApe);
    }
}
