# vue路由中，history和hash两种模式有什么区别

Vue Router支持两种模式：`history`和`hash`，主要的区别在于URL的表现形式和底层实现：

1. `hash`模式：该模式的URL形式为 `www.example.com/#/user`。它通过URL的哈希（`#`之后的部分）来模拟一个完整的URL。由于哈希值的改变不会引发页面的重新加载，我们可以通过监听 `hashchange` 事件来进行路由切换。这种模式的好处是兼容性好，无需额外的服务器配置即可运行。

2. `history`模式：该模式的URL形式为 `www.example.com/user`，看起来更像是传统的URL。它使用了HTML5的History API（`pushState`，`replaceState`，`popstate`事件）来管理浏览历史。这种模式的URL看起来更美观，更符合用户的预期，但需要服务器的配合：服务器需要配置为对所有未找到的路由返回单页应用的入口文件（通常是`index.html`），否则在直接访问或刷新非根路径时，服务器会返回404错误。

根据你的项目需求和目标用户的浏览器环境，你可以选择最适合的模式。