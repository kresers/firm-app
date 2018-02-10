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
    search: string;
    nbResult: number;
    @Output() outputNbResult = new EventEmitter<any>();

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

        filterLinkService.loadAreaEntReceived$.subscribe(data => {
            this.listAreaEnt = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadMunicipalityEntReceived$.subscribe(data => {
            this.listMunicipalityEnt = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadCreationDateEntReceived$.subscribe(data => {
            this.listCreationYearEnt = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadLegalStatusEntReceived$.subscribe(data => {
            this.listLegalStatus = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadWorkforceEntReceived$.subscribe(data => {
            this.listWorkforceEnt = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadTotalRevenueEntReceived$.subscribe(data => {
            this.listTotalRevenue = data;
            this.fetchEnterprises();
        });

        filterLinkService.loadRegionEntReceived$.subscribe(data => {
            this.listRegion = data;
            this.fetchEnterprises();
        });
        filterLinkService.loadSearchEntReceived$.subscribe(data => {
            this.search = data;
            const maVar = this.search;
            console.log(maVar);
                if (maVar !== '') {
                    this.fetchEnterprises();
                }else {
                    this.fetchSearch();
                }
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
            info: false
        };
        this.fetchEnterprises();
    }

    /* this function load enteprises with loader when user wait */
    fetchEnterprises() {
        this.apiFirmService.updateLoader();
        this.apiFirmService.getEnterpriseByParameters(this.listCodeApe, this.listCategEnterprise, this.listAreaEnt,
            this.listMunicipalityEnt, this.listCreationYearEnt, this.listLegalStatus, this.listWorkforceEnt,
            this.listTotalRevenue, this.listRegion).subscribe(data => {
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
            this.nbResult = this.listEnterprises.length;
            this.apiFirmService.updateNbResult(this.nbResult);
            this.apiFirmService.updateLoader();
            this.dtTrigger.next();
        });
    }
    fetchSearch() {
        this.apiFirmService.updateLoader();
        this.apiFirmService.getEnterpriseSearch(this.search).subscribe(data => {
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
            this.nbResult = this.listEnterprises.length;
            this.apiFirmService.updateNbResult(this.nbResult);
            this.apiFirmService.updateLoader();
            this.dtTrigger.next();
        });
    }
}
