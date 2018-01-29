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
var ApiFirmService = (function () {
    function ApiFirmService(http) {
        this.http = http;
        this.listEnterprise = [];
        this.parameters = '';
        this.codeApe = '';
        this.categ = '';
        this.area = '';
        this.municipality = '';
        this.creationDate = '';
        this.legalstatus = '';
        this.workforce = '';
        this.totalrevenue = '';
        this.region = '';
        this.loader = false;
        this.loadLoaderSource = new Subject_1.Subject();
        this.loadLoaderReceived$ = this.loadLoaderSource.asObservable();
        this.loadNbResultSource = new Subject_1.Subject();
        this.loadNbResultReceived$ = this.loadNbResultSource.asObservable();
        this.ind = 0;
        this.reset = false;
        this.loadResetSource = new Subject_1.Subject();
        this.loadResetReceived$ = this.loadResetSource.asObservable();
    }
    ApiFirmService_1 = ApiFirmService;
    ApiFirmService.prototype.resetAll = function () {
        this.reset = true;
        console.log(this.reset);
    };
    /* Verifies if the value already exists in an array */
    ApiFirmService.prototype.checkValue = function (value, array) {
        var status = false;
        for (var i = 0; i < array.length; i++) {
            var name_1 = array[i];
            if (name_1 === value) {
                status = true;
                break;
            }
        }
        return status;
    };
    /* #SEB Update this function with your parameters. And go to the enterprise.componenent.ts */
    /* this function return entreprises with the selected filter */
    /* params : */
    /* listCodeApe : the list of ape Code filter */
    /* listCateg : the list of  enterprise categ filter */
    ApiFirmService.prototype.getEnterpriseByParameters = function (listCodeApe, listCategEnt, listAreaEnt, listMunicipalityEnt, listCreationYearEnt, listLegalStatusEnt, listWorkforceEnt, listTotalRevenueEnt, listRegion) {
        if (listCodeApe === void 0) { listCodeApe = []; }
        if (listCategEnt === void 0) { listCategEnt = []; }
        if (listAreaEnt === void 0) { listAreaEnt = []; }
        if (listMunicipalityEnt === void 0) { listMunicipalityEnt = []; }
        if (listCreationYearEnt === void 0) { listCreationYearEnt = []; }
        if (listLegalStatusEnt === void 0) { listLegalStatusEnt = []; }
        if (listWorkforceEnt === void 0) { listWorkforceEnt = []; }
        if (listTotalRevenueEnt === void 0) { listTotalRevenueEnt = []; }
        if (listRegion === void 0) { listRegion = []; }
        this.parameters = '&q='; // init the list of parameters
        this.addFilter(listCodeApe, 'apet700', this.codeApe);
        this.addFilter(listCategEnt, 'categorie', this.categ);
        this.addFilter(listAreaEnt, 'depet', this.area);
        this.addFilter(listMunicipalityEnt, 'libcom', this.municipality);
        this.addFilter(listCreationYearEnt, 'dcren', this.creationDate);
        this.addFilter(listLegalStatusEnt, 'nj', this.legalstatus);
        this.addFilter(listWorkforceEnt, 'tefen', this.workforce);
        this.addFilter(listTotalRevenueEnt, 'tca', this.totalrevenue);
        this.addFilter(listRegion, 'libreg_new', this.region);
        console.log(ApiFirmService_1.BASE_URL + this.parameters);
        return this.http.get(ApiFirmService_1.BASE_URL + this.parameters);
    };
    /* Update this function with your parameters. And go to the map.componenent.ts */
    /* this function return map value with the selected filter */
    /* params : */
    /* listCodeApe : the list of ape Code filter */
    /* listCateg : the list of  enterprise categ filter */
    ApiFirmService.prototype.getMapByParameters = function (listCodeApe, listCategEnt, listAreaEnt, listMunicipalityEnt, listCreationYearEnt, listLegalStatusEnt) {
        if (listCodeApe === void 0) { listCodeApe = []; }
        if (listCategEnt === void 0) { listCategEnt = []; }
        if (listAreaEnt === void 0) { listAreaEnt = []; }
        if (listMunicipalityEnt === void 0) { listMunicipalityEnt = []; }
        if (listCreationYearEnt === void 0) { listCreationYearEnt = []; }
        if (listLegalStatusEnt === void 0) { listLegalStatusEnt = []; }
        this.parameters = '&q='; // init the list of parameters
        this.addFilter(listCodeApe, 'apet700', this.codeApe);
        this.addFilter(listCategEnt, 'categorie', this.categ);
        this.addFilter(listAreaEnt, 'depet', this.area);
        this.addFilter(listMunicipalityEnt, 'libcom', this.municipality);
        this.addFilter(listCreationYearEnt, 'dcren', this.creationDate);
        this.addFilter(listLegalStatusEnt, 'nj', this.legalstatus);
        console.log(ApiFirmService_1.BASE_URL_MAP + this.parameters);
        return this.http.get(ApiFirmService_1.BASE_URL_MAP + this.parameters);
    };
    ApiFirmService.prototype.getAllEnterprises = function () {
        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=10&start=50');
    };
    /* this function add filter */
    /* params : */
    /* list : the list of filter value */
    /* fieldName : the name of the field in the API */
    /* paramName : the variable string who concat params */
    ApiFirmService.prototype.addFilter = function (list, fieldName, paramName) {
        var _this = this;
        this.ind = 0;
        list.forEach(function (item, index) {
            if (index !== 0) {
                paramName += '+OR+';
            }
            if (item !== '') {
                paramName += fieldName + ':';
                paramName += item;
                _this.ind++;
            }
        });
        if (list.length > 0) {
            this.parameters += paramName;
            if (this.ind >= list.length) {
                this.parameters += '&';
            }
        }
    };
    ApiFirmService.prototype.updateLoader = function () {
        if (this.loader) {
            this.loader = false;
        }
        else {
            this.loader = true;
        }
        this.loadLoaderSource.next(this.loader);
    };
    ApiFirmService.prototype.updateNbResult = function (data) {
        this.nbResult = data;
        this.loadNbResultSource.next(this.nbResult);
    };
    ApiFirmService.BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=500&start=0';
    ApiFirmService.BASE_URL_MAP = 'https://data.opendatasoft.com/explore/embed/dataset/base-sirene@datanova/map?';
    ApiFirmService = ApiFirmService_1 = __decorate([
        core_1.Injectable()
    ], ApiFirmService);
    return ApiFirmService;
    var ApiFirmService_1;
}());
exports.ApiFirmService = ApiFirmService;
