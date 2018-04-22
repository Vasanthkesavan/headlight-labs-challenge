import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule
    ]
})
export class CustomMaterialModule { }
