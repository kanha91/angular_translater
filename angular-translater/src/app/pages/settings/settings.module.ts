import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './setings.routes';



@NgModule({
  declarations: [SettingsComponent],
  exports:[SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes)
  ]
})
export class SettingsModule { }
