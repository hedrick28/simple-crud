import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItem : Blog | undefined
  @Output() actionEmitter = new EventEmitter<Blog>();
  blogs! : Blog [];
  constructor(private _blogService: BlogService) { }

  ngOnInit(){
    this.blogs = this._blogService.getBlogDetails();
  }

  edit (){
    this.actionEmitter.emit(this.blogItem)
  }

  delete(){
    this.actionEmitter.emit(this.blogItem)
  }

}
