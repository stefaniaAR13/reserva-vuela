export class ReservationLogic {
  reserve(flightId: string, userId: string): object {
    return { reservationId: 'R123', flightId, userId };
  }
}
