import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class ApiFirmService {

  constructor(private http: HttpClient) { }
  listEnterprise = [];

    getMyServ(): void {
    }

    getAllEnterprises(): Observable<Object> {

      return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=1000&start=50');
    }

    getEnterpriseByParameters(listZipCode): Observable<Object> {
        this.parameters.concat('&q='); // init the list of parameters
        // list of zipCode parameter
        listZipCode.forEach((item, index) => {
            this.zipCodes.concat('codpos:');
            this.zipCodes.concat(item);
            this.zipCodes.concat('+OR+');
        });
        this.parameters.concat(listZipCode);
        return this.http.get(' /api/records/1.0/search/?dataset=base-sirene%40datanova' + this.parameters);
    }
}
