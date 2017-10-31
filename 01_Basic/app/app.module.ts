import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home.component'
import { AboutComponent } from './components/pages/about.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component'

@NgModule({
    imports: [BrowserModule, routing ],
    declarations: [
        AppComponent, 
        HomeComponent,
        AboutComponent,
        NavbarComponent, 
        JumbotronComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
