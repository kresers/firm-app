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

    getMyServ(): void {
    }

    getAllEnterprises(): Observable<Object> {

        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=1000&start=50');
    }

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
        console.log(ApiFirmService.BASE_URL + this.parameters);
        return this.http.get(ApiFirmService.BASE_URL + this.parameters);
    }
}
