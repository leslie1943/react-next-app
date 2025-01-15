### 约定优先的方式
- 按照约定的方式来编写代码
- 根据项目结构生成路由

### Root layout
- `layout.tsx` - 根布局
- 对于指定页面布局，使用`layout.tsx`作为当前组件的布局
```cmd
src/
├── app/
│   └── layout.tsx
├── dashboard/  
    └── layout.tsx  // dashboard的根布局
```
### Template
- 用法几乎与 layout 一样
- 当一个文件下既有```layout.tsx```又有```template.tsx```时，优先使用```template.tsx```作为当前组件的布局


### Template vs Layout
- 差异发生在路由跳转的时候
- template 不会保留状态: 为每一个子项创建新实例，重新创建DOM元素， 并且重新同步效果s
- layout 会保留状态
- 