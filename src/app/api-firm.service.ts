import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';
import {count} from "rxjs/operator/count";

@Injectable()
export class ApiFirmService {
    static BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=2000&start=0';

    constructor(private http: HttpClient) {
    }

    listEnterprise = [];
    parameters = '';
    codeApe = '';
    categ = '';
    loader = false;
    private loadLoaderSource = new Subject<boolean>();
    loadLoaderReceived$ = this.loadLoaderSource.asObservable();

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
    getEnterpriseByParameters(listCodeApe=[], listCategEnt=[]): Observable<Object> {
        this.parameters = '&q='; // init the list of parameters
        // list of codeApe parameter
        listCodeApe.forEach((item, index) => {
            // first time in the loop we don't add "+OR+"
            if (index !== 0) {
                this.codeApe += '+OR+';
            }
            // if the item is not null we add the label filter + the value of filter */
            if (item !== '') {
                this.codeApe += 'apet700:';
                this.codeApe += item;
            }
        });
        /* if we have code ape filter we add '&' for the next filter */
        if (listCodeApe !== []) {
            this.parameters += this.codeApe;
            this.parameters += '&';
        }
        /* list of categ eterprise */
        listCategEnt.forEach((item, index) => {
            if (index !== 0) {
                this.categ += '+OR+';
            }
            if (item !== '') {
                this.categ += 'categorie:';
                this.categ += item;
            }
        });
        /* if we have list categ filter we add '&' for the next filter */
        if (listCodeApe !== []) {
            this.parameters += this.categ;
            this.parameters += '&';
        }
        this.parameters += this.codeApe;
        return this.http.get(ApiFirmService.BASE_URL + this.parameters);
    }

    getAllEnterprises(): Observable<Object> {
        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=1000&start=50');
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
