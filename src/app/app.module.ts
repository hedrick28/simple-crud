import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './shared/components/header/header.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BlogModule,
    UserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
