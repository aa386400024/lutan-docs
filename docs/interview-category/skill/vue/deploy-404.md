# vue项目如何进行部署，是否遇到过部署服务器后刷新404的问题

Vue项目的部署主要包括以下步骤：

1. 使用 `npm run build` 或 `yarn build` 命令进行项目构建，会在 `dist` 文件夹下生成生产环境的项目文件。

2. 将 `dist` 文件夹下的所有文件上传到服务器的指定目录，这个目录应该由Web服务器软件（如Nginx，Apache）指向。

3. 配置Web服务器，确保所有未找到的路由都指向 `index.html` 文件，以便使用Vue Router的history模式。

关于刷新404的问题，这往往是因为Web服务器的配置不正确导致的。特别是当你在Vue Router中使用history模式时，服务器需要被配置为所有的未找到路由都返回 `index.html` 文件。否则，当你直接访问或刷新一个非根路径（如 /about）时，服务器将尝试查找一个实际存在的文件或目录，如果找不到，就会返回404错误。

这个问题的解决方案通常是正确配置你的Web服务器。例如，如果你在使用Nginx，你可以在server配置块中加入以下配置：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

这段配置告诉Nginx，如果无法找到请求的URI，就返回 `index.html` 文件。