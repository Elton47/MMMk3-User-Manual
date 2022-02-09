import { Component, OnInit } from '@angular/core';
import { allActions, Pad } from 'src/app/actions';
import { ActionType, HardwareTypes, ModeTypes } from 'src/app/enums';
import { IMode } from 'src/app/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hardwares!: Array<HardwareTypes>;
  selectedHardware?: HardwareTypes;
  modes!: Array<IMode>;
  selectedMode?: IMode;
  actionTypeEnum: typeof ActionType = ActionType;

  constructor() { }

  ngOnInit(): void {
    this.hardwares = Object.values(HardwareTypes);
    this.modes = [
      {
        type: ModeTypes.CLIP,
        sections: [
          {
            title: 'CLIP TRIGGERING',
            items: [
              {
                label: 'Activates CLIP mode, initially activated by default',
                actions: [allActions.pattern]
              },
              {
                label: 'Launches clip, or creates new clip and triggers session record',
                actions: [new Pad('1-16')]
              },
              {
                label: 'Temporarily activates CLIP mode, launches clip (or creates new) and returns back to previous mode',
                actions: [allActions.pattern, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Temporarily activates CLIP mode, stops clip of track (Pad 1-16 for 16 tracks) and returns back to previous mode',
                actions: [allActions.stop, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Stops all clips without stopping the playback',
                actions: [allActions.shift, allActions.plusSeparator, allActions.stop]
              }
            ]
          },
          {
            title: 'CLIP MODIFICATION',
            items: [
              {
                label: 'Duplicates the focused clip',
                actions: [allActions.duplicate]
              },
              {
                label: 'Duplicates clip of corresponding pad',
                actions: [allActions.duplicate, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Doubles the focused clip (duplicates clip contents)',
                actions: [allActions.shift, allActions.plusSeparator, allActions.duplicate]
              },
              {
                label: 'Deletes the focused clip',
                actions: [allActions.erase]
              },
              {
                label: 'Deletes clip of corresponding pad',
                actions: [allActions.erase, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Scroll left/right to reveal clips of other tracks',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down to reveal more clips of focused tracks',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              },
            ]
          }
        ]
      },
      {
        type: ModeTypes.SCENE,
        sections: [
          {
            title: 'SCENE TRIGGERING',
            items: [
              {
                label: 'Activates SCENE mode',
                actions: [allActions.scene]
              },
              {
                label: 'Launches scene',
                actions: [new Pad('1-16')]
              },
              {
                label: 'Temporarily activates SCENE mode, launches scene and returns back to previous mode',
                actions: [allActions.scene, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'SCENE MODIFICATION',
            items: [
              {
                label: 'Duplicates scene of corresponding pad',
                actions: [allActions.duplicate, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Deletes scene of corresponding pad',
                actions: [allActions.erase, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Scroll up/down to reveal more scenes',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              },
            ]
          }
        ]
      },
      {
        type: ModeTypes.TRACK,
        sections: [
          {
            title: 'for mk3',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: [
            ]
          },
          {
            title: 'for mikro mk3',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: [
            ]
          }
        ]
      }
    ];
    // MOCK BELOW
    // this.selectedMode = this.modes[1];
  }
}
