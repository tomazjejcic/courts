

// @Effects() addEvent = this.effects
// .ofType('ADD_COURT_EVENT')
// .map(action => action.payload)
// .switchMap(payload => this.dashboardService.createNewEvent(payload))
// .map(data => data[0])
// .map(newEvent => this._store.dispatch({type: ADD_COURT_EVENT_SUCCESS, payload: newEvent));

// .subscribe( data => {

//     // here effects dispacth command accortding if returnde data
//     // success or faile

//     // this if check should be done better
//     if (data[0].data.event_time) {
//         this._store.dispatch({type: ADD_COURT_EVENT, payload: data[0]});
//     } else {
//         console.log('Failed to create event', data);
//     }
// })