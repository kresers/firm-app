import { Component, OnInit } from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    listEnterprises = [
        {
            name: "Test 1",
            age: 13,
            average: 8.2,
            approved: true,
            description: "using 'Content here, content here' "
        },
        {
            name: 'Test 2',
            age: 11,
            average: 8.2,
            approved: true,
            description: "using 'Content here, content here' "
        },
        {
            name: 'Test 4',
            age: 10,
            average: 8.2,
            approved: true,
            description: "using 'Content here, content here' "
        },
    ];


  constructor(private apiFirmService: ApiFirmService) { }

  ngOnInit() {
  }

  downloadCsv (){
      var options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          showTitle: true,
          useBom: true
      };
      new Angular2Csv(this.listEnterprises, 'nom du fichier', options);
    }

}
