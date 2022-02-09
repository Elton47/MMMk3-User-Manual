import { ActionType, HardwareTypes, ModeTypes } from "src/app/enums";

export interface IMode {
  type: ModeTypes;
  title?: string;
  sections?: Array<ISection>;
}

export interface ISection {
  title?: string;
  hardwareType?: HardwareTypes;
  items?: Array<ISectionItem>;
}

export interface ISectionItem {
  label?: string;
  actions?: Array<IAction>;
}

export interface IAction {
  actionType: ActionType;
  label?: string;
  secondaryLabel?: string;
}
