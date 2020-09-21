### 什么是虚拟DOM？

- 没有虚拟DOM
1. state 数据
2. 模板
3. 数据 + 模板 集合，生成真实的DOM 来显示
4. state 发生改变
5. 数据 + 模板 结合 生成真实的DOM 替换原始的DOM

缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次生成的DOM替换第一次的DOM，非常耗性能

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合 生成真实的DOM 来显示
4. state 发生改变
5. 数据 + 模板结合 生成真实的DOM 并不直接替换原始的DOM
6. 新的DOM (DocumentFragment) 和原始的DOM 做比对，找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：
性能的提升并不明显

1. state 数据

2. JSX 模板

3. 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM)(损耗了性能)

4. 数据 + 模板 结合 用虚拟DOM的结构生成真实的DOM 来显示

5. state 发生变化

6. 数据+模板 生成新的虚拟DOM(极大的提升了性能)

7. 比较原始虚拟DOM和新的虚拟DOM的区别(极大的提升了性能)

8. 直接操作DOM 改变其中的内容

优点：
1. 性能提升了
2. 它使得跨端应用得以实现。react native

JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM
JSX变为JS对象使用了createElement方法

### 虚拟DOM的diff算法
虚拟DOM进行比对，比对的方式叫做diff算法
Diff difference
数据发生变化会进行比对，render props state就相当于setState。
setState设置为异步的，为了提升底层的性能。
同层虚拟DOM比对的方式，一层不一样，就不会进行比对，删除后面的节点。
给虚拟DOM的节点取名字，根据key值进行比对。
将key值设置为Index，会导致原始虚拟DOM以及新的虚拟DOM顺序不一致。导致key值不稳定。
使用稳定的值做Key值。

- ref 用于获取页面上的DOM节点
  不轻易使用ref，最好不要直接对DOM进行操作。


## React生命周期函数
- 生命周期函数是指在某一时刻组件会自动执行的函数。

初始化 -> 挂载 -> 更新 -> 卸载


- Initialize:
1. 当接收到props和state开始执行

- Mounting: 
第一次挂载
1. componentWillMount: 组件即将挂载到页面的时刻自动执行。
2. componentDidMount: 组件被挂载到页面上自动执行

- Updation: 
props state发生变化执行。
1. shouldComponentUpdate: 组件被更新之前，自动执行
   要求返回布尔值类型。 true更新 false不更新
2. componentWillUpdate: 组件被更新之前，他会自动执行，但是他在SCU之后执行。 SCU返回true执行，返回false不执行。
3. componentDidUpdate: 组件更新完成之后，自动执行

4. componentWillReceiveProps: 当一个组件从父组件接收参数。 只要父组件的render函数被重新执行了，子组件的这个生命周期就会执行。
如果这个组件第一次存在与父组件中，才会执行。
如果这个组件之前已经存在于父组件中，才会执行。

- Unmount:
1. componentWillUnmount: 当这个组件即将被页面中剔除的时候，才会被执行。


## 使用styled-components的优势
- 将各个样式独立成一个个组件，进行引入，解决了CSS样式冲突的问题。
- 将CSS文件另写为一个js文件，使得代码显示的更加简洁。


## 项目代码：header组件的编写
- 头部组件为公共组件，放在common文件夹下。
- 头部组件中涉及到页面样式浮动的问题
  我们可以这么使用：对元素进行className的绑定之后
  在样式组件里面再写上&.left进行指定样式的编写，
- 引入样式文件的时候记得将iconfont前加上./变为相对路径