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
              },
              {
                label: 'Stop clip of track',
                actions: [
                  {
                    actionType: ActionType.STOP,
                  },
                  {
                    actionType: ActionType.SEPARATOR_PLUS
                  },
                  {
                    actionType: ActionType.PAD,
                    label: '1-16'
                  }
                ]
              },
              {
                label: 'Prev/Next Track',
                actions: [
                  {
                    actionType: ActionType.TOGGLE_SMALL,
                    label: 'CHORDS'
                  },
                  {
                    actionType: ActionType.SEPARATOR_SLASH
                  },
                  {
                    actionType: ActionType.TOGGLE_SMALL,
                    label: 'STEP'
                  }
                ]
              },
              {
                label: 'Maschine',
                actions: [
                  {
                    actionType: ActionType.MASCHINE,
                  }
                ]
              },
              {
                label: 'Favourite',
                actions: [
                  {
                    actionType: ActionType.FAVOURITE,
                  }
                ]
              },
              {
                label: 'Browser',
                actions: [
                  {
                    actionType: ActionType.BROWSER,
                  }
                ]
              },
              {
                label: 'Jog wheel rotate',
                actions: [
                  {
                    actionType: ActionType.JOG_WHEEL_ROTATE,
                  }
                ]
              },
              {
                label: 'Jog wheel push',
                actions: [
                  {
                    actionType: ActionType.JOG_WHEEL_PUSH,
                  }
                ]
              },
              {
                label: 'Touch strip',
                actions: [
                  {
                    actionType: ActionType.TOUCH_STRIP,
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
