import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
    MyData = [
      {
        id : "1",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "2",
        title : "Corporate Catering",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "3",
        title : "Cocktail Reception",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "4",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "5",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "6",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "7",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      },
      {
        id : "8",
        title : "Wedding Services",
        desc : "Contrary to popular belief, ipsum is not simply random.",
        link : "#"
      }
    ];
}
