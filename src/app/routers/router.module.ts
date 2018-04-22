import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HuntersComponent } from '../hunters/hunters.component';

const routes: Routes = [
    { path: 'hunters', component: HuntersComponent }
];

export const routingComponents = [HuntersComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
