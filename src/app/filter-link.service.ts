import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FilterLinkService {
    private loadCodeApeSource = new Subject<[string]>();
    loadCodeApeReceived$ = this.loadCodeApeSource.asObservable();
    private loadCategEntSource = new Subject<[string]>();
    loadLoaderReceived$ = this.loadCategEntSource.asObservable();

    constructor() {
    }

    LoadCodeApe(codeApe): void {
        this.loadCodeApeSource.next(codeApe);
    }

    /* #SEB */
    LoadCategEnterprise(categEnt): void {
        this.loadCategEntSource.next(categEnt);
    }
}
