import { Component,Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-account-component',
  templateUrl:'./account.component.html'
})
export class AccountComponent {
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;

  }
  public http: HttpClient;
  public baseUrl: string;
  public UserName: string = '';
  public Password: string = '';
  public Login() {
    this.http.post(this.baseUrl + 'account', new LoginModel(this.UserName, this.Password)).subscribe(result => {
      alert("success" + result);
    },error=> alert("error"+error));
  }
}
class LoginModel {
  constructor(username: string, password: string) {
    this.Username = username;
    this.Password = password;
  }
  public Username: string;
  public Password: string;
}
