import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserSubmitService } from '../usersubmit/usersubmit.service';

@Component({
    selector: 'app-leaderboard',
    styleUrls: ['leaderboard.component.css'],
    templateUrl: 'leaderboard.component.html'
})
export class Leaderboard implements OnInit { 
    displayedColumns = ['position', 'name', 'totalHunts'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    @ViewChild(MatSort) sort: MatSort;

    constructor( private userSubmitService: UserSubmitService ) { }
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */

    ngOnInit() {
      // Make a call to the server and get all the user information of the type Element
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
  }
  
  export interface Element {
    name: string;
    position: number;
    totalHunts: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Vasanthan Kesavan', totalHunts: 12},
    {position: 2, name: 'Joker', totalHunts: 10},
    {position: 3, name: 'Batman', totalHunts: 7},
    {position: 4, name: 'Ninja', totalHunts: 6},
    {position: 5, name: 'Pikachu', totalHunts: 3},
    {position: 6, name: 'Jon Snow', totalHunts: 2}
  ];