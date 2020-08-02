import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-gallery',
  templateUrl: './featured-gallery.component.html',
  styleUrls: ['./featured-gallery.component.css']
})
export class FeaturedGalleryComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'assets/img/slider/lol-1-sc.jpg',
    thumbImage: 'assets/img/slider/lol-1-sc.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'assets/img/slider/lol-2-sc.jpg',
    thumbImage: 'assets/img/slider/lol-2-sc.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  imageGallerySizeOptions: any = {
    width: '800px',
    height: '600px',
    space: 5
  };

  constructor() { }

  ngOnInit(): void {
  }

}
