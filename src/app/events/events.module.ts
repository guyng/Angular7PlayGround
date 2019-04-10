import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { HostComponent } from './host/host.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
const routes: Routes = [
    {
        path       : 'emitter',
        component  : EventemitterComponent
    },
    {
        path       : 'host',
        component  : HostComponent
    },
    {
        path       : 'observable',
        component  : ObservableComponent
    }]

@NgModule({
    declarations:[
        EventemitterComponent,
        HostComponent,
        ObservableComponent,
        SubjectComponent],
    imports:[
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class EventsModule
{

}
