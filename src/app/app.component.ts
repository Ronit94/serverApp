import { Component, OnInit,ViewChild , NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private zone:NgZone, private router:Router) { }
  ngOnInit() {
  	
  }
}
