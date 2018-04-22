import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { UserSubmitService } from '../../../usersubmit/usersubmit.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-match-score',
    styleUrls: ['match-score.component.css'],
    templateUrl: 'match-score.component.html'
})
export class MatchScoreComponent implements OnChanges {
    @Input() suspectLookup;
    @ViewChild("baseChart") chart: BaseChartDirective;

    reported: boolean = false; 
    reportMessage: string = '';

    private pieChartLabels:string[] = ['Similarity Score', 'Unsimilar Score'];
    private pieChartData:number[] = [0, 100]; // initial value
    private pieChartType:string = 'pie';
    private pieChartColors:Array<any> = [
        {
          backgroundColor: ['#808080', '#ffffff'],
          borderColor: '#808080',
        }
    ];

    constructor(private userSubmitService: UserSubmitService) { }

    // Needs to be re-rendered after new data has arrived
    reloadChart() {
        if (this.chart !== undefined) {
           this.chart.chart.destroy();
           this.chart.chart = 0;
    
           this.chart.datasets = this.pieChartData;
           this.chart.labels = this.pieChartLabels;
           this.chart.ngOnInit();
        }
    }

    ngOnChanges() {
        setTimeout(() => {
            this.pieChartData[0] = this.suspectLookup['percent_match'];
            this.pieChartData[1] = 100 - this.pieChartData[0];
        }, 1000);
    }

    onReport() {
        this.reported = true;
        this.userSubmitService.reportSuspect()
            .subscribe(
                (data) => {
                    this.reportMessage = data["status"];
                },
                (error) => {
                    this.reportMessage = "Error in report, Please try again";
                } 
            )
    }
}