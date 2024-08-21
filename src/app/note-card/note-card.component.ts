import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  constructor() { }
  @Input()note:any;
  @Input()backgroundColor?: string;

  ngOnInit(): void {
  }
  
  deleteicon(){
    console.log(this.note);
    const noteid=this.note.isDeleted;
    console.log(noteid);
  }

}
