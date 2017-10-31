import { Action } from '@ngrx/store';
import { CourtEvent, Court } from '../models/courts';

export const LOAD_COURTS = '[Court] LoadCourts';
export const LOAD_SUCCESS = '[Court] LoadSuccess';
export const LOAD = '[Court] Load';
export const SHOW_STATE = '[Court] ShowState';

export class LoadCourts implements Action {
    readonly type = LOAD_COURTS

    // constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS

    constructor(public payload: any) {}
}

export class Load implements Action {
    readonly type = LOAD
}

export class ShowState implements Action {
    readonly type = SHOW_STATE

    constructor(public payload: any) {}
}

export type Actions = LoadCourts | LoadSuccess | Load | ShowState;
