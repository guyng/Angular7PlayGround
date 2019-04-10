import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
const routes: Routes = [
    {
        path       : '',
        component  : SampleComponent
    }]

@NgModule({
    declarations:[SampleComponent],
    imports:[
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class TestingModule
{

}
