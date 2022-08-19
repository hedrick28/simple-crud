import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';
import { EditComponent } from './forms/edit/edit.component';


const routes: Routes = [
  {
    path: "blog-item",
    component : BlogItemComponent
  },
  {
    path: "blog-list",
    component : BlogListComponent
  },
  {
    path: 'modules/blog/pages/blog-form',
    component: BlogFormComponent
  },
  {
    path: "blog/forms/edit",
    component: EditComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class BlogRoutingModule { }
