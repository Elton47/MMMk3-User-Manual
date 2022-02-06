import { ActionType, ModeTypes } from "src/app/enums";

export interface IMode {
  type: ModeTypes;
  title?: string;
  sections?: Array<ISection>;
}

export interface ISection {
  title?: string;
  items?: Array<ISectionItem>;
}

export interface ISectionItem {
  label?: string;
  actions?: IAction | Array<IAction>;
}

export interface IAction {
  actionType: ActionType;
  label?: string;
  secondaryLabel?: string;
}
