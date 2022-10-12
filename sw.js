/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a770ff6485531711b67a8c4eaa8f1e94"],["/about/donate/image/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/about/donate/image/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/about/index.html","a20ad7c59f0d5893df40c40cbf860cad"],["/archives/2022/03/index.html","cf1b8c364215439a479dc54233c2ba69"],["/archives/2022/04/index.html","b8d508856e2fb02a03780880302b9ef8"],["/archives/2022/04/page/2/index.html","938bcc033b80d8bd701155b97b87fdeb"],["/archives/2022/04/page/3/index.html","afe6ebbca1932a7fbd6b6a786e6f1302"],["/archives/2022/05/index.html","c10d5a5422591f3ca45c51ad3b90eea5"],["/archives/2022/05/page/2/index.html","628e629c39c3ecc974de373a63fd9f61"],["/archives/2022/06/index.html","48774e8d0db0f24dafd5e69c8f9c8753"],["/archives/2022/07/index.html","83fb5608e889f2538f8b09b0bba7e8eb"],["/archives/2022/09/index.html","32c3b505c6795e3689b3ad024c678390"],["/archives/2022/09/page/2/index.html","81c6acf0ad3d69d2940acda4b2a6d294"],["/archives/2022/10/index.html","571b6b23e20e62a04d1b0b221b1c70dd"],["/archives/2022/index.html","32f6a84dc8d3e6fc5cab8de8adcb3919"],["/archives/2022/page/2/index.html","202280ebbd7fc1e2fb9d01823c6db2a5"],["/archives/2022/page/3/index.html","955d706810d7726b83453ccaa331d254"],["/archives/2022/page/4/index.html","1a2d2230952f9acc3e501adac9c0daa1"],["/archives/2022/page/5/index.html","bd56d15cb50b95c916f2f5d1fa4383d2"],["/archives/2022/page/6/index.html","a31b7ed9926c733619802d8683873c79"],["/archives/2022/page/7/index.html","b1fae80c58d96a64e546029649463d36"],["/archives/index.html","b7991c014c176b554e6d3d5977c52928"],["/archives/page/2/index.html","04fa0054e96f1fe6c0e73dc4f3303ee4"],["/archives/page/3/index.html","ae12705b80ab1e02e7934286070b95e2"],["/archives/page/4/index.html","02d0d944d3235d3fe318dd77ed3e0feb"],["/archives/page/5/index.html","a37459e0543fe8323433628fad5f86d6"],["/archives/page/6/index.html","eca58dfdea1f973071ea48c57cbbf5e8"],["/archives/page/7/index.html","e92bf9d1d447125cb3ff7020661ac1be"],["/artitalk/index.html","b97e6a23c3e787659de5b94bebcb53cb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","5937f4893990d148c94e8e852b36eace"],["/categories/Hexo博客搭建/index.html","6e3c203f6c024f9ed6fe197b5ab4362c"],["/categories/Leetcode/index.html","74679f33d8aaf99ff2be2d35efd7e85a"],["/categories/Linux/index.html","ab60e63058090261261753d21233fb18"],["/categories/MySQL/index.html","942d7ed5a1e5e68d2817d7273fcb3621"],["/categories/github/index.html","2c7e4a949d48d7da56957614aafec630"],["/categories/index.html","4608acda092f2454990cc4f3dea7b083"],["/categories/novel/index.html","cca175d60d0b4d3b39feb58d3b83e660"],["/categories/python/index.html","f3b22a168777d731f20129b809e2e9a9"],["/categories/pytorch/index.html","d859487ad0f42f7319e0e371ef21fa7a"],["/categories/rss/index.html","abb0dbae1da150054f2216ecb88dc9f1"],["/categories/tensorflow/index.html","ff7e64f89c4db8cfd095eed51d123b38"],["/categories/typora/index.html","2f2a8d3330a23344bfac34cbba098a3f"],["/categories/ubuntu/index.html","5488a4450d6d7d5f5b07b138bda8a0c7"],["/categories/学习笔记/index.html","7b0b0e8c4c54839bd93b9065dce53b6b"],["/categories/文学黑洞/index.html","cc6c3cb05f1ec14fc97fa339d57ca2a6"],["/categories/机器学习/index.html","c852d856ffb03277d93b5a71949a20e1"],["/categories/目标检测/index.html","583e06545f8717dcba8366c96c6c9ecc"],["/categories/目标检测/page/2/index.html","cd0cf2fea6728ab65b617980d96752e0"],["/categories/科研推荐/index.html","da593e0b13db8ae8965760b7cd11b487"],["/categories/色彩搭配/index.html","95ba12e39de57cbab4c2cfa763f384d5"],["/categories/计算机视觉/index.html","7aa63a89353c3991cfd27c8299be87e3"],["/categories/计算机视觉/page/2/index.html","c66d0b435ac784ec33d882e2608a4695"],["/categories/计算机视觉/卷积神经网络/index.html","3ae1fdfa006c96acaf897ea066c39e30"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","e1e86b0125dcb3b4205ae92876b6051c"],["/css/matery.css","00e31a921e09c25ee789fc56f6a11fd3"],["/css/style.css","4b07798b161723ae7a5ab827ea2ab1b7"],["/custom/darkmode.css","9b4407d3ba03e71ab8b6576037170c2b"],["/custom/darkmode.js","d19f67397c2b8f9f13a539558f0513bd"],["/diy-font/MaShanZheng.woff2","2246d07ba6f83d4a2d9e498f99f87948"],["/friends/index.html","b3b1f4d110908377568164afdd2006bd"],["/images/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/images/GFsoso.png","c64ccf4282dd930d373039a93e5ca88d"],["/images/SQL_JOINS.png","6ef8793d15b2767cd18a85ee38ceac9c"],["/images/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/images/image-20220404201407249.png","b24fef532aa0154cc1eb74400e821f3c"],["/images/shuoshuo_logo.jpg","f697ea82c35e9a4013fd8ca2ad83a076"],["/images/volantis_log.png","8e6a41190d5b709ac3c856427cc39367"],["/images/volantis_navbar_logo.png","e406cd1ee3aaccea433a073c267a7507"],["/index.html","1fc2b8a0b58042f1bb4cf7ef00152780"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","87b3b68caf270c499e2b87cd4e35811b"],["/page/3/index.html","975464164ca96030a7efe22a18c726d7"],["/page/4/index.html","ef6b7af39bb4d2e1492029943b213ae1"],["/page/5/index.html","7487f562b2927308b824b29ac4a0e926"],["/page/6/index.html","7cc5bcd3de3ef7d36fb3abaecb032d46"],["/page/7/index.html","40c39114e1a402379fbd35911b33b907"],["/sw-register.js","d26931d8fc0400e01f5360d6accca510"],["/tags/Attention/index.html","2328084d336421e72102001de15a4e9f"],["/tags/CDN/index.html","94af5e8d501c283650ef2c7a6f536e4e"],["/tags/Concat-add/index.html","5ec470765c07c588c7c141c18d18c9a7"],["/tags/FPS/index.html","2eefc63cfb0ce0dc57d81cef79efffdb"],["/tags/GAN/index.html","a87b7f93991a10ff98c312fe95010906"],["/tags/Hexo/index.html","31fc6ba0a56a50e7d30b2a2d2e3d74f3"],["/tags/Inception/index.html","7c006fab2d6a98d522993ded7b13c0e4"],["/tags/Liunx使用教程/index.html","36cdaa34e65b5c18f819ef638e032c65"],["/tags/RFBNet/index.html","edb9bfcf3623f53e7bddd221ed71db0c"],["/tags/SSD/index.html","56b03f3fd1c4b2f144ddf0065f1af01d"],["/tags/contiguous/index.html","ec663eb97970e72ffc3c5d2d12dc2a96"],["/tags/cumsum/index.html","3d1f142685c0d0e1dea0e28ff747a81c"],["/tags/darknet/index.html","2bd0f8cf329c6030531e41d91cf504f0"],["/tags/epoch-iteration/index.html","d7a81bce6bc5566b32bef0c2e5cc563f"],["/tags/faster-rcnn/index.html","eb24c089c4d8a4f6fc7a72ec334e0411"],["/tags/fork/index.html","de46bdb5dff77a2d911c628a5514e561"],["/tags/github/index.html","a9416718f9a4d5b2ed9a61179a1237e4"],["/tags/grad-cam/index.html","3a3d59df03a7ae5a03a3b6b8abb39b29"],["/tags/index.html","48e553d8a22708df9053f1c629c81fb5"],["/tags/logo/index.html","c21241b9c21e4ed80124eed3585cade6"],["/tags/matplotlib/index.html","7efd0aeabb81bc95eabeb31561aa73e9"],["/tags/newaxis/index.html","46c52c44a41a63af2ff22823a598a12e"],["/tags/open-graph/index.html","771eb884621a71edc7c8389288f8b4fe"],["/tags/pip换源/index.html","cbfa477c333e78b7d3947a94d8f38f00"],["/tags/relu/index.html","c9d206368e8bbc2b2e0fab31f4f3d15a"],["/tags/resnet/index.html","30bedf5eb729f9c2ff76a02e439f4f9b"],["/tags/retinanet/index.html","e6d675d974bb4ef9e9b2c72e03aa8912"],["/tags/rss/index.html","422cf782527169093b764dbf58f83d6f"],["/tags/torch/index.html","ad33bf4a5da070fd58668bfca60dde71"],["/tags/transformer/index.html","b3a3a2a67f1837d855f8ec7b8f82c95d"],["/tags/volantis/index.html","d5b415b8d55a58891cccebdca09aa1e4"],["/tags/warnings/index.html","8409b4df7a41ff28b0880bf83faf8649"],["/tags/yolov3/index.html","f4df4e5530fcf4d12e864d4bb0da03a6"],["/tags/yolov5/index.html","77c923935bffe50617ba88dc0701f17d"],["/tags/zetane/index.html","b45fd9ef91df1ea5a36570a2102092cd"],["/tags/专业名词/index.html","ad7a173280375031a4ff717e057ed707"],["/tags/今日故事/index.html","c4004828ffa32b347c19900c03fb510f"],["/tags/使用指南/index.html","6e350d02bbe4b594852a11fa31b5f914"],["/tags/函数库/index.html","cae725d27603533b2a339e08bac99451"],["/tags/力扣题解/index.html","b993a956e84e7a9befe921e4fa261992"],["/tags/博客提升/index.html","a536cec0b235a17c65faebeea1d8426b"],["/tags/博客搭建/index.html","1736f126ce4c48147fa3a4aa7db4b92b"],["/tags/参数计算/index.html","e5b232d0af51d14963ca3ee823e0910e"],["/tags/可视化/index.html","e054809762ed0f3f37c7a791d3899ecd"],["/tags/基础概念/index.html","aa776d745cfb65483e76aa9b3c3389ce"],["/tags/学习笔记/index.html","39e778448f73a9f070500656763694c9"],["/tags/学习笔记/page/2/index.html","1fc22b5dcaafac215acf98ca7a88a6f5"],["/tags/感受野/index.html","a81f70c4610dfa5063e1f1de83843232"],["/tags/损失函数/index.html","94af23c7a288394a55cfb07db1fe7539"],["/tags/数据处理/index.html","115e35ec31b41f65d672abad8d3ee780"],["/tags/数据集/index.html","69b4d4c67073ae5a7d15f8f696fe6acc"],["/tags/文献工具/index.html","59ebaf01330fc934c17dba926b7eb14e"],["/tags/文献推荐/index.html","40b6d45ae3328b5b3768afffb0e6e4fd"],["/tags/激活函数/index.html","fff1f60a73c6c0da6ababc51c931ab97"],["/tags/论文笔记/index.html","20c38060bcb082561d2cd924f77cd017"],["/tags/论文笔记/page/2/index.html","9f1db4ff7aa016f5cc455d9cc97fcda3"],["/tags/软件安装/index.html","fdf2a9068ca778dcdb2480fe60e26d47"],["/tags/输入与输出/index.html","bf6de1e60685b941c1b8b87576a4d63f"],["/zh-CN/CABNet/image-20220927153422183.png","ea12816a81c988a9f8c1c9016ef0b43c"],["/zh-CN/CABNet/image-20220927154959945.png","a5fe66e2f35171dbfa682cbbde81325d"],["/zh-CN/CABNet/image-20220927155113203.png","1cd313f07f5471fd14614fea01d367df"],["/zh-CN/CABNet/image-20220927160946040.png","e134dc3c0346d49dcaeb3fb63d8d53af"],["/zh-CN/CABNet/index.html","fd6c6a0fb1191d5407a8ad73198e1a46"],["/zh-CN/CNN参数量计算/image-20220421212236498.png","e0c03f34b8d850b3751069f1792dc6dc"],["/zh-CN/CNN参数量计算/image-20220421212929933.png","497ee94231336cda1ac8938eae35d52d"],["/zh-CN/CNN参数量计算/image-20220421213603964.png","affc9aec92ddba0b88db3fa21d87c70e"],["/zh-CN/CNN参数量计算/index.html","b2b0f03a4d2c41c60efa030bd0f33324"],["/zh-CN/CNN输入详解/index.html","2b6d59bf69043341fd7b430842775149"],["/zh-CN/CNN输入详解/v2-0bd8d5c23e469f40cc9e7847d5d6491b_r.jpg","76a5078212f41e1b1c140e93357fe07a"],["/zh-CN/CNN输入详解/v2-14d0b66fd755750e48b08cfd1b6bc2e9_r.jpg","ef9e374667b23e00f2fd20fb103dbf83"],["/zh-CN/CNN输入详解/v2-4d6368c19a126926541a157da37f4742_r.jpg","d9da2669cd54d8bc9d5c7108a6579fce"],["/zh-CN/CNN输入详解/v2-53cfe32119cfeba1e2bc73a18015f450_r.jpg","28544db594750c18603af033436a1b44"],["/zh-CN/CNN输入详解/v2-a3f23245d7a2f41554b27e38755927c8_r.jpg","e407e4660f43f5812e52bc53313e8f27"],["/zh-CN/C语言/index.html","fed75d21a4f8ed52fe9caffc0f0acb00"],["/zh-CN/DCGAN/20201202124131662.png","5d81ed784bcb28c8bbf6f94d5565602f"],["/zh-CN/DCGAN/20201203114355820.png","1e21799e245213923a25299db2e5d2de"],["/zh-CN/DCGAN/20201203114415814.png","35ee76b344a672b5fdd69b7c09aba793"],["/zh-CN/DCGAN/image-20220421201415525.png","bce057902ff3111a085dc1ac731264be"],["/zh-CN/DCGAN/index.html","7bf7423bbe4d0e88f7e40302f599d678"],["/zh-CN/Darknet53/16006821-59dd6b77da823e7f.png","ec0dbf6e41dc5291efc6796c9ad2d219"],["/zh-CN/Darknet53/index.html","b7035046a33834d57805e157cbbd8bb1"],["/zh-CN/FPS/index.html","08f844f2092389a846269fc9783e76b4"],["/zh-CN/Faster-rcnn/image-20220417152429746.png","d6d78f2cdb85c6f5390e233e8cfbeed7"],["/zh-CN/Faster-rcnn/index.html","27daaec882fdfcd92ecd7cd22209f998"],["/zh-CN/Fork_github/image-20220502215437444.png","6680419f225ed138de3b70c50dc77f75"],["/zh-CN/Fork_github/image-20220502220838865.png","dc2832f3a4b75df85fd640ebef370f0b"],["/zh-CN/Fork_github/index.html","c39ef7eed3272c91275aae7216585769"],["/zh-CN/InceptionV3/2019111309515588.png","1766f9d3827bd7b97b02647afe2ca66f"],["/zh-CN/InceptionV3/20191113095610269.png","e6b296e9f90564c1823d0e7b353d1a00"],["/zh-CN/InceptionV3/2019111309572648.png","da0311c71f538ebedb99d6fcc488f59f"],["/zh-CN/InceptionV3/index.html","554d9e8eadde1e1842dafd7b5a30a9f7"],["/zh-CN/Linux系统学习笔记/index.html","cb09f86cc345dce15eb110d7672b84fa"],["/zh-CN/Logo学习笔记/image-20221011194845234.png","017a432fd21a7655729568bfe482efe8"],["/zh-CN/Logo学习笔记/image-20221011195053589.png","66f87ad1a8bf77b81c5029bee3556a4e"],["/zh-CN/Logo学习笔记/image-20221011195220675.png","1aa1fc6bd679829471a9d30472d9cdd7"],["/zh-CN/Logo学习笔记/image-20221011195259241.png","5b47ebc7a10e94d545695beaaa2fd160"],["/zh-CN/Logo学习笔记/image-20221011201718341.png","d45aaba5b44bb329462feb7f2445ae71"],["/zh-CN/Logo学习笔记/image-20221011201922042.png","4273b8b9ebaee4ab6bf5c0bbd2f451f3"],["/zh-CN/Logo学习笔记/image-20221011202159256.png","e82f230dc4f9ca10b5e658a5df0e751e"],["/zh-CN/Logo学习笔记/image-20221011202750309.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203307190.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203557341.png","eb33952b46c093e2dd33182612894965"],["/zh-CN/Logo学习笔记/image-20221011203925009.png","8b3e7699ceec6a4b1b2badb3f8d4392f"],["/zh-CN/Logo学习笔记/image-20221011204450563.png","df8bf34524c40f403f4e42ae8db2dc0a"],["/zh-CN/Logo学习笔记/image-20221011211802488.png","88b52a3f69fb8092f750701ed301baba"],["/zh-CN/Logo学习笔记/image-20221011212013978.png","808915a61c05ba7781e28f9df44534ef"],["/zh-CN/Logo学习笔记/image-20221011213810341.png","b07ae69dcda8a42519f9fac802d17a5f"],["/zh-CN/Logo学习笔记/image-20221011214339527.png","034bd0fbe0f8182912e5c49beba2f43e"],["/zh-CN/Logo学习笔记/image-20221011220420163.png","c1d4fe63f709fd8ea4511025073be34f"],["/zh-CN/Logo学习笔记/image-20221011221139685.png","fe9f71b0b7b2426319c591d1403e2498"],["/zh-CN/Logo学习笔记/image-20221011221830591.png","b6cb56ed1a02a0a8e79f360435500587"],["/zh-CN/Logo学习笔记/image-20221011222542070.png","70fc5017c1f76fef28a772fa331a3d7f"],["/zh-CN/Logo学习笔记/index.html","f38c681f494eb3ff2b0bcf5ef62ad795"],["/zh-CN/Matplotlib学习笔记/03D59143-B345-4B36-A7CD-53F698AB5284.jpg","48f26f9a97a5ab77bd305c27b738182e"],["/zh-CN/Matplotlib学习笔记/image-20220403204022943.png","919ac42986651e4738131154ebab289e"],["/zh-CN/Matplotlib学习笔记/image-20220403205635489.png","bc92ac21038579546b4f5a38e1ec4b1a"],["/zh-CN/Matplotlib学习笔记/image-20220403205827906.png","022d6f1fb655a2ed38056b8218f02ee7"],["/zh-CN/Matplotlib学习笔记/image-20220403210031623.png","8eace73c221d2a2013267174fffb8ffb"],["/zh-CN/Matplotlib学习笔记/image-20220403210331668.png","46e3127caee481d419887ff4b6ce6882"],["/zh-CN/Matplotlib学习笔记/image-20220403210514868.png","77bdea7a9f03b5d57fe3882b04b511f9"],["/zh-CN/Matplotlib学习笔记/image-20220403212010830.png","704ddbe35ca8c310e3b945493055e131"],["/zh-CN/Matplotlib学习笔记/image-20220403212950411.png","56f6c1312342d6b7ac8bafbae73761c9"],["/zh-CN/Matplotlib学习笔记/image-20220403213418027.png","3601ca44693c77aa21e1f821d5f20887"],["/zh-CN/Matplotlib学习笔记/image-20220403213911622.png","a19905aa4b01aeea18c414e1ae19326d"],["/zh-CN/Matplotlib学习笔记/image-20220403215102017.png","174bff52b22eadd006f223cf15c5ad8f"],["/zh-CN/Matplotlib学习笔记/image-20220403215856505.png","dabf66bea220aeae2765cf644823e7ec"],["/zh-CN/Matplotlib学习笔记/image-20220403220017186.png","d884d2015eb25ac01277b6d2cfd3c500"],["/zh-CN/Matplotlib学习笔记/image-20220403220233003.png","4f3867833d4de85dd81dcebdf50f2ac9"],["/zh-CN/Matplotlib学习笔记/image-20220403221432174.png","3e9d0a136a3635323de5d467aebaac3a"],["/zh-CN/Matplotlib学习笔记/image-20220403221604494.png","1101c22fadc5fecc213a5d8ab1a5eb68"],["/zh-CN/Matplotlib学习笔记/image-20220403221822295.png","c2d7e2714f114a3d88fea127c6b95152"],["/zh-CN/Matplotlib学习笔记/image-20220403222000966.png","1051d9a97a21047f0e1b4a739c3d9f77"],["/zh-CN/Matplotlib学习笔记/image-20220403222117925.png","faaf3e7ad02a2103810280958249d1a1"],["/zh-CN/Matplotlib学习笔记/image-20220403222318825.png","bd6dd296001e2e05e809ef1862512a43"],["/zh-CN/Matplotlib学习笔记/image-20220403222526935.png","2b2a615f045240ff43bd853ba8da4eb3"],["/zh-CN/Matplotlib学习笔记/image-20220403222628227.png","d3d19b3727d93c78a351f912017735e1"],["/zh-CN/Matplotlib学习笔记/image-20220404095612577.png","72cac94403d8479a10b5df4cf6d965af"],["/zh-CN/Matplotlib学习笔记/image-20220404100123540.png","bad3df5628cad4ac96ae429955d814a1"],["/zh-CN/Matplotlib学习笔记/image-20220404104121709.png","7e41c07b2b726cb7eb8348536c3cfed3"],["/zh-CN/Matplotlib学习笔记/image-20220404104415101.png","4fd2652734bb1c6a1efb6d131d0cc7f6"],["/zh-CN/Matplotlib学习笔记/image-20220404104616081.png","354a98436823f5bf50aa17e8543232f4"],["/zh-CN/Matplotlib学习笔记/image-20220404104841496.png","0e2c4a00b4bde7b6cfb97db33fbf175d"],["/zh-CN/Matplotlib学习笔记/image-20220404104916266.png","86565c756b80b8d71a737b8ffb399edc"],["/zh-CN/Matplotlib学习笔记/image-20220404152016310.png","512c3dc5cc36264dc6b77978171a4b81"],["/zh-CN/Matplotlib学习笔记/image-20220404152129680.png","b83ac045b82958b1ed8f7ac8a5833739"],["/zh-CN/Matplotlib学习笔记/image-20220404152316633.png","51cbcc8d5f2f7f88f3f6e4979a39ec19"],["/zh-CN/Matplotlib学习笔记/image-20220404152756053.png","3fef0d81c6cf7e86932eea1f94c2b45e"],["/zh-CN/Matplotlib学习笔记/image-20220404152958366.png","d5abe09dc1f041d25f34ab93403645f4"],["/zh-CN/Matplotlib学习笔记/image-20220404153408476.png","11bb82bcfaf1b6792da81aac27f5e06e"],["/zh-CN/Matplotlib学习笔记/image-20220404153431942.png","c7cdf1822dae005cfcb9c3fd55ebcc9a"],["/zh-CN/Matplotlib学习笔记/image-20220404153453565.png","affef3dfd411e0da00985a430481c5e3"],["/zh-CN/Matplotlib学习笔记/image-20220404153511622.png","ded25e5009462945a29fec94699826ec"],["/zh-CN/Matplotlib学习笔记/image-20220404155337371.png","4dabeff1437de31a42025c5c4a8a7fc0"],["/zh-CN/Matplotlib学习笔记/image-20220404155550197.png","436be9515492642d83c1505e38798f59"],["/zh-CN/Matplotlib学习笔记/image-20220404155740263.png","793150e235771e1bff86ac0ad2466ca2"],["/zh-CN/Matplotlib学习笔记/image-20220404155923033.png","f4b47e94359ccfcc237f551fbf591a2d"],["/zh-CN/Matplotlib学习笔记/image-20220404160218777.png","d04d0bd4189fd5f00661c4605f8f203c"],["/zh-CN/Matplotlib学习笔记/image-20220404160411035.png","b5d27d60625ddf2fed1d00286340a759"],["/zh-CN/Matplotlib学习笔记/image-20220404160555429.png","4a0a121ed3eab4340274b52c0d3ff5e2"],["/zh-CN/Matplotlib学习笔记/image-20220404160751739.png","14581add9bd472f05a69baaec2c9ace4"],["/zh-CN/Matplotlib学习笔记/image-20220404160958004.png","4cddfe75ee99274e63d8ca0a6e4fa53e"],["/zh-CN/Matplotlib学习笔记/image-20220404161117677.png","992f570a5002e304c6c1760f0f97fcb0"],["/zh-CN/Matplotlib学习笔记/image-20220404161139138.png","19d6b21db11bfa5d893a678467b54aa2"],["/zh-CN/Matplotlib学习笔记/image-20220404161157754.png","01318e1b2cbb6211893ab792d426044b"],["/zh-CN/Matplotlib学习笔记/image-20220404162147295.png","18222adb38ea6db423944ab619bd02bb"],["/zh-CN/Matplotlib学习笔记/image-20220404162341451.png","fe2040942619c1fec23114f7e98750c8"],["/zh-CN/Matplotlib学习笔记/image-20220404162449487.png","8b02b3a30eeff7f4d2a6a22e874c7fec"],["/zh-CN/Matplotlib学习笔记/image-20220404162554129.png","0808441d3b143dc484513a9be0eb8dc2"],["/zh-CN/Matplotlib学习笔记/image-20220404162717588.png","215619a10e832542722a1247936b90ec"],["/zh-CN/Matplotlib学习笔记/image-20220404162753714.png","db6c135dba570f1b3079c9a91071bb38"],["/zh-CN/Matplotlib学习笔记/image-20220404165657025.png","5aae0cf326f09763bbd4fd7ac0321c93"],["/zh-CN/Matplotlib学习笔记/image-20220404165759838.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404165814024.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404170000561.png","933ec2f4841c3785da663f6366e264f9"],["/zh-CN/Matplotlib学习笔记/index.html","c7fea5b343af0b772c9705282b491f83"],["/zh-CN/MySQL学习笔记/index.html","7ab43cc3b763a6d11ac1266ee920adef"],["/zh-CN/RFBNet/index.html","3872a65e54ec3ed6b39a27b5dc93a6de"],["/zh-CN/RSS/index.html","eb28689bd3c623e3694c9dac55ecd270"],["/zh-CN/RSS/rss.gif","4f1a6fe5b219673b2644bd22c3713016"],["/zh-CN/RSS/xml.gif","e67c90a18c89f8d05125c045b2978dcf"],["/zh-CN/Resnet/image-20220503185916137.png","700434cdd87d31541bd440e1150e1c1e"],["/zh-CN/Resnet/image-20220503193754428.png","077efd694a603f290cfb54138fc67ccf"],["/zh-CN/Resnet/index.html","c57b7e9bc1f5d5062c174f2df579dd2c"],["/zh-CN/RetinaNet/20191101111610548.png","d5d49a3bde157c852167d4ec0d6118b2"],["/zh-CN/RetinaNet/20191101111700950.png","2620c6cb7f02e188d68ff4dc8ce1c601"],["/zh-CN/RetinaNet/20191101111712727.png","6844345dc3f10ab7dcb45e1ece469804"],["/zh-CN/RetinaNet/2019110111235956.png","94ee9b27c2e8e8ba12c2153e2cf172d5"],["/zh-CN/RetinaNet/20191101113143598.png","431abf54c59eedb7b1ead2b67164b038"],["/zh-CN/RetinaNet/20191101114056207.png","36d6140907b2871bcbe58e766e99c304"],["/zh-CN/RetinaNet/20200129210050147.png","187eaf52a1314df9b0c3862d9d825394"],["/zh-CN/RetinaNet/20200214164001867.png","0d63196d158ca181fa19bc70c50d185a"],["/zh-CN/RetinaNet/20200214164354541.jpg","c814d84aee65291e2669b0ec557acaf3"],["/zh-CN/RetinaNet/20200215151533258.png","9ce57b4800b82b715304da6596b36675"],["/zh-CN/RetinaNet/2020021613520193.png","df42b8a1752f83e70790857a06adcf74"],["/zh-CN/RetinaNet/image-20220418210603737.png","3337e9957cd8951e969ebc0f155de535"],["/zh-CN/RetinaNet/image-20220419095619530.png","57945637a9882368e90f9a89e23f77d5"],["/zh-CN/RetinaNet/image-20220419100322079.png","96a9db2fbc1533fceadee59176227bf4"],["/zh-CN/RetinaNet/image-20220419100832971.png","b8fa7cc9f8848165809254e4f27961c4"],["/zh-CN/RetinaNet/image-20220419103637923.png","9a1824514618874d2e377a1f55374b92"],["/zh-CN/RetinaNet/index.html","0cfbca75bf7453bbbed44a2550648b51"],["/zh-CN/SSD损失函数/390ed4e1f5fc0a137b65dea937b907a5.png","7d8cb1a5f2096976ba47107057f7a1f8"],["/zh-CN/SSD损失函数/image-20220506200608617.png","83d78f2e3a544140a3be473e863692ea"],["/zh-CN/SSD损失函数/index.html","9f8fb776754f6f662e44df8ff2c033cc"],["/zh-CN/The_story_of_a_great_schoolmaster/index.html","be91444b06c15e242379f00694106f56"],["/zh-CN/VIT/19f323060f1f41ba99e743cea1fa5174.png","7658fc596411b8ef454ac40a95b66b04"],["/zh-CN/VIT/2500484f29ae4671944a06543ad3e026.png","ebdddc18eb8133ae8bf80b7c23e89ecb"],["/zh-CN/VIT/32c551decdb64331a1c4ec0471cc1f3d.gif","56b05407a642afba9d35075c5b8e1360"],["/zh-CN/VIT/4036cdfc91a6477d91009d574788a78b.png","8b6ac6ae1315a9f9d3858a7f0f604eb8"],["/zh-CN/VIT/430e12e75fd44c82ac95e504b5da0d50.png","d3da05c27a6cacc15e9f6216f15c12a3"],["/zh-CN/VIT/58cc10deb7dc45ae90ae606966d7c724.gif","e55837c3c109339eb66dbf941810bd7f"],["/zh-CN/VIT/8ff82ad32b994a12bfc2356718ac9683.gif","dfa0eaacf638ba4c5af220eb9b56e2c8"],["/zh-CN/VIT/90787898063c45fe888c136ba4b32e64.png","d6b94d2d68079ae9d811e8e6126dfa9d"],["/zh-CN/VIT/c41d889912a64057ab571bdfd5458910.png","2f93eb88a545f31573efb3c89bfa7295"],["/zh-CN/VIT/e3bf360d541c4eb1a243e100f17a48b6.png","12537cad8a5a49670c0097b12359e6ed"],["/zh-CN/VIT/image-20220418091306571.png","6073130969f044b6b0f415aa68951138"],["/zh-CN/VIT/image-20220418091855460.png","7897e151573d9fd81adfc9537a574dba"],["/zh-CN/VIT/image-20220418092240916.png","bd8d8cbde29c56e88c4d34bafe1b2348"],["/zh-CN/VIT/image-20220418104816862.png","29ba52286fedb88fcd0a3b523bacb09e"],["/zh-CN/VIT/image-20220418105537648.png","220d3a326a19cdd395b3907b8502ffed"],["/zh-CN/VIT/index.html","0411d9fd402bab39d37a41aec8ea0902"],["/zh-CN/YOLOV3/image-20220416194945035.png","dc1672429aa73cd1d84ee3b25057b69d"],["/zh-CN/YOLOV3/image-20220419102411716.png","f7105a0eba90314ff8138fced59f5f06"],["/zh-CN/YOLOV3/index.html","c53037ddef71fa4f26abbfc665fd0aaa"],["/zh-CN/YOLOV5/0b33c17fb3ac47cfb2b79a80d5b2fbaa.png","7ab427555edfe01e75bc0e1ba0abfcdf"],["/zh-CN/YOLOV5/20200509113651540.png","e02237fe14857ea164e7dc768b7d4430"],["/zh-CN/YOLOV5/20200519211538419.png","5abe16d135802ead130ee5d8736c1c24"],["/zh-CN/YOLOV5/20200526140617608.png","9ab3d104b7c3ea31b29c587290cacab0"],["/zh-CN/YOLOV5/7d1f567fc97140d4b9492b5e28cd0ebc.png","d04c9c5a548a930ecf8ee323b9928fee"],["/zh-CN/YOLOV5/93fc40f7a47f46bbb37819115826ec1a.png","0a3f8778be0f54d5dd7c7814a54de663"],["/zh-CN/YOLOV5/d232d9ef19cb4b3bbb7b492aaf6ae097.png","729f1ecec4f3cde9669d029bf0209434"],["/zh-CN/YOLOV5/ddf3729aef4240b3aa6e5aa914ffff52.png","d8215b72a2210402c5aacc985f7bec0c"],["/zh-CN/YOLOV5/e6cb6d3c11db4510a034ca9b1a0ca339.png","d04e6d444d175a88b6e9ef83f3db6a58"],["/zh-CN/YOLOV5/image-20220505154442317.png","2384c714c9ecf5d290e15b0cc1860c04"],["/zh-CN/YOLOV5/image-20220505154713232.png","77d01bd2b05e1ef4d625540f562aad27"],["/zh-CN/YOLOV5/index.html","c7a72931548cc8409e471a3f26633fac"],["/zh-CN/centernet/index.html","267e7d61a33160fd3917b6a86734dc54"],["/zh-CN/concat_add/image-20220508171742020.png","f98a3801984cd0d1678f55b3f2e27db7"],["/zh-CN/concat_add/index.html","405b75c6a8d5f914295155343d869eef"],["/zh-CN/contiguous/index.html","5be27219dcba73fc3e0babf464618b35"],["/zh-CN/epoch和iteration的区别/index.html","e2cc512d6e4276bbd2af048dc8ac933f"],["/zh-CN/github使用指南/index.html","d8073143faa12a31550ea822ace9c656"],["/zh-CN/grad-cam/image-20220922205142809.png","869c52d43cc6019ad90bda7a99c6b439"],["/zh-CN/grad-cam/image-20220922205934818.png","dbe0c428b4ece8abbc839934c2e9049f"],["/zh-CN/grad-cam/image-20220922210017803.png","3b51f6b31507aab75ffe5de50e6584f6"],["/zh-CN/grad-cam/image-20220922210044972.png","d5fa31ed71d80713d002d0d685851cd4"],["/zh-CN/grad-cam/index.html","864276d9dfc9c0ad012c2962bcda7c7a"],["/zh-CN/hello-world/index.html","8824f7611dd6f1be99213b3b923bb6d8"],["/zh-CN/hexo标签插件/index.html","b39a22e254a625da6327ff4e39a8b05c"],["/zh-CN/index.html","ab42bca5f1d2be61ee7e47440c2fb3d1"],["/zh-CN/leetcode01/index.html","0ad18035bb00caa1b062ff42a204cb59"],["/zh-CN/nn_relu和F_relu的区别/index.html","36291e96015b88565fecc1cef5c25fc9"],["/zh-CN/np_cumsum/1078885-20220224122651707-981078391.png","e12c514e6a64a21701dfad65851b1e69"],["/zh-CN/np_cumsum/copycode.gif","51e409b11aa51c150090697429a953ed"],["/zh-CN/np_cumsum/index.html","0a22c05c7dfa7ee5c2a75f7070062b4a"],["/zh-CN/np_newaxis/index.html","f638a0b046f25ec131e21f04cf8f6a9a"],["/zh-CN/page/2/index.html","73659e13c5c96a9bcd7d03b8a8ac346f"],["/zh-CN/page/3/index.html","9fe34d49197f9ce1f24d630debeb8546"],["/zh-CN/page/4/index.html","2398dba8a74789667baeb3af53f938ea"],["/zh-CN/page/5/index.html","cf7025d6f1af24f844f2ceb8a5875bfc"],["/zh-CN/page/6/index.html","f79282232c20ef2c86b903fa84bb6547"],["/zh-CN/page/7/index.html","3da4b48842adbb77043540c442513917"],["/zh-CN/pip换源/index.html","d405860fe864192a03effa08dff26a92"],["/zh-CN/pyperclip/index.html","35b1de1e82cd30518c3d6f1693a410ab"],["/zh-CN/python知识补充/index.html","f5f78e5e5f0d2748b43c5c339240333b"],["/zh-CN/pytorch官方文档/index.html","1bebaa1ed1fd07d9a7db43005a63461e"],["/zh-CN/typora数学公式教程/index.html","19adce84fef6bdeb7d2611728d74e198"],["/zh-CN/ubuntu安装软件问题/c89ffdc107df9a4e9185e7d51d5a8a21.png","5006eef670a4c474bc5c92c8d050504a"],["/zh-CN/ubuntu安装软件问题/d9085116a96c5c63859c5259fa0230bb.png","c9d4dc88ec69b34ac287577a3fa9c84a"],["/zh-CN/ubuntu安装软件问题/index.html","e224210a6a837a4854150e26efbc103b"],["/zh-CN/use_agg/index.html","86394cfd1f1c986f2d508369572647f7"],["/zh-CN/visdom使用教程/image-20220920214849080.png","00e4fc3055cd1180d2af15ec6f7e2b03"],["/zh-CN/visdom使用教程/index.html","873ded0f3a13efc980b586ab6bc060da"],["/zh-CN/wandb/index.html","d483d7349771835a3d2f0455c52b3b65"],["/zh-CN/warning_unsample/image-20220922212728269.png","05398e7d9148b13efe2008a8a2b0e782"],["/zh-CN/warning_unsample/image-20220922212820063.png","7a33becc778d0378472c4dd84f2c0e33"],["/zh-CN/warning_unsample/index.html","60f9873192ae86eb9703447ae85542cc"],["/zh-CN/zetane的使用/index.html","1498af124d9eb213221b07dec1a1fa96"],["/zh-CN/免费cdn/image-20221007231742803.png","d2721ffea27290892c8c807fa8183189"],["/zh-CN/免费cdn/image-20221007231924762.png","6994d5fc31a1028e34357145cc63f6d5"],["/zh-CN/免费cdn/image-20221007232349603.png","5b0d42570b1fe6472f4e37945d5b5c5d"],["/zh-CN/免费cdn/image-20221007232608806.png","c0e064e685a20971a64146f81eb59ad0"],["/zh-CN/免费cdn/image-20221007232855759.png","a03ee858b8affe54230f211f31b2b88f"],["/zh-CN/免费cdn/image-20221007233355564.png","da79c9954e900127f1d785f5d02bd708"],["/zh-CN/免费cdn/index.html","6b2924c46b7f131832c5b23e18c04748"],["/zh-CN/可视化技术/index.html","36571654877be37610fc818a8da763fb"],["/zh-CN/学习笔记/index.html","92f552e364e6811e549afeb549886013"],["/zh-CN/学习网站集合/index.html","2ce3ab218388e93e25c1fadac31ac964"],["/zh-CN/学术搜索网站导航/index.html","5a322da1b4a786b1d488e170983feb70"],["/zh-CN/开放图谱协议/image-20220926204651449.png","e5e39eb78bbdfe1c09425eea24ab0541"],["/zh-CN/开放图谱协议/image-20220926204719850.png","b4b971a30711ebd276265ee249f34f28"],["/zh-CN/开放图谱协议/image-20220926205301882.png","3de7995b57918abcbc01a0f209ced46a"],["/zh-CN/开放图谱协议/index.html","46c3d4cea049f442c88435c9bc7bba86"],["/zh-CN/感受野计算/image-20220427214037594.png","08542fc10d4ab8d01a2a86b6e2b83e99"],["/zh-CN/感受野计算/image-20220427214256808.png","e5955559b73c14bf444a1f3b122ccf67"],["/zh-CN/感受野计算/index.html","0c8fbaae470e993de466fa9167932c65"],["/zh-CN/扁平时代的写作/index.html","487f05e40608c719285c3756b722c291"],["/zh-CN/提醒幸福/index.html","d3cd86a0947b8247107b5eaa75b4cc5f"],["/zh-CN/教你学会色彩搭配/index.html","2644ee0d191e203a7989544101147cc7"],["/zh-CN/数据处理/index.html","2c66a4b496c427de3b8f0d1353988656"],["/zh-CN/数据集/index.html","ed913f43f47fc1e6aaefc2696b69b0e2"],["/zh-CN/文献阅读合集/index.html","cef07698f90bff0e6a242599aafc67d4"],["/zh-CN/未婚妻/index.html","4d59b3523bb22e26edddb5db7ce526cf"],["/zh-CN/机器学习/image-20220425220526167.png","d75c92ab8bc0d51e067ca90ee94a537c"],["/zh-CN/机器学习/image-20220425221025699.png","64d11c89150399c2d13f6a6057f624e5"],["/zh-CN/机器学习/index.html","10a79f1ea06f093d5a35d8985a0fd606"],["/zh-CN/注意力机制/image-20220331155344988.png","480790d67b46d18a3bf64c73e26c9e9d"],["/zh-CN/注意力机制/image-20220331155451951.png","6e85506648c9c03bfe0afb2752a35f25"],["/zh-CN/注意力机制/image-20220331160018390.png","f9abb2cbf784ce094e7698aa84a08d82"],["/zh-CN/注意力机制/image-20220331160207149.png","d3290c5b024284f5f1c9f52a19d3f12d"],["/zh-CN/注意力机制/image-20220331191026838.png","cdcdbed5afacdee7b9461900f5cc6132"],["/zh-CN/注意力机制/image-20220427215849678.png","e25156fa9b579bb7ba74193936780639"],["/zh-CN/注意力机制/index.html","5f9290560f34162f6edea23b7e6ab629"],["/zh-CN/激活函数合集/20190719210645402.png","9839e86af56208b37de978c2360e422b"],["/zh-CN/激活函数合集/20190719210849124.png","705d6f158a4b70b2e1c0edce23dd5cfb"],["/zh-CN/激活函数合集/20190719211201399.png","a0e792c13d625198a3567ba80682528b"],["/zh-CN/激活函数合集/20210528102716672.png","74632f242c056d62f0cbc94b04239979"],["/zh-CN/激活函数合集/20210528102737126.png","7429f0c252903ee327e310db4baa6d78"],["/zh-CN/激活函数合集/20210528102747835.png","a724592e39f7cd7523bde442cf544f55"],["/zh-CN/激活函数合集/20210528102949435.png","43d3d9be420d5ce6f6d104911270d74d"],["/zh-CN/激活函数合集/20210528103004303.png","8ae70bef4986e2386366a0f0bb5091cb"],["/zh-CN/激活函数合集/20210528105245598.png","333af9fd251a190d94d60bf7464a9aed"],["/zh-CN/激活函数合集/image-20220421221448860.png","65517882de6dd23e56e466d72c9ea75c"],["/zh-CN/激活函数合集/image-20220421222005130.png","3ecba7ffd260a92f4c549be9d5bc8d04"],["/zh-CN/激活函数合集/index.html","a2f0a59d2cb645f3af05987a35bbf785"],["/zh-CN/烟之外/index.html","07f7e4e65dca2a89962bd1581de77a74"],["/zh-CN/用两个栈实现队列/index.html","4d899d0f045a1e922f8f8529449c58b1"],["/zh-CN/计算机视觉单词表/index.html","cc5d11406b7186f5d188e9dc21bad67c"],["/zh-CN/遇到的问题/image-20220406191420560.png","40b1a153dac1d83a1b245b1a5e2c5150"],["/zh-CN/遇到的问题/image-20220406191519097.png","4bb3ee6c9b645d69b25cf6f310e87d4d"],["/zh-CN/遇到的问题/image-20220406191620889.png","e06766e48e3ca3bab2d07242cab03d56"],["/zh-CN/遇到的问题/index.html","73be65a06c80e3c7e6e25f31956385d1"],["/zh-CN/马裤先生/index.html","1260d822f803f50d2a67585d42f31122"],["/zh-TW/index.html","07b3f93d0fdd39f61b938961df1dcd3b"],["/zh-TW/torch_/index.html","feb026c0ab02ac2e566cd107e1633a4a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":null});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":null});





/* eslint-enable */
