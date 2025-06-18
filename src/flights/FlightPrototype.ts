export class FlightPrototype {
  constructor(public id: string, public origin: string, public destination: string) {}

  clone(): FlightPrototype {
    return new FlightPrototype(this.id, this.origin, this.destination);
  }
}
