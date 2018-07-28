import observer from './observer';

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
  }
}

export default Vue;
