"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var FilterLinkService = (function () {
    function FilterLinkService() {
        this.loadCodeApeSource = new Subject_1.Subject();
        this.loadCodeApeReceived$ = this.loadCodeApeSource.asObservable();
        this.loadCategEntSource = new Subject_1.Subject();
        this.loadLoaderReceived$ = this.loadCategEntSource.asObservable();
        this.loadAreaEntSource = new Subject_1.Subject();
        this.loadAreaEntReceived$ = this.loadAreaEntSource.asObservable();
        this.loadMunicipalityEntSource = new Subject_1.Subject();
        this.loadMunicipalityEntReceived$ = this.loadMunicipalityEntSource.asObservable();
        this.loadCreationYearEntSource = new Subject_1.Subject();
        this.loadCreationDateEntReceived$ = this.loadCreationYearEntSource.asObservable();
        this.loadLegalStatusEntSource = new Subject_1.Subject();
        this.loadLegalStatusEntReceived$ = this.loadLegalStatusEntSource.asObservable();
        this.loadWorkforceEntSource = new Subject_1.Subject();
        this.loadWorkforceEntReceived$ = this.loadWorkforceEntSource.asObservable();
        this.loadTotalRevenueEntSource = new Subject_1.Subject();
        this.loadTotalRevenueEntReceived$ = this.loadTotalRevenueEntSource.asObservable();
        this.loadRegionSource = new Subject_1.Subject();
        this.loadRegionEntReceived$ = this.loadRegionSource.asObservable();
    }
    FilterLinkService.prototype.LoadCodeApe = function (codeApe) {
        this.loadCodeApeSource.next(codeApe);
    };
    /* #SEB */
    FilterLinkService.prototype.LoadCategEnterprise = function (categEnt) {
        this.loadCategEntSource.next(categEnt);
    };
    FilterLinkService.prototype.LoadAreaEntreprise = function (areaEnt) {
        this.loadAreaEntSource.next(areaEnt);
    };
    FilterLinkService.prototype.LoadMunicipalityEntreprise = function (municipalityEnt) {
        this.loadMunicipalityEntSource.next(municipalityEnt);
    };
    FilterLinkService.prototype.LoadCreationYearEntreprise = function (creationYearEnt) {
        this.loadCreationYearEntSource.next(creationYearEnt);
    };
    FilterLinkService.prototype.LoadLegalStatusEntreprise = function (legalStatusEnt) {
        this.loadLegalStatusEntSource.next(legalStatusEnt);
    };
    FilterLinkService.prototype.LoadWorkforceEntreprise = function (workforceEnt) {
        this.loadWorkforceEntSource.next(workforceEnt);
    };
    FilterLinkService.prototype.LoadTotalRevenue = function (totalRevEnt) {
        this.loadTotalRevenueEntSource.next(totalRevEnt);
    };
    FilterLinkService.prototype.LoadRegion = function (regionEnt) {
        this.loadRegionSource.next(regionEnt);
    };
    FilterLinkService = __decorate([
        core_1.Injectable()
    ], FilterLinkService);
    return FilterLinkService;
}());
exports.FilterLinkService = FilterLinkService;
