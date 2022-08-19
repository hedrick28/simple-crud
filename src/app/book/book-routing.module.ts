import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';
import { EditComponent } from './form/edit/edit.component';


const routes: Routes = [
  {
    path: "book-item",
    component : BookItemComponent
  },
  {
    path: "book-list",
    component : BookListComponent
  },
  {
    path: 'modules/book/pages/book-form',
    component: BookFormComponent
  },
  {
    path: 'book/form/edit',
    component: EditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
