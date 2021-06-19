import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  
  @Input() serialNumber: string;
  @Input() titleName: string;
  @Input() description: string;
  @Input() backgroundColor: string;
  @Input() stepNumber: number;
  panelOpenState = false;
  step = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
