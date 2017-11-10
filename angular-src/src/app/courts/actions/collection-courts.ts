import { Action } from '@ngrx/store';
import { Court } from '../models/courts';

export const LOAD_COURTS = '[Collection] Load Courts';
export const LOAD_SUCCESS = '[Collection] Load Success';

export class LoadCourts implements Action {
    readonly type = LOAD_COURTS

    // constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Court[]) {}
}

export type Actions = LoadCourts | LoadSuccess;
