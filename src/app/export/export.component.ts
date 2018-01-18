import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
<<<<<<< HEAD
import {Angular2Csv} from 'angular2-csv/Angular2-csv';
import {Enterprise} from "../model/enterprise";
=======
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {Enterprise} from '../model/enterprise';
>>>>>>> 36375236797cf246b73e8795d1ed6f039b47a853

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    listEnterprises = [];


    constructor(private apiFirmService: ApiFirmService) {
    }

    ngOnInit() {
    }

<<<<<<< HEAD
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
                const enterprise = new Enterprise(value.fields.siren, value.fields.l1_normalisee, value.fields.codpos, value.fields.libcom, value.fields.dcren);
                this.listEnterprises.push(enterprise);
            });
            new Angular2Csv(this.listEnterprises, 'nom du fichier', options);
        });
=======
    downloadCsv () {
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
                                                  value.fields.l4_normalisee);
              this.listEnterprises.push(enterprise);
          });
          new Angular2Csv(this.listEnterprises, 'nom du fichier', options);
      });
>>>>>>> 36375236797cf246b73e8795d1ed6f039b47a853
    }

    downloadJson() {
        this.apiFirmService.getEnterpriseByParameters().subscribe(data => {
            data['records'].forEach((value) => {
<<<<<<< HEAD
                const enterprise = new Enterprise(value.fields.siren, value.fields.l1_normalisee, value.fields.codpos, value.fields.libcom, value.fields.dcren);
=======
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee);
>>>>>>> 36375236797cf246b73e8795d1ed6f039b47a853
                this.listEnterprises.push(enterprise);
            });

            JSON.stringify(this.listEnterprises);
        });
    }
<<<<<<< HEAD

    downloadExcel() {
=======
    downloadExcel () {
>>>>>>> 36375236797cf246b73e8795d1ed6f039b47a853
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
<<<<<<< HEAD
                const enterprise = new Enterprise(value.fields.siren, value.fields.l1_normalisee, value.fields.codpos, value.fields.libcom, value.fields.dcren);
=======
                const enterprise = new Enterprise(value.fields.siren,
                    value.fields.nic,
                    value.fields.l1_normalisee,
                    value.fields.l2_normalisee,
                    value.fields.l3_normalisee,
                    value.fields.l4_normalisee);
>>>>>>> 36375236797cf246b73e8795d1ed6f039b47a853
                this.listEnterprises.push(enterprise);
            });
            new Angular2Csv(this.listEnterprises, 'nom du fichier', options);
        });
    }
}
