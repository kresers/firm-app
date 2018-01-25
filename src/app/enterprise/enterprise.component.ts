import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Enterprise} from '../model/enterprise';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {FilterLinkService} from '../filter-link.service';

@Component({
    selector: 'app-enterprise',
    templateUrl: './enterprise.component.html',
    styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    listEnterprises = [];
    listCodeApe = [];
    listCategEnterprise = [];
    listAreaEnt = [];
    listMunicipalityEnt = [];
    listCreationYearEnt = [];
    listLegalStatus = [];
    listWorkforceEnt = [];
    listTotalRevenue = [];
    listRegion = [];

    constructor(private apiFirmService: ApiFirmService, private filterLinkService: FilterLinkService) {
        filterLinkService.loadCodeApeReceived$.subscribe(codeApe => {
            this.listCodeApe = codeApe;
            this.fetchEnterprises();
        });

        /* #SEB call fetchEnterprise when value change */
        filterLinkService.loadLoaderReceived$.subscribe(categ => {
            this.listCategEnterprise = categ;
            this.fetchEnterprises();
        });

        filterLinkService.loadAreaEntReceived$.subscribe(area => {
            this.listAreaEnt = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadMunicipalityEntReceived$.subscribe(area => {
            this.listMunicipalityEnt = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadCreationDateEntReceived$.subscribe(area => {
            this.listCreationYearEnt = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadLegalStatusEntReceived$.subscribe(area => {
            this.listLegalStatus = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadWorkforceEntReceived$.subscribe(area => {
            this.listWorkforceEnt = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadTotalRevenueEntReceived$.subscribe( area => {
            this.listTotalRevenue = area;
            this.fetchEnterprises();
        });

        filterLinkService.loadRegionEntReceived$.subscribe( area => {
            this.listRegion = area;
            this.fetchEnterprises();
        });
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            lengthChange: false,
            pageLength: 50,
            autoWidth: true,
            scrollY: '500px',
            searching: false,
            deferRender: false,
            language: {url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json'},
            paging: true,
            retrieve: true,
        };
        this.fetchEnterprises();
    }

    /* this function load enteprises with loader when user wait */
    fetchEnterprises() {
        this.apiFirmService.updateLoader();
        this.apiFirmService.getEnterpriseByParameters(this.listCodeApe, this.listCategEnterprise, this.listAreaEnt,
            this.listMunicipalityEnt, this.listCreationYearEnt, this.listLegalStatus, this.listWorkforceEnt,
            this.listTotalRevenue, this.listRegion).subscribe(data => { this.listEnterprises = [];
            data['records'].forEach((value) => {
                const enterprise = new Enterprise
                (value.fields.siren,
                 value.fields.nic,
                 value.fields.l1_normalisee,
                 value.fields.l2_normalisee,
                 value.fields.l3_normalisee,
                 value.fields.l4_normalisee);
                this.listEnterprises.push(enterprise);
            });
            this.apiFirmService.updateLoader();
            this.dtTrigger.next();
        });
    }
}
