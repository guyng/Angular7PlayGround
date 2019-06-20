import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentSampleComponent } from './parent-sample/parent-sample.component';
import { ChildSampleComponent } from './child-sample/child-sample.component';

const routes: Routes = [
    {
        path       : 'parent',
        component  : ParentSampleComponent
    },
    {
        path       : 'child',
        component  : ChildSampleComponent
    }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
