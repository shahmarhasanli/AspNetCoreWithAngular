import { HttpClient } from '@angular/common/http';
import {Component, Inject} from '@angular/core';

@Component({
    selector:'app-account-login',
    templateUrl:'./account-login.component.html'
})
export class AccountLoginComponent{
    constructor(http:HttpClient,@Inject('BASE_URL') baseUrl:string){
        this.baseUrl = baseUrl;
        this.http = http;
    }
    http:HttpClient;
    baseUrl:string;

    Username:string='';
    Password:string='';

    Login(){
        let request :LoginModel = new LoginModel(this.Username,this.Password);
        //this.http.post(this.baseUrl+'account/Login',request);
            // .subscribe(result=>{
            //     console.log("success"+result);
            // },error=> console.log("error"+error));
      this.http.get<number[]>(this.baseUrl + 'account').subscribe(result => {
     }, error => console.error(error));
    }
}
 class LoginModel{
    constructor( Username:string, Password:string){
        this.Password = Password;
        this.Username = Username;
    }
    Username:string;
    Password:string;
}
