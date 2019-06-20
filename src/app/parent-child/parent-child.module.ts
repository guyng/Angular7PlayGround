import { NgModule } from '@angular/core';
import { ParentSampleComponent } from './parent-sample/parent-sample.component';
import { ChildSampleComponent } from './child-sample/child-sample.component';
import { ParentChildRoutingModule } from './parent-child-router.module';


@NgModule({
    declarations:[ParentSampleComponent,ChildSampleComponent],
    imports:[ ParentChildRoutingModule
    ],
    providers: [],
    exports: [ChildSampleComponent]
})

export class ParentChildModule
{

}
