# vue中给对象添加新属性时，界面不刷新怎么办？

Vue.js 在创建实例时，只会使得实例的初始属性是响应式的。也就是说，如果你在实例创建之后，给实例添加一个新的属性，那么这个新的属性并不是响应式的，当这个属性变化时，Vue 是无法检测到的，因此也就无法更新视图。

要解决这个问题，Vue 提供了一个全局的方法 `Vue.set(object, propertyName, value)` 或者一个实例方法 `this.$set(object, propertyName, value)`，你可以通过这个方法给对象添加一个新的属性，并且这个新的属性是响应式的，当这个属性变化时，Vue 可以检测到并更新视图。

例如：

```javascript
this.$set(this.someObject, 'newProperty', 'new value')
```

这样，`someObject` 就有了一个新的属性 `newProperty`，并且这个新的属性是响应式的，当 `newProperty` 变化时，视图会相应地更新。

此外，如果你要一次性添加多个属性，或者要添加的属性是在对象的嵌套结构中，你可能需要使用 `Object.assign()` 或者展开运算符（`...`）来创建一个新的对象。

例如：

```javascript
this.someObject = Object.assign({}, this.someObject, { newProperty: 'new value' })
```

或者

```javascript
this.someObject = { ...this.someObject, newProperty: 'new value' }
```

这样，`someObject` 就会是一个全新的对象，这个新的对象是响应式的，包括所有的新添加的属性。