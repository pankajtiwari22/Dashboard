import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { todo } from 'src/posts';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: post[];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','Edit','Delete'];
  dataSource = new MatTableDataSource<post>();

  
  constructor(private postService: PostService ) {
  }

  ngOnInit(): void {
  this.posts = this.postService.onGet();
  this.dataSource = new MatTableDataSource<post>(this.posts);
  }

  onDelete(j: post){
    this.dataSource.data.splice(this.dataSource.data.indexOf(j, 0));
    this.dataSource = new MatTableDataSource<post>(this.posts);
  }

}
