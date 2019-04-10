import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttributeComponent } from './attribute/attribute.component';
import { StructuralComponent } from './structural/structural.component';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path       : 'attr',
        component  : AttributeComponent
    },
    {
        path       : 'struct',
        component  : StructuralComponent
    },
]

@NgModule({
    declarations:[ HighlightDirective,
        AttributeComponent,
        StructuralComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class DirectivesModule
{

}
