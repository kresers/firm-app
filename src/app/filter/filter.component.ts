import { Component, OnInit } from '@angular/core';
import { ApiFirmService } from '../api-firm.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  listTest = [] ;
  constructor(private apiFirmService: ApiFirmService ) { }
  ngOnInit() {
    console.log(this.apiFirmService.list);
    this.listTest = this.apiFirmService.list;
  }
}
