import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { NoteserviceService } from '../services/noteservice.service';
import { HttpserviceService } from '../services/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  @Output() noteAdded:EventEmitter<any>=new EventEmitter<any>();
  notesform!:FormGroup;
  isExpanded:Boolean=false;
  constructor(private fb:FormBuilder,private noteservice:NoteserviceService,private httpservice:HttpserviceService,private router:Router ) { }    
     
      ngOnInit(): void {
        this.notesform=this.fb.group({
          title:[''],
          note:[''],
          isPinned:[false],
          isReminded:[false],
          isArchived:[false]
        });
   
      }

      addNote=()=>{
        let notesdata=this.notesform.value;
        let formData={
          title:this.notesform.get('title')?.value,
          description:this.notesform.get('note')?.value,
          isPined:this.notesform.get('isPinned')?.value,
          isArchived:this.notesform.get('isArchived')?.value
        }
        this.noteservice.addNotes('addNotes',formData).subscribe({
          next:(res:any)=>{
            console.log(res);
            this.router.navigate(['./dashboard/notes']);
          },
          error:(err: any) => console.log(err),
          complete:()=>{}
        })
      }

      submitNote=()=>{
        this.isExpanded=false;
        console.log(this.notesform.value);
        this.addNote();
   
      }
      expand=()=>{
        this.isExpanded=true;
      }

}
