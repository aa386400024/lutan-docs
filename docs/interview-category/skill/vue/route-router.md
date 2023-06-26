# vue中$route和$router有什么区别

在Vue.js中，`$route`和`$router`是与Vue Router相关的两个对象，但它们的用途和功能是不同的。

`$route`是一个路由信息对象，包含当前激活的路由的状态信息，如匹配的URL，路径参数，查询参数等。它是只读的，你不能通过修改它来改变路由状态。

`$router`是一个路由实例对象，它包含Vue Router的API方法，如`push`，`replace`，`go`等，允许你以编程方式更改路由状态或导航到不同的路由。

简单地说，`$route`用于获取路由信息，而`$router`用于控制路由的导航。
