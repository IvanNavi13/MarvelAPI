import * as CryptoJS from 'crypto-js';

export class Constants{

    static publicKey : string = "3be519c4ef0ee0703bfc0b3e6d0400e1";
    static privateKey : string = "38524cd2efd3f23f9b9413356de49f12d190dc36";
    static ts : string = "1";
    static hash : string = CryptoJS.MD5(this.ts+this.privateKey+this.publicKey).toString();
    
    static MY_VIEWS = 'MYVIEWS';
}