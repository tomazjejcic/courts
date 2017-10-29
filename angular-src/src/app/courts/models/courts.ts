export interface Court {
    id: string;
    court_name: string;
    address: {
        city: string;
        district: Array<string>;
        street: string;
        note: string;
        coord: Array<string>;
    };
    data: {
        description: string;
        photo: string;
        rating: string;
        condition: string;
        popularity: string;
        access: string;
        outdoor: string;
        indoor: string;
        hoops_num: {
            total: number;
            individual: number;
            shared: number;
        }
    };
    events: Array<Object>;
}

export interface CourtEvent {
    db_court_id: string,
    court_id: string,
    players: Array<string>,
    data: Object
}
