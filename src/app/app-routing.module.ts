import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager/eager.component';
import { SimpleComponent } from './simple/simple.component';
import { ObsSampleComponent } from './obs-sample/obs-sample.component';

const routes: Routes = [  {
  path: 'directives',
  loadChildren: './directives/directives.module#DirectivesModule'
},  
{
  path: 'events',
  loadChildren: './events/events.module#EventsModule'
},
{
  path  : 'lazy',
  loadChildren: './lazy/lazy.module#LazyModule'
},
{
  path: 'pipes',
  loadChildren: './pipes/pipes.module#PipesModule'
},
{
  path: 'routing',
  loadChildren: './routing/routing.module#RoutingModule'
},
{
  path: 'testing',
  loadChildren: './testing/testing.module#TestingModule'
},
{
  path: 'eager',
  component: EagerComponent
},
{
  path: 'simple',
  component: SimpleComponent
},
{
  path: 'obs',
  component: ObsSampleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
