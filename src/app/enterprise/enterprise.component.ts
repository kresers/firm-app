import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Enterprise} from '../model/enterprise';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {FilterLinkService} from '../filter-link.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-enterprise',
    templateUrl: './enterprise.component.html',
    styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    listEnterprises = [];
    dtTrigger: Subject<any> = new Subject();
    subscription: Subscription;
    zipCodes = [];
    @Output() outputLoader = new EventEmitter<{}>();
    loaded = false;

    constructor(private apiFirmService: ApiFirmService, private filterLinkService: FilterLinkService) {
        this.subscription = filterLinkService.loadZipCodeReceived$.subscribe(zipCodes => {
            this.zipCodes = zipCodes;
            console.log('avant fetch entreprise');
            this.fetchEnterprises();
            console.log('Après fetch entreprise');
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

    fetchEnterprises() {
        this.loaded = true;
        this.updateParentLoader();
        this.apiFirmService.getEnterpriseByParameters(this.zipCodes).subscribe(data => {
            this.listEnterprises = [];
            data['records'].forEach((value) => {
                const enterprise = new Enterprise
                (value.fields.siren, value.fields.l1_normalisee, value.fields.codpos, value.fields.libcom, value.fields.dcren);
                this.listEnterprises.push(enterprise);
            });
        });
        this.loaded = false;
        this.updateParentLoader();
        this.dtTrigger.next();
    }

    updateParentLoader() {
        this.outputLoader.emit(this.loaded);
    }
}
