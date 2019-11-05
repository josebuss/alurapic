import { PhotoService } from './photos/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private service: PhotoService) { }

  ngOnInit(): void {
    this.service.listFromUser('flavio').subscribe(photos => this.photos = photos);
  }
}
