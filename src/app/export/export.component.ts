import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Angular2Csv} from 'angular2-csv/Angular2-csv';
import {Enterprise} from '../model/enterprise';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    listEnterprises = [];
    exportJSON: SafeUrl;

    constructor(private apiFirmService: ApiFirmService, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.apiFirmService.getEnterpriseByParameters().subscribe(data => {
            data['records'].forEach((value) => {
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee);
                this.listEnterprises.push(enterprise);
            });
            this.exportJSON = this.downloadJson();
        });
    }

    downloadCsv() {
        const options = {
        fieldSeparator: ';',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true
        };
        this.apiFirmService.getEnterpriseByParameters().subscribe(data => {
            data['records'].forEach((value) => {
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee,);
                this.listEnterprises.push(enterprise);
            });
            return new Angular2Csv(this.listEnterprises, 'fileName', options);
        });
    }

    downloadJson() {
        const myJSON = JSON.stringify(this.listEnterprises);
        return this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(myJSON));
    }

    downloadExcel() {
        const myJSON = JSON.stringify(this.listEnterprises);
        return this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(myJSON));
    }
}
