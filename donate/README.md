# Sponsor-Page 捐赠小部件

## 😋MarkDown文档部分内容显示不出来，最好可以来我的[博客](https://kelecn.top/posts/34795/)看完整介绍哦。

### 一、项目简介

[sponsor-page](https://github.com/Kaiyuan/sponsor-page)是一个开源的捐赠按钮样式，可以用于美化我们的博客。

> ***说在前面，捐赠是不可能捐赠的*** 

> ***只有白嫖才能维持得了生活，捐赠按钮主要还是起一个美化的效果。***

**参考项目：**[sponsor-page](https://github.com/Kaiyuan/sponsor-page)

<img src="https://7.dusays.com/2021/01/23/e93738a83403c.png" style="zoom: 50%;" />

该项目主要主要有四种捐赠渠道：

- PayPal

- 比特币

- 支付宝

- 微信支付

>  ***我考虑到，比特币在国内使用有限，就把比特币换成了QQ支付，有需要的朋友也可以直接用我的。***

**我的fork项目：**[sponsor-page](https://github.com/kelecn/sponsor-page)

<img src="https://cdn.jsdelivr.net/gh/kelecn/images@master/%E6%82%9F%E7%A9%BA.jpg" style="zoom:25%;" />

**效果演示：**

#### [Simple](https://kelecn.top/donate/simple/)

 <iframe src="https://kelecn.top/donate/simple/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

---

#### [Drinks](https://kelecn.top/donate/drinks/)

   <iframe src="https://kelecn.top/donate/drinks/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

---

  

### 二、捐赠按钮的修改

<hr>


1. 首先，直接把对应项目fork到自己的Github，需要比特币按钮可以选择原版的[sponsor-page](https://github.com/Kaiyuan/sponsor-page)，需要QQ支付按钮可以选择我修改后的[sponsor-page](https://github.com/kelecn/sponsor-page)，如果有其他支付方式需求，自己按需修改即可。

2. 第二步，二维码美化，相信大家的路子肯定很多，欢迎在评论区推荐一下，我这边就给大家推荐一个常用的： [草料二维码](https://cli.im/)

   还有PayPal链接、支付宝链接，各位去对应平台获取即可。

3. 第三步，当然就是修改自己对应的支付二维码图片（sponsor-page\simple\images）、[PayPal](https://www.paypal.com/paypalme/kelecn)（sponsor-page\simple\index.html和sponsor-page\drinks\index.html）链接和[支付宝](https://qr.alipay.com/fkx05422rnstyh9yihg7u78)（sponsor-page\drinks\script.js）链接啦，你可以直接在Github上传和修改相应文件即可，也可以克隆到本地，修改后再一起推送到Github。



### 三、捐赠按钮的使用（部署到Github）

<hr>


- 直接开启对应项目的GitHub Pages即可，访问。（博客要是Github+Coding双线部署可能会出现套娃现象，国内线路访问捐赠页面，不会去访问Github Pages，会访问国内的404页面）
- 下面会介绍对应的解决方法——将捐赠按钮页面部署到博客本地（无论是国内还是国外访问都会正常）

![](https://7.dusays.com/2021/01/23/cb1ac313b3a8c.png)

### 四、捐赠按钮的使用（部署到博客）

<hr>


1. 首先，定位Volantis主题的捐赠布局。（themes\volantis\layout\\_partial\article.ejs）

2. 修改article.ejs文件。

   ```ejs
   </blockquote>
   </div>
   //上面用于定位，下面为新添加的，对应修改src即可，要是已经部署到Github Pages，直接使用对应链接即可，要是想放在博客项目中，可往下看
   <div class='donate'>
   <iframe src="https://kelecn.top/donate/drinks" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>
   </div>
   ```

3. 部署到博客项目中（本地）

   - 直接将刚才修改好的Github项目克隆到本地，放到博客项目的source中，文件夹命名随意（一般为donate，不要改成sponsor-page以防与前面的开启Github Pages后发生冲突）

   - 在_config.yml中修改

     ```ejs
     # Directory
     ...
     skip_render: "donate/**" #hexo会跳过donate文件夹编译，直接把donate文件夹搬移到public
     ```

   - 则对应的捐赠按钮访问链接为

     ```js
     //1、域名/donate/drinks
     https://kelecn.top/donate/drinks
     //2、域名/donate/simple
     https://kelecn.top/donate/simple
     ```

4. 捐赠按钮展示（可以用任意Html页面展示）

- simple页面



   <iframe src="https://kelecn.top/donate/simple/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

```html
//simple对应引用代码
   </div>
   <iframe src="https://kelecn.top/donate/simple/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>
   </div>
```

- drinks页面



   <iframe src="https://kelecn.top/donate/drinks/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

```html
//drinks对应引用代码
   </div>
   <iframe src="https://kelecn.top/donate/drinks/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>
   </div>
```


### 五、特别感谢

<hr>


特别感谢[sponsor-page](https://github.com/Kaiyuan/sponsor-page)项目的大力支持，喜欢的朋友，欢迎去其Github点点小星星~

#### [Simple](https://kaiyuan.github.io/sponsor-page/simple/)

 <iframe src="https://kaiyuan.github.io/sponsor-page/simple/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

---

#### [Drinks](https://kaiyuan.github.io/sponsor-page/drinks/)

   <iframe src="https://kaiyuan.github.io/sponsor-page/drinks/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

---

### 六、License

Released under the MIT license.
