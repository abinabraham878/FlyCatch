import { PostsComponent } from './views/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './views/view-post/view-post.component';

const routes: Routes = [
  { path:'', component:PostsComponent},
  { path:'view-post', component:ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
