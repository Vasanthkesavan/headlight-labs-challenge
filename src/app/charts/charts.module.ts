import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

// Smart Components
import { MatchScoreComponent } from './containers/match-score/match-score.component';
import { CustomMaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        MatchScoreComponent
    ],
    imports: [
        CommonModule,
        ChartsModule,
        CustomMaterialModule
    ],
    exports: [
        MatchScoreComponent
    ]
})
export class ChartModule { }
