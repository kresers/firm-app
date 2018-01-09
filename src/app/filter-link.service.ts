import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FilterLinkService {


    private loadCodeApeSource = new Subject<[string]>();
    loadCodeApeReceived$ = this.loadCodeApeSource.asObservable();
    private loadLoaderSource = new Subject<boolean>();
    loadLoaderReceived$ = this.loadLoaderSource.asObservable();

    constructor() {
    }

    LoadCodeApe(codeApe): void {
        this.loadCodeApeSource.next(codeApe);
    }

    LoadLoader(loader): void {
        console.log(loader);
        this.loadLoaderSource.next(loader);
    }

}
