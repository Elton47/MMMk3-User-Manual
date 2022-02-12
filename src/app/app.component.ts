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
  modeTypesEnum: typeof ModeTypes = ModeTypes;
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
                label: 'Launch clip, or create new clip and trigger session record<br><small><em>Pad color will match Live\'s clip color or will pulse red if new clip is created using pad 1-16, triggering session record</em></small>',
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
            title: 'CLIP ACTIONS',
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
                label: 'Scroll left/right to show clips of other tracks',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down to show more clips of focused tracks',
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
                label: 'Launch scene<br><small><em>Pad color will match Live\'s scene color</em></small>',
                actions: [new Pad('1-16')]
              },
              {
                label: 'Temporarily activate SCENE mode, launch scene and return back to previous mode',
                actions: [allActions.scene, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'SCENE ACTIONS',
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
                label: 'Scroll up/down to show more scenes',
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
      },
      {
        type: ModeTypes.DRUM,
        sections: [
          {
            title: 'DRUM PAD TRIGGERING',
            items: [
              {
                label: 'Activate DRUM mode<br><small><em>Selected track must have Live\'s Drum Rack device loaded<br>Supports note repeat</em></small>',
                actions: [allActions.padMode]
              },
              {
                label: `Toggle auto-coloring of 1-16 hardware pads based on the name of drum pad/chain (i.e.: "Kick" is auto-colored in red)<br><small><em>Only while DRUM mode is activated</em></small>`,
                actions: [allActions.padMode]
              },
              {
                label: 'Trigger up to 16 visible drum pads',
                actions: [new Pad('1-16')]
              }
            ]
          },
          {
            title: 'DRUM PAD ACTIONS',
            items: [
              {
                label: 'Solo/unsolo drum pad',
                actions: [allActions.solo, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Mute/unmute drum pad',
                actions: [allActions.mute, allActions.plusSeparator, new Pad('1-16')]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Scroll up/down to show more drum pads, in increments of 1 row (4 pads)',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down to show more drum pads, in increments of 4 rows (16 pads)',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.KEYBOARD,
        sections: [
        ]
      },
      {
        type: ModeTypes.SHIFT,
        sections: [
        ]
      },
      {
        type: ModeTypes.METERING_AND_EVENTS,
        sections: [
        ]
      },
      {
        type: ModeTypes.TRANSPORT_AND_NOTE_REPEAT,
        sections: [
        ]
      },
      {
        type: ModeTypes.OTHER,
        sections: [
        ]
      }
    ];
    // MOCK BELOW
    // this.selectedHardware = HardwareTypes.MASCHINE_MIKRO_MK3;
    // this.selectedMode = this.modes[3];
  }

  private getTrackSectionItemsBySectionTypeAndHardwareType(sectionType: 'track-selection' | 'track-actions' | 'selected-track', hardwareType: HardwareTypes): Array<ISectionItem> {
    let sectionItems: Array<ISectionItem | undefined> = [];
    switch (sectionType) {
      case 'track-selection': sectionItems = [
        {
          label: 'Select track from up to 15 visible tracks, including Return tracks<br><small><em>Pad color will match Live\'s track color or white if muted or muted via solo</em></small>',
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
          label: 'Scroll left/right to show more tracks',
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
          label: 'Arm/Unarm track of corresponding pad (or multiple tracks)<br><small><em>MASCHINE MIKRO MK3 only</em></small>',
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
        },
        {
          label: 'Unsolo and unmute all tracks',
          actions: [allActions.shift, allActions.plusSeparator, allActions.mute]
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
        {
          label: 'Toggle Hot-Swap for selected device of track<br><small><em>It will open Live\'s Browser panel if it is closed</em></small>',
          actions: [allActions.shift, allActions.plusSeparator, allActions.erase]
        },
        hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? {
          label: 'Arm/Unarm selected track<br><small><em>MASCHINE MIKRO MK3 only</em></small>',
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
