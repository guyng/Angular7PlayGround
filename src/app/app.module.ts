import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerComponent } from './eager/eager.component';
import { RouterModule } from '@angular/router';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { SimpleComponent } from './simple/simple.component';
import { TestService } from './services/test.service';
import { ObsSampleComponent } from './obs-sample/obs-sample.component';
import { SampleComponent } from './ngrx/sample/sample.component';
import { HostComponent } from './events/host/host.component';
import { CommonModule } from '@angular/common';

const routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    LifecyclesComponent,
    SimpleComponent,
    ObsSampleComponent,
    SampleComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
