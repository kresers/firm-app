import { Component, OnInit } from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {Enterprise} from '../model/enterprise';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    listEnterprises = [];


  constructor(private apiFirmService: ApiFirmService) { }

  ngOnInit() {
  }

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
                                                  value.fields.l4_normalisee, );
              this.listEnterprises.push(enterprise);
          });
          return new Angular2Csv(this.listEnterprises, 'fileName' , options);
      });
    }
    downloadJson () {
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

            JSON.stringify(this.listEnterprises);
        });
    }
    downloadExcel () {
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
    }
}
