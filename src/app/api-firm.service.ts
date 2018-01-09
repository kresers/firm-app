import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiFirmService {
    static BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=200&start=0';

    constructor(private http: HttpClient) {
    }

    listEnterprise = [];
    parameters = '';
    codeApe = '';
    loader = false;
    private subBoolShowHideSource = new Subject<boolean>();
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

    /* this function return entreprises with the selected filter */
    /* params : */

    /* listCodeApe : the list of ape Code filter */
    getEnterpriseByParameters(listCodeApe): Observable<Object> {
        this.parameters = '&q='; // init the list of parameters
        // list of codeApe parameter
        listCodeApe.forEach((item, index) => {
            if (index !== 0) {
                this.codeApe += '+OR+';
            }
            this.codeApe += 'apet700:';
            this.codeApe += item;
        });
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
