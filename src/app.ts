import express from 'express';
import { FlightManager } from './flights/FlightManager';
import { PaymentAdapter } from './payments/PaymentAdapter';
import { ReservationBridge } from './reservations/ReservationBridge';

const app = express();
const port = 3000;

app.use(express.json());

const flightManager = FlightManager.getInstance();
const paymentAdapter = new PaymentAdapter();
const reservationBridge = new ReservationBridge();

app.get('/flights', (req, res) => {
  res.json(flightManager.getAvailableFlights());
});

app.post('/flights/reserve', (req, res) => {
  const { flightId, userId } = req.body;
  const reservation = reservationBridge.createReservation(flightId, userId);
  res.json(reservation);
});

app.post('/payments', (req, res) => {
  const { amount, paymentMethod } = req.body;
  const result = paymentAdapter.processPayment(amount, paymentMethod);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
