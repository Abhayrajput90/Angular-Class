import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HomeServicesComponent } from './home-services/home-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HomeServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
