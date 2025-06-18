export class FlightManager {
  private static instance: FlightManager;
  private flights: any[] = [];

  private constructor() {
    this.flights.push({ id: 'FL001', origin: 'Santiago', destination: 'Lima' });
    this.flights.push({ id: 'FL002', origin: 'Santiago', destination: 'Buenos Aires' });
  }

  public static getInstance(): FlightManager {
    if (!FlightManager.instance) {
      FlightManager.instance = new FlightManager();
    }
    return FlightManager.instance;
  }

  public getAvailableFlights() {
    return this.flights;
  }
}
