import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  envTitle = environment.envTitle;
  envURL = environment.envURL;

  constructor() { }

  ngOnInit(): void {
  }

}
