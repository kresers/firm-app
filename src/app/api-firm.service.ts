import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class ApiFirmService {
    static BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=200&start=50';

    constructor(private http: HttpClient) {
    }

    listEnterprise = [];
    parameters = '';
    zipCodes = '';
    /* celui qui à écrit cette fonction est invité à commenté merci :) . Elle était ancienement situé dans le filter component*/
    static checkValue(value, array) {
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

    /* listZipcode -> this an example */
    getEnterpriseByParameters(listZipCode): Observable<Object> {
        this.parameters = '&q='; // init the list of parameters
        // list of zipCode parameter
        listZipCode.forEach((item, index) => {
            if (index !== 0) {
                this.zipCodes += '+OR+';
            }
            this.zipCodes += 'codpos:';
            this.zipCodes += item;
        });
        this.parameters += this.zipCodes;
        return this.http.get(ApiFirmService.BASE_URL + this.parameters);
    }
}
