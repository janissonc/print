import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  url = '';
  classHome = '';
  classOuvinte = '';
  classTrabalho = '';
  ngOnInit(): void {
    this.onClass();
  }

  onClass() {
    this.url = this.router.url;
    //console.log(this.url)
    switch (this.url) {
      case '/':
        this.classHome = 'menu-active';
        this.classOuvinte = '';
        this.classTrabalho = '';
        break;

      case '/insc-ouvinte':
        this.classHome = '';
        this.classOuvinte = 'menu-active';
        this.classTrabalho = '';
        break;

      case '/insc-trabalho':
        this.classHome = '';
        this.classOuvinte = '';
        this.classTrabalho = 'menu-active';
        break;
      default:
        this.classHome = 'menu-active';
        this.classOuvinte = '';
        this.classTrabalho = '';
        break;
    }
  }
}
