import { Component } from '@angular/core';
import {AuthorizationService} from './services/authorization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authorizationService: AuthorizationService){}
  login(){
	 this.authorizationService.login()
	 .then((data)=>{
		 console.log(data);
		 alert("Logged");
	 })
	 .catch((error)=>{
		 console.log(error);
		 alert("error");
	 })
	 ; 
  }
}
