
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectorComponent } from './components/selector/selector.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,

    CardComponent,
    SelectorComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    MatButtonToggleModule,
    MatOptionModule,
    FormsModule



  ],
  exports: [
    MainPageComponent
  ],

  providers: [],
})
export class CatalogueModule { }
