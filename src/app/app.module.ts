import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthorizationService} from './services/authorization.service';

import { AppComponent } from './app.component';

export const firebaseConfig = {
	apiKey: "AIzaSyDEc3XiSDVpIUC8BR47u1JRYDLMcfOOsoQ",
    authDomain: "lyda-project.firebaseapp.com",
    databaseURL: "https://lyda-project.firebaseio.com",
    //projectId: "lyda-project",
    storageBucket: "lyda-project.appspot.com",
    messagingSenderId: "938680581248"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule,
	AngularFireAuthModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
