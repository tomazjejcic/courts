import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCourts from './courts';
import * as fromRr from '../../reducers' // not sure if needed

export interface CourtsState {
    courts: fromCourts.State;
}

export interface State extends fromCourts.State {
    // export interface State extends fromRr.State {
    'courts': CourtsState
}

export const getCourtsState = createFeatureSelector<CourtsState>('courts');


export const getCor = createSelector(
    getCourtsState,
    () => console.log('lllll'),
    state => state.courts,
);

export const getSelectedCourtsId = createSelector(
    getCor,
    fromCourts.getSelectedCourtsId
  );

export const {
    selectEntities: getCourtEntities,
    selectAll: getCourts
} = fromCourts.adapter.getSelectors(getCor);


export const getCourtsUp = createSelector(
    getCourts,
    (courts) =>  courts
);
