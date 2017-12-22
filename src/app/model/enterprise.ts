export class Enterprise {

    constructor(siren, l1_normalisee, codpos, libcom, dcren) {

                this.siren = siren ;
                this.address =  l1_normalisee;
                this.postal_code = codpos ;
                this.city = libcom;
                this.established_on = dcren ;

                }

    siren: number;
    address: string;
    postal_code : number;
    city: string;
    established_on : number;
}