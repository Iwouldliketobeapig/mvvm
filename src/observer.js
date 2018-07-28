import defineReactive from './defineProperty';

function observer(obj) {
  Object.keys(obj).forEach(name => {
    defineReactive(obj, name, obj[name])
  })
}

export default observer