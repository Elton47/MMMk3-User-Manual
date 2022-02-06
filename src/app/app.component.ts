import { Component, OnInit } from '@angular/core';
import { ModeTypes } from 'src/app/enums';
import { IMode } from 'src/app/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modes!: Array<IMode>;
  selectedMode?: IMode;

  constructor() { }

  ngOnInit(): void {
    this.modes = [
      {
        type: ModeTypes.CLIP,
        sections: []
      },
      {
        type: ModeTypes.SCENE,
        sections: []
      }
    ];
  }
}
