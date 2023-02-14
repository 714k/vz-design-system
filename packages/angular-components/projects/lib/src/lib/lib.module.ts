import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibComponent } from './lib.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    LibComponent,
    HeaderNavigationComponent
  ],
  imports: [RouterModule],
  exports: [
    LibComponent
  ]
})
export class LibModule { }
