import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  posts: post = {
    id: 0,
    name: "",
    phone: 0,
    email: ""
  } 

  constructor(private router: Router ,private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    // this.posts = this.postService.onGetPost(id);
  }

}
