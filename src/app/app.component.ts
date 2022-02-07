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
  actionTypeEnum: typeof ActionType = ActionType;

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
                    label: 'DUPLICATE',
                    secondaryLabel: 'Double'
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
                    actionType: ActionType.TOGGLE_SMALL,
                    label: 'RESTART',
                    secondaryLabel: 'Loop'
                  }
                ]
              }
            ]
          },
          {
            title: 'SECTION 3',
            items: [
              {
                label: 'Play',
                actions: [
                  {
                    actionType: ActionType.PLAY
                  }
                ]
              },
              {
                label: 'Record',
                actions: [
                  {
                    actionType: ActionType.REC
                  }
                ]
              },
              {
                label: 'Stop',
                actions: [
                  {
                    actionType: ActionType.STOP
                  }
                ]
              },
              {
                label: 'Shift',
                actions: [
                  {
                    actionType: ActionType.SHIFT
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
