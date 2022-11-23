import { HttpClient } from '@angular/common/http';
import {Component, Inject} from '@angular/core';

@Component({
    selector:'app-component-account',
    templateUrl:'./account.component.ts'
})
export class AccountComponent{
    constructor(http:HttpClient,@Inject('BASE_URL') baseUrl:string){
        this.baseUrl = baseUrl;
        this.http = http;
    }
    http:HttpClient;
    baseUrl:string;

    Username:string='';
    Password:string='';

    Login(){
        this.http.post(this.baseUrl+'account',new LoginModel(this.Username,this.Password))
            .subscribe(result=>{
                alert("success"+result)
            },error=> alert("error"+error));
    }
}
 class LoginModel{
    constructor(private Username:string,private Password:string){
        this.Password = Password;
        this.Username = Username;
    }
}