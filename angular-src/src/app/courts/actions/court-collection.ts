import { Action } from '@ngrx/store';
import { Court } from '../models/courts';

export const LOAD_COLLECTION_SUCCESS = '[Collection] LoadCollectionSuccess';

export class LoadCollectionSuccess implements Action {
    readonly type = LOAD_COLLECTION_SUCCESS;

    constructor(public payload: Court[]) {}
}

export type Actions = LoadCollectionSuccess;
