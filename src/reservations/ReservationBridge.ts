import { ReservationLogic } from './ReservationLogic';
import { ReservationUI } from './ReservationUI';

export class ReservationBridge {
  private logic = new ReservationLogic();
  private ui = new ReservationUI();

  createReservation(flightId: string, userId: string) {
    const reservation = this.logic.reserve(flightId, userId);
    return this.ui.showReservation(reservation);
  }
}
