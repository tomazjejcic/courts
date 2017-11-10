import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCourts from './courts';
import * as fromCollection from './collection-courts';
// import * as fromRr from '../../reducers'; // not sure if needed

export interface CourtsState {
    courts: fromCourts.State;
    collection: fromCollection.State
};

/**
 * extande State if/when you also have layout and/or router reducers
 * refer to ngrx_4; something like 'export interface State extends fromRoot.State'
 */
export interface State {
    'courts': CourtsState
};

export const reducers = {
    courts: fromCourts.reducer,
    collection: fromCollection.reducer
};

export const getCourtsState = createFeatureSelector<CourtsState>('courts');

export const getCortsEntitiesState = createSelector(
    getCourtsState,
    state => state.courts,
);

export const {
    selectEntities: getCourtEntities,
} = fromCourts.adapter.getSelectors(getCortsEntitiesState);


export const getCourtCollectionState = createSelector(
    getCourtsState,
    (state: CourtsState) => state.collection
);

export const getCollectionCourtIds = createSelector(
    getCourtCollectionState,
    fromCollection.getIds
);

export const getCourtsCollection = createSelector(
    getCourtEntities,
    getCollectionCourtIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
      }
);
