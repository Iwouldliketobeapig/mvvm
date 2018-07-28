function defineReactive (obj, name, val, callback) {
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: true,
    get: () => {
      console.log('我在这点获取数据');
      return val;
    },
    set: (newVal) => {
      console.log('我在这点设置数据');
      val = newVal
    }
  })
}

export default defineReactive;