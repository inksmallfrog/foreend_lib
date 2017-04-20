这是小蛙的一个前端代码库，里面有一部分是基础JS的，还有一部分是一些组件。

# 组件说明

## Rangebar(以下说明已失效……新说明待补充……)
#### 依赖
jQuery (没有测试版本兼容，我写的时候用的是3.2.0)
#### js路径
./js/frog_rangebar.js
#### sass路径
sass: ./sass/frog_rangebar.scss
#### 兼容性
Chrome和Firefox下兼容，其余浏览器未测试
#### 待补充内容
1. 常见浏览器测试
2. 竖直Rangebar测试
#### 使用
``` html
<div id="rangebar"></div>
<script>var rangebar = new Rangebar('#rangebar')</script>
```
#### 初始化
``` javascript
Rangebar(id [, direction = 'horizental', posValue=0, loadedValue=0, max=100, min=0])
```
#### 属性
maxValue: range最大值，默认为100
minValue: range最小值，默认为0
currentValue: 当前值，若无defaultValue参数默认为0
loadedValue: 已加载值
$view: jQuery包装的容器

#### 接口
pointTo(value [, need_pointchange_callback = true])
loadedTo(value)
bindEvent(event, onpointchage[, need_clear_old = false])

#### 事件
pointchange(e, value)
trigger: 1. call pointTo(value [, need_callback = true])
         2. call pointToPos(pos [[, value], need_callback = true])
         3. set currentValue
mouseoverrange(e, value, pos, pos_in_page)
trigger: onmouseover
mouseoutrange(e, value, pos, pos_in_page)
trigger: onmouseout