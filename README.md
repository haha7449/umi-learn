# umi-learn

文档地址：https://www.yuque.com/umijs/umi/createumi

# 项目日志

## 2022-3-16

- ![](https://gitee.com/hah7449/pic-bed/raw/master/img/20220316202917.png)
- 以前就遇到这个问题，解决办法
- ![](https://gitee.com/hah7449/pic-bed/raw/master/img/20220316203002.png)
- 之前显示下面的这些模块找不到
  - ![](https://gitee.com/hah7449/pic-bed/raw/master/img/20220316215235.png)
  - 这是因为在umi/preset-plugin里面已经有dva了，但是我又装了umi/plugin-dva，所以会报错，将dva移除就好了
- 注意要mock数据，那么就要配置里的proxy就要关闭