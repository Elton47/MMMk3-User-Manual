import { ActionType, HardwareTypes, ModeTypes } from "src/app/enums";

export interface IMode {
  type: ModeTypes;
  title?: string;
  sections?: Array<ISection>;
}

export interface ISection {
  /**
   * Supports HTML
   */
  title?: string;
  hardwareType?: HardwareTypes;
  items?: Array<ISectionItem>;
}

export interface ISectionItem {
  /**
   * Supports HTML
   */
  label?: string;
  /**
   * Supports HTML
   */
  secondaryLabel?: string;
  actions?: Array<IAction>;
}

export interface IAction {
  actionType: ActionType;
  label?: string;
  secondaryLabel?: string;
}
