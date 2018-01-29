import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
  selector: 'app-filter-legal-status',
  templateUrl: './filter-legal-status.component.html',
  styleUrls: ['./filter-legal-status.component.css']
})
export class FilterLegalStatusComponent implements OnInit {

    statut = [];
    statutHard = ['5520 : Société d\'investissement à capital variable ', '5620', '7112', '7357', '5370'];
    displayStatutForm = false;
    statutError = false;
    resetAll: boolean;
    @Output() outputListZipCode = new EventEmitter<{}>();

  constructor(private apiFirmService: ApiFirmService) {
      apiFirmService.loadResetAllReceived$.subscribe(data => {
          this.resetAll = data;
          if (this.resetAll === true) {
              this.statut = [];
              this.updateParentListArea();
              this.displayStatutForm = false;
          }
      });
  }

  ngOnInit() {
  }

    /** STATUS JURIDIQUE **/
    addStatut(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.statut);
        if (status === false) {
            this.statut.push(code);
            this.statutError = false;
            this.updateParentListArea();
        } else {
            this.statutError = true;
        }
    }

    deleteStatut(idCode): void {
        console.log(idCode);
        this.statut.splice(idCode, 1);
    }

    onSelectStatut(): void {
        if (this.displayStatutForm) {
            this.displayStatutForm = false;
            this.updateParentListArea();
        } else {
            this.displayStatutForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentListArea() {
        this.outputListZipCode.emit(this.statut);
    }
}
