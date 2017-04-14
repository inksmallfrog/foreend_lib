这是小蛙的一个前端代码库，里面有一部分是基础JS的，还有一部分是一些组件。

# 组件说明

## Rangebar
#### 依赖
jQuery (没有测试版本兼容，我写的时候用的是3.2.0)
#### js路径
./js/frog_rangebar.js
#### css路径
css: ./css/frog_rangebar.css
#### 兼容性
Chrome和Firefox下兼容，其余浏览器未测试
#### 待补充内容
1. 常见浏览器测试
2. 竖直Rangebar测试
3. 增加已占用长度属性并将其与总长度颜色区分显示
#### 使用
``` html
<div id="rangebar"></div>
<script>var rangebar = new Rangebar('#rangebar')</script>
```
其它初始化方法
``` javascript
new Rangebar(id);
new Rangebar(id, maxValue);
new Rangebar(id, maxValue, onpointchange);
new Rangebar(id, maxValue, defaultValue, onvaluechange);
new Rangebar(id, maxValue, defaultValue, onvaluechange, onmouseover, onmouseout);
new Rangebar(id, maxValue, defaultValue, direction, onpointchange, onmouseover, onmouseout);
```
#### 属性
maxValue: range最大值，默认为100
minValue: range最小值，默认为0
currentValue: 当前值，若无defaultValue参数默认为0
direction: 方向，默认为"horizental"
el: jQuery包装的容器

#### 方法
pointtoPos(pos, needcallback):设置标记点相对range的位置时调用,可以指定是否触发valuechange事件，默认为触发。
pointto(value, needcallback):设置标记点的值的调用，默认触发事件，修改currentValue与调用该函数事件触发的版本效果相同
