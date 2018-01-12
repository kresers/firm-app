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
    listEnterprises = [];
    dtTrigger: Subject<any> = new Subject();
    listCodeApe = [];
    listCategEnterprise = [];
    listAreaEnt = [];
    listMunicipalityEnt = [];
    listCreationYearEnt = [];
    listLegalStatus = [];

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
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            lengthMenu: [10, 50, 100, 500, 1000],
            pageLength: 200,
            autoWidth: true,
            scrollY: '500px',
            searching: false,
            deferRender: true,
            language: {url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json'},
            paging: false,
        };
        this.fetchEnterprises();
    }

    /* this function load enteprises with loader when user wait */
    fetchEnterprises() {
        this.apiFirmService.updateLoader();
        this.apiFirmService.getEnterpriseByParameters(this.listCodeApe, this.listCategEnterprise, this.listAreaEnt,
            this.listMunicipalityEnt, this.listCreationYearEnt, this.listLegalStatus).subscribe(data => {
            this.listEnterprises = [];
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
        });
        this.dtTrigger.next();
    }
}
