import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ApiFirmService {

  constructor(private http: HttpClient) { }
  listEnterprise = [];

    getMyServ(): void {
    }

    getAllEnterprises(): Observable<Object> {

        return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=base-sirene%40datanova&rows=1000&start=50');
    }
}
