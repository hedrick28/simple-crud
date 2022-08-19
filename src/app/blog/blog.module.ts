import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './forms/edit/edit.component';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';
import { BlogComponent } from '../shared/components/command-bar/blog/blog.component';




@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
    EditComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class BlogModule { }
