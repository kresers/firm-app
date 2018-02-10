import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {FilterLinkService} from '../filter-link.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Response} from '@angular/http';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    listEnterprises = [];
    listCodeApe = [];
    listCategEnterprise = [];
    listAreaEnt = [];
    listMunicipalityEnt = [];
    listCreationYearEnt = [];
    listLegalStatus = [];
    url: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer, private apiFirmService: ApiFirmService, private filterLinkService: FilterLinkService,
                private domSanitizer: DomSanitizer) {
        filterLinkService.loadCodeApeReceived$.subscribe(codeApe => {
            this.listCodeApe = codeApe;
            this.getMap();
        });
        filterLinkService.loadLoaderReceived$.subscribe(categ => {
            this.listCategEnterprise = categ;
            this.getMap();
        });

        filterLinkService.loadAreaEntReceived$.subscribe(area => {
            this.listAreaEnt = area;
            this.getMap();
        });

        filterLinkService.loadMunicipalityEntReceived$.subscribe(area => {
            this.listMunicipalityEnt = area;
            this.getMap();
        });

        filterLinkService.loadCreationDateEntReceived$.subscribe(area => {
            this.listCreationYearEnt = area;
            this.getMap();
        });

        filterLinkService.loadLegalStatusEntReceived$.subscribe(area => {
            this.listLegalStatus = area;
            this.getMap();
        });
    }

    ngOnInit() {
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://public.opendatasoft.com/explore/embed/dataset/sirene/map');
        this.getMap();
    }

    getMap() {
        this.apiFirmService.updateLoader();
        this.apiFirmService.getMapByParameters(this.listCodeApe, this.listCategEnterprise, this.listAreaEnt,
            this.listMunicipalityEnt, this.listCreationYearEnt, this.listLegalStatus).subscribe(data => {
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data);
            this.apiFirmService.updateLoader();
        });
    }

}
