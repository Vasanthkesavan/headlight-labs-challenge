import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HuntersComponent } from './hunters.component';

// modules
import { CustomMaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        HuntersComponent
    ],
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    exports: [
        HuntersComponent
    ],
    providers: []
})
export class HuntersModule { }
