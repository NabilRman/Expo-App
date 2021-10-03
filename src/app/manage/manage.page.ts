import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  selectedSegment: any = 'Details';
  show: any = false;

  constructor() { }

  ngOnInit() {}




// showInput(item){
// if(item === 'Others'){
// this.show = true;
// }
// else{
// this.show = false;
// }

// }

}
