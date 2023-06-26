# 单行文本，怎么实现两端对齐

实现单行文本两端对齐，你可以使用 CSS 的 `text-align` 属性设置为 `justify`：

```css
p {
  text-align: justify;
}
```

然而需要注意的是，这种方式对于单行文本可能效果不佳，因为`text-align: justify;` 对最后一行不生效，对于单行文本来说，它就是最后一行。

一种常见的解决方法是，我们可以通过在文本后面添加一个伪元素，并设置它的宽度为 100%。这样，浏览器将会把文本和伪元素视为两行，然后对齐它们：

```css
p {
  text-align: justify;
  line-height: 1.6; /* 调整行高以改变对齐的高度 */
}

p::after {
  content: "";
  display: inline-block;
  width: 100%;
}
```

需要注意的是，这种方法可能会导致文本行间距过大，因此可能需要通过 `line-height` 调整行高以改变对齐的高度。
