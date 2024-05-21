import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.css',
})
export class HomeServicesComponent {
  myData = [
    {
      id: 1,
      title: 'Wedding Services',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-cheese",
      category: "Event"
    },
    {
      id: 2,
      title: 'Corporate Catering',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-pizza-slice",
      category: "Catering"
    },
    {
      id: 3,
      title: 'Cocktail Reception',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-hotdog",
      category: "Event"
    },
    {
      id: 4,
      title: 'Bento Catering',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-hamburger",
      category: "Catering"
    },
    {
      id: 5,
      title: 'Pub Party',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-wine-glass-alt",
      category: "Event"
    },
    {
      id: 6,
      title: 'Home Delivery',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-walking",
      category: "Other"
    },
    {
      id: 7,
      title: 'Sit-down Catering',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-wheelchair",
      category: "Catering"
    },
    {
      id: 8,
      title: 'Buffet Catering',
      desc: 'Contrary to popular belief, ipsum is not simply random.',
      link: '#',
      className : "fa-utensils",
      category: "Catering"
    },
  ];

  filterData : string = 'All';
  dataChange(event:any){
    this.filterData = event.target.value;
  }

  searchVal:string = 'All';
  getFullData(evt:any){
    this.searchVal = evt.target.value;
  }
}
