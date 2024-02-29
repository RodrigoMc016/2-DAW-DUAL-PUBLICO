import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './catalogue/components/card/card.component';

import { SelectorComponent } from './catalogue/components/selector/selector.component';

const routes: Routes = [

  {
    path:'products',
    component:CardComponent
  },
  {
    path:'categories',
    component:SelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
