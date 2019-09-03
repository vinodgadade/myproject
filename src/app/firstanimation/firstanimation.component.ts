import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-firstanimation',
  templateUrl: './firstanimation.component.html',
  styleUrls: ['./firstanimation.component.css'],
  animations: [
    trigger('changeDivSize',[
      state('initial',style({
        backgroundColor : 'green',
        width : '100px',
        height : '200px'
      })),
      state('final',style({
        backgroundColor : 'red',
        width : '300px',
        height : '200px'
      })),
      transition('initial=>final',animate('1500ms')),
      transition('final=>initial',animate('1000ms'))
    ]),
    // trigger('triggerName',[
    //   state('statename',style({

    //   })),
    //   state('statename',style({

    //   }))
    // ])
  ]
})
export class FirstanimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentState = 'initial';
  changeState(){
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
