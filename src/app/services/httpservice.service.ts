import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
   Base_url='http://fundoonotes.incubation.bridgelabz.com/api';
  constructor( private http:HttpClient) {}

  postAPIcall(endpoint:String,Data:any){
    return this.http.post(this.Base_url+endpoint,Data);
  }

  getAPICall(endpoint:String){
    return this.http.get(this.Base_url+endpoint);
  }
}
