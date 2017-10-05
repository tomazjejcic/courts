import { BehaviorSubject } from 'rxjs/Rx';

export interface ICourtStateData {

    courtEvents$: BehaviorSubject<any>;
}

export interface ICourtState {

    data: ICourtStateData;
}

export const DEFAULT_COURT_STATE: ICourtState = {

    data: {
        courtEvents$: new BehaviorSubject<any>(undefined)
    }
}
