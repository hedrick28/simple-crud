import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { EditComponent } from './form/edit/edit.component';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent,
    EditComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ],
  providers:[],
  
  

})
export class BookModule { }
