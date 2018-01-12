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
    private loadMunicipalityEntSource = new Subject<[string]>();
    loadMunicipalityEntReceived$ = this.loadMunicipalityEntSource.asObservable();
    private loadCreationYearEntSource = new Subject<[string]>();
    loadCreationDateEntReceived$ = this.loadCreationYearEntSource.asObservable();
    private loadLegalStatusEntSource = new Subject<[string]>();
    loadLegalStatusEntReceived$ = this.loadLegalStatusEntSource.asObservable();
    private loadWorkforceEntSource = new Subject<[string]>();
    loadWorkforceEntReceived$ = this.loadWorkforceEntSource.asObservable();
    private loadTotalRevenueEntSource = new Subject<[string]>();
    loadTotalRevenueEntReceived$ = this.loadTotalRevenueEntSource.asObservable();

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

    LoadMunicipalityEntreprise(municipalityEnt): void {
        this.loadMunicipalityEntSource.next(municipalityEnt);
    }

    LoadCreationYearEntreprise(creationYearEnt): void {
        this.loadCreationYearEntSource.next(creationYearEnt);
    }

    LoadLegalStatusEntreprise(legalStatusEnt): void {
        this.loadLegalStatusEntSource.next(legalStatusEnt);
    }

    LoadWorkforceEntreprise(workforceEnt): void {
        this.loadWorkforceEntSource.next(workforceEnt);
    }

    LoadTotalRevenue(totalRevEnt): void {
        this.loadTotalRevenueEntSource.next(totalRevEnt);
    }
}
