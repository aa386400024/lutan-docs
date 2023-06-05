# 请你解释一下JavaScript中的事件冒泡和事件捕获是什么？

事件冒泡（Event Bubbling）和事件捕获（Event Capturing）是JavaScript中两种事件传播方式，它们都是描述在元素树中如何传播事件的方式。<br />

事件冒泡，是事件从最深的节点（也就是触发事件的那个元素），逐级向上层节点传播的过程。<br />
比如，如果你点击了一个嵌套在其他元素中的按钮，这个点击事件会首先在按钮上触发，然后再传播到其父元素，再然后是父元素的父元素，一直向上，直到到达`document`对象。<br />

事件捕获，和事件冒泡恰好相反，事件传播是从最顶层的`document`对象，逐级向下传播到目标元素（也就是触发事件的那个元素）。<br />
在这个过程中，事件会首先在`document`对象上被捕获，然后是目标元素的祖先元素，一直向下，直到到达目标元素。<br />

在实际开发中，你可以通过给事件监听器添加第三个参数来控制使用冒泡还是捕获。默认情况下，这个参数是`false`，表示使用事件冒泡。如果你将它设置为`true`，那么就会使用事件捕获。


### 下面用一个按钮点击事件作为例子来说明这个概念。

假设我们在HTML页面中有如下结构：

```html
<div id="div1">
  <button id="button1">Click me</button>
</div>
```

在JavaScript中，我们可以这样添加事件监听器：

```javascript
// 获取元素
let div1 = document.getElementById('div1');
let button1 = document.getElementById('button1');

// 为button添加点击事件监听器
button1.addEventListener('click', function() {
  console.log('button clicked!');
}, false);

// 为div添加点击事件监听器
div1.addEventListener('click', function() {
  console.log('div clicked!');
}, false);
```

在上述例子中，当我点击按钮时，控制台会先打印"button clicked!"，然后打印"div clicked!"。这就是事件冒泡：事件首先在按钮上触发，然后冒泡到父元素div上。

而如果我将监听器的第三个参数改为`true`，即采用事件捕获方式，那么点击按钮时，控制台会先打印"div clicked!"，然后打印"button clicked!"。因为事件首先在最外层的div捕获，然后再传播到按钮上。
