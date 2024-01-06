export class StringifiedSet extends Set {
  add(obj, value) {
    return super.add(JSON.stringify(obj), value);
  }

  has(obj, value) {
    return super.has(JSON.stringify(obj), value);
  }
}
