import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = '72a9fbddef93f07aeeb7';
    private client_secret = '17307e857f9e2008629505c5c2cb38023b16968b';

    constructor(private _http: Http){
        this.username = 'eastwing27';
    }

    getUser(){
        this._http.get('http"//api.github.com/users/'+this.username)
            .map (res => res.json);
    }
}