import { Component, OnInit } from '@angular/core';
import { allActions, Pad } from 'src/app/actions';
import { ActionType, HardwareTypes, ModeTypes } from 'src/app/enums';
import { IMode, ISectionItem } from 'src/app/interfaces';

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
                label: 'Activate CLIP mode, initially activated by default',
                actions: [allActions.pattern]
              },
              {
                label: 'Launch clip, or create new clip and trigger session record',
                actions: [new Pad('1-16')]
              },
              {
                label: 'Temporarily activate CLIP mode, launch clip (or create new) and return back to previous mode',
                actions: [allActions.pattern, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Temporarily activate TRACK mode, stop clip of track of corresponding pad (or multiple tracks) and return back to previous mode',
                actions: [allActions.stop, allActions.plusSeparator, new Pad('1-15')]
              },
              {
                label: 'Stop all clips without stopping the playback',
                actions: [allActions.shift, allActions.plusSeparator, allActions.stop]
              }
            ]
          },
          {
            title: 'CLIP MODIFICATION',
            items: [
              {
                label: 'Duplicate the focused clip',
                actions: [allActions.duplicate]
              },
              {
                label: 'Duplicate clip of corresponding pad',
                actions: [allActions.duplicate, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Double the focused clip (duplicate clip contents)',
                actions: [allActions.shift, allActions.plusSeparator, allActions.duplicate]
              },
              {
                label: 'Delete the focused clip',
                actions: [allActions.erase]
              },
              {
                label: 'Delete clip of corresponding pad',
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
                label: 'Activate SCENE mode',
                actions: [allActions.scene]
              },
              {
                label: 'Launch scene',
                actions: [new Pad('1-16')]
              },
              {
                label: 'Temporarily activate SCENE mode, launch scene and return back to previous mode',
                actions: [allActions.scene, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'SCENE MODIFICATION',
            items: [
              {
                label: 'Duplicate scene of corresponding pad',
                actions: [allActions.duplicate, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Delete scene of corresponding pad',
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
            title: 'TRACK SELECTION',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('track-selection', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'TRACK SELECTION',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('track-selection', HardwareTypes.MASCHINE_MIKRO_MK3)
          },
          {
            title: 'TRACK ACTIONS',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('track-actions', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'TRACK ACTIONS',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('track-actions', HardwareTypes.MASCHINE_MIKRO_MK3)
          },
          {
            title: 'SELECTED TRACK',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('selected-track', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'SELECTED TRACK',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackSectionItemsBySectionTypeAndHardwareType('selected-track', HardwareTypes.MASCHINE_MIKRO_MK3)
          }
        ]
      }
    ];
    // MOCK BELOW
    // this.selectedHardware = HardwareTypes.MASCHINE_MIKRO_MK3;
    // this.selectedMode = this.modes[2];
  }

  private getTrackSectionItemsBySectionTypeAndHardwareType(sectionType: 'track-selection' | 'track-actions' | 'selected-track', hardwareType: HardwareTypes): Array<ISectionItem> {
    let sectionItems: Array<ISectionItem | undefined> = [];
    switch (sectionType) {
      case 'track-selection': sectionItems = [
        {
          label: 'Select track from up to 15 visible tracks, including Return tracks',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Select and expand/collapse group track to show/hide child tracks in Live and in TRACK mode',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Select and expand/collapse group track to show/hide child tracks in Live and in TRACK mode',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Create new MIDI track, when pressed on empty pad (no light/color pad)',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Create new Audio track, when pressed on empty pad (no light/color pad)',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, allActions.shift, allActions.plusSeparator,  new Pad('1-15')]
        },
        {
          label: 'Select Master track',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, new Pad('16')]
        },
        {
          label: 'Scroll left/right to reveal more tracks',
          actions: [allActions.jogWheelRotate]
        }
      ]; break;
      case 'track-actions': sectionItems = [
        {
          label: 'Duplicate track of corresponding pad (or multiple tracks)',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, allActions.duplicate, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Erase track of corresponding pad (or multiple tracks)',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, allActions.erase, allActions.plusSeparator, new Pad('1-15')]
        },
        hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? {
          label: 'Arm/Unarm track of corresponding pad (or multiple tracks, MASCHINE MIKRO MK3 only)',
          actions: [allActions.select, allActions.plusSeparator, new Pad('1-15')]
        } : undefined,
        {
          label: 'Solo/unsolo track of corresponding pad (or multiple tracks)',
          actions: [allActions.solo, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Mute/unmute track of corresponding pad (or multiple tracks)',
          actions: [allActions.mute, allActions.plusSeparator, new Pad('1-15')]
        },
        {
          label: 'Stop clip of track of corresponding pad (or multiple tracks)',
          actions: [allActions.stop, allActions.plusSeparator, new Pad('1-15')]
        }
      ]; break;
      case 'selected-track': sectionItems = [
        {
          label: 'Duplicate selected track',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, allActions.duplicate]
        },
        {
          label: 'Delete selected track',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select, allActions.plusSeparator, allActions.erase]
        },
        hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? {
          label: 'Arm/Unarm selected track (MASCHINE MIKRO MK3 only)',
          actions: [allActions.select]
        } : undefined,
        {
          label: 'Solo/Unsolo selected track',
          actions: [allActions.solo]
        },
        {
          label: 'Mute/Unmute selected track',
          actions: [allActions.mute]
        }
      ]; break;
    }
    return sectionItems.filter((sectionItem: ISectionItem | undefined) => sectionItem !== undefined) as Array<ISectionItem>;
  }
}
