import {Component, OnInit} from '@angular/core';
import {ApiFirmService} from '../api-firm.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    subscription = Subscription;
    loader = true;

    constructor(apiFirmService: ApiFirmService) {
        // Php storm say it's an erro but we have no error in the console and the code work in all navigator
        this.subscription = apiFirmService.loadLoaderReceived$.subscribe((data: boolean) => {
            this.loader = data;
        });
    }

    ngOnInit() {
    }
}
