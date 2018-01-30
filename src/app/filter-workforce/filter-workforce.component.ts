import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';

@Component({
    selector: 'app-filter-workforce',
    templateUrl: './filter-workforce.component.html',
    styleUrls: ['./filter-workforce.component.css']
})
export class FilterWorkforceComponent implements OnInit {

    effectifs = [];
    effectifsHard = ['0 salarié','1 salariés','2 salariés','3 salariés','4 salariés','5 salariés','6 salariés','7 salariés','8 salariés','9 salariés','10 salariés','11 salariés','12 salariés','13 salariés','14 salariés','15 salariés','16 salariés','17 salariés','18 salariés','19 salariés','20 salariés','21 salariés','22 salariés','23 salariés','24 salariés','25 salariés','26 salariés','27 salariés','28 salariés','29 salariés','30 salariés','31 salariés','32 salariés','33 salariés','34 salariés','35 salariés','36 salariés','37 salariés','38 salariés','39 salariés','40 salariés','41 salariés','42 salariés','43 salariés','44 salariés','45 salariés','46 salariés','47 salariés','48 salariés','49 salariés','50 salariés','51 salariés','52 salariés','53 salariés','54 salariés','55 salariés','56 salariés','57 salariés','58 salariés','59 salariés','60 salariés','61 salariés','62 salariés','63 salariés','64 salariés','65 salariés','66 salariés','67 salariés','68 salariés','69 salariés','70 salariés','71 salariés','72 salariés','73 salariés','74 salariés','75 salariés','76 salariés','77 salariés','78 salariés','79 salariés','80 salariés','81 salariés','82 salariés','83 salariés','84 salariés','85 salariés','86 salariés','87 salariés','88 salariés','89 salariés','90 salariés','91 salariés','92 salariés','93 salariés','94 salariés','95 salariés','96 salariés','97 salariés','98 salariés','99 salariés','100 salariés'];
    displayEffectifsForm = false;
    effectifsError = false;
    resetAll: boolean;
    @Output() outputListArea = new EventEmitter<{}>(); // #SEB  the value of this output is transmit to the

    constructor(private apiFirmService: ApiFirmService) {
        apiFirmService.loadResetAllReceived$.subscribe(data => {
            this.resetAll = data;
            if (this.resetAll === true) {
                this.effectifs = [];
                this.updateParentWorkforce();
                this.displayEffectifsForm = false;
            }
        });
    }

    ngOnInit() {
    }

    /** WORKFORCE **/
    addEffectifs(code: string): void {
        const status = this.apiFirmService.checkValue(code, this.effectifs);
        if (status === false) {
            this.effectifs.push(code);
            this.effectifsError = false;
            this.updateParentWorkforce();
        } else {
            this.effectifsError = true;
        }
    }

    deleteEffectifs(idCode): void {
        console.log(idCode);
        this.effectifs.splice(idCode, 1);
        this.updateParentWorkforce();
    }

    onSelectEffectifs(): void {
        if (this.displayEffectifsForm) {
            this.displayEffectifsForm = false;
        } else {
            this.displayEffectifsForm = true;
        }
    }

    /* #SEB  this functon update the value in the app.component.ts */
    updateParentWorkforce() {
        this.outputListArea.emit(this.effectifs);
    }
}
