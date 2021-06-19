import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from './material-component.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SingleBookComponent } from './components/single-book/single-book.component';



@NgModule({
  declarations: [
    SingleBookComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    MaterialComponentModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SingleBookComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
