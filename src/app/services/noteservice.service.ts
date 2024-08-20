import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  
  path_url:string ="/notes/";
  constructor(private httpservice:HttpserviceService) { }
  getAllNotes(url:any){
    const access_token = localStorage.getItem('access_token'); 
    const headers= new HttpHeaders({'Authorization':`${access_token}`});
    return this.httpservice.getAPICall(`${this.path_url}${url}`,{headers:headers});
  }
}
