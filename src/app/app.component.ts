import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Montains',
      url: 'https://images.unsplash.com/photo-1548588627-f978862b85e1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGFpbnxlbnwwfDB8MHx8fDA%3D',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfDB8MHx8fDA%3D',
    },
  ];

  currentPage = 0;

  getClass() {
    // const classes = [];
  }
}
