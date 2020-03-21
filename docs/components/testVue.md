# 测试vue组件

## 测试全局插件

<demo-div>
    基础的全局用法。
</demo-div>

<demo-block>
::: slot source
<button-test1></button-test1>
:::

在目录/docs/.vuepress/components(vuepress规定目录)下实现的vue插件是全局的

::: slot highlight
```html
<div>
    <button-test1></button-test1>
</div>
```
:::
</demo-block>