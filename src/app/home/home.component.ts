import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beforeSearch: boolean = false;
  suspectLookup: any;
  nav: boolean = false;

  constructor(location: PlatformLocation) { 
    location.onPopState(() => {
      this.nav = false;
      window.location.reload();
    });
  }

  ngOnInit() {
  }

  beforeClick(value) {
    this.beforeSearch = value;
  }

  afterClick(suspectLookup) {
    this.suspectLookup = suspectLookup;
  }

  onNav() {
    this.nav = true;
  }

}
