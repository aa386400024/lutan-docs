# 什么是虚拟DOM，如何实现一个虚拟DOM?

虚拟 DOM 是一种编程概念，其中的 DOM 对象被表示为普通的JavaScript对象，这些JavaScript对象被称为 "虚拟节点"。每一个虚拟节点都对应着一个真实的 DOM 节点。当我们在应用状态发生变化时，我们会生成一个新的虚拟 DOM，然后将这个新的虚拟 DOM 和旧的虚拟 DOM 进行对比，找出两者的差异，然后将这些差异应用到真实的 DOM 上，这个过程叫做 DOM 的 "reconciliation" 或 "diffing"。

要实现一个虚拟 DOM，我们大致需要以下几个步骤：

1. **定义虚拟节点**：首先我们需要一个函数来创建一个虚拟节点，一个虚拟节点应该包含节点的类型（如 div、span 等）、节点的属性和节点的子节点。

   ```javascript
   function createElement(type, props = {}, ...children) {
       return { type, props, children };
   }
   ```

2. **渲染虚拟节点**：我们需要一个函数来将虚拟节点渲染到真实的 DOM 上。

   ```javascript
   function render(vNode) {
       if (typeof vNode === 'string') { // 文本节点
           return document.createTextNode(vNode);
       }

       // 元素节点
       const el = document.createElement(vNode.type);
       for (let key in vNode.props) {
           el.setAttribute(key, vNode.props[key]);
       }
       vNode.children.map(render).forEach(el.appendChild.bind(el));

       return el;
   }
   ```

3. **比较两个虚拟节点**：最后我们需要一个函数来比较两个虚拟节点，并返回他们的差异。这个过程可以有很多种实现方式，最简单的方式就是如果两个节点的类型或者属性不同，就直接替换这个节点及其所有子节点。更复杂的实现方式可以实现列表的重排序等更高级的功能。
