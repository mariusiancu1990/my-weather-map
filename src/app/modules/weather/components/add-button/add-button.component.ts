import { Component, Input, OnInit } from '@angular/core';
import { faAngleRight, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  faLaptopHouse = faLaptopHouse;
  faAngleRight = faAngleRight;
  @Input()label:string;
  constructor() { }

  ngOnInit(): void {
  }

}
