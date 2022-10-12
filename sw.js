/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df2f75e4dd0fb9150ebdea361058367c"],["/about/donate/image/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/about/donate/image/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/about/index.html","c6cff4a9c8f3b2b303dfd6d0bceba1dd"],["/archives/2022/03/index.html","588b4e7be5e9af858d7c423a7be6afa1"],["/archives/2022/04/index.html","4bf7f16b69192c29b08ef02b539e5962"],["/archives/2022/04/page/2/index.html","75a9509fe6f13d1969d4511d8673855d"],["/archives/2022/04/page/3/index.html","882d5689f1ab9a9b9cb839dcc503da97"],["/archives/2022/05/index.html","e738a94a35c279f564cb502cd539287e"],["/archives/2022/05/page/2/index.html","0f6a0b3859a69c563f3bff5a0606157a"],["/archives/2022/06/index.html","e37e7bd11b3f6621d817f9c65bc247bf"],["/archives/2022/07/index.html","82be9c2e58566d02f3fe1077e881813e"],["/archives/2022/09/index.html","60052a880aad0a4892be5caaa45dff2d"],["/archives/2022/09/page/2/index.html","e42d3b3feceb92bfc2ddedba23cb1f6e"],["/archives/2022/10/index.html","f74b7903f4c5a7118fb72fcf10bb92d5"],["/archives/2022/index.html","7a4db5f1cc9b4561e8bd134af28bb915"],["/archives/2022/page/2/index.html","e7728ec1e34c6c0ac76da85b9c90c052"],["/archives/2022/page/3/index.html","358651f32143f8d163a3ed405a3925ad"],["/archives/2022/page/4/index.html","743c98dd09cdba530f4febf431a23a2e"],["/archives/2022/page/5/index.html","b82a0207c212aec587476827c1f5c5bd"],["/archives/2022/page/6/index.html","f3bc44eb10888fd08ba4b30f0d657086"],["/archives/2022/page/7/index.html","f7105dbb7b55806b96ac79ed1095a791"],["/archives/index.html","3baf9950557b0de130a86b1233268184"],["/archives/page/2/index.html","c2748a88f3c2e6c7f963f5e6695dc949"],["/archives/page/3/index.html","ecba58e8ab816a69427fb3d9699ae534"],["/archives/page/4/index.html","2c63bf81f07e2371050439900c72830b"],["/archives/page/5/index.html","68fad6c1eb87741cf42db03d9ad18655"],["/archives/page/6/index.html","17567c94f015be2e19705c31da6c8623"],["/archives/page/7/index.html","78e87be4cb58d6f48cffa01e5b642b11"],["/artitalk/index.html","fb7f5d3ae0c422a5c4dc241ddd5cee74"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","f2b9f86de1182f3f80e8f7f1f9c6824a"],["/categories/Hexo博客搭建/index.html","aa1d4906a66d399cd8b7f24df5594efb"],["/categories/Leetcode/index.html","69e10a542c63aad62eb3d5fff26b5e8c"],["/categories/Linux/index.html","467bd91df1cc21ec15812e30b2bedbc4"],["/categories/MySQL/index.html","ee78dd2f1cf02f5d74683e0d73199c97"],["/categories/github/index.html","f01bb82d76f9102769431c1642b00d18"],["/categories/index.html","1cd1d7f204a16f977cfe9851dbf046b1"],["/categories/novel/index.html","95fbfcd29ee3390441be9fff849f00f3"],["/categories/python/index.html","ea0e8ffa6164522a427fabfc2f32831a"],["/categories/pytorch/index.html","3d06036dc8f4c077e8102f2b4642b8e1"],["/categories/rss/index.html","01df60c7699bf0ee0709cbc4b169711b"],["/categories/tensorflow/index.html","938d32adab835f317d222bb77127541a"],["/categories/typora/index.html","2a188cbd053b103b22088045eb2cbb63"],["/categories/ubuntu/index.html","af0fc69e06c1fd75fe2f4d576ad20e3b"],["/categories/学习笔记/index.html","6a20cae6c429042bd7c408977f6445b0"],["/categories/文学黑洞/index.html","289d00b08e1cc61b599385de4369d478"],["/categories/机器学习/index.html","ab37214ba6de19feeb5d4e2cc386a057"],["/categories/目标检测/index.html","ba764ed7520fa979a1d114cea87e2b4f"],["/categories/目标检测/page/2/index.html","db1af842a89935dc615bb723dd0f764a"],["/categories/科研推荐/index.html","fa762c0964d08efa2db6e40c38048a01"],["/categories/色彩搭配/index.html","2eb021ce1b87be16e9f10fe7d7916fc0"],["/categories/计算机视觉/index.html","b2fca0aa9e6635596b63591bfc942bc6"],["/categories/计算机视觉/page/2/index.html","6e94f7b9fc4aa4d44d8ea70c4ed89769"],["/categories/计算机视觉/卷积神经网络/index.html","fc6ef17965778a431aeb0968b628ecab"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","e1e86b0125dcb3b4205ae92876b6051c"],["/css/matery.css","00e31a921e09c25ee789fc56f6a11fd3"],["/css/style.css","4b07798b161723ae7a5ab827ea2ab1b7"],["/custom/darkmode.css","9b4407d3ba03e71ab8b6576037170c2b"],["/custom/darkmode.js","d19f67397c2b8f9f13a539558f0513bd"],["/diy-font/MaShanZheng.woff2","2246d07ba6f83d4a2d9e498f99f87948"],["/friends/index.html","f63f27426b2d59256b60a62c87c33732"],["/images/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/images/GFsoso.png","c64ccf4282dd930d373039a93e5ca88d"],["/images/SQL_JOINS.png","6ef8793d15b2767cd18a85ee38ceac9c"],["/images/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/images/image-20220404201407249.png","b24fef532aa0154cc1eb74400e821f3c"],["/images/shuoshuo_logo.jpg","f697ea82c35e9a4013fd8ca2ad83a076"],["/images/volantis_log.png","8e6a41190d5b709ac3c856427cc39367"],["/images/volantis_navbar_logo.png","e406cd1ee3aaccea433a073c267a7507"],["/index.html","a455073030a9461a6500281d3b77b592"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c1daed98d6d6a4eb074d6e5a30f263e4"],["/page/3/index.html","27464e8c13738d6510bc204bb1f5083d"],["/page/4/index.html","d0dffac806834ee7d1406f528cf3bbd7"],["/page/5/index.html","fca1bee561d1b6aba55aec9b5063d5c7"],["/page/6/index.html","5212e5ccde2c001b8defd50f536d8e21"],["/page/7/index.html","655bbb3340f8b4d592b575aab2d6531c"],["/sw-register.js","33b998ffc478ca74feb8fa866d78b24c"],["/tags/Attention/index.html","096469dace3cef83cab112a3bdcaa08e"],["/tags/CDN/index.html","694dcbc95e53e31de1ae6470c58e5e17"],["/tags/Concat-add/index.html","cd1362e228345cb2188edb4dd405d0f0"],["/tags/FPS/index.html","6f953ae99313519226db25ed0dc0c9b3"],["/tags/GAN/index.html","ccec997fd28f2dae4012d3808a5f9b01"],["/tags/Hexo/index.html","86afa73cace4d9bc3984ac99c7b41b29"],["/tags/Inception/index.html","f6f7acbfc29aafe2dbadafd8f54549b6"],["/tags/Liunx使用教程/index.html","64b8d07a7f176f5f8d83a7b6ca47052b"],["/tags/RFBNet/index.html","f8cee54a83ff27d27d22af518866f8ea"],["/tags/SSD/index.html","86a088e4d93c55413c32e052da9f4613"],["/tags/contiguous/index.html","f5d986beb456fbe02a94846898762d0b"],["/tags/cumsum/index.html","a0a0740445289aff4eddf0e9c6213c4c"],["/tags/darknet/index.html","2b3e923b4c9350d400256867835e05b2"],["/tags/epoch-iteration/index.html","8501c6d97769ba14b692bf8e9a81e113"],["/tags/faster-rcnn/index.html","236f262e30cbac76073a649623c69fb8"],["/tags/fork/index.html","06990bb981eeae1585d3c095378f0cc9"],["/tags/github/index.html","83f72fadb54f4da1f7dda28c1c2a308c"],["/tags/grad-cam/index.html","4263d0225f768c24fa6af2594eb0ff0b"],["/tags/index.html","21b0452eff5781824f24164396e90671"],["/tags/logo/index.html","a524a29e1efe65a6ea7df55d43fb76fc"],["/tags/matplotlib/index.html","1e233f7ae798deee73e4f0e9445ee71c"],["/tags/newaxis/index.html","faabb85ec869644d255b4dacf8b54157"],["/tags/open-graph/index.html","c36e634d1b0397832d1fd31566962262"],["/tags/pip换源/index.html","8104bbf0436ae5dc8252f73649888cad"],["/tags/relu/index.html","05097046efb03124e91512bee8d1fd7d"],["/tags/resnet/index.html","5fd4b3c95a52ce7b390357c9e918fafc"],["/tags/retinanet/index.html","d33f4f107809c13d2ec02034cc860867"],["/tags/rss/index.html","81e7c961d3aa6d6d63fe40cd9c749045"],["/tags/torch/index.html","fd8c1b02946ae9dc0df9dd1760c4f804"],["/tags/transformer/index.html","eadb4b32e865e15148f53a985e85fa37"],["/tags/volantis/index.html","a656a8e1f509f756eababab7bcc1b755"],["/tags/warnings/index.html","869ee147094843130f873d2e3c27c0d3"],["/tags/yolov3/index.html","e594562e93cc95e06ffe8d6f49bca116"],["/tags/yolov5/index.html","01e1988b0a08ea9bac1a4e151a38df05"],["/tags/zetane/index.html","f2ed48f458b0b3c9f941e99a39170b3e"],["/tags/专业名词/index.html","5e65eee9970cc32fc3ccf1f6efe359e3"],["/tags/今日故事/index.html","592e7470cef7d718a8f3ed9a428092ca"],["/tags/使用指南/index.html","c08b8a360f84074f99295118e9800c38"],["/tags/函数库/index.html","015224f757195d5c24c8cf9b1193c275"],["/tags/力扣题解/index.html","a85f4345a492c0f7163b13d8994f0587"],["/tags/博客提升/index.html","ab73fd6643f199020e055a18587f16b1"],["/tags/博客搭建/index.html","bf2d4944939e0f533550947200e056e7"],["/tags/参数计算/index.html","8b54ac73f28567968fe6d70bf961a8fe"],["/tags/可视化/index.html","1af84a70b033e4b2af6ffa06e2d86f49"],["/tags/基础概念/index.html","f7908ed8b8a5f24b225b984c1f51eb73"],["/tags/学习笔记/index.html","5ae232dd6fe6b0021c7abf0ab3901aaf"],["/tags/学习笔记/page/2/index.html","80dc6400cb2999b4e2cac163bc99efbe"],["/tags/感受野/index.html","ada1421658b7d2970d251ba78c40384d"],["/tags/损失函数/index.html","852dc329dcd538bea6273037dcc68908"],["/tags/数据处理/index.html","17453412b6791319d558f49c46c84745"],["/tags/数据集/index.html","974513492cd2f556ddbf85791fa090ea"],["/tags/文献工具/index.html","29688a5b4a43c715e4e52755ceaca63c"],["/tags/文献推荐/index.html","97483c5b4bfbed5a91f0146e1e1d5c6b"],["/tags/激活函数/index.html","7d8d59a8eefd479922316db5aee514ff"],["/tags/论文笔记/index.html","c633beef8314128a50374617421f7a7a"],["/tags/论文笔记/page/2/index.html","29d496f8e8d1fc624509533a30efcc30"],["/tags/软件安装/index.html","943de637924cc11d7e89fca70e4215d5"],["/tags/输入与输出/index.html","b347e1790a36aa6b0015e7f314b48c8a"],["/zh-CN/CABNet/image-20220927153422183.png","ea12816a81c988a9f8c1c9016ef0b43c"],["/zh-CN/CABNet/image-20220927154959945.png","a5fe66e2f35171dbfa682cbbde81325d"],["/zh-CN/CABNet/image-20220927155113203.png","1cd313f07f5471fd14614fea01d367df"],["/zh-CN/CABNet/image-20220927160946040.png","e134dc3c0346d49dcaeb3fb63d8d53af"],["/zh-CN/CABNet/index.html","18c5084a0405b7991b1d415b96cdefc9"],["/zh-CN/CNN参数量计算/image-20220421212236498.png","e0c03f34b8d850b3751069f1792dc6dc"],["/zh-CN/CNN参数量计算/image-20220421212929933.png","497ee94231336cda1ac8938eae35d52d"],["/zh-CN/CNN参数量计算/image-20220421213603964.png","affc9aec92ddba0b88db3fa21d87c70e"],["/zh-CN/CNN参数量计算/index.html","fb0961b3c015fa560d8634f83702498c"],["/zh-CN/CNN输入详解/index.html","742299b58dcbd75c936d1831cca95c7c"],["/zh-CN/CNN输入详解/v2-0bd8d5c23e469f40cc9e7847d5d6491b_r.jpg","76a5078212f41e1b1c140e93357fe07a"],["/zh-CN/CNN输入详解/v2-14d0b66fd755750e48b08cfd1b6bc2e9_r.jpg","ef9e374667b23e00f2fd20fb103dbf83"],["/zh-CN/CNN输入详解/v2-4d6368c19a126926541a157da37f4742_r.jpg","d9da2669cd54d8bc9d5c7108a6579fce"],["/zh-CN/CNN输入详解/v2-53cfe32119cfeba1e2bc73a18015f450_r.jpg","28544db594750c18603af033436a1b44"],["/zh-CN/CNN输入详解/v2-a3f23245d7a2f41554b27e38755927c8_r.jpg","e407e4660f43f5812e52bc53313e8f27"],["/zh-CN/C语言/index.html","c878b901ae6c30e64b7330ac2630d4de"],["/zh-CN/DCGAN/20201202124131662.png","5d81ed784bcb28c8bbf6f94d5565602f"],["/zh-CN/DCGAN/20201203114355820.png","1e21799e245213923a25299db2e5d2de"],["/zh-CN/DCGAN/20201203114415814.png","35ee76b344a672b5fdd69b7c09aba793"],["/zh-CN/DCGAN/image-20220421201415525.png","bce057902ff3111a085dc1ac731264be"],["/zh-CN/DCGAN/index.html","42ae01d01634d9ca69e3356c337f2e6f"],["/zh-CN/Darknet53/16006821-59dd6b77da823e7f.png","ec0dbf6e41dc5291efc6796c9ad2d219"],["/zh-CN/Darknet53/index.html","371411a4f4572a9bf6945837dae3728b"],["/zh-CN/FPS/index.html","2d84a7075ee28322ad2260f5f31edce6"],["/zh-CN/Faster-rcnn/image-20220417152429746.png","d6d78f2cdb85c6f5390e233e8cfbeed7"],["/zh-CN/Faster-rcnn/index.html","7a09c4776ddea547c5410a265453f7b7"],["/zh-CN/Fork_github/image-20220502215437444.png","6680419f225ed138de3b70c50dc77f75"],["/zh-CN/Fork_github/image-20220502220838865.png","dc2832f3a4b75df85fd640ebef370f0b"],["/zh-CN/Fork_github/index.html","30bcad93f5917a5a59a36c010a05e9fd"],["/zh-CN/InceptionV3/2019111309515588.png","1766f9d3827bd7b97b02647afe2ca66f"],["/zh-CN/InceptionV3/20191113095610269.png","e6b296e9f90564c1823d0e7b353d1a00"],["/zh-CN/InceptionV3/2019111309572648.png","da0311c71f538ebedb99d6fcc488f59f"],["/zh-CN/InceptionV3/index.html","650b60d3674443b3c300e3e27c593aae"],["/zh-CN/Linux系统学习笔记/index.html","1689d5a10c2cf3dfa9543c3a0d3dbdbf"],["/zh-CN/Logo学习笔记/image-20221011194845234.png","017a432fd21a7655729568bfe482efe8"],["/zh-CN/Logo学习笔记/image-20221011195053589.png","66f87ad1a8bf77b81c5029bee3556a4e"],["/zh-CN/Logo学习笔记/image-20221011195220675.png","1aa1fc6bd679829471a9d30472d9cdd7"],["/zh-CN/Logo学习笔记/image-20221011195259241.png","5b47ebc7a10e94d545695beaaa2fd160"],["/zh-CN/Logo学习笔记/image-20221011201718341.png","d45aaba5b44bb329462feb7f2445ae71"],["/zh-CN/Logo学习笔记/image-20221011201922042.png","4273b8b9ebaee4ab6bf5c0bbd2f451f3"],["/zh-CN/Logo学习笔记/image-20221011202159256.png","e82f230dc4f9ca10b5e658a5df0e751e"],["/zh-CN/Logo学习笔记/image-20221011202750309.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203307190.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203557341.png","eb33952b46c093e2dd33182612894965"],["/zh-CN/Logo学习笔记/image-20221011203925009.png","8b3e7699ceec6a4b1b2badb3f8d4392f"],["/zh-CN/Logo学习笔记/image-20221011204450563.png","df8bf34524c40f403f4e42ae8db2dc0a"],["/zh-CN/Logo学习笔记/image-20221011211802488.png","88b52a3f69fb8092f750701ed301baba"],["/zh-CN/Logo学习笔记/image-20221011212013978.png","808915a61c05ba7781e28f9df44534ef"],["/zh-CN/Logo学习笔记/image-20221011213810341.png","b07ae69dcda8a42519f9fac802d17a5f"],["/zh-CN/Logo学习笔记/image-20221011214339527.png","034bd0fbe0f8182912e5c49beba2f43e"],["/zh-CN/Logo学习笔记/image-20221011220420163.png","c1d4fe63f709fd8ea4511025073be34f"],["/zh-CN/Logo学习笔记/image-20221011221139685.png","fe9f71b0b7b2426319c591d1403e2498"],["/zh-CN/Logo学习笔记/image-20221011221830591.png","b6cb56ed1a02a0a8e79f360435500587"],["/zh-CN/Logo学习笔记/image-20221011222542070.png","70fc5017c1f76fef28a772fa331a3d7f"],["/zh-CN/Logo学习笔记/index.html","6a24636a9ed40913421d5b4d07297f78"],["/zh-CN/Matplotlib学习笔记/03D59143-B345-4B36-A7CD-53F698AB5284.jpg","48f26f9a97a5ab77bd305c27b738182e"],["/zh-CN/Matplotlib学习笔记/image-20220403204022943.png","919ac42986651e4738131154ebab289e"],["/zh-CN/Matplotlib学习笔记/image-20220403205635489.png","bc92ac21038579546b4f5a38e1ec4b1a"],["/zh-CN/Matplotlib学习笔记/image-20220403205827906.png","022d6f1fb655a2ed38056b8218f02ee7"],["/zh-CN/Matplotlib学习笔记/image-20220403210031623.png","8eace73c221d2a2013267174fffb8ffb"],["/zh-CN/Matplotlib学习笔记/image-20220403210331668.png","46e3127caee481d419887ff4b6ce6882"],["/zh-CN/Matplotlib学习笔记/image-20220403210514868.png","77bdea7a9f03b5d57fe3882b04b511f9"],["/zh-CN/Matplotlib学习笔记/image-20220403212010830.png","704ddbe35ca8c310e3b945493055e131"],["/zh-CN/Matplotlib学习笔记/image-20220403212950411.png","56f6c1312342d6b7ac8bafbae73761c9"],["/zh-CN/Matplotlib学习笔记/image-20220403213418027.png","3601ca44693c77aa21e1f821d5f20887"],["/zh-CN/Matplotlib学习笔记/image-20220403213911622.png","a19905aa4b01aeea18c414e1ae19326d"],["/zh-CN/Matplotlib学习笔记/image-20220403215102017.png","174bff52b22eadd006f223cf15c5ad8f"],["/zh-CN/Matplotlib学习笔记/image-20220403215856505.png","dabf66bea220aeae2765cf644823e7ec"],["/zh-CN/Matplotlib学习笔记/image-20220403220017186.png","d884d2015eb25ac01277b6d2cfd3c500"],["/zh-CN/Matplotlib学习笔记/image-20220403220233003.png","4f3867833d4de85dd81dcebdf50f2ac9"],["/zh-CN/Matplotlib学习笔记/image-20220403221432174.png","3e9d0a136a3635323de5d467aebaac3a"],["/zh-CN/Matplotlib学习笔记/image-20220403221604494.png","1101c22fadc5fecc213a5d8ab1a5eb68"],["/zh-CN/Matplotlib学习笔记/image-20220403221822295.png","c2d7e2714f114a3d88fea127c6b95152"],["/zh-CN/Matplotlib学习笔记/image-20220403222000966.png","1051d9a97a21047f0e1b4a739c3d9f77"],["/zh-CN/Matplotlib学习笔记/image-20220403222117925.png","faaf3e7ad02a2103810280958249d1a1"],["/zh-CN/Matplotlib学习笔记/image-20220403222318825.png","bd6dd296001e2e05e809ef1862512a43"],["/zh-CN/Matplotlib学习笔记/image-20220403222526935.png","2b2a615f045240ff43bd853ba8da4eb3"],["/zh-CN/Matplotlib学习笔记/image-20220403222628227.png","d3d19b3727d93c78a351f912017735e1"],["/zh-CN/Matplotlib学习笔记/image-20220404095612577.png","72cac94403d8479a10b5df4cf6d965af"],["/zh-CN/Matplotlib学习笔记/image-20220404100123540.png","bad3df5628cad4ac96ae429955d814a1"],["/zh-CN/Matplotlib学习笔记/image-20220404104121709.png","7e41c07b2b726cb7eb8348536c3cfed3"],["/zh-CN/Matplotlib学习笔记/image-20220404104415101.png","4fd2652734bb1c6a1efb6d131d0cc7f6"],["/zh-CN/Matplotlib学习笔记/image-20220404104616081.png","354a98436823f5bf50aa17e8543232f4"],["/zh-CN/Matplotlib学习笔记/image-20220404104841496.png","0e2c4a00b4bde7b6cfb97db33fbf175d"],["/zh-CN/Matplotlib学习笔记/image-20220404104916266.png","86565c756b80b8d71a737b8ffb399edc"],["/zh-CN/Matplotlib学习笔记/image-20220404152016310.png","512c3dc5cc36264dc6b77978171a4b81"],["/zh-CN/Matplotlib学习笔记/image-20220404152129680.png","b83ac045b82958b1ed8f7ac8a5833739"],["/zh-CN/Matplotlib学习笔记/image-20220404152316633.png","51cbcc8d5f2f7f88f3f6e4979a39ec19"],["/zh-CN/Matplotlib学习笔记/image-20220404152756053.png","3fef0d81c6cf7e86932eea1f94c2b45e"],["/zh-CN/Matplotlib学习笔记/image-20220404152958366.png","d5abe09dc1f041d25f34ab93403645f4"],["/zh-CN/Matplotlib学习笔记/image-20220404153408476.png","11bb82bcfaf1b6792da81aac27f5e06e"],["/zh-CN/Matplotlib学习笔记/image-20220404153431942.png","c7cdf1822dae005cfcb9c3fd55ebcc9a"],["/zh-CN/Matplotlib学习笔记/image-20220404153453565.png","affef3dfd411e0da00985a430481c5e3"],["/zh-CN/Matplotlib学习笔记/image-20220404153511622.png","ded25e5009462945a29fec94699826ec"],["/zh-CN/Matplotlib学习笔记/image-20220404155337371.png","4dabeff1437de31a42025c5c4a8a7fc0"],["/zh-CN/Matplotlib学习笔记/image-20220404155550197.png","436be9515492642d83c1505e38798f59"],["/zh-CN/Matplotlib学习笔记/image-20220404155740263.png","793150e235771e1bff86ac0ad2466ca2"],["/zh-CN/Matplotlib学习笔记/image-20220404155923033.png","f4b47e94359ccfcc237f551fbf591a2d"],["/zh-CN/Matplotlib学习笔记/image-20220404160218777.png","d04d0bd4189fd5f00661c4605f8f203c"],["/zh-CN/Matplotlib学习笔记/image-20220404160411035.png","b5d27d60625ddf2fed1d00286340a759"],["/zh-CN/Matplotlib学习笔记/image-20220404160555429.png","4a0a121ed3eab4340274b52c0d3ff5e2"],["/zh-CN/Matplotlib学习笔记/image-20220404160751739.png","14581add9bd472f05a69baaec2c9ace4"],["/zh-CN/Matplotlib学习笔记/image-20220404160958004.png","4cddfe75ee99274e63d8ca0a6e4fa53e"],["/zh-CN/Matplotlib学习笔记/image-20220404161117677.png","992f570a5002e304c6c1760f0f97fcb0"],["/zh-CN/Matplotlib学习笔记/image-20220404161139138.png","19d6b21db11bfa5d893a678467b54aa2"],["/zh-CN/Matplotlib学习笔记/image-20220404161157754.png","01318e1b2cbb6211893ab792d426044b"],["/zh-CN/Matplotlib学习笔记/image-20220404162147295.png","18222adb38ea6db423944ab619bd02bb"],["/zh-CN/Matplotlib学习笔记/image-20220404162341451.png","fe2040942619c1fec23114f7e98750c8"],["/zh-CN/Matplotlib学习笔记/image-20220404162449487.png","8b02b3a30eeff7f4d2a6a22e874c7fec"],["/zh-CN/Matplotlib学习笔记/image-20220404162554129.png","0808441d3b143dc484513a9be0eb8dc2"],["/zh-CN/Matplotlib学习笔记/image-20220404162717588.png","215619a10e832542722a1247936b90ec"],["/zh-CN/Matplotlib学习笔记/image-20220404162753714.png","db6c135dba570f1b3079c9a91071bb38"],["/zh-CN/Matplotlib学习笔记/image-20220404165657025.png","5aae0cf326f09763bbd4fd7ac0321c93"],["/zh-CN/Matplotlib学习笔记/image-20220404165759838.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404165814024.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404170000561.png","933ec2f4841c3785da663f6366e264f9"],["/zh-CN/Matplotlib学习笔记/index.html","ee9d4c3b7943e404bd661d5b3c35ae70"],["/zh-CN/MySQL学习笔记/index.html","357fd01f372827ce7b13b255ac5fc053"],["/zh-CN/RFBNet/index.html","b6c965eebce771037942e10f3c3ad78f"],["/zh-CN/RSS/index.html","6a69dc3e4081e210bf0c218d336d35a8"],["/zh-CN/RSS/rss.gif","4f1a6fe5b219673b2644bd22c3713016"],["/zh-CN/RSS/xml.gif","e67c90a18c89f8d05125c045b2978dcf"],["/zh-CN/Resnet/image-20220503185916137.png","700434cdd87d31541bd440e1150e1c1e"],["/zh-CN/Resnet/image-20220503193754428.png","077efd694a603f290cfb54138fc67ccf"],["/zh-CN/Resnet/index.html","3376d3f6f2bef979f512b3c0cc22130b"],["/zh-CN/RetinaNet/20191101111610548.png","d5d49a3bde157c852167d4ec0d6118b2"],["/zh-CN/RetinaNet/20191101111700950.png","2620c6cb7f02e188d68ff4dc8ce1c601"],["/zh-CN/RetinaNet/20191101111712727.png","6844345dc3f10ab7dcb45e1ece469804"],["/zh-CN/RetinaNet/2019110111235956.png","94ee9b27c2e8e8ba12c2153e2cf172d5"],["/zh-CN/RetinaNet/20191101113143598.png","431abf54c59eedb7b1ead2b67164b038"],["/zh-CN/RetinaNet/20191101114056207.png","36d6140907b2871bcbe58e766e99c304"],["/zh-CN/RetinaNet/20200129210050147.png","187eaf52a1314df9b0c3862d9d825394"],["/zh-CN/RetinaNet/20200214164001867.png","0d63196d158ca181fa19bc70c50d185a"],["/zh-CN/RetinaNet/20200214164354541.jpg","c814d84aee65291e2669b0ec557acaf3"],["/zh-CN/RetinaNet/20200215151533258.png","9ce57b4800b82b715304da6596b36675"],["/zh-CN/RetinaNet/2020021613520193.png","df42b8a1752f83e70790857a06adcf74"],["/zh-CN/RetinaNet/image-20220418210603737.png","3337e9957cd8951e969ebc0f155de535"],["/zh-CN/RetinaNet/image-20220419095619530.png","57945637a9882368e90f9a89e23f77d5"],["/zh-CN/RetinaNet/image-20220419100322079.png","96a9db2fbc1533fceadee59176227bf4"],["/zh-CN/RetinaNet/image-20220419100832971.png","b8fa7cc9f8848165809254e4f27961c4"],["/zh-CN/RetinaNet/image-20220419103637923.png","9a1824514618874d2e377a1f55374b92"],["/zh-CN/RetinaNet/index.html","bd2dbb3c84212d58f598fbf3eb5b58f4"],["/zh-CN/SSD损失函数/390ed4e1f5fc0a137b65dea937b907a5.png","7d8cb1a5f2096976ba47107057f7a1f8"],["/zh-CN/SSD损失函数/image-20220506200608617.png","83d78f2e3a544140a3be473e863692ea"],["/zh-CN/SSD损失函数/index.html","6bec2f215f098e6cefc6e74f17b04318"],["/zh-CN/The_story_of_a_great_schoolmaster/index.html","6d62f12e453e578e105956fb904a62c0"],["/zh-CN/VIT/19f323060f1f41ba99e743cea1fa5174.png","7658fc596411b8ef454ac40a95b66b04"],["/zh-CN/VIT/2500484f29ae4671944a06543ad3e026.png","ebdddc18eb8133ae8bf80b7c23e89ecb"],["/zh-CN/VIT/32c551decdb64331a1c4ec0471cc1f3d.gif","56b05407a642afba9d35075c5b8e1360"],["/zh-CN/VIT/4036cdfc91a6477d91009d574788a78b.png","8b6ac6ae1315a9f9d3858a7f0f604eb8"],["/zh-CN/VIT/430e12e75fd44c82ac95e504b5da0d50.png","d3da05c27a6cacc15e9f6216f15c12a3"],["/zh-CN/VIT/58cc10deb7dc45ae90ae606966d7c724.gif","e55837c3c109339eb66dbf941810bd7f"],["/zh-CN/VIT/8ff82ad32b994a12bfc2356718ac9683.gif","dfa0eaacf638ba4c5af220eb9b56e2c8"],["/zh-CN/VIT/90787898063c45fe888c136ba4b32e64.png","d6b94d2d68079ae9d811e8e6126dfa9d"],["/zh-CN/VIT/c41d889912a64057ab571bdfd5458910.png","2f93eb88a545f31573efb3c89bfa7295"],["/zh-CN/VIT/e3bf360d541c4eb1a243e100f17a48b6.png","12537cad8a5a49670c0097b12359e6ed"],["/zh-CN/VIT/image-20220418091306571.png","6073130969f044b6b0f415aa68951138"],["/zh-CN/VIT/image-20220418091855460.png","7897e151573d9fd81adfc9537a574dba"],["/zh-CN/VIT/image-20220418092240916.png","bd8d8cbde29c56e88c4d34bafe1b2348"],["/zh-CN/VIT/image-20220418104816862.png","29ba52286fedb88fcd0a3b523bacb09e"],["/zh-CN/VIT/image-20220418105537648.png","220d3a326a19cdd395b3907b8502ffed"],["/zh-CN/VIT/index.html","32e763f122edd52b9510a421517ebb7e"],["/zh-CN/YOLOV3/image-20220416194945035.png","dc1672429aa73cd1d84ee3b25057b69d"],["/zh-CN/YOLOV3/image-20220419102411716.png","f7105a0eba90314ff8138fced59f5f06"],["/zh-CN/YOLOV3/index.html","474b1138b426ce8c5194f27adfeaf794"],["/zh-CN/YOLOV5/0b33c17fb3ac47cfb2b79a80d5b2fbaa.png","7ab427555edfe01e75bc0e1ba0abfcdf"],["/zh-CN/YOLOV5/20200509113651540.png","e02237fe14857ea164e7dc768b7d4430"],["/zh-CN/YOLOV5/20200519211538419.png","5abe16d135802ead130ee5d8736c1c24"],["/zh-CN/YOLOV5/20200526140617608.png","9ab3d104b7c3ea31b29c587290cacab0"],["/zh-CN/YOLOV5/7d1f567fc97140d4b9492b5e28cd0ebc.png","d04c9c5a548a930ecf8ee323b9928fee"],["/zh-CN/YOLOV5/93fc40f7a47f46bbb37819115826ec1a.png","0a3f8778be0f54d5dd7c7814a54de663"],["/zh-CN/YOLOV5/d232d9ef19cb4b3bbb7b492aaf6ae097.png","729f1ecec4f3cde9669d029bf0209434"],["/zh-CN/YOLOV5/ddf3729aef4240b3aa6e5aa914ffff52.png","d8215b72a2210402c5aacc985f7bec0c"],["/zh-CN/YOLOV5/e6cb6d3c11db4510a034ca9b1a0ca339.png","d04e6d444d175a88b6e9ef83f3db6a58"],["/zh-CN/YOLOV5/image-20220505154442317.png","2384c714c9ecf5d290e15b0cc1860c04"],["/zh-CN/YOLOV5/image-20220505154713232.png","77d01bd2b05e1ef4d625540f562aad27"],["/zh-CN/YOLOV5/index.html","23cfadd34468e4e07e5dd01a16c89946"],["/zh-CN/centernet/index.html","bb0adfbc7e7865ca82bf465bda6c39ec"],["/zh-CN/concat_add/image-20220508171742020.png","f98a3801984cd0d1678f55b3f2e27db7"],["/zh-CN/concat_add/index.html","7adcbe61973205f1e34aba9125118b20"],["/zh-CN/contiguous/index.html","072507c6b47374bcca604eef9e7a5340"],["/zh-CN/epoch和iteration的区别/index.html","52ae7d0496ece153e901e15c0c79377d"],["/zh-CN/github使用指南/index.html","1965f52e9a96bd30dfabb79d4aadbda7"],["/zh-CN/grad-cam/image-20220922205142809.png","869c52d43cc6019ad90bda7a99c6b439"],["/zh-CN/grad-cam/image-20220922205934818.png","dbe0c428b4ece8abbc839934c2e9049f"],["/zh-CN/grad-cam/image-20220922210017803.png","3b51f6b31507aab75ffe5de50e6584f6"],["/zh-CN/grad-cam/image-20220922210044972.png","d5fa31ed71d80713d002d0d685851cd4"],["/zh-CN/grad-cam/index.html","d0385d51cee0d90bc779a509ddfd683b"],["/zh-CN/hello-world/index.html","492d07883a72e5b81ebe48c43fb357dc"],["/zh-CN/hexo标签插件/index.html","da761c0c3bf1282291b1d104fa41ddf6"],["/zh-CN/index.html","320f20c409413b7a5996d33b6e314dcd"],["/zh-CN/leetcode01/index.html","a097157b3df38598bf1231e9d26faee3"],["/zh-CN/nn_relu和F_relu的区别/index.html","a835c9f795075d73bdb095f212098009"],["/zh-CN/np_cumsum/1078885-20220224122651707-981078391.png","e12c514e6a64a21701dfad65851b1e69"],["/zh-CN/np_cumsum/copycode.gif","51e409b11aa51c150090697429a953ed"],["/zh-CN/np_cumsum/index.html","106e708f20a5587b3f414278fc963eaf"],["/zh-CN/np_newaxis/index.html","86d38da2930336d9ebaced33b9a9dc97"],["/zh-CN/page/2/index.html","de4f50a9e324d756ed5273734ad18f59"],["/zh-CN/page/3/index.html","f8e5b3a33b8ad601687867fe011367a9"],["/zh-CN/page/4/index.html","2d7700addfe8c843c112e01cf3dc66f1"],["/zh-CN/page/5/index.html","3ca81d42a4374af0745e922ed1934ec2"],["/zh-CN/page/6/index.html","3775792678de95cbb326df191671bfdb"],["/zh-CN/page/7/index.html","e4e3ea2645ca86677372cbd96a94c885"],["/zh-CN/pip换源/index.html","39df39cfa0db5b26bdd3c1bcee9773bc"],["/zh-CN/pyperclip/index.html","2efbcbe77bdf9264472121cdc0e56f63"],["/zh-CN/python知识补充/index.html","f6862d681348f5a2e54dfeebb0f3c657"],["/zh-CN/pytorch官方文档/index.html","45d74747bd7f101a7ebf3ce112253bda"],["/zh-CN/typora数学公式教程/index.html","20dd02a4355c56334d1d66448fbdfc05"],["/zh-CN/ubuntu安装软件问题/c89ffdc107df9a4e9185e7d51d5a8a21.png","5006eef670a4c474bc5c92c8d050504a"],["/zh-CN/ubuntu安装软件问题/d9085116a96c5c63859c5259fa0230bb.png","c9d4dc88ec69b34ac287577a3fa9c84a"],["/zh-CN/ubuntu安装软件问题/index.html","1ed6bf182ce80fd767e6264c24c5cc7f"],["/zh-CN/use_agg/index.html","1b1f4b78524a95e2b16bdb35e310bd02"],["/zh-CN/visdom使用教程/image-20220920214849080.png","00e4fc3055cd1180d2af15ec6f7e2b03"],["/zh-CN/visdom使用教程/index.html","9f86cfdf2687daf58537da9cba0bb9f4"],["/zh-CN/wandb/index.html","1b93ff2fb702e840328bc0dfaad27790"],["/zh-CN/warning_unsample/image-20220922212728269.png","05398e7d9148b13efe2008a8a2b0e782"],["/zh-CN/warning_unsample/image-20220922212820063.png","7a33becc778d0378472c4dd84f2c0e33"],["/zh-CN/warning_unsample/index.html","6793f89cab399611d8bf7822cc7a2c32"],["/zh-CN/zetane的使用/index.html","bab9a0bd3629ba41721370444c8025b0"],["/zh-CN/免费cdn/image-20221007231742803.png","d2721ffea27290892c8c807fa8183189"],["/zh-CN/免费cdn/image-20221007231924762.png","6994d5fc31a1028e34357145cc63f6d5"],["/zh-CN/免费cdn/image-20221007232349603.png","5b0d42570b1fe6472f4e37945d5b5c5d"],["/zh-CN/免费cdn/image-20221007232608806.png","c0e064e685a20971a64146f81eb59ad0"],["/zh-CN/免费cdn/image-20221007232855759.png","a03ee858b8affe54230f211f31b2b88f"],["/zh-CN/免费cdn/image-20221007233355564.png","da79c9954e900127f1d785f5d02bd708"],["/zh-CN/免费cdn/index.html","973e0f505bfb66826c9f6b6ab769f080"],["/zh-CN/可视化技术/index.html","407eee74511de931b9a06a1bc07b4ac1"],["/zh-CN/学习笔记/index.html","66e06cb49876bb22b605f617869f0c23"],["/zh-CN/学习网站集合/index.html","54c5a87d527e8f22acff21d9d087dd07"],["/zh-CN/学术搜索网站导航/index.html","8c9ae89fbb06d7d6a0415df118368f70"],["/zh-CN/开放图谱协议/image-20220926204651449.png","e5e39eb78bbdfe1c09425eea24ab0541"],["/zh-CN/开放图谱协议/image-20220926204719850.png","b4b971a30711ebd276265ee249f34f28"],["/zh-CN/开放图谱协议/image-20220926205301882.png","3de7995b57918abcbc01a0f209ced46a"],["/zh-CN/开放图谱协议/index.html","26a2779bf200e6c82b1d390e305e6f92"],["/zh-CN/感受野计算/image-20220427214037594.png","08542fc10d4ab8d01a2a86b6e2b83e99"],["/zh-CN/感受野计算/image-20220427214256808.png","e5955559b73c14bf444a1f3b122ccf67"],["/zh-CN/感受野计算/index.html","513328383e3f2fede223737597aa990b"],["/zh-CN/扁平时代的写作/index.html","3f00d708c2fa38abd26cf7a719621fcb"],["/zh-CN/提醒幸福/index.html","6437ce71936cd5cc0cc2ee9338d9dfe4"],["/zh-CN/教你学会色彩搭配/index.html","be52bf1b501991f08d2e0f8328676ac1"],["/zh-CN/数据处理/index.html","06be14552c752e4253731099455f3329"],["/zh-CN/数据集/index.html","d72db976282cec596e0bded65d4f97ae"],["/zh-CN/文献阅读合集/index.html","5f9c2fa873a143c1488b8b9d09ebd7e3"],["/zh-CN/未婚妻/index.html","06ccc798f2d9b91150efe35559b2b499"],["/zh-CN/机器学习/image-20220425220526167.png","d75c92ab8bc0d51e067ca90ee94a537c"],["/zh-CN/机器学习/image-20220425221025699.png","64d11c89150399c2d13f6a6057f624e5"],["/zh-CN/机器学习/index.html","0ce7692f2a7fd0de1f7977b976960e10"],["/zh-CN/注意力机制/image-20220331155344988.png","480790d67b46d18a3bf64c73e26c9e9d"],["/zh-CN/注意力机制/image-20220331155451951.png","6e85506648c9c03bfe0afb2752a35f25"],["/zh-CN/注意力机制/image-20220331160018390.png","f9abb2cbf784ce094e7698aa84a08d82"],["/zh-CN/注意力机制/image-20220331160207149.png","d3290c5b024284f5f1c9f52a19d3f12d"],["/zh-CN/注意力机制/image-20220331191026838.png","cdcdbed5afacdee7b9461900f5cc6132"],["/zh-CN/注意力机制/image-20220427215849678.png","e25156fa9b579bb7ba74193936780639"],["/zh-CN/注意力机制/index.html","0ddfd1218256367f4131b9bde43a8d8a"],["/zh-CN/激活函数合集/20190719210645402.png","9839e86af56208b37de978c2360e422b"],["/zh-CN/激活函数合集/20190719210849124.png","705d6f158a4b70b2e1c0edce23dd5cfb"],["/zh-CN/激活函数合集/20190719211201399.png","a0e792c13d625198a3567ba80682528b"],["/zh-CN/激活函数合集/20210528102716672.png","74632f242c056d62f0cbc94b04239979"],["/zh-CN/激活函数合集/20210528102737126.png","7429f0c252903ee327e310db4baa6d78"],["/zh-CN/激活函数合集/20210528102747835.png","a724592e39f7cd7523bde442cf544f55"],["/zh-CN/激活函数合集/20210528102949435.png","43d3d9be420d5ce6f6d104911270d74d"],["/zh-CN/激活函数合集/20210528103004303.png","8ae70bef4986e2386366a0f0bb5091cb"],["/zh-CN/激活函数合集/20210528105245598.png","333af9fd251a190d94d60bf7464a9aed"],["/zh-CN/激活函数合集/image-20220421221448860.png","65517882de6dd23e56e466d72c9ea75c"],["/zh-CN/激活函数合集/image-20220421222005130.png","3ecba7ffd260a92f4c549be9d5bc8d04"],["/zh-CN/激活函数合集/index.html","78998cd5f10470d8545666e878e3b92f"],["/zh-CN/烟之外/index.html","7f7c6f7c2858b690d1ef50c180bd2cdf"],["/zh-CN/用两个栈实现队列/index.html","9b9b1ea307252e37c20f19cfc8c8deaf"],["/zh-CN/计算机视觉单词表/index.html","7479376b417e8dfb53a4885e2d985260"],["/zh-CN/遇到的问题/image-20220406191420560.png","40b1a153dac1d83a1b245b1a5e2c5150"],["/zh-CN/遇到的问题/image-20220406191519097.png","4bb3ee6c9b645d69b25cf6f310e87d4d"],["/zh-CN/遇到的问题/image-20220406191620889.png","e06766e48e3ca3bab2d07242cab03d56"],["/zh-CN/遇到的问题/index.html","e74aeddd96b1c7b5844cea3ae27b02e8"],["/zh-CN/马裤先生/index.html","220049efca4b31611b0a12cc905757d7"],["/zh-TW/index.html","e23445c3707387e9e59b2a93a4f407dc"],["/zh-TW/torch_/index.html","7d0321e30f8b5fc2fc6e1737932b6980"]];
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
