import { Component, OnInit } from '@angular/core';
import { UserSubmitService } from '../usersubmit/usersubmit.service';

@Component({
    selector: 'recent-suspects',
    styleUrls: ['recent-suspects.component.css'],
    templateUrl: 'recent-suspects.component.html'
})
export class RecentSuspects implements OnInit {
    constructor(private userSubmitService: UserSubmitService) {  }
    recentSuspectImages = [];

    ngOnInit() {
        this.userSubmitService.getRecentSuspects()
            .subscribe(
                (data) => {
                    console.log(data)
                    data = this.recentSuspectImages;
                } 
            )
    }
}