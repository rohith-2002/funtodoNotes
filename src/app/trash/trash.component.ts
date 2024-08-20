import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any[]=[];
  neutralTones = [
    '#f5f5f5', '#e0e0e0', '#d6d6d6', '#cccccc', '#b3b3b3'
  ];
  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
    this.noteservice.getAllNotes("getTrashNotesList").subscribe({
      next:(res:any)=>{
        console.log(res);
        this.trashList=res.data.data;
        this.trashList = this.trashList.map((note: any) => ({
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
