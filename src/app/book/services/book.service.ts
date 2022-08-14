import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  deletePerson(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getDetails : Book[] = 
  [{id: 1, 
    name:"To kill a Mockingbird", 
    authors: ["Harper Lee"], 
    isbn: "978-3-16-148410-0"},
    {id: 2, 
    name:"To great Gatsby", 
    authors: ["F. Scott Fitzgerald"], 
    isbn: "978-3-16-148410-1"},
    {id: 3, 
    name:"The catcher in the Rye", 
    authors: ["J.D Salinger"], 
    isbn: "978-3-16-148410-2"}];

  getBookDetails(){
    return this.getDetails
  }

  getDetail(){
    return this.getDetails[0];
  }

}

