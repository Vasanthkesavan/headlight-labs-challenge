import  { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { UsersubmitComponent } from './containers/usersubmit.component';
import { CustomMaterialModule } from '../material/material.module';

// Services
import { UserSubmitService } from './usersubmit.service';

@NgModule({
    declarations: [
        UsersubmitComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule
    ],
    exports: [
        UsersubmitComponent
    ],
    providers: [UserSubmitService]
})
export class UserSubmitModule {}
