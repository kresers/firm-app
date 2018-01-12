import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';
import {count} from 'rxjs/operator/count';

@Injectable()
export class ApiFirmService {
    static BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=2000&start=0';

    constructor(private http: HttpClient) {
    }

    listEnterprise = [];
    parameters = '';
    codeApe = '';
    categ = '';
    area = '';
    loader = false;
    private loadLoaderSource = new Subject<boolean>();
    loadLoaderReceived$ = this.loadLoaderSource.asObservable();
    ind = 0;

    /* celui qui à écrit cette fonction est invité à commenté merci :) . Elle était ancienement situé dans le filter component*/
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
    getEnterpriseByParameters(listCodeApe = [], listCategEnt = [], listAreaEnt = []): Observable<Object> {
        this.parameters = '&q='; // init the list of parameters
        this.addFilter(listCodeApe, 'apet700', this.codeApe);
        this.addFilter(listCategEnt, 'categorie', this.categ);
        this.addFilter(listAreaEnt, 'depet', this.area);
        console.log(ApiFirmService.BASE_URL + this.parameters);
        return this.http.get(ApiFirmService.BASE_URL + this.parameters);
    }

    getAllEnterprises(): Observable<Object> {
        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=1000&start=50');
    }

    /* this function add filter */
    /* params : */
    /* list : the list of filter value */
    /* fieldName : the name of the field in the API */
    /* paramName : the variable string who concat params */
    addFilter(list, fieldName, paramName) {
        this.ind = 0;
        list.forEach((item, index) => {
            if (index !== 0) {
                paramName += '+OR+';
            }
            if (item !== '') {
                paramName += fieldName + ':';
                paramName += item;
                this.ind++;
            }
        });
        if (list.length > 0) {
            this.parameters += paramName;
            if (this.ind >= list.length) {
                this.parameters += '&';
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
}
