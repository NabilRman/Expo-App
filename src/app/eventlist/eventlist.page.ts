import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})

export class EventlistPage implements OnInit {

  @ViewChild('mySelect', { static: false }) selectRef: IonSelect;

  constructor() { }

  ngOnInit() {
  }
  openSelect() {
    this.selectRef.open();
  }
}
