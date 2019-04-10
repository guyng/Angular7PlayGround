import { HttpClient } from '@angular/common/http';
import { RoomResevation } from '../Models/room.model';

export class ReservationService{
    /**
     *
     */
    constructor(private http: HttpClient) {

    }

    private ReserveRoom(roomId: number): RoomResevation
    {
        let apiResult: RoomResevation;
        this.http.get<RoomResevation>('rooms/GetRoom/' + roomId.toString()).subscribe(result => {
            apiResult =  result;
        });
        return apiResult;
    }
}