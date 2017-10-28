import { Action } from '@ngrx/store';
import { CourtEvent } from '../models/courts';

// Court Action Constants
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const ADD_EVENT = '[CourtEvent] AddEvent';
export const EVENT_COMPLETE = '[CourtEvent] EventComplete';

export class AddEvent implements Action {
    readonly type = ADD_EVENT

    constructor(public payload: string) {}
}

export class EventComplete implements Action {
    readonly type = EVENT_COMPLETE;

    constructor(public payload: CourtEvent[]) {}
  }

export type Actions = AddEvent | EventComplete;
