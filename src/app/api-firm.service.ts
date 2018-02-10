import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiFirmService {
    static BASE_URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&rows=500&start=0';
    static BASE_URL_MAP = 'https://public.opendatasoft.com/explore/embed/dataset/sirene/map';
    static BASE_URL_MAP2 = 'https://data.opendatasoft.com/explore/embed/dataset/base-sirene@datanova/map?';

    constructor(private http: HttpClient) {
    }

    listEnterprise = [];
    search: any;
    parameters = '';
    codeApe = '';
    categ = '';
    area = '';
    municipality = '';
    nbFilter: any;
    creationDate = '';
    legalstatus = '';
    workforce = '';
    totalrevenue = '';
    region = '';
    loader = false;
    private loadLoaderSource = new Subject<boolean>();
    loadLoaderReceived$ = this.loadLoaderSource.asObservable();
    nbResult: number;
    private loadNbResultSource = new Subject<number>();
    loadNbResultReceived$ = this.loadNbResultSource.asObservable();
    ind = 0;
    reset = false;
    nbFiltreActif = 0;
    private loadResetSource = new Subject<number>();
    loadResetReceived$ = this.loadResetSource.asObservable();
    private loadResetAllSource = new Subject<boolean>();
    loadResetAllReceived$ = this.loadResetAllSource.asObservable();

    resetAll(): void {
        this.reset = true;
        this.loadResetAllSource.next(this.reset);
    }


    /* Verifies if the value already exists in an array */
    checkValue(value, array): Boolean {
        let status = false;
        for (let i = 0; i < array.length; i++) {
            const name = array[i];
            if (name === value) {
                status = true;
                break;
            }
        }
        return status;
    }

    /* #SEB Update this function with your parameters. And go to the enterprise.componenent.ts */
    /* this function return entreprises with the selected filter */
    /* params : */
    /* listCodeApe : the list of ape Code filter */

    /* listCateg : the list of  enterprise categ filter */
    getEnterpriseByParameters(listCodeApe = [], listCategEnt = [], listAreaEnt = [], listMunicipalityEnt = [],
                              listCreationYearEnt = [], listLegalStatusEnt = [], listWorkforceEnt = [],
                              listTotalRevenueEnt = [], listRegion = []): Observable<Object> {
        this.parameters = '&q='; // init the list of parameters
        this.addFilter(listCodeApe, 'apet700', this.codeApe);
        this.addFilter(listCategEnt, 'categorie', this.categ);
        this.addFilter(listAreaEnt, 'depet', this.area);
        this.addFilter(listMunicipalityEnt, 'libcom', this.municipality);
        this.addFilter(listCreationYearEnt, 'dcren', this.creationDate);
        this.addFilter(listLegalStatusEnt, 'libnj', this.legalstatus);
        this.addFilter(listWorkforceEnt, 'tefet', this.workforce);
        this.addFilter(listTotalRevenueEnt, 'tca', this.totalrevenue);
        this.addFilter(listRegion, 'libreg_new', this.region);
        let lengthParam = 0;
        lengthParam = this.parameters.length;
        this.parameters = this.parameters.substring(0, lengthParam - 4);
        console.log(ApiFirmService.BASE_URL + this.parameters);
        return this.http.get(ApiFirmService.BASE_URL + this.parameters);
    }

    /* Update this function with your parameters. And go to the map.componenent.ts */
    /* this function return map value with the selected filter */
    /* params : */
    /* listCodeApe : the list of ape Code filter */

    /* listCateg : the list of  enterprise categ filter */
    getMapByParameters(listCodeApe = [], listCategEnt = [], listAreaEnt = [], listMunicipalityEnt = [],
                       listCreationYearEnt = [], listLegalStatusEnt = []): Observable<any> {
        this.parameters = '&q='; // init the list of parameters
        this.addFilter(listCodeApe, 'apet700', this.codeApe);
        this.addFilter(listCategEnt, 'categorie', this.categ);
        this.addFilter(listAreaEnt, 'depet', this.area);
        this.addFilter(listMunicipalityEnt, 'libcom', this.municipality);
        this.addFilter(listCreationYearEnt, 'dcren', this.creationDate);
        this.addFilter(listLegalStatusEnt, 'nj', this.legalstatus);
        console.log(ApiFirmService.BASE_URL_MAP + this.parameters);
        return this.http.get(ApiFirmService.BASE_URL_MAP + this.parameters);
    }

    getAllEnterprises(): Observable<Object> {
        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=10&start=50');
    }

    /* this function add filter */
    /* params : */
    /* list : the list of filter value */
    /* fieldName : the name of the field in the API */
    /* paramName : the variable string who concat params */
    addFilter(list, fieldName, paramName) {
        let checkFirst = false;
        let last = false;
        let checkFirstLast = false;
        this.ind = 0;
        paramName += '(';
        list.forEach((item, index) => {
            if (index !== 0) {
                paramName += ' OR ';
            }
            if (item !== '') {
                paramName += fieldName + ':';
                paramName += item;
                this.ind++;
            }
        });
        paramName += ')';
        if (list.length > 0) {
            if (!checkFirstLast) {
                last = fieldName;
                checkFirstLast = true;
            }
            if (!checkFirst) {
                this.nbFiltreActif++;
                checkFirst = true;
            }
            this.parameters += paramName;
            console.log(this.nbFiltreActif);
            if (this.nbFiltreActif > 1) {
                this.parameters += ' AND ';
            }
        }
    }

    updateLoader() {
        if (this.loader) {
            this.loader = false;
        } else {
            this.loader = true;
        }
        this.loadLoaderSource.next(this.loader);
    }

    updateNbResult(data) {
        this.nbResult = data;
        this.loadNbResultSource.next(this.nbResult);
    }

    getEnterpriseSearch( valueSearchBar = '') {
        this.parameters = '&q='; // init the list of parameters
        this.parameters += 'siret:';
        this.parameters += valueSearchBar;
        this.search = this.http.get(ApiFirmService.BASE_URL + this.parameters);
        console.log(this.search);
        if (this.search['records'].length === 0 ) {
            return this.search;
        }
    }

}
