# 你能解释一下JavaScript中的“回调函数”吗？你可以举一个实例来说明你的理解吗？

在 JavaScript 中，函数可以作为参数传递给其他函数，也可以作为其他函数的返回值。当一个函数作为参数传递给另一个函数时，我们称这个函数为“回调函数”。

回调函数的概念源自于函数式编程。在这种编程范式中，函数就像其他数据类型一样，可以作为参数，也可以作为返回值。这种将函数作为参数的方式，使得我们可以创建高度定制化的函数，并且可以实现异步编程。

这是一个简单的例子来解释回调函数：

```javascript
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('John', sayGoodbye); // 输出：Hello John，然后输出：Goodbye!
```

在这个例子中，`sayGoodbye`函数就是一个回调函数。我们将它作为参数传递给`greet`函数。当`greet`函数完成其任务后，就会调用传递进来的回调函数`sayGoodbye`。

### 可以这样回答：

回调函数是一种将函数作为参数传递给另一个函数的编程模式。这种模式可以使我们的代码更加灵活，且更容易处理异步操作。
