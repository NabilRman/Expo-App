import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})


export class ViewPage implements OnInit {

 selectedSegment: any = 'Details';

  constructor() {

  }

  ngOnInit() {}

  segmentChanged(ev) {
    console.log(ev);
    this.selectedSegment = ev.target.value;
  }
}
