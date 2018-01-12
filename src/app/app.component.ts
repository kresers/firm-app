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

    /* #SEB this function update the value in the service to easy access in the enterprise component */

    /* Don't forget to call this function in the app.component.html */
    outputListCateg(categEnt) {
        this.filterLinkService.LoadCategEnterprise(categEnt);
    }

    outputListArea(areaEnt) {
        console.log(areaEnt);
        this.filterLinkService.LoadAreaEntreprise(areaEnt);
    }

    outputListMunicipality(municipalityEnt) {
        console.log(municipalityEnt);
        this.filterLinkService.LoadMunicipalityEntreprise(municipalityEnt);
    }
}
