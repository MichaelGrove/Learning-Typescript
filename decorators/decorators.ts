@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `this boat color is ${this.color}`
  }

  @logError('Oops boat was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish')
    } else {
      console.log('nothing')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  console.log(key)
}


// decorator factory
function logError(errorMessage: string) {

  // actual decorator
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value; // reference to method
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat();
