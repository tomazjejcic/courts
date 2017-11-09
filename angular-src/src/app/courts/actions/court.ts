import { Action } from '@ngrx/store';
import { CourtEvent, Court } from '../models/courts';

export const LOAD_COURTS = '[Court] LoadCourts';
export const LOAD_SUCCESS = '[Court] LoadSuccess';
export const LOAD = '[Court] Load';
export const SHOW_STATE = '[Court] ShowState';
export const ADD_EVENT = '[Court] AddEvent';
export const ADD_EVENT_COMPLETE = '[Court] AddEventComplete';

export class LoadCourts implements Action {
    readonly type = LOAD_COURTS

    // constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Court[]) {}
}

export class Load implements Action {
    readonly type = LOAD
}

export class AddEvent implements Action {
    readonly type = ADD_EVENT

    constructor(public payload: CourtEvent) {}
}

export class AddEventComplete implements Action {
    readonly type = ADD_EVENT_COMPLETE

    constructor(public payload: CourtEvent[]) {}
}

export class ShowState implements Action {
    readonly type = SHOW_STATE

    constructor(public payload: any) {}
}

export type Actions = LoadCourts | LoadSuccess | Load | AddEvent | AddEventComplete | ShowState;
