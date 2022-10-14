/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5815f9c6390c47156475517de41b6851"],["/about/donate/image/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/about/donate/image/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/about/index.html","03b70a96714a71dff76952e82e13d3cc"],["/archives/2022/03/index.html","3729c4d4fe68334485e0b877081f8edd"],["/archives/2022/04/index.html","c3e0e338dedb106634115ec359fd0a7a"],["/archives/2022/04/page/2/index.html","1766e73597998d2b87748b5efed594e1"],["/archives/2022/04/page/3/index.html","868d61f5bf01ef543db3a28403049eef"],["/archives/2022/05/index.html","c0aa9bb3ff7769ee6a7062304b9fcc20"],["/archives/2022/05/page/2/index.html","ed65c0f8efb3bf90dce439b9cb8ba795"],["/archives/2022/06/index.html","b7f3f89aec7eda7bc4ce6141c77715f1"],["/archives/2022/07/index.html","f29b39356472fd075d78db1ab1ddd60b"],["/archives/2022/09/index.html","e01a909c6f4ba9ca8d693b2f788eee11"],["/archives/2022/09/page/2/index.html","8a9232477142d2f5205ea1f5196149ca"],["/archives/2022/10/index.html","521e6b21978b6fec5d69c33b5f649b62"],["/archives/2022/index.html","6f0fcf810d78981c16c8f562a8ffc0b1"],["/archives/2022/page/2/index.html","9ba4c656df50a357e04d9d4f8c7aa31e"],["/archives/2022/page/3/index.html","b7691a99e7dc2b47285a39acf7ecb033"],["/archives/2022/page/4/index.html","32bf194107279c895408bedd423600e5"],["/archives/2022/page/5/index.html","1ae830c912a994725f4bd2f0eb085f1f"],["/archives/2022/page/6/index.html","b9cffc4446a36c160e7bb1f0621b6d4b"],["/archives/2022/page/7/index.html","7896ec056da26c426098c6e066bc3f02"],["/archives/2022/page/8/index.html","2e02d2359199ef078edb40a2def65267"],["/archives/index.html","9e98a01e21b5080fa654826f32bb383a"],["/archives/page/2/index.html","0dbc33f5b75c57260ee1ca48fda625f1"],["/archives/page/3/index.html","c491f18095eadf8c8bbc36b604187f63"],["/archives/page/4/index.html","a3e93422160b527154668fa99e0803bb"],["/archives/page/5/index.html","f04a0022d5f8641eb3ca3bde5f584a8d"],["/archives/page/6/index.html","5b25be0fc07f1f7301365ee073de14f0"],["/archives/page/7/index.html","4f15f3675b6fb04b22895b29b2c6654b"],["/archives/page/8/index.html","42b7ce616cce130f8df3b32b8e5ca51f"],["/artitalk/index.html","674e0bd69833064c6130584dab039863"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言/index.html","01ded4cc97195d94ae6c594ed99a6301"],["/categories/Hexo博客搭建/index.html","fa5844331dc2fd9c0da0336b9ca60d0d"],["/categories/Leetcode/index.html","5e8206423183e668db05eb34dd0a607a"],["/categories/Linux/index.html","b24a9bd082ca2b5bffc244b2db834e30"],["/categories/MySQL/index.html","0cd0269432a60deed0b371a70bb3aa1a"],["/categories/echarts/index.html","c058c74363937ab70c634df942a0782b"],["/categories/github/index.html","616db7cccc253654835a01380c3bed54"],["/categories/index.html","a7a637331620ceda2f446b65b5ed8c01"],["/categories/novel/index.html","8b692a939d9a3cf0e87a5214b04224c3"],["/categories/python/index.html","64b04be91e63b6584ec078a31b7e9506"],["/categories/pytorch/index.html","5f79ffb94c6b464815e1b46d51fc9415"],["/categories/rss/index.html","c8559dbdc83132dfe886c31df188a7ee"],["/categories/tensorflow/index.html","f0c63e4095525908684d56213144b1d5"],["/categories/typora/index.html","c516c0deda809bb1d34e525c18f9fe9f"],["/categories/ubuntu/index.html","495cddf949270bde3b588f94d72851ee"],["/categories/学习笔记/index.html","41a8630e8639b722022a7e40ce3268c7"],["/categories/开发日记/index.html","acf0e8cd756516d55fa2cc51b8dfe939"],["/categories/文学黑洞/index.html","74be23af1ea8c596fc51abc83672b421"],["/categories/机器学习/index.html","eb9d774e196b4e48d3c2fa5a3a7be180"],["/categories/目标检测/index.html","54a976a4f0f3089379f3776112ef5a56"],["/categories/目标检测/page/2/index.html","d5700f1b2845a8cb416a79711b5819c3"],["/categories/科研推荐/index.html","868b855ed8e5a04a925de0998edc75c9"],["/categories/色彩搭配/index.html","c72764445f62cd55a53ee6d528eb9134"],["/categories/计算机视觉/index.html","018cbc4fd958e26facf6f8449fbcabae"],["/categories/计算机视觉/page/2/index.html","d71dbf3e27a8f288a70b5373917c394d"],["/categories/计算机视觉/卷积神经网络/index.html","e414f9d74ad3ebba7edb3feedf996a6f"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","e1e86b0125dcb3b4205ae92876b6051c"],["/css/matery.css","00e31a921e09c25ee789fc56f6a11fd3"],["/css/style.css","4b07798b161723ae7a5ab827ea2ab1b7"],["/custom/darkmode.css","9b4407d3ba03e71ab8b6576037170c2b"],["/custom/darkmode.js","d19f67397c2b8f9f13a539558f0513bd"],["/diy-font/MaShanZheng.woff2","2246d07ba6f83d4a2d9e498f99f87948"],["/friends/index.html","a57b4a729285841a42886f36ff74c394"],["/images/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/images/GFsoso.png","c64ccf4282dd930d373039a93e5ca88d"],["/images/SQL_JOINS.png","6ef8793d15b2767cd18a85ee38ceac9c"],["/images/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/images/image-20220404201407249.png","b24fef532aa0154cc1eb74400e821f3c"],["/images/shuoshuo_logo.jpg","f697ea82c35e9a4013fd8ca2ad83a076"],["/images/volantis_log.png","8e6a41190d5b709ac3c856427cc39367"],["/images/volantis_navbar_logo.png","e406cd1ee3aaccea433a073c267a7507"],["/index.html","e080ddeb2f8cfa28211935476055c1ec"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","05cf81e3b5060609f138c46575f34e46"],["/page/3/index.html","6ec92c7917b7f1d8cd2d36c8241512a9"],["/page/4/index.html","7cc4a3746267fe9cacb13a1a7edd14be"],["/page/5/index.html","7c4810c9f94fb63b64939d8083694070"],["/page/6/index.html","6863fbcb42d3dedbcb1e9bba24df79fa"],["/page/7/index.html","25bcdd93915e55af767482506ee4b7e1"],["/page/8/index.html","8d09b0853e71a34be37e6afbf6d818c1"],["/sw-register.js","2ffebb8c87fc8145d5a7d2b356dc3ad6"],["/tags/Attention/index.html","390f61922ffa96cf68464925c67e0c19"],["/tags/CDN/index.html","bd7c801ba288339df2a62b865a738fbc"],["/tags/Concat-add/index.html","941e054606782cfe0d1989953a9ade8d"],["/tags/FPS/index.html","e7b762f05ece6087c52686c1c809fb60"],["/tags/GAN/index.html","2eebb4261ab0e6786a5e55bd2018e331"],["/tags/Hexo/index.html","0cd67a0ce9b27cf28580745831692765"],["/tags/Inception/index.html","1ef38d44ca42d81238ecd72c27c03650"],["/tags/Liunx使用教程/index.html","6329d5b788f0a5d609212e536fa86910"],["/tags/RFBNet/index.html","ce6c73ad18c89ec39ae05ec4a5b82e8a"],["/tags/SSD/index.html","f314d81aedb1e43fd524becfc8f12c5e"],["/tags/contiguous/index.html","e090c1dff54d3092d47fb7d8b66be47a"],["/tags/cumsum/index.html","b9828cc67d1de7ad00c204a026f55c03"],["/tags/darknet/index.html","58280dacd5baf01ff7345fce4946c7af"],["/tags/echarts/index.html","a629c62d55a723215804593ea11421c3"],["/tags/epoch-iteration/index.html","310e98f9b3282acf8eba392dd2092950"],["/tags/faster-rcnn/index.html","6a53493f92139f9e2c2fd8cc4ff68f6b"],["/tags/fork/index.html","ba197a5fdd74bf8cb24fc214fdeb7620"],["/tags/github/index.html","42314e7764585a40772a764abe165a41"],["/tags/grad-cam/index.html","e3d2401a5ac9652251656a5ff0b29485"],["/tags/index.html","a32484d349717914c778060890c66e1c"],["/tags/logo/index.html","06db6f1ec1382cc89b817ca84696473e"],["/tags/matplotlib/index.html","c1d20da98a9e7366670c90b93b0ae622"],["/tags/newaxis/index.html","9c77b592d1597dfe729d0d2606822fcc"],["/tags/open-graph/index.html","5103390c9bf52a18057c6369efa84fda"],["/tags/pip换源/index.html","47b515be1c54312d08a043c9fe39d869"],["/tags/relu/index.html","234e11bdc328ed9688829d5ab48311de"],["/tags/resnet/index.html","a6c20403ab871ec7290c1ee0841b9076"],["/tags/retinanet/index.html","51e4df329bf258a0accfd3db0755fe94"],["/tags/rss/index.html","4bb14f01ad5134dd74b555c7cea5b50a"],["/tags/torch/index.html","54e6ec5568f595c646062719df728782"],["/tags/transformer/index.html","d85d32d16dc57e6b04755d5e788a9694"],["/tags/volantis/index.html","22a4e30d165c8d30805b36ea9055096f"],["/tags/warnings/index.html","3c0c756d3bae65f8b7aa62bd34e93ac6"],["/tags/yolov3/index.html","67a26435b040a75660ca4ddfd16ec324"],["/tags/yolov5/index.html","84c5562fd206095f8972c636a2a600bc"],["/tags/zetane/index.html","4d660cb858feea0fd6073a97692b69ac"],["/tags/专业名词/index.html","5bc90055daa33f3315d0b197c7009033"],["/tags/今日故事/index.html","e7448bbf61905ffae83754649181b392"],["/tags/使用指南/index.html","11f4994ea74a6d7d4d8dc4721a8b1e2b"],["/tags/函数库/index.html","80e43c5bcacc9f1ee4618e8b19ac42b5"],["/tags/力扣题解/index.html","eda49ccd9dd444e0fd0606a145c13d3e"],["/tags/博客提升/index.html","de1636379d2eee47ed9462f8c1f1a9a6"],["/tags/博客搭建/index.html","a7f537e452c1499d51c7e5c85fa3190e"],["/tags/参数计算/index.html","b8c438d3fa82f865dd12e0cdb58b2784"],["/tags/可视化/index.html","58c87d55b4da9d28f211b25434767cc6"],["/tags/基础概念/index.html","2db7f360b94e84acb23aa48436046da9"],["/tags/学习笔记/index.html","5537813e77c7018ebe1d9767e5c3f904"],["/tags/学习笔记/page/2/index.html","e6e1d63442eded581706976915f89716"],["/tags/微信小程序/index.html","56dd6685511a9a0b81c8d86cb009c2ac"],["/tags/感受野/index.html","1766e994feb94667a9316c22e89c652d"],["/tags/损失函数/index.html","aa96130efc203f3bf0412d32ae97f084"],["/tags/数据处理/index.html","ee1d57f6821cb2ea3103424d1bdfd884"],["/tags/数据集/index.html","ba05ab34733375675efbe282f7b44ec3"],["/tags/文献工具/index.html","a9dcc4afe4b19101be5ba37d09729b98"],["/tags/文献推荐/index.html","a0a06faa7099526dde3101c930345175"],["/tags/激活函数/index.html","eaa72f1bb6698bcf33efd1490254e577"],["/tags/论文笔记/index.html","ff09a59b85c14070b99b1c505e300a5c"],["/tags/论文笔记/page/2/index.html","7e90436e1b90850a259d5687ff10e9d2"],["/tags/软件安装/index.html","a06e47c33831ff482dcda0dbec02c04b"],["/tags/输入与输出/index.html","88277c88dd6dfe539833dd2400718a60"],["/zh-CN/CABNet/image-20220927153422183.png","ea12816a81c988a9f8c1c9016ef0b43c"],["/zh-CN/CABNet/image-20220927154959945.png","a5fe66e2f35171dbfa682cbbde81325d"],["/zh-CN/CABNet/image-20220927155113203.png","1cd313f07f5471fd14614fea01d367df"],["/zh-CN/CABNet/image-20220927160946040.png","e134dc3c0346d49dcaeb3fb63d8d53af"],["/zh-CN/CABNet/index.html","c2827646fea5d8e2f3e1b365dbac6465"],["/zh-CN/CNN参数量计算/image-20220421212236498.png","e0c03f34b8d850b3751069f1792dc6dc"],["/zh-CN/CNN参数量计算/image-20220421212929933.png","497ee94231336cda1ac8938eae35d52d"],["/zh-CN/CNN参数量计算/image-20220421213603964.png","affc9aec92ddba0b88db3fa21d87c70e"],["/zh-CN/CNN参数量计算/index.html","a422cd3db2d28b8296b04d02a361c82d"],["/zh-CN/CNN输入详解/index.html","9af02098f3b16b42ffe2dcddd3ec149d"],["/zh-CN/CNN输入详解/v2-0bd8d5c23e469f40cc9e7847d5d6491b_r.jpg","76a5078212f41e1b1c140e93357fe07a"],["/zh-CN/CNN输入详解/v2-14d0b66fd755750e48b08cfd1b6bc2e9_r.jpg","ef9e374667b23e00f2fd20fb103dbf83"],["/zh-CN/CNN输入详解/v2-4d6368c19a126926541a157da37f4742_r.jpg","d9da2669cd54d8bc9d5c7108a6579fce"],["/zh-CN/CNN输入详解/v2-53cfe32119cfeba1e2bc73a18015f450_r.jpg","28544db594750c18603af033436a1b44"],["/zh-CN/CNN输入详解/v2-a3f23245d7a2f41554b27e38755927c8_r.jpg","e407e4660f43f5812e52bc53313e8f27"],["/zh-CN/C语言/index.html","d5aba7c827644b2a9a839ce2be3da99b"],["/zh-CN/DCGAN/20201202124131662.png","5d81ed784bcb28c8bbf6f94d5565602f"],["/zh-CN/DCGAN/20201203114355820.png","1e21799e245213923a25299db2e5d2de"],["/zh-CN/DCGAN/20201203114415814.png","35ee76b344a672b5fdd69b7c09aba793"],["/zh-CN/DCGAN/image-20220421201415525.png","bce057902ff3111a085dc1ac731264be"],["/zh-CN/DCGAN/index.html","a44969ebbb6b95ad8b81ae3956516c42"],["/zh-CN/Darknet53/16006821-59dd6b77da823e7f.png","ec0dbf6e41dc5291efc6796c9ad2d219"],["/zh-CN/Darknet53/index.html","254798b66121123d65c3c4ae56f894ab"],["/zh-CN/FPS/index.html","b11dd77662bb3844e65f231466892aa2"],["/zh-CN/Faster-rcnn/image-20220417152429746.png","d6d78f2cdb85c6f5390e233e8cfbeed7"],["/zh-CN/Faster-rcnn/index.html","089d1defb4d6958aabd72c6dbbf36452"],["/zh-CN/Fork_github/image-20220502215437444.png","6680419f225ed138de3b70c50dc77f75"],["/zh-CN/Fork_github/image-20220502220838865.png","dc2832f3a4b75df85fd640ebef370f0b"],["/zh-CN/Fork_github/index.html","032bef945ad47aaa06bfeecf892f3a6f"],["/zh-CN/InceptionV3/2019111309515588.png","1766f9d3827bd7b97b02647afe2ca66f"],["/zh-CN/InceptionV3/20191113095610269.png","e6b296e9f90564c1823d0e7b353d1a00"],["/zh-CN/InceptionV3/2019111309572648.png","da0311c71f538ebedb99d6fcc488f59f"],["/zh-CN/InceptionV3/index.html","df1f62b0df0368b383dc3b54946eacfa"],["/zh-CN/Linux系统学习笔记/index.html","938335651de22f0e141346b0e1e13436"],["/zh-CN/Logo学习笔记/image-20221011194845234.png","017a432fd21a7655729568bfe482efe8"],["/zh-CN/Logo学习笔记/image-20221011195053589.png","66f87ad1a8bf77b81c5029bee3556a4e"],["/zh-CN/Logo学习笔记/image-20221011195220675.png","1aa1fc6bd679829471a9d30472d9cdd7"],["/zh-CN/Logo学习笔记/image-20221011195259241.png","5b47ebc7a10e94d545695beaaa2fd160"],["/zh-CN/Logo学习笔记/image-20221011201718341.png","d45aaba5b44bb329462feb7f2445ae71"],["/zh-CN/Logo学习笔记/image-20221011201922042.png","4273b8b9ebaee4ab6bf5c0bbd2f451f3"],["/zh-CN/Logo学习笔记/image-20221011202159256.png","e82f230dc4f9ca10b5e658a5df0e751e"],["/zh-CN/Logo学习笔记/image-20221011202750309.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203307190.png","7d67051c7be14f364a67b02c9f5137bb"],["/zh-CN/Logo学习笔记/image-20221011203557341.png","eb33952b46c093e2dd33182612894965"],["/zh-CN/Logo学习笔记/image-20221011203925009.png","8b3e7699ceec6a4b1b2badb3f8d4392f"],["/zh-CN/Logo学习笔记/image-20221011204450563.png","df8bf34524c40f403f4e42ae8db2dc0a"],["/zh-CN/Logo学习笔记/image-20221011211802488.png","88b52a3f69fb8092f750701ed301baba"],["/zh-CN/Logo学习笔记/image-20221011212013978.png","808915a61c05ba7781e28f9df44534ef"],["/zh-CN/Logo学习笔记/image-20221011213810341.png","b07ae69dcda8a42519f9fac802d17a5f"],["/zh-CN/Logo学习笔记/image-20221011214339527.png","034bd0fbe0f8182912e5c49beba2f43e"],["/zh-CN/Logo学习笔记/image-20221011220420163.png","c1d4fe63f709fd8ea4511025073be34f"],["/zh-CN/Logo学习笔记/image-20221011221139685.png","fe9f71b0b7b2426319c591d1403e2498"],["/zh-CN/Logo学习笔记/image-20221011221830591.png","b6cb56ed1a02a0a8e79f360435500587"],["/zh-CN/Logo学习笔记/image-20221011222542070.png","70fc5017c1f76fef28a772fa331a3d7f"],["/zh-CN/Logo学习笔记/index.html","adc1138f6b1233261b6cd8de02f88eff"],["/zh-CN/Matplotlib学习笔记/03D59143-B345-4B36-A7CD-53F698AB5284.jpg","48f26f9a97a5ab77bd305c27b738182e"],["/zh-CN/Matplotlib学习笔记/image-20220403204022943.png","919ac42986651e4738131154ebab289e"],["/zh-CN/Matplotlib学习笔记/image-20220403205635489.png","bc92ac21038579546b4f5a38e1ec4b1a"],["/zh-CN/Matplotlib学习笔记/image-20220403205827906.png","022d6f1fb655a2ed38056b8218f02ee7"],["/zh-CN/Matplotlib学习笔记/image-20220403210031623.png","8eace73c221d2a2013267174fffb8ffb"],["/zh-CN/Matplotlib学习笔记/image-20220403210331668.png","46e3127caee481d419887ff4b6ce6882"],["/zh-CN/Matplotlib学习笔记/image-20220403210514868.png","77bdea7a9f03b5d57fe3882b04b511f9"],["/zh-CN/Matplotlib学习笔记/image-20220403212010830.png","704ddbe35ca8c310e3b945493055e131"],["/zh-CN/Matplotlib学习笔记/image-20220403212950411.png","56f6c1312342d6b7ac8bafbae73761c9"],["/zh-CN/Matplotlib学习笔记/image-20220403213418027.png","3601ca44693c77aa21e1f821d5f20887"],["/zh-CN/Matplotlib学习笔记/image-20220403213911622.png","a19905aa4b01aeea18c414e1ae19326d"],["/zh-CN/Matplotlib学习笔记/image-20220403215102017.png","174bff52b22eadd006f223cf15c5ad8f"],["/zh-CN/Matplotlib学习笔记/image-20220403215856505.png","dabf66bea220aeae2765cf644823e7ec"],["/zh-CN/Matplotlib学习笔记/image-20220403220017186.png","d884d2015eb25ac01277b6d2cfd3c500"],["/zh-CN/Matplotlib学习笔记/image-20220403220233003.png","4f3867833d4de85dd81dcebdf50f2ac9"],["/zh-CN/Matplotlib学习笔记/image-20220403221432174.png","3e9d0a136a3635323de5d467aebaac3a"],["/zh-CN/Matplotlib学习笔记/image-20220403221604494.png","1101c22fadc5fecc213a5d8ab1a5eb68"],["/zh-CN/Matplotlib学习笔记/image-20220403221822295.png","c2d7e2714f114a3d88fea127c6b95152"],["/zh-CN/Matplotlib学习笔记/image-20220403222000966.png","1051d9a97a21047f0e1b4a739c3d9f77"],["/zh-CN/Matplotlib学习笔记/image-20220403222117925.png","faaf3e7ad02a2103810280958249d1a1"],["/zh-CN/Matplotlib学习笔记/image-20220403222318825.png","bd6dd296001e2e05e809ef1862512a43"],["/zh-CN/Matplotlib学习笔记/image-20220403222526935.png","2b2a615f045240ff43bd853ba8da4eb3"],["/zh-CN/Matplotlib学习笔记/image-20220403222628227.png","d3d19b3727d93c78a351f912017735e1"],["/zh-CN/Matplotlib学习笔记/image-20220404095612577.png","72cac94403d8479a10b5df4cf6d965af"],["/zh-CN/Matplotlib学习笔记/image-20220404100123540.png","bad3df5628cad4ac96ae429955d814a1"],["/zh-CN/Matplotlib学习笔记/image-20220404104121709.png","7e41c07b2b726cb7eb8348536c3cfed3"],["/zh-CN/Matplotlib学习笔记/image-20220404104415101.png","4fd2652734bb1c6a1efb6d131d0cc7f6"],["/zh-CN/Matplotlib学习笔记/image-20220404104616081.png","354a98436823f5bf50aa17e8543232f4"],["/zh-CN/Matplotlib学习笔记/image-20220404104841496.png","0e2c4a00b4bde7b6cfb97db33fbf175d"],["/zh-CN/Matplotlib学习笔记/image-20220404104916266.png","86565c756b80b8d71a737b8ffb399edc"],["/zh-CN/Matplotlib学习笔记/image-20220404152016310.png","512c3dc5cc36264dc6b77978171a4b81"],["/zh-CN/Matplotlib学习笔记/image-20220404152129680.png","b83ac045b82958b1ed8f7ac8a5833739"],["/zh-CN/Matplotlib学习笔记/image-20220404152316633.png","51cbcc8d5f2f7f88f3f6e4979a39ec19"],["/zh-CN/Matplotlib学习笔记/image-20220404152756053.png","3fef0d81c6cf7e86932eea1f94c2b45e"],["/zh-CN/Matplotlib学习笔记/image-20220404152958366.png","d5abe09dc1f041d25f34ab93403645f4"],["/zh-CN/Matplotlib学习笔记/image-20220404153408476.png","11bb82bcfaf1b6792da81aac27f5e06e"],["/zh-CN/Matplotlib学习笔记/image-20220404153431942.png","c7cdf1822dae005cfcb9c3fd55ebcc9a"],["/zh-CN/Matplotlib学习笔记/image-20220404153453565.png","affef3dfd411e0da00985a430481c5e3"],["/zh-CN/Matplotlib学习笔记/image-20220404153511622.png","ded25e5009462945a29fec94699826ec"],["/zh-CN/Matplotlib学习笔记/image-20220404155337371.png","4dabeff1437de31a42025c5c4a8a7fc0"],["/zh-CN/Matplotlib学习笔记/image-20220404155550197.png","436be9515492642d83c1505e38798f59"],["/zh-CN/Matplotlib学习笔记/image-20220404155740263.png","793150e235771e1bff86ac0ad2466ca2"],["/zh-CN/Matplotlib学习笔记/image-20220404155923033.png","f4b47e94359ccfcc237f551fbf591a2d"],["/zh-CN/Matplotlib学习笔记/image-20220404160218777.png","d04d0bd4189fd5f00661c4605f8f203c"],["/zh-CN/Matplotlib学习笔记/image-20220404160411035.png","b5d27d60625ddf2fed1d00286340a759"],["/zh-CN/Matplotlib学习笔记/image-20220404160555429.png","4a0a121ed3eab4340274b52c0d3ff5e2"],["/zh-CN/Matplotlib学习笔记/image-20220404160751739.png","14581add9bd472f05a69baaec2c9ace4"],["/zh-CN/Matplotlib学习笔记/image-20220404160958004.png","4cddfe75ee99274e63d8ca0a6e4fa53e"],["/zh-CN/Matplotlib学习笔记/image-20220404161117677.png","992f570a5002e304c6c1760f0f97fcb0"],["/zh-CN/Matplotlib学习笔记/image-20220404161139138.png","19d6b21db11bfa5d893a678467b54aa2"],["/zh-CN/Matplotlib学习笔记/image-20220404161157754.png","01318e1b2cbb6211893ab792d426044b"],["/zh-CN/Matplotlib学习笔记/image-20220404162147295.png","18222adb38ea6db423944ab619bd02bb"],["/zh-CN/Matplotlib学习笔记/image-20220404162341451.png","fe2040942619c1fec23114f7e98750c8"],["/zh-CN/Matplotlib学习笔记/image-20220404162449487.png","8b02b3a30eeff7f4d2a6a22e874c7fec"],["/zh-CN/Matplotlib学习笔记/image-20220404162554129.png","0808441d3b143dc484513a9be0eb8dc2"],["/zh-CN/Matplotlib学习笔记/image-20220404162717588.png","215619a10e832542722a1247936b90ec"],["/zh-CN/Matplotlib学习笔记/image-20220404162753714.png","db6c135dba570f1b3079c9a91071bb38"],["/zh-CN/Matplotlib学习笔记/image-20220404165657025.png","5aae0cf326f09763bbd4fd7ac0321c93"],["/zh-CN/Matplotlib学习笔记/image-20220404165759838.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404165814024.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/zh-CN/Matplotlib学习笔记/image-20220404170000561.png","933ec2f4841c3785da663f6366e264f9"],["/zh-CN/Matplotlib学习笔记/index.html","5e688f915b01f0ca02019cfdbf2031c7"],["/zh-CN/MySQL学习笔记/index.html","e05b4e88aebe0ef0c12a056d160fd1c6"],["/zh-CN/RFBNet/index.html","48353443545ef5775d630a818d0f4ace"],["/zh-CN/RSS/index.html","a36bbbc79590887ddddd0694125f32ac"],["/zh-CN/RSS/rss.gif","4f1a6fe5b219673b2644bd22c3713016"],["/zh-CN/RSS/xml.gif","e67c90a18c89f8d05125c045b2978dcf"],["/zh-CN/Resnet/image-20220503185916137.png","700434cdd87d31541bd440e1150e1c1e"],["/zh-CN/Resnet/image-20220503193754428.png","077efd694a603f290cfb54138fc67ccf"],["/zh-CN/Resnet/index.html","41e57b1b25ce8c09d347b3b1ee6d7639"],["/zh-CN/RetinaNet/20191101111610548.png","d5d49a3bde157c852167d4ec0d6118b2"],["/zh-CN/RetinaNet/20191101111700950.png","2620c6cb7f02e188d68ff4dc8ce1c601"],["/zh-CN/RetinaNet/20191101111712727.png","6844345dc3f10ab7dcb45e1ece469804"],["/zh-CN/RetinaNet/2019110111235956.png","94ee9b27c2e8e8ba12c2153e2cf172d5"],["/zh-CN/RetinaNet/20191101113143598.png","431abf54c59eedb7b1ead2b67164b038"],["/zh-CN/RetinaNet/20191101114056207.png","36d6140907b2871bcbe58e766e99c304"],["/zh-CN/RetinaNet/20200129210050147.png","187eaf52a1314df9b0c3862d9d825394"],["/zh-CN/RetinaNet/20200214164001867.png","0d63196d158ca181fa19bc70c50d185a"],["/zh-CN/RetinaNet/20200214164354541.jpg","c814d84aee65291e2669b0ec557acaf3"],["/zh-CN/RetinaNet/20200215151533258.png","9ce57b4800b82b715304da6596b36675"],["/zh-CN/RetinaNet/2020021613520193.png","df42b8a1752f83e70790857a06adcf74"],["/zh-CN/RetinaNet/image-20220418210603737.png","3337e9957cd8951e969ebc0f155de535"],["/zh-CN/RetinaNet/image-20220419095619530.png","57945637a9882368e90f9a89e23f77d5"],["/zh-CN/RetinaNet/image-20220419100322079.png","96a9db2fbc1533fceadee59176227bf4"],["/zh-CN/RetinaNet/image-20220419100832971.png","b8fa7cc9f8848165809254e4f27961c4"],["/zh-CN/RetinaNet/image-20220419103637923.png","9a1824514618874d2e377a1f55374b92"],["/zh-CN/RetinaNet/index.html","467dbdb769b955eb25d34e345f9ca0ce"],["/zh-CN/SSD损失函数/390ed4e1f5fc0a137b65dea937b907a5.png","7d8cb1a5f2096976ba47107057f7a1f8"],["/zh-CN/SSD损失函数/image-20220506200608617.png","83d78f2e3a544140a3be473e863692ea"],["/zh-CN/SSD损失函数/index.html","68838c51646e3410276a1022e1f4c97c"],["/zh-CN/The_story_of_a_great_schoolmaster/index.html","007dfc82d8639d21735fd0082d668e85"],["/zh-CN/VIT/19f323060f1f41ba99e743cea1fa5174.png","7658fc596411b8ef454ac40a95b66b04"],["/zh-CN/VIT/2500484f29ae4671944a06543ad3e026.png","ebdddc18eb8133ae8bf80b7c23e89ecb"],["/zh-CN/VIT/32c551decdb64331a1c4ec0471cc1f3d.gif","56b05407a642afba9d35075c5b8e1360"],["/zh-CN/VIT/4036cdfc91a6477d91009d574788a78b.png","8b6ac6ae1315a9f9d3858a7f0f604eb8"],["/zh-CN/VIT/430e12e75fd44c82ac95e504b5da0d50.png","d3da05c27a6cacc15e9f6216f15c12a3"],["/zh-CN/VIT/58cc10deb7dc45ae90ae606966d7c724.gif","e55837c3c109339eb66dbf941810bd7f"],["/zh-CN/VIT/8ff82ad32b994a12bfc2356718ac9683.gif","dfa0eaacf638ba4c5af220eb9b56e2c8"],["/zh-CN/VIT/90787898063c45fe888c136ba4b32e64.png","d6b94d2d68079ae9d811e8e6126dfa9d"],["/zh-CN/VIT/c41d889912a64057ab571bdfd5458910.png","2f93eb88a545f31573efb3c89bfa7295"],["/zh-CN/VIT/e3bf360d541c4eb1a243e100f17a48b6.png","12537cad8a5a49670c0097b12359e6ed"],["/zh-CN/VIT/image-20220418091306571.png","6073130969f044b6b0f415aa68951138"],["/zh-CN/VIT/image-20220418091855460.png","7897e151573d9fd81adfc9537a574dba"],["/zh-CN/VIT/image-20220418092240916.png","bd8d8cbde29c56e88c4d34bafe1b2348"],["/zh-CN/VIT/image-20220418104816862.png","29ba52286fedb88fcd0a3b523bacb09e"],["/zh-CN/VIT/image-20220418105537648.png","220d3a326a19cdd395b3907b8502ffed"],["/zh-CN/VIT/index.html","87fbaa4f7376a61db8af31ff793f9216"],["/zh-CN/YOLOV3/image-20220416194945035.png","dc1672429aa73cd1d84ee3b25057b69d"],["/zh-CN/YOLOV3/image-20220419102411716.png","f7105a0eba90314ff8138fced59f5f06"],["/zh-CN/YOLOV3/index.html","61d09f4b3c1fe9c14a4607245b405400"],["/zh-CN/YOLOV5/0b33c17fb3ac47cfb2b79a80d5b2fbaa.png","7ab427555edfe01e75bc0e1ba0abfcdf"],["/zh-CN/YOLOV5/20200509113651540.png","e02237fe14857ea164e7dc768b7d4430"],["/zh-CN/YOLOV5/20200519211538419.png","5abe16d135802ead130ee5d8736c1c24"],["/zh-CN/YOLOV5/20200526140617608.png","9ab3d104b7c3ea31b29c587290cacab0"],["/zh-CN/YOLOV5/7d1f567fc97140d4b9492b5e28cd0ebc.png","d04c9c5a548a930ecf8ee323b9928fee"],["/zh-CN/YOLOV5/93fc40f7a47f46bbb37819115826ec1a.png","0a3f8778be0f54d5dd7c7814a54de663"],["/zh-CN/YOLOV5/d232d9ef19cb4b3bbb7b492aaf6ae097.png","729f1ecec4f3cde9669d029bf0209434"],["/zh-CN/YOLOV5/ddf3729aef4240b3aa6e5aa914ffff52.png","d8215b72a2210402c5aacc985f7bec0c"],["/zh-CN/YOLOV5/e6cb6d3c11db4510a034ca9b1a0ca339.png","d04e6d444d175a88b6e9ef83f3db6a58"],["/zh-CN/YOLOV5/image-20220505154442317.png","2384c714c9ecf5d290e15b0cc1860c04"],["/zh-CN/YOLOV5/image-20220505154713232.png","77d01bd2b05e1ef4d625540f562aad27"],["/zh-CN/YOLOV5/index.html","19b3cd0710c433b70db6bcd64c135600"],["/zh-CN/centernet/index.html","0b56366672e899716eb66911f59076fa"],["/zh-CN/concat_add/image-20220508171742020.png","f98a3801984cd0d1678f55b3f2e27db7"],["/zh-CN/concat_add/index.html","5fe01c7f529e0070fc2d6a0d026845a4"],["/zh-CN/contiguous/index.html","73e267093f9123f342534bbda425270d"],["/zh-CN/echarts/image-20221013174408235.png","354c08d6c76e23a303d22a8b28e5540c"],["/zh-CN/echarts/image-20221013200332722.png","88559ab6e6812c85f702e2a0ea6ba411"],["/zh-CN/echarts/image-20221013201328866.png","14ee97d603cf17404281b2cbd7164f10"],["/zh-CN/echarts/image-20221013202500415.png","9ea285143fc7fe0508eddbe041ae6aa9"],["/zh-CN/echarts/image-20221013212851746.png","d3c924cf789d5e60ebeea6c4eaa8b8ec"],["/zh-CN/echarts/index.html","6346db873a973545a4c3163c0306c4d5"],["/zh-CN/epoch和iteration的区别/index.html","8db97dc3ebcf4edf0a7825cf5aec6dd1"],["/zh-CN/github使用指南/index.html","83454b1224ddfeb71d5b07912060799a"],["/zh-CN/grad-cam/image-20220922205142809.png","869c52d43cc6019ad90bda7a99c6b439"],["/zh-CN/grad-cam/image-20220922205934818.png","dbe0c428b4ece8abbc839934c2e9049f"],["/zh-CN/grad-cam/image-20220922210017803.png","3b51f6b31507aab75ffe5de50e6584f6"],["/zh-CN/grad-cam/image-20220922210044972.png","d5fa31ed71d80713d002d0d685851cd4"],["/zh-CN/grad-cam/index.html","137520b745b1074a8a5dcff6bf358a59"],["/zh-CN/hello-world/index.html","59f1ffcb6ad6e01b87289a4021c6f81d"],["/zh-CN/hexo标签插件/index.html","a5681e6327d01ac020f9a581333d5841"],["/zh-CN/index.html","9e5daf74f9cd05683a6eae18dc793806"],["/zh-CN/leetcode01/index.html","9d63d9c4dc5f494289c7b9f655c3500a"],["/zh-CN/nn_relu和F_relu的区别/index.html","83c3b091cfa0a6fcb09cf2262f89511d"],["/zh-CN/np_cumsum/1078885-20220224122651707-981078391.png","e12c514e6a64a21701dfad65851b1e69"],["/zh-CN/np_cumsum/copycode.gif","51e409b11aa51c150090697429a953ed"],["/zh-CN/np_cumsum/index.html","4ab10dc0253fbbec54981bfb4d5f576d"],["/zh-CN/np_newaxis/index.html","8c15ea12281cc45844a56bfa75a09e1e"],["/zh-CN/page/2/index.html","e7d47269306ae13587d0199f31b9e925"],["/zh-CN/page/3/index.html","3f515fb0ba13bec67e9562351a15c748"],["/zh-CN/page/4/index.html","52e1e3caac3c5aa0ac5237ccd4a660ef"],["/zh-CN/page/5/index.html","cf83940ab1c4a1c92d7893f0b0a98f06"],["/zh-CN/page/6/index.html","be2c32d02bca6c4e5f260c1e460a7d8b"],["/zh-CN/page/7/index.html","b05b8c7384bd29a068d3e93fda71d4de"],["/zh-CN/pip换源/index.html","ce3674c8eec3648965998d4fe194850d"],["/zh-CN/pyperclip/index.html","26b69d19c9728b89fb2bea569b5ca2dd"],["/zh-CN/python知识补充/index.html","58a00650124c8e58735bfd38ec89044d"],["/zh-CN/pytorch官方文档/index.html","fe4084da488e64199fcf8cf72e484892"],["/zh-CN/typora数学公式教程/index.html","d90d31108c376b313a76bc70a150e599"],["/zh-CN/ubuntu安装软件问题/c89ffdc107df9a4e9185e7d51d5a8a21.png","5006eef670a4c474bc5c92c8d050504a"],["/zh-CN/ubuntu安装软件问题/d9085116a96c5c63859c5259fa0230bb.png","c9d4dc88ec69b34ac287577a3fa9c84a"],["/zh-CN/ubuntu安装软件问题/index.html","d65ee532ec7142f590a4a55ccd6dab21"],["/zh-CN/use_agg/index.html","5e615bdc9f217a2eec7a73d2a4211ce9"],["/zh-CN/visdom使用教程/image-20220920214849080.png","00e4fc3055cd1180d2af15ec6f7e2b03"],["/zh-CN/visdom使用教程/index.html","0ca503e73afc467afa775170fd392623"],["/zh-CN/wandb/index.html","d79c2ef9ae0f31c0f43fa12a6e35c32c"],["/zh-CN/warning_unsample/image-20220922212728269.png","05398e7d9148b13efe2008a8a2b0e782"],["/zh-CN/warning_unsample/image-20220922212820063.png","7a33becc778d0378472c4dd84f2c0e33"],["/zh-CN/warning_unsample/index.html","b68dab789fe65b18faeb33a76847db4d"],["/zh-CN/zetane的使用/index.html","b9b4b1399e6f8a8065470e1645349ef4"],["/zh-CN/免费cdn/image-20221007231742803.png","d2721ffea27290892c8c807fa8183189"],["/zh-CN/免费cdn/image-20221007231924762.png","6994d5fc31a1028e34357145cc63f6d5"],["/zh-CN/免费cdn/image-20221007232349603.png","5b0d42570b1fe6472f4e37945d5b5c5d"],["/zh-CN/免费cdn/image-20221007232608806.png","c0e064e685a20971a64146f81eb59ad0"],["/zh-CN/免费cdn/image-20221007232855759.png","a03ee858b8affe54230f211f31b2b88f"],["/zh-CN/免费cdn/image-20221007233355564.png","da79c9954e900127f1d785f5d02bd708"],["/zh-CN/免费cdn/index.html","97597226df104c09a5e7c02431552106"],["/zh-CN/可视化技术/index.html","20111ae8ee0e273c588feacb4030a943"],["/zh-CN/学习笔记/index.html","eceaaa1ad3a3a4d71c32eb5f63fe4224"],["/zh-CN/学习网站集合/index.html","5bfd123d629b528e520dd9cdf57f98fa"],["/zh-CN/学术搜索网站导航/index.html","2216912036880d6b1b6b99319b7f3f3b"],["/zh-CN/开放图谱协议/image-20220926204651449.png","e5e39eb78bbdfe1c09425eea24ab0541"],["/zh-CN/开放图谱协议/image-20220926204719850.png","b4b971a30711ebd276265ee249f34f28"],["/zh-CN/开放图谱协议/image-20220926205301882.png","3de7995b57918abcbc01a0f209ced46a"],["/zh-CN/开放图谱协议/index.html","ed35a2d252455779385059b95765101b"],["/zh-CN/微信小程序开发/index.html","056e0bffbdc26304b8efe1f1d4ae9604"],["/zh-CN/感受野计算/image-20220427214037594.png","08542fc10d4ab8d01a2a86b6e2b83e99"],["/zh-CN/感受野计算/image-20220427214256808.png","e5955559b73c14bf444a1f3b122ccf67"],["/zh-CN/感受野计算/index.html","b2973324cb6f6852354ed7d0c2a0c5d3"],["/zh-CN/扁平时代的写作/index.html","c3e8e7e33cc54d2545aa98370befe60c"],["/zh-CN/提醒幸福/index.html","4a9ac0a709e719a17706b55cedec2bb4"],["/zh-CN/教你学会色彩搭配/index.html","73aea005b1fc75c24abc591907c1489a"],["/zh-CN/数据处理/index.html","0d7c1d623b505358536540039dd2f10f"],["/zh-CN/数据集/index.html","a6197b36c70ff6bd607d01e2211166c4"],["/zh-CN/文献阅读合集/index.html","7051de00fe33defdac45997366559356"],["/zh-CN/未婚妻/index.html","30d5bd91a3736cbf08ba4f4ada5700d4"],["/zh-CN/机器学习/image-20220425220526167.png","d75c92ab8bc0d51e067ca90ee94a537c"],["/zh-CN/机器学习/image-20220425221025699.png","64d11c89150399c2d13f6a6057f624e5"],["/zh-CN/机器学习/index.html","5af426a3f72d86a88ed1df0c9d37dc10"],["/zh-CN/注意力机制/image-20220331155344988.png","480790d67b46d18a3bf64c73e26c9e9d"],["/zh-CN/注意力机制/image-20220331155451951.png","6e85506648c9c03bfe0afb2752a35f25"],["/zh-CN/注意力机制/image-20220331160018390.png","f9abb2cbf784ce094e7698aa84a08d82"],["/zh-CN/注意力机制/image-20220331160207149.png","d3290c5b024284f5f1c9f52a19d3f12d"],["/zh-CN/注意力机制/image-20220331191026838.png","cdcdbed5afacdee7b9461900f5cc6132"],["/zh-CN/注意力机制/image-20220427215849678.png","e25156fa9b579bb7ba74193936780639"],["/zh-CN/注意力机制/index.html","0bb8a0219f98bdc65449a830bcf8e49d"],["/zh-CN/激活函数合集/20190719210645402.png","9839e86af56208b37de978c2360e422b"],["/zh-CN/激活函数合集/20190719210849124.png","705d6f158a4b70b2e1c0edce23dd5cfb"],["/zh-CN/激活函数合集/20190719211201399.png","a0e792c13d625198a3567ba80682528b"],["/zh-CN/激活函数合集/20210528102716672.png","74632f242c056d62f0cbc94b04239979"],["/zh-CN/激活函数合集/20210528102737126.png","7429f0c252903ee327e310db4baa6d78"],["/zh-CN/激活函数合集/20210528102747835.png","a724592e39f7cd7523bde442cf544f55"],["/zh-CN/激活函数合集/20210528102949435.png","43d3d9be420d5ce6f6d104911270d74d"],["/zh-CN/激活函数合集/20210528103004303.png","8ae70bef4986e2386366a0f0bb5091cb"],["/zh-CN/激活函数合集/20210528105245598.png","333af9fd251a190d94d60bf7464a9aed"],["/zh-CN/激活函数合集/image-20220421221448860.png","65517882de6dd23e56e466d72c9ea75c"],["/zh-CN/激活函数合集/image-20220421222005130.png","3ecba7ffd260a92f4c549be9d5bc8d04"],["/zh-CN/激活函数合集/index.html","5b125442a4bd9e6596d2efdc9f13c8cd"],["/zh-CN/烟之外/index.html","b727733efa62272221317ff49c276a86"],["/zh-CN/用两个栈实现队列/index.html","b5218edd361ff05e86fcbcd281622445"],["/zh-CN/计算机视觉单词表/index.html","ce6d802e3a93462dd93348a509aee204"],["/zh-CN/遇到的问题/image-20220406191420560.png","40b1a153dac1d83a1b245b1a5e2c5150"],["/zh-CN/遇到的问题/image-20220406191519097.png","4bb3ee6c9b645d69b25cf6f310e87d4d"],["/zh-CN/遇到的问题/image-20220406191620889.png","e06766e48e3ca3bab2d07242cab03d56"],["/zh-CN/遇到的问题/index.html","17a76b062715c7d9b0a687361367e15d"],["/zh-CN/马裤先生/index.html","35c26324466dea33907cc11a15c63e40"],["/zh-TW/index.html","fe2e7329342bae9bf67265fffae66382"],["/zh-TW/torch_/index.html","0f1c2e415328bf71b8376af5b698d5bc"]];
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
