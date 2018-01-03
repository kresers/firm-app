import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FilterLinkService {

    private loadZipCodesSource = new Subject<[string]>();
    loadZipCodeReceived$ = this.loadZipCodesSource.asObservable();

    constructor() {
    }

    LoadZipCodes(zipCodes): void {
        this.loadZipCodesSource.next(zipCodes);
    }
}
