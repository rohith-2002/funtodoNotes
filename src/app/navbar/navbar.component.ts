import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText:string='';
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  
  onsearch(){
    console.log(this.searchText);
    this.dataservice.sendData(this.searchText);
  }


}
