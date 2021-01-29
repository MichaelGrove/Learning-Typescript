import faker from 'faker'
import IMappable from './IMappable'

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  public markerContent(): string {
    return `
      <h4>${this.name}</h4>
    `
  }
}
