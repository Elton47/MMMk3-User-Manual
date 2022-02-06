import { Component, OnInit } from '@angular/core';
import { ActionType, ModeTypes } from 'src/app/enums';
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
        sections: [
          {
            title: 'CLIP TRIGGERING',
            items: [
              {
                label: 'Activate CLIP mode, initially activated by default',
                actions: [
                  {
                    actionType: ActionType.TOGGLE,
                    label: 'PATTERN'
                  }
                ]
              }
            ]
          },
          {
            title: 'SECTION 2',
            items: [
              {
                label: 'Asdasdasdasd',
                actions: [
                  {
                    actionType: ActionType.TOGGLE,
                    label: 'PATTERN'
                  }
                ]
              }
            ]
          },
          {
            title: 'SECTION 3',
            items: [
              {
                label: 'Basdaushdasd',
                actions: [
                  {
                    actionType: ActionType.TOGGLE,
                    label: 'PATTERN'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.SCENE,
        sections: []
      }
    ];
  }
}
