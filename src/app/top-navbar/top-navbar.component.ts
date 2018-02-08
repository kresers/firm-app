import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
    search: string;
    displayButton = false;
    resetAll: boolean;
  @Output() outputSearch = new EventEmitter<{}>();
  constructor(private apiFirmService: ApiFirmService) {
      apiFirmService.loadResetAllReceived$.subscribe(data => {
          this.resetAll = data;
          if (this.resetAll === true) {
              this.search = '';
              this.updateParentSearch();
              this.displayButton = false;
          }
      });
  }
  ngOnInit() {
  }
    addSearch(code: string): void {
         this.search = code; // we push the new filter in the list of filter
         this.updateParentSearch();
    }
    updateParentSearch() { // #SEB  this function update the value in the app.component.ts
        this.outputSearch.emit(this.search);
    }
}
