import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input ('bookItem') book : Book | any
  @Output () actionEmitter = new EventEmitter<Book>();
  books! : Book [];
  constructor(private _bookService: BookService) { }

  ngOnInit(){
    this.books = this._bookService.getBookDetails();
  }

  sendAction() {
    this.actionEmitter.emit(this.book)
  }

  }

