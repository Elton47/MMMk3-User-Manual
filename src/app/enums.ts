export enum HardwareTypes {
  MASCHINE_MK3 = 'MASCHINE MK3',
  MASCHINE_MIKRO_MK3 = 'MASCHINE MIKRO MK3'
}

export enum ModeTypes {
  IMPORTANT_NOTES = 'IMPORTANT NOTES',
  CLIP = 'CLIP',
  SCENE = 'SCENE',
  TRACK = 'TRACK',
  DRUM = 'DRUM',
  KEYBOARD = 'KEYBOARD',
  SHIFT = 'SHIFT',
  METERING_AND_EVENTS = 'METERING & EVENTS',
  TRANSPORT_AND_NOTE_REPEAT = 'TRANSPORT & NOTE REPEAT',
  OTHER = 'OTHER'
}

export enum ActionType {
  TOGGLE,
  TOGGLE_SMALL,
  TOUCH_STRIP,
  JOG_WHEEL_ROTATE,
  JOG_WHEEL_PUSH,
  PAD,
  SEPARATOR_EQUALS,
  SEPARATOR_SLASH,
  SEPARATOR_PLUS,
  PLAY,
  REC,
  STOP,
  SHIFT,
  MASCHINE,
  FAVOURITE,
  BROWSER
}