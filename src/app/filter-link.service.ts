import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FilterLinkService {
    private loadCodeApeSource = new Subject<[string]>();
    loadCodeApeReceived$ = this.loadCodeApeSource.asObservable();
    private loadCategEntSource = new Subject<[string]>();
    loadLoaderReceived$ = this.loadCategEntSource.asObservable();
    private loadAreaEntSource = new Subject<[string]>();
    loadAreaEntReceived$ = this.loadAreaEntSource.asObservable();

    constructor() {
    }

    LoadCodeApe(codeApe): void {
        this.loadCodeApeSource.next(codeApe);
    }

    /* #SEB */
    LoadCategEnterprise(categEnt): void {
        this.loadCategEntSource.next(categEnt);
    }

    LoadAreaEntreprise(areaEnt): void {
        this.loadAreaEntSource.next(areaEnt);
    }
}
