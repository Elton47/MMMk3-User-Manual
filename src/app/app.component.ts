import { Component, OnInit } from '@angular/core';
import { allActions, Pad } from 'src/app/actions';
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
                actions: [allActions.duplicate]
              },
              {
                label: 'Stop clip of track',
                actions: [allActions.stop, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Prev/Next Track',
                actions: [allActions.chords, allActions.slashSeparator, allActions.step]
              },
              {
                label: 'Maschine',
                actions: [allActions.maschine]
              },
              {
                label: 'Favourite',
                actions: [allActions.favourite]
              },
              {
                label: 'Browser',
                actions: [allActions.browser]
              },
              {
                label: 'Jog wheel rotate',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Jog wheel push',
                actions: [allActions.jogWheelPush]
              },
              {
                label: 'Touch strip',
                actions: [allActions.touchStrip]
              }
            ]
          },
          {
            title: 'SECTION 2',
            items: [
              {
                label: 'Asdasdasdasd',
                actions: [allActions.restart]
              }
            ]
          },
          {
            title: 'SECTION 3',
            items: [
              {
                label: 'Play',
                actions: [allActions.play]
              },
              {
                label: 'Record',
                actions: [allActions.rec]
              },
              {
                label: 'Stop',
                actions: [allActions.stop]
              },
              {
                label: 'Shift',
                actions: [allActions.shift]
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
