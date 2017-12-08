import { Injectable } from '@angular/core';

@Injectable()
export class ApiFirmService {

  constructor() { }
  list = [ 'yo', 'ya', 'yi' ];
    static test() {
    return 'salut';
  }

}
