import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: any;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts(){
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
