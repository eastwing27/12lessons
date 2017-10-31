import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
    imports: [BrowserModule, routing ],
    declarations: [
        AppComponent,
        ProfileComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
