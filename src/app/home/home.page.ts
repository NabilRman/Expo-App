import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  opt = {
    slidesPerview: 2,
    spaceBetween: 10,
    freeMode:true,

  };

  constructor() {}

}
