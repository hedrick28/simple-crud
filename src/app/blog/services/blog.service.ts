import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getDetails : Blog[] = 
  [{id: 1, 
    title:"TechCrunch", 
    description: "American online newspaper.", 
    author: "Keith Teare",
    comments: ["Focuses on high technology", "Great newspaper"]},
    {id: 2, 
      title:"Mashabe", 
      description: "Digital online platform", 
      author: "Pete Cashmore",
      comments: ["Nomination for Shorty Industry Award for Best Overall Instagram Presence"]},
    {id: 3, 
      title:"enGadget", 
      description: "Multilingual technology blog network.", 
      author: "Peter Rojas",
      comments: ["Engadget manages ten blogs four of which are written in English."]}];

  getBlogDetails(){
    return this.getDetails
  }
}
