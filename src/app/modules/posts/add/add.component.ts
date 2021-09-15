import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private router: Router ,private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    let posts: post = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.number
    }

    this.postService.onAdd(posts);
    this.router.navigateByUrl('/posts');
  }
}
