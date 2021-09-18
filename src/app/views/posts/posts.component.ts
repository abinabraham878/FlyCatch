import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts/posts.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  p:any;
  public posts: any;
  

  constructor(private postsService: PostsService
    , private router:Router) {
    
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts(){
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  public viewPost(id : any){
    let selectedItem = {
      id: id
    }
    this.postsService.setpost(selectedItem);
    this.router.navigate(['/view-post'])
  }

 
}
