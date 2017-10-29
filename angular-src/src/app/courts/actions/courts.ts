import { Action } from '@ngrx/store';
import { CourtEvent } from '../models/courts';

// Court Action Constants
export const SET_INITIAL_STATE = '[CourtEvent] SetInitialState';
export const ADD_EVENT = '[CourtEvent] AddEvent';
export const EVENT_COMPLETE = '[CourtEvent] EventComplete';
export const SHOW_STATE = '[CourtEvent] ShowState';
export const LOAD = '[CourtEvent] Load';

export class Load implements Action {
    readonly type = LOAD

    // constructor(public payload: any) {}
}

export class SetInitialState implements Action {
    readonly type = SET_INITIAL_STATE

    constructor(public payload: any) {}
}

export class ShowState implements Action {
    readonly type = SHOW_STATE

    constructor(public payload: any) {}
}

export class AddEvent implements Action {
    readonly type = ADD_EVENT

    constructor(public payload: string) {}
}

export class EventComplete implements Action {
    readonly type = EVENT_COMPLETE;

    constructor(public payload: CourtEvent[]) {}
  }

export type Actions = AddEvent | EventComplete | SetInitialState | ShowState | Load;
