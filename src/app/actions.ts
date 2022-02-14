import { ActionType } from "src/app/enums";
import { IAction } from "src/app/interfaces";

export const allActions = {
  maschine: {
    actionType: ActionType.MASCHINE
  },
  favourite: {
    actionType: ActionType.FAVOURITE
  },
  browser: {
    actionType: ActionType.BROWSER
  },
  volume: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'VOLUME',
    secondaryLabel: '[Velocity]'
  },
  swing: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'SWING',
    secondaryLabel: '[Position]'
  },
  tempo: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'TEMPO',
    secondaryLabel: '[Tune]'
  },
  plugin: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'PLUG-IN',
    secondaryLabel: 'Macro'
  },
  sampling: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'SAMPLING'
  },
  fixedVelocity: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'FIXED VEL',
    secondaryLabel: '16 Vel'
  },
  padMode: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'PAD MODE'
  },
  keyboard: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'KEYBOARD'
  },
  chords: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'CHORDS'
  },
  step: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'STEP'
  },
  pitch: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'PITCH'
  },
  mod: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'MOD'
  },
  perform: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'PERFORM',
    secondaryLabel: 'FX Select'
  },
  notes: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'NOTES'
  },
  restart: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'RESTART',
    secondaryLabel: 'Loop'
  },
  erase: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'ERASE',
    secondaryLabel: 'Replace'
  },
  tap: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'TAP',
    secondaryLabel: 'Metro'
  },
  follow: {
    actionType: ActionType.TOGGLE_SMALL,
    label: 'FOLLOW',
    secondaryLabel: 'Grid'
  },
  play: {
    actionType: ActionType.PLAY
  },
  rec: {
    actionType: ActionType.REC
  },
  stop: {
    actionType: ActionType.STOP
  },
  shift: {
    actionType: ActionType.SHIFT
  },
  scene: {
    actionType: ActionType.TOGGLE,
    label: 'SCENE',
    secondaryLabel: 'Section'
  },
  pattern: {
    actionType: ActionType.TOGGLE,
    label: 'PATTERN'
  },
  events: {
    actionType: ActionType.TOGGLE,
    label: 'EVENTS'
  },
  variation: {
    actionType: ActionType.TOGGLE,
    label: 'VARIATION',
    secondaryLabel: 'Navigate'
  },
  duplicate: {
    actionType: ActionType.TOGGLE,
    label: 'DUPLICATE',
    secondaryLabel: 'Double'
  },
  select: {
    actionType: ActionType.TOGGLE,
    label: 'SELECT',
  },
  solo: {
    actionType: ActionType.TOGGLE,
    label: 'SOLO'
  },
  mute: {
    actionType: ActionType.TOGGLE,
    label: 'MUTE',
    secondaryLabel: 'Choke'
  },
  group: {
    actionType: ActionType.TOGGLE,
    label: 'GROUP'
  },
  auto: {
    actionType: ActionType.TOGGLE,
    label: 'AUTO'
  },
  lock: {
    actionType: ActionType.TOGGLE,
    label: 'LOCK'
  },
  noteRepeat: {
    actionType: ActionType.TOGGLE,
    label: 'NOTE REPEAT',
    secondaryLabel: 'Arp'
  },
  jogWheelRotate: {
    actionType: ActionType.JOG_WHEEL_ROTATE
  },
  jogWheelPush: {
    actionType: ActionType.JOG_WHEEL_PUSH
  },
  touchStrip: {
    actionType: ActionType.TOUCH_STRIP
  },
  plusSeparator: {
    actionType: ActionType.SEPARATOR_PLUS
  },
  slashSeparator: {
    actionType: ActionType.SEPARATOR_SLASH
  },
  equalsSeparator: {
    actionType: ActionType.SEPARATOR_EQUALS
  }
};

export class Pad implements IAction {
  actionType: ActionType = ActionType.PAD;

  constructor(public label: string) { }
}
