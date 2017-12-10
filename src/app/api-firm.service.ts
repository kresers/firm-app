import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ApiFirmService {

  constructor(private http: HttpClient) { }
  list = [ 'yo', 'ya', 'yi' ];
  listEnterprise = [];
    static test() {
    return 'salut';
  }

    getMyServ(): void {
    }

    getAllEnterprises(): Observable<Object> {

        return this.http.get('https://firmapi.com/api/v1/companies');
    }
}
