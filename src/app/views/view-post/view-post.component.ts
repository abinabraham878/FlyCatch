import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  isLoaded:boolean;
  public cardId = 0;
  public selectedItem : any;
  public postDetails: any;
  public postComments: any;
  

  constructor(private postsService: PostsService) { 
    this.isLoaded = false;
  }

  ngOnInit(): void {
    
      this.selectedItem = this.postsService.getpost();
      this.cardId = this.selectedItem.id;

      this.getPostById();
  }

  public getPostById(){
      this.postsService.getselectedPost(this.cardId).subscribe(data =>{
        this.postDetails = data;
        console.log(data);

        this.getPostComments(this.cardId);
      });
  }

  public getPostComments(id: any){
    this.isLoaded = false;
      this.postsService.comments(id).subscribe(data =>{
        this.postComments = data;
        if(this.postComments.length > 0){
          this.isLoaded = true;
        }

        console.log(data);
      });
  }

}
