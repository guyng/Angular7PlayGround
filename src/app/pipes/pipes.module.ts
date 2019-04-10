import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { CommonModule } from '@angular/common';
import { MultiplierPipe } from './custom/multiplier.pipe';
const routes: Routes = [
    {
        path       : '',
        component  : SampleComponent
    }]

@NgModule({
    declarations:[SampleComponent,MultiplierPipe],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class PipesModule
{

}
