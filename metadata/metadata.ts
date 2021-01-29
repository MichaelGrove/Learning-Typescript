import 'reflect-metadata'

// const plane = {
//   color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane)
// console.log(plane) // has no mention of 'note' metadata

// const note = Reflect.getMetadata('note', plane) // get 'note' metadata from plane
// console.log(note)

// Reflect.defineMetadata('note', 'hi there', plane, 'color') // 'note' metadata to plane color property
// const note = Reflect.getMetadata('note', plane, 'color')
// console.log(note)

@controller
class Plane {
  color: string = 'red'

  @get('/login')
  fly(): void {
    console.log('vrrrrr')
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    console.log(path)
  }
}

