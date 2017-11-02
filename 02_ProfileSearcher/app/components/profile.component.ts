import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.htm`,
})
export class ProfileComponent {
    user: any;
    repos: any;
    username: string;

    
    constructor(private _githubService: GithubService)
    {
        this.user = false;
    }
        
    updateData()
    {
        this._githubService.getUser().subscribe(user =>
        {
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos =>
        {
            this.repos = repos;
        })
    }
    searchUser(){
        this._githubService.updateUser(this.username);
        this.updateData();
    }
 }
