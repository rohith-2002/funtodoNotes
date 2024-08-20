import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.scss']
})
export class NoteComponentComponent implements OnInit {
  notesList:any=[];

  neutralTones = [
   '#f5f5f5', '#e0e0e0', '#d6d6d6', '#cccccc', '#b3b3b3'
  ];
  constructor( private noteservice:NoteserviceService) { }

  ngOnInit(): void {
    this.noteservice.getAllNotes("getNotesList").subscribe({
      next:(res:any)=>{
        console.log(res);
        this.notesList=res.data.data;
        
        this.notesList = this.notesList.map((note: any) => ({
          ...note,
          backgroundColor: this.getRandomNeutralTone()
        }));
      },error:(err:any)=>{
        console.log(err);
      }
    });
  }
  getRandomNeutralTone() {
    const randomIndex = Math.floor(Math.random() * this.neutralTones.length);
    return this.neutralTones[randomIndex];
  }

}
