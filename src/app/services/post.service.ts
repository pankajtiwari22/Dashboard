import { Injectable } from '@angular/core';
import { post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: post[] = [
    {
      id: 1,
      name: "vasu",
      email: "va@Gamepad.co",
      phone: 8384856741
    },
    {
      id: 1,
      name: "vipin",
      email: "vipa@Gaepad.co",
      phone: 8384844441
    }
  ];

  constructor() { }

  onGet(){
    return this.posts;
  }

  onGetPost(id: number){
     return this.posts.find(x=>x.id === id);
  }

  onAdd(post: post){
    this.posts.push(post);
  }

  onDelete(element: post){
     let index = this.posts.indexOf(element, 0);
     this.posts.splice(index,1);
  }
}
