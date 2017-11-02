import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCourts from './courts';
import * as fromRr from '../../reducers' // not sure if needed

export interface CourtsState {
    courts: fromCourts.State;
}

export const reducers = {
    courts: fromCourts.reducer
}

export interface State extends fromCourts.State {
    // export interface State extends fromRr.State {
    'courts': CourtsState
}

export const getCourtsState = createFeatureSelector<CourtsState>('courts');

export const getCortsEntitiesState = createSelector(
    getCourtsState,
    state => state.courts,
  );


export const {
    selectEntities: getCourtEntities,
    selectAll: getCourts
} = fromCourts.adapter.getSelectors(getCortsEntitiesState);


export const getCourtCollectionState = createSelector(
    getCourtsState,
    (state: CourtsState) => state.courts
  );

export const getCollectionCourtIds = createSelector(
    getCourtCollectionState,
    fromCourts.getIds
);

export const getCourtsCollection = createSelector(
    getCourtEntities,
    getCollectionCourtIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
      }
)
