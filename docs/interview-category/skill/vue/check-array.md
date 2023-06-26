# vue2.0为什么不能检查数组的变化，该怎么解决？

Vue2.0使用了响应式系统，它会跟踪数据的变化并在数据发生变化时更新DOM。然而，由于Javascript的限制，Vue不能检测到直接通过索引修改数组元素或修改数组长度的变化。

例如，`vm.items[indexOfItem] = newValue` 或 `vm.items.length = newLength` 这样的修改Vue是无法检测到的。

为了解决这个问题，Vue提供了一些方法来触发数组的变化，包括：`push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()` 和 `reverse()`。

如果你需要通过索引直接设置数组项的值，你可以使用 Vue.set() 方法或者使用 `splice`。例如：

```javascript
Vue.set(vm.items, indexOfItem, newValue)
// 或
vm.items.splice(indexOfItem, 1, newValue)
```

如果你需要修改数组的长度，也可以使用 `splice`：

```javascript
vm.items.splice(newLength)
```

这样，Vue就能检测到数组的变化并响应式地更新视图。