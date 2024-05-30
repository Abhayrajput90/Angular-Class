import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
      products = [
        {
          id : 1,
          title : 'Samsung Galaxy M34 5G',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          id : 2,
          title : 'Redmi 12 5G Jade Black ',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          id : 3,
          title : 'POCO M6 Pro 5G',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/51X1axWGFZL._SX679_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          id : 4,
          title : 'Xiaomi 14 (Jade Green,)',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/71MsYJjQhBL._SX679_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          id : 5,
          title : 'Lava Blaze 5G ',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/51CS5pPGiCL._SX679_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          id : 6,
          title : 'itel P55 5G',
          price : 200,
          img : 'https://m.media-amazon.com/images/I/41j10SoxPTL._SX300_SY300_QL70_FMwebp_.jpg',
          desc :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      ]
}
