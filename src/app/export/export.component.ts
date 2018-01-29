import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Angular2Csv} from 'angular2-csv/Angular2-csv';
import {Enterprise} from '../model/enterprise';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    listEnterprises = [];
    allEnterprises = [];
    exportFilterJSON: SafeUrl;
    exportAllJSON: SafeUrl;

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
            this.exportFilterJSON = this.downloadFilterJson();
        });
        this.apiFirmService.getAllEnterprises().subscribe(data => {
            data['records'].forEach((value) => {
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee);
                this.allEnterprises.push(enterprise);
            });
            this.exportAllJSON = this.downloadAllJson();
        });
    }

    downloadFilterCsv() {
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
                    value.fields.l4_normalisee, );
                this.listEnterprises.push(enterprise);
            });
            return new Angular2Csv(this.listEnterprises, 'Export entreprises', options);
        });
    }

    downloadAllCsv() {
        const options = {
            fieldSeparator: ';',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true
        };
        this.apiFirmService.getAllEnterprises().subscribe(data => {
            data['records'].forEach((value) => {
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee,);
                this.listEnterprises.push(enterprise);
            });
            return new Angular2Csv(this.listEnterprises, 'Export entreprises', options);
        });
    }

    downloadAllJson() {
        const myJSON = JSON.stringify(this.allEnterprises);
        return this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(myJSON));
    }

    downloadFilterJson() {
        const myJSON = JSON.stringify(this.listEnterprises);
        return this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(myJSON));
    }

    downloadAllExcel() {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.allEnterprises);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, 'Export entreprises');
    }

    downloadFilterExcel() {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listEnterprises);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, 'Export entreprises');
    }
}
