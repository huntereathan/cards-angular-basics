import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  posts = [
    {
      title : 'Neat Tree',
      imageUrl : 'assets/tree.jpeg',
      username : 'nature',
      content : 'I saw this neat tree today'
    },
    {
      title : 'Snowy Mouuntain',
      imageUrl : 'assets/mountain.jpeg',
      username : 'nature',
      content : 'Here is picture of a snowy mountain'
    },
    {
      title : 'Mountain biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biking1222',
      content : 'I did some biking today'
    },
    {
      title : 'Mountain biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biking1222',
      content : 'I did some biking today'
    },
    {
      title : 'Mountain biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biking1222',
      content : 'I did some biking today'
    },
  ]

  getposts () {
    return this.posts;
  }
}
