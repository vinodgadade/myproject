import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Input()
  label: string = "fd";
  constructor() { }

  ngOnInit() {
  }

}
