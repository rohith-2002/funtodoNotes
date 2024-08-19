import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../services/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList:any[]=[];
  neutralTones = [
'#f5f5f5', '#e0e0e0', '#d6d6d6', '#cccccc', '#b3b3b3'
  ];
  constructor(private noteservice:NoteserviceService) { }
  ngOnInit(): void {
     
    this.noteservice.getAllNotes("getArchiveNotesList").subscribe({
      next:(res:any)=>{
        console.log(res);
        this.archiveList=res.data.data;
        this.archiveList = this.archiveList.map((note: any) => ({
          ...note,
          backgroundColor: this.getRandomNeutralTone()
        }));
      },error:(arr:any)=>{
        console.log(arr);
      }
    });

  }
  getRandomNeutralTone() {
    const randomIndex = Math.floor(Math.random() * this.neutralTones.length);
    return this.neutralTones[randomIndex];
  }

}
