export class Attributes<T> {
  constructor(private data: T) {}

  getAll(): T {
    return this.data;
  }

  // The value of K can only be one of the keys in T 
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}
