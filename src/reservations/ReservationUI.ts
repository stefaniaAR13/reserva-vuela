export class ReservationUI {
  showReservation(data: object): object {
    return { message: 'Reserva confirmada', ...data };
  }
}
