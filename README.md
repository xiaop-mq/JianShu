## Redux三个设计原则
 1. store必须是唯一的
 2. store中的内容只能由自己修改
 3. reducer是一个纯函数

 ## Redux中的API
 1. createStore: 创建store
 2. store.dispatch: 派发action 传递给store
 3. store.getState: 帮助获取store所有的数据内容
 4. store.subscribe: 订阅store中发生的改变，发生改变则执行其中的回调函数