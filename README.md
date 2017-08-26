# react-example

webpavk+react+ES6实现了图片懒加载，效果可见https://fenfenyan.github.io/react-example/public/

图片懒加载组件拆分：
1.ProductList组件状态只因可视窗口参数（向下滚动scroll，窗口高度resize）改变而改变，向Product组件传递了title.imagesrc,viewport；

2.Product组件状态在判断可视窗口和图片位置关系后，只因是否显示图片而改变，向ProductIamge组件传递
title,imagesrc,viewport,showImage,updataImagePosition；

3.ProductImage组件计算本图片的位置传递给updataImagePosition，并根据showImage判断显示imagesrc还是loading.gif。

