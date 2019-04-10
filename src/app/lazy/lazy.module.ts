import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
const routes: Routes = [
    {
        path       : '',
        component  : LazyComponent
    }]

@NgModule({
    declarations:[LazyComponent],
    imports:[
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class LazyModule
{

}
