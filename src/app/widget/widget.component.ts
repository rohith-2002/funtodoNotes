// fundooNotes/src/app/widget/widget.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
        this.currentRoute = this.router.url;
        console.log(this.currentRoute);
    });
  }

  ngOnInit(): void {}
}