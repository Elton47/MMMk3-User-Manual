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
        type: ModeTypes.IMPORTANT_NOTES,
        title: 'IMPORTANT NOTES',
        hidden: true,
        sections: [
          {
            title: 'Hardware MIDI Mode & SHIFT Button Notes',
            items: [
              {
                label: 'Enable MIDI Mode',
                secondaryLabel: 'Fundamental step, for the script to work, the hardware has to be on MIDI Mode',
                actions: [allActions.shift, allActions.plusSeparator, allActions.maschine]
              },
              {
                label: 'Always use RESTART button for SHIFT operations',
                secondaryLabel: 'When you see the SHIFT button in this manual being shown or mentioned, it means you have to use RESTART button on the hardware<br>It is a limitation from NI Controller Editor, where it is not possible to assign any CC values to the physical SHIFT button',
                actions: [allActions.restart, allActions.equalsSeparator, allActions.shift]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.CLIP,
        sections: [
          {
            title: 'CLIP TRIGGERING',
            items: [
              {
                label: 'Activate CLIP mode',
                secondaryLabel: 'Initially activated by default',
                actions: [allActions.pattern]
              },
              {
                label: 'Launch clip, or create new clip and trigger session record',
                secondaryLabel: 'Pad color will match Live\'s clip color or will pulse red if new clip is created using pad 1-16, triggering session record',
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
                label: 'Launch scene',
                secondaryLabel: 'Pad color will match Live\'s scene color',
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
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('track-selection', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'TRACK SELECTION',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('track-selection', HardwareTypes.MASCHINE_MIKRO_MK3)
          },
          {
            title: 'TRACK ACTIONS',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('track-actions', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'TRACK ACTIONS',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('track-actions', HardwareTypes.MASCHINE_MIKRO_MK3)
          },
          {
            title: 'SELECTED TRACK',
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('selected-track', HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'SELECTED TRACK',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getTrackModeSectionItemsBySectionTypeAndHardwareType('selected-track', HardwareTypes.MASCHINE_MIKRO_MK3)
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
                label: 'Activate DRUM mode',
                secondaryLabel: 'Selected track must have Live\'s Drum Rack device loaded<br>Supports note repeat',
                actions: [allActions.padMode]
              },
              {
                label: 'Toggle auto-coloring of 1-16 hardware pads based on the name of drum pad/chain (i.e.: "Kick" is auto-colored in red)',
                secondaryLabel: 'Only while DRUM mode is activated',
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
            hardwareType: HardwareTypes.MASCHINE_MK3,
            items: this.getDrumModeNavigationItemsByHardwareType(HardwareTypes.MASCHINE_MK3)
          },
          {
            title: 'NAVIGATION',
            hardwareType: HardwareTypes.MASCHINE_MIKRO_MK3,
            items: this.getDrumModeNavigationItemsByHardwareType(HardwareTypes.MASCHINE_MIKRO_MK3)
          }
        ]
      },
      {
        type: ModeTypes.KEYBOARD,
        sections: [
          {
            title: 'NOTE TRIGGERING',
            items: [
              {
                label: 'Activate KEYBOARD mode',
                secondaryLabel: 'Fully integrated with Live 11\'s new per-clip "Scales" and "Root Note" features<br>Scale and/or root note changes from the hardware will reflect to Live, and vice-versa<br>Supports note repeat',
                actions: [allActions.keyboard]
              },
              {
                label: 'Trigger notes',
                secondaryLabel: 'Pads color will match with selected clip\'s color or selected track\'s one, if no clip is selected (brighter light for root-note pads)<br>Root note and scale will match with selected clip\'s root note and scale, or "C3 Chromatic" initially. It will keep the same selected scale and root note for new clips, to match with Live 11\'s behavior',
                actions: [new Pad('1-16')]
              }
            ]
          },
          {
            title: 'ROOT NOTE AND SCALE',
            items: [
              {
                label: 'Change root note',
                secondaryLabel: '"C" by default, will match with selected clip\'s root note',
                actions: [allActions.jogWheelPush, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Change scale',
                secondaryLabel: '"Chromatic" by default, will match with selected clip\'s scale',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Scroll up/down (change octave up/down) to show more notes in increments/decrements of 1 octave',
                actions: [allActions.jogWheelRotate]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.SHIFT,
        sections: [
          {
            title: 'GENERAL ACTIONS',
            items: [
              {
                label: 'Activate SHIFT mode (hold)',
                actions: [allActions.shift]
              },
              {
                label: 'Undo',
                secondaryLabel: 'Pad (white) will light brighter if Undo can be performed',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('1')]
              },
              {
                label: 'Redo',
                secondaryLabel: 'Pad (white) will light brighter if Redo can be performed',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('2')]
              },
              {
                label: 'Clear Auto',
                secondaryLabel: 'Clear all envelopes of selected clip<br>Pad will light red if there is at least one clip envelope that can be cleared',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('10')]
              }
            ]
          },
          {
            title: 'NOTE ACTIONS',
            items: [
              {
                label: 'Quantize',
                secondaryLabel: 'Quantize selected (or all) notes based on clip\'s grid quantization setting',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('5')]
              },
              {
                label: 'Quantize 50%',
                secondaryLabel: 'Quantize 50% selected (or all) notes based on clip\'s grid quantization setting',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('6')]
              },
              {
                label: 'Nudge <',
                secondaryLabel: 'Nudge left selected (or all) notes based on clip\'s grid quantization setting',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('7')]
              },
              {
                label: 'Nudge >',
                secondaryLabel: 'Nudge right selected (or all) notes based on clip\'s grid quantization setting',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('8')]
              },
              {
                label: 'Clear',
                secondaryLabel: 'Clear selected (or all) notes',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('9')]
              },
              {
                label: 'Copy',
                secondaryLabel: 'Copy selected (or all) notes',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('11')]
              },
              {
                label: 'Paste',
                secondaryLabel: 'Paste copied notes<br>Pad (white) will only light with color of clip if there are notes copied',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('12')]
              }
            ]
          },
          {
            title: 'NOTE TRANSPOSITION',
            items: [
              {
                label: 'Semitone-',
                secondaryLabel: 'Transpose down selected (or all) notes in decrements of 1 semitone (will keep the note in-scale during transposition if scale is enabled in Live\'s Clip Detail view)',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('13')]
              },
              {
                label: 'Semitone+',
                secondaryLabel: 'Transpose up selected (or all) notes in increments of 1 semitone (will keep the note in-scale during transposition if scale is enabled in Live\'s Clip Detail view)',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('14')]
              },
              {
                label: 'Octave-',
                secondaryLabel: 'Transpose down selected (or all) notes in decrements of 1 octave',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('15')]
              },
              {
                label: 'Octave+',
                secondaryLabel: 'Transpose up selected (or all) notes in increments of 1 octave',
                actions: [allActions.shift, allActions.plusSeparator, new Pad('16')]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.METERING_AND_EVENTS,
        sections: [
          {
            title: 'METERING MODE',
            items: [
              {
                label: 'Activate METERING mode',
                secondaryLabel: 'Visual feedback on pads for playback volume levels of up to 4x tracks (4x columns visualization, scrollable for more tracks)',
                actions: [allActions.volume]
              }
            ]
          },
          {
            title: 'EVENTS MODE',
            items: [
              {
                label: 'Activate EVENTS mode (hold)',
                secondaryLabel: 'Mode to select/deselect notes of selected clip<br>Supports both "Drum Rack" and "Instrument" MIDI Tracks',
                actions: [allActions.events]
              },
              {
                label: 'Select notes of corresponding pad (Live v11.1+), or all notes (Live v11.0.x) of selected clip',
                secondaryLabel: 'Pads color will match with selected clip\'s color (brighter light for pads that have at least one note that can be selected/deselected)',
                actions: [allActions.events, allActions.plusSeparator, new Pad('1-16')]
              },
              {
                label: 'Select/deselect all notes of selected clip',
                secondaryLabel: 'Single-press button to select/deselect all notes',
                actions: [allActions.events]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Scroll left/right to show more tracks when METERING mode is active',
                secondaryLabel: 'METERING Mode only',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down (in octaves) to show more notes when EVENTS mode is active',
                secondaryLabel: 'EVENTS Mode only, if selected track is an Instrument track (non-drum)',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Change root note when EVENTS mode is active',
                secondaryLabel: 'EVENTS Mode only, if selected track is an Instrument track (non-drum)',
                actions: [allActions.jogWheelPush, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Change scale when EVENTS mode is active',
                secondaryLabel: 'EVENTS Mode only, if selected track is an Instrument track (non-drum)',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down, in increments/decrements of 1 row (4 pads) to show more drum pads when EVENTS mode is active',
                secondaryLabel: 'EVENTS Mode only, if selected track is a Drum Rack track',
                actions: [allActions.jogWheelRotate]
              },
              {
                label: 'Scroll up/down, in increments/decrements of 4 rows (16 pads) to show more drum pads when EVENTS mode is active',
                secondaryLabel: 'EVENTS Mode only, if selected track is a Drum Rack track',
                actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.TRANSPORT_AND_NOTE_REPEAT,
        title: 'TRANSPORT & NOTE REPEAT',
        sections: [
          {
            title: 'TRANSPORT CONTROL',
            items: [
              {
                label: 'Start playback',
                actions: [allActions.play]
              },
              {
                label: 'Restart playback',
                secondaryLabel: 'Start playback from beginning',
                actions: [allActions.shift, allActions.plusSeparator, allActions.play]
              },
              {
                label: 'Start Session recording',
                actions: [allActions.rec]
              },
              {
                label: 'Start Arrangement recording',
                actions: [allActions.shift, allActions.plusSeparator, allActions.rec]
              },
              {
                label: 'Stop playback',
                actions: [allActions.stop]
              }
            ]
          },
          {
            title: 'NOTE REPEAT',
            items: [
              {
                label: 'Activate Note Repeat (hold)',
                secondaryLabel: 'Temporarily activates DRUM or KEYBOARD mode (depending on selected track type), will return to previous mode when Note Repeat is deactivated',
                actions: [allActions.noteRepeat, allActions.slashSeparator, allActions.touchStrip]
              },
              {
                label: 'Activate Note Repeat (pinned)',
                secondaryLabel: 'Also activates DRUM or KEYBOARD mode (depending on selected track type), will return to previous mode when Note Repeat is deactivated',
                actions: [allActions.shift, allActions.plusSeparator, allActions.noteRepeat]
              },
              {
                label: 'Deactivate pinned Note Repeat',
                actions: [allActions.noteRepeat, allActions.slashSeparator, allActions.touchStrip]
              },
              {
                label: 'Change Note Repeat rate (1/2 up to 1/64)',
                secondaryLabel: '"1/16" repeat rate by default<br>Temporarily activates Note Repeat if it is deactivated, which will also temporarily activates DRUM or KEYBOARD mode',
                actions: [allActions.touchStrip]
              }
            ]
          }
        ]
      },
      {
        type: ModeTypes.OTHER,
        title: 'OTHER',
        sections: [
          {
            title: 'LIVE SET ACTIONS',
            items: [
              {
                label: 'Change Tempo in increments/decrements of 1.00',
                actions: [allActions.tempo, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Change Tempo in increments/decrements of 0.10',
                actions: [allActions.shift, allActions.plusSeparator, allActions.tempo, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Change Quantization Swing amount in increments/decrements of 1.0',
                actions: [allActions.swing, allActions.plusSeparator, allActions.jogWheelRotate]
              },
              {
                label: 'Change Quantization Swing amount in increments/decrements of 10.0',
                actions: [allActions.shift, allActions.plusSeparator, allActions.swing, allActions.plusSeparator, allActions.jogWheelRotate]
              }
            ]
          },
          {
            title: 'MISCELLANEOUS',
            items: [
              {
                label: 'Tap Tempo',
                actions: [allActions.tap]
              },
              {
                label: 'Toggle Metronome',
                actions: [allActions.shift, allActions.plusSeparator, allActions.tap]
              },
              {
                label: 'Toggle Automation arming',
                actions: [allActions.auto]
              },
              {
                label: 'Capture MIDI',
                secondaryLabel: 'Hardware button will light brighter when there are notes that can be captured',
                actions: [allActions.notes]
              }
            ]
          },
          {
            title: 'NAVIGATION',
            items: [
              {
                label: 'Toggle between Session and Arrangement View',
                actions: [allActions.perform]
              },
              {
                label: 'Toggle between Device and Clip Detail View',
                actions: [allActions.plugin]
              },
              {
                label: 'Open/Close Live\'s Browser panel',
                actions: [allActions.browser]
              }
            ]
          }
        ]
      }
    ];
  }

  private getTrackModeSectionItemsBySectionTypeAndHardwareType(sectionType: 'track-selection' | 'track-actions' | 'selected-track', hardwareType: HardwareTypes): Array<ISectionItem> {
    let sectionItems: Array<ISectionItem | undefined> = [];
    switch (sectionType) {
      case 'track-selection': sectionItems = [
        {
          label: 'Activate TRACK mode (hold)',
          actions: [hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select]
        },
        {
          label: 'Activate TRACK mode (pinned)',
          actions: [allActions.shift, allActions.plusSeparator, hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? allActions.group : allActions.select]
        },
        {
          label: 'Select track from up to 15 visible tracks, including Return tracks',
          secondaryLabel: 'Pad color will match Live\'s track color or white if muted or muted via solo',
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
          label: 'Arm/Unarm track of corresponding pad (or multiple tracks)',
          secondaryLabel: 'MASCHINE MIKRO MK3 only',
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
        hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? {
          label: 'Arm/Unarm selected track',
          secondaryLabel: 'MASCHINE MIKRO MK3 only',
          actions: [allActions.select]
        } : undefined,
        {
          label: 'Solo/Unsolo selected track',
          actions: [allActions.solo]
        },
        {
          label: 'Mute/Unmute selected track',
          actions: [allActions.mute]
        },
        {
          label: 'Toggle Hot-Swap for selected device of track',
          secondaryLabel: 'It will open Live\'s Browser panel if it is closed',
          actions: [allActions.shift, allActions.plusSeparator, allActions.erase]
        },
        {
          label: 'Change volume of selected track in increments/decrements of 1.0dB',
          actions: [allActions.volume, allActions.plusSeparator, allActions.jogWheelRotate]
        }
      ]; break;
    }
    return sectionItems.filter((sectionItem: ISectionItem | undefined) => sectionItem !== undefined) as Array<ISectionItem>;
  }

  private getDrumModeNavigationItemsByHardwareType(hardwareType: HardwareTypes): Array<ISectionItem> {
    const sectionItems: Array<ISectionItem | undefined> = [
      {
        label: 'Scroll up/down to show more drum pads, in increments/decrements of 1 row (4 pads)',
        actions: [allActions.jogWheelRotate]
      },
      {
        label: 'Scroll up/down to show more drum pads, in increments/decrements of 4 rows (16 pads)',
        actions: [allActions.shift, allActions.plusSeparator, allActions.jogWheelRotate]
      },
      hardwareType === HardwareTypes.MASCHINE_MIKRO_MK3 ? {
        label: 'Select drum pad without triggering sound',
        secondaryLabel: 'MASCHINE MIKRO MK3 only',
        actions: [allActions.select, allActions.plusSeparator, new Pad('1-16')]
      } : undefined
    ];
    return sectionItems.filter((sectionItem: ISectionItem | undefined) => sectionItem !== undefined) as Array<ISectionItem>;
  }
}
