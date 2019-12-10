import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';


@NgModule({
  declarations: [ProfileComponent, Profile1Component],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
