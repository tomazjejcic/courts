import { Action } from '@ngrx/store';
import { CourtEvent, Court } from '../models/courts';

export const ADD_EVENT = '[Court] Add Event';
export const ADD_EVENT_SUCCESS = '[Court] AddEvent Success';

export class AddEvent implements Action {
    readonly type = ADD_EVENT

    constructor(public payload: CourtEvent) {}
}

export class AddEventSuccess implements Action {
    readonly type = ADD_EVENT_SUCCESS

    constructor(public payload: CourtEvent[]) {}
}

export type Actions = AddEvent | AddEventSuccess;
