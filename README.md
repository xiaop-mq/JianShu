## Redux三个设计原则
 1. store必须是唯一的
 2. store中的内容只能由自己修改
 3. reducer是一个纯函数

 ## Redux中的API
 1. createStore: 创建store
 2. store.dispatch: 派发action 传递给store
 3. store.getState: 帮助获取store所有的数据内容
 4. store.subscribe: 订阅store中发生的改变，发生改变则执行其中的回调函数

## 无状态组件
1. 无状态组件：是一个函数，接收参数props。性能高
 当一个普通函数里面只有render的时候我们可以使用无状态组件来替换

## redux-thunk
做异步请求的中间件，可以将action作为函数的形式返回给reducer。

redux-thunk：action和store之间的中间件。

action可以由对象变为函数了，对dispatch方法进行了封装。
中间件：对store的dispatch进行了判断功能的添加，如果是函数,则执行函数在需要调用到store时在调用，之后就结束，如果是对象则进行store传输。

## redux-soga中间件
可以使用redux-soga代替redux-thunk
