function observer(obj) {
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        // some code
        console.log('get');
      },
      set: () => {
        // some code
        console.log('set');
      }
    });
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
  }
}
export default Vue;
