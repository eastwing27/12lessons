import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: `search.component.htm`,
    //providers: [GithubService]
})
export class SearchComponent
{
    searchStr: string;

    constructor(private _spotify: SpotifyService){

    }

    searchMusic(){
        // console.info(this.searchStr);
        this._spotify.searchMusic(this.searchStr).subscribe(res => {
            console.log(res);
        });
    }
}