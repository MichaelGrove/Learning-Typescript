import faker from 'faker'
import IMappable from './IMappable'

export class Company implements IMappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  public markerContent(): string {
    return `
      <h4>${this.companyName}</h4>
      <p>${this.catchPhrase}</p>
    `
  }
}
