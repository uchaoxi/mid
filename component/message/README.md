# 消息提示组件
## 已支持
- 消息类型： info、question、warning
- show和close的回调函数
- 关闭按钮
- 配置消息框在视窗x,y方向坐标
## 未来可能支持
- 隐式单例模式
- 关闭按钮可选
- 显示和关闭的动画效果
## 使用方式
参考demo.html
- head标签中引入index.css
- body里面写消息框的html
- body里面的script标签, type="module", 引入msgBox
- const box = new msgBox(id, options)
- box.show();