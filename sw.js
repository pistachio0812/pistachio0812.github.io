/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3705966c5b0cb01eda7bf2e962a84355"],["/CN/CNN参数量计算/image-20220421212236498.png","e0c03f34b8d850b3751069f1792dc6dc"],["/CN/CNN参数量计算/image-20220421212929933.png","497ee94231336cda1ac8938eae35d52d"],["/CN/CNN参数量计算/image-20220421213603964.png","affc9aec92ddba0b88db3fa21d87c70e"],["/CN/CNN参数量计算/index.html","a13473ad3eca42413398164658028457"],["/CN/CNN输入详解/index.html","f5a68416e856231e4b83510917e6eaca"],["/CN/CNN输入详解/v2-0bd8d5c23e469f40cc9e7847d5d6491b_r.jpg","76a5078212f41e1b1c140e93357fe07a"],["/CN/CNN输入详解/v2-14d0b66fd755750e48b08cfd1b6bc2e9_r.jpg","ef9e374667b23e00f2fd20fb103dbf83"],["/CN/CNN输入详解/v2-4d6368c19a126926541a157da37f4742_r.jpg","d9da2669cd54d8bc9d5c7108a6579fce"],["/CN/CNN输入详解/v2-53cfe32119cfeba1e2bc73a18015f450_r.jpg","28544db594750c18603af033436a1b44"],["/CN/CNN输入详解/v2-a3f23245d7a2f41554b27e38755927c8_r.jpg","e407e4660f43f5812e52bc53313e8f27"],["/CN/C语言/index.html","ffe73d648c8fefc8334a02dcd9e80b8b"],["/CN/DCGAN/20201202124131662.png","5d81ed784bcb28c8bbf6f94d5565602f"],["/CN/DCGAN/20201203114355820.png","1e21799e245213923a25299db2e5d2de"],["/CN/DCGAN/20201203114415814.png","35ee76b344a672b5fdd69b7c09aba793"],["/CN/DCGAN/image-20220421201415525.png","bce057902ff3111a085dc1ac731264be"],["/CN/DCGAN/index.html","9b9487f45d7c9d5effdb1e8d487f6649"],["/CN/Darknet53/16006821-59dd6b77da823e7f.png","ec0dbf6e41dc5291efc6796c9ad2d219"],["/CN/Darknet53/index.html","48cb30e3a6a17219c54d533a670a18ce"],["/CN/FPS/index.html","8dfbd3414c7669264591eb1c20a9b120"],["/CN/Faster-rcnn/image-20220417152429746.png","d6d78f2cdb85c6f5390e233e8cfbeed7"],["/CN/Faster-rcnn/index.html","37efe2fdcce7b7dd0f2f455d76e872c6"],["/CN/Fork_github/image-20220502215437444.png","6680419f225ed138de3b70c50dc77f75"],["/CN/Fork_github/image-20220502220838865.png","dc2832f3a4b75df85fd640ebef370f0b"],["/CN/Fork_github/index.html","caeb06eee69966fe409a0bb43b0ebf1b"],["/CN/InceptionV3/2019111309515588.png","1766f9d3827bd7b97b02647afe2ca66f"],["/CN/InceptionV3/20191113095610269.png","e6b296e9f90564c1823d0e7b353d1a00"],["/CN/InceptionV3/2019111309572648.png","da0311c71f538ebedb99d6fcc488f59f"],["/CN/InceptionV3/index.html","39246209756bf26e26ee41c8a98d7cfe"],["/CN/Linux系统学习笔记/index.html","cd3b9622aa16b224e8becc63f6f3b5e7"],["/CN/Matplotlib学习笔记/03D59143-B345-4B36-A7CD-53F698AB5284.jpg","48f26f9a97a5ab77bd305c27b738182e"],["/CN/Matplotlib学习笔记/image-20220403204022943.png","919ac42986651e4738131154ebab289e"],["/CN/Matplotlib学习笔记/image-20220403205635489.png","bc92ac21038579546b4f5a38e1ec4b1a"],["/CN/Matplotlib学习笔记/image-20220403205827906.png","022d6f1fb655a2ed38056b8218f02ee7"],["/CN/Matplotlib学习笔记/image-20220403210031623.png","8eace73c221d2a2013267174fffb8ffb"],["/CN/Matplotlib学习笔记/image-20220403210331668.png","46e3127caee481d419887ff4b6ce6882"],["/CN/Matplotlib学习笔记/image-20220403210514868.png","77bdea7a9f03b5d57fe3882b04b511f9"],["/CN/Matplotlib学习笔记/image-20220403212010830.png","704ddbe35ca8c310e3b945493055e131"],["/CN/Matplotlib学习笔记/image-20220403212950411.png","56f6c1312342d6b7ac8bafbae73761c9"],["/CN/Matplotlib学习笔记/image-20220403213418027.png","3601ca44693c77aa21e1f821d5f20887"],["/CN/Matplotlib学习笔记/image-20220403213911622.png","a19905aa4b01aeea18c414e1ae19326d"],["/CN/Matplotlib学习笔记/image-20220403215102017.png","174bff52b22eadd006f223cf15c5ad8f"],["/CN/Matplotlib学习笔记/image-20220403215856505.png","dabf66bea220aeae2765cf644823e7ec"],["/CN/Matplotlib学习笔记/image-20220403220017186.png","d884d2015eb25ac01277b6d2cfd3c500"],["/CN/Matplotlib学习笔记/image-20220403220233003.png","4f3867833d4de85dd81dcebdf50f2ac9"],["/CN/Matplotlib学习笔记/image-20220403221432174.png","3e9d0a136a3635323de5d467aebaac3a"],["/CN/Matplotlib学习笔记/image-20220403221604494.png","1101c22fadc5fecc213a5d8ab1a5eb68"],["/CN/Matplotlib学习笔记/image-20220403221822295.png","c2d7e2714f114a3d88fea127c6b95152"],["/CN/Matplotlib学习笔记/image-20220403222000966.png","1051d9a97a21047f0e1b4a739c3d9f77"],["/CN/Matplotlib学习笔记/image-20220403222117925.png","faaf3e7ad02a2103810280958249d1a1"],["/CN/Matplotlib学习笔记/image-20220403222318825.png","bd6dd296001e2e05e809ef1862512a43"],["/CN/Matplotlib学习笔记/image-20220403222526935.png","2b2a615f045240ff43bd853ba8da4eb3"],["/CN/Matplotlib学习笔记/image-20220403222628227.png","d3d19b3727d93c78a351f912017735e1"],["/CN/Matplotlib学习笔记/image-20220404095612577.png","72cac94403d8479a10b5df4cf6d965af"],["/CN/Matplotlib学习笔记/image-20220404100123540.png","bad3df5628cad4ac96ae429955d814a1"],["/CN/Matplotlib学习笔记/image-20220404104121709.png","7e41c07b2b726cb7eb8348536c3cfed3"],["/CN/Matplotlib学习笔记/image-20220404104415101.png","4fd2652734bb1c6a1efb6d131d0cc7f6"],["/CN/Matplotlib学习笔记/image-20220404104616081.png","354a98436823f5bf50aa17e8543232f4"],["/CN/Matplotlib学习笔记/image-20220404104841496.png","0e2c4a00b4bde7b6cfb97db33fbf175d"],["/CN/Matplotlib学习笔记/image-20220404104916266.png","86565c756b80b8d71a737b8ffb399edc"],["/CN/Matplotlib学习笔记/image-20220404152016310.png","512c3dc5cc36264dc6b77978171a4b81"],["/CN/Matplotlib学习笔记/image-20220404152129680.png","b83ac045b82958b1ed8f7ac8a5833739"],["/CN/Matplotlib学习笔记/image-20220404152316633.png","51cbcc8d5f2f7f88f3f6e4979a39ec19"],["/CN/Matplotlib学习笔记/image-20220404152756053.png","3fef0d81c6cf7e86932eea1f94c2b45e"],["/CN/Matplotlib学习笔记/image-20220404152958366.png","d5abe09dc1f041d25f34ab93403645f4"],["/CN/Matplotlib学习笔记/image-20220404153408476.png","11bb82bcfaf1b6792da81aac27f5e06e"],["/CN/Matplotlib学习笔记/image-20220404153431942.png","c7cdf1822dae005cfcb9c3fd55ebcc9a"],["/CN/Matplotlib学习笔记/image-20220404153453565.png","affef3dfd411e0da00985a430481c5e3"],["/CN/Matplotlib学习笔记/image-20220404153511622.png","ded25e5009462945a29fec94699826ec"],["/CN/Matplotlib学习笔记/image-20220404155337371.png","4dabeff1437de31a42025c5c4a8a7fc0"],["/CN/Matplotlib学习笔记/image-20220404155550197.png","436be9515492642d83c1505e38798f59"],["/CN/Matplotlib学习笔记/image-20220404155740263.png","793150e235771e1bff86ac0ad2466ca2"],["/CN/Matplotlib学习笔记/image-20220404155923033.png","f4b47e94359ccfcc237f551fbf591a2d"],["/CN/Matplotlib学习笔记/image-20220404160218777.png","d04d0bd4189fd5f00661c4605f8f203c"],["/CN/Matplotlib学习笔记/image-20220404160411035.png","b5d27d60625ddf2fed1d00286340a759"],["/CN/Matplotlib学习笔记/image-20220404160555429.png","4a0a121ed3eab4340274b52c0d3ff5e2"],["/CN/Matplotlib学习笔记/image-20220404160751739.png","14581add9bd472f05a69baaec2c9ace4"],["/CN/Matplotlib学习笔记/image-20220404160958004.png","4cddfe75ee99274e63d8ca0a6e4fa53e"],["/CN/Matplotlib学习笔记/image-20220404161117677.png","992f570a5002e304c6c1760f0f97fcb0"],["/CN/Matplotlib学习笔记/image-20220404161139138.png","19d6b21db11bfa5d893a678467b54aa2"],["/CN/Matplotlib学习笔记/image-20220404161157754.png","01318e1b2cbb6211893ab792d426044b"],["/CN/Matplotlib学习笔记/image-20220404162147295.png","18222adb38ea6db423944ab619bd02bb"],["/CN/Matplotlib学习笔记/image-20220404162341451.png","fe2040942619c1fec23114f7e98750c8"],["/CN/Matplotlib学习笔记/image-20220404162449487.png","8b02b3a30eeff7f4d2a6a22e874c7fec"],["/CN/Matplotlib学习笔记/image-20220404162554129.png","0808441d3b143dc484513a9be0eb8dc2"],["/CN/Matplotlib学习笔记/image-20220404162717588.png","215619a10e832542722a1247936b90ec"],["/CN/Matplotlib学习笔记/image-20220404162753714.png","db6c135dba570f1b3079c9a91071bb38"],["/CN/Matplotlib学习笔记/image-20220404165657025.png","5aae0cf326f09763bbd4fd7ac0321c93"],["/CN/Matplotlib学习笔记/image-20220404165759838.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/CN/Matplotlib学习笔记/image-20220404165814024.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/CN/Matplotlib学习笔记/image-20220404170000561.png","933ec2f4841c3785da663f6366e264f9"],["/CN/Matplotlib学习笔记/index.html","b78499fb9f43a3f1dfe80040212a1ef8"],["/CN/MySQL学习笔记/index.html","10e4b310838617cda972d7facb0a55d7"],["/CN/RFBNet/index.html","dcb001db1e75892a8cd358dbd63d2ab9"],["/CN/Resnet/image-20220503185916137.png","700434cdd87d31541bd440e1150e1c1e"],["/CN/Resnet/image-20220503193754428.png","077efd694a603f290cfb54138fc67ccf"],["/CN/Resnet/index.html","6c28cf4e60ad494a78440e1f2c1d4b40"],["/CN/RetinaNet/20191101111610548.png","d5d49a3bde157c852167d4ec0d6118b2"],["/CN/RetinaNet/20191101111700950.png","2620c6cb7f02e188d68ff4dc8ce1c601"],["/CN/RetinaNet/20191101111712727.png","6844345dc3f10ab7dcb45e1ece469804"],["/CN/RetinaNet/2019110111235956.png","94ee9b27c2e8e8ba12c2153e2cf172d5"],["/CN/RetinaNet/20191101113143598.png","431abf54c59eedb7b1ead2b67164b038"],["/CN/RetinaNet/20191101114056207.png","36d6140907b2871bcbe58e766e99c304"],["/CN/RetinaNet/20200129210050147.png","187eaf52a1314df9b0c3862d9d825394"],["/CN/RetinaNet/20200214164001867.png","0d63196d158ca181fa19bc70c50d185a"],["/CN/RetinaNet/20200214164354541.jpg","c814d84aee65291e2669b0ec557acaf3"],["/CN/RetinaNet/20200215151533258.png","9ce57b4800b82b715304da6596b36675"],["/CN/RetinaNet/2020021613520193.png","df42b8a1752f83e70790857a06adcf74"],["/CN/RetinaNet/image-20220418210603737.png","3337e9957cd8951e969ebc0f155de535"],["/CN/RetinaNet/image-20220419095619530.png","57945637a9882368e90f9a89e23f77d5"],["/CN/RetinaNet/image-20220419100322079.png","96a9db2fbc1533fceadee59176227bf4"],["/CN/RetinaNet/image-20220419100832971.png","b8fa7cc9f8848165809254e4f27961c4"],["/CN/RetinaNet/image-20220419103637923.png","9a1824514618874d2e377a1f55374b92"],["/CN/RetinaNet/index.html","8cd3b445f02b0b04fce7a380dc4e40bf"],["/CN/SSD损失函数/390ed4e1f5fc0a137b65dea937b907a5.png","7d8cb1a5f2096976ba47107057f7a1f8"],["/CN/SSD损失函数/image-20220506200608617.png","83d78f2e3a544140a3be473e863692ea"],["/CN/SSD损失函数/index.html","2f47098a857821aa2aa0fdf6fd1e32df"],["/CN/VIT/19f323060f1f41ba99e743cea1fa5174.png","7658fc596411b8ef454ac40a95b66b04"],["/CN/VIT/2500484f29ae4671944a06543ad3e026.png","ebdddc18eb8133ae8bf80b7c23e89ecb"],["/CN/VIT/32c551decdb64331a1c4ec0471cc1f3d.gif","56b05407a642afba9d35075c5b8e1360"],["/CN/VIT/4036cdfc91a6477d91009d574788a78b.png","8b6ac6ae1315a9f9d3858a7f0f604eb8"],["/CN/VIT/430e12e75fd44c82ac95e504b5da0d50.png","d3da05c27a6cacc15e9f6216f15c12a3"],["/CN/VIT/58cc10deb7dc45ae90ae606966d7c724.gif","e55837c3c109339eb66dbf941810bd7f"],["/CN/VIT/8ff82ad32b994a12bfc2356718ac9683.gif","dfa0eaacf638ba4c5af220eb9b56e2c8"],["/CN/VIT/90787898063c45fe888c136ba4b32e64.png","d6b94d2d68079ae9d811e8e6126dfa9d"],["/CN/VIT/c41d889912a64057ab571bdfd5458910.png","2f93eb88a545f31573efb3c89bfa7295"],["/CN/VIT/e3bf360d541c4eb1a243e100f17a48b6.png","12537cad8a5a49670c0097b12359e6ed"],["/CN/VIT/image-20220418091306571.png","6073130969f044b6b0f415aa68951138"],["/CN/VIT/image-20220418091855460.png","7897e151573d9fd81adfc9537a574dba"],["/CN/VIT/image-20220418092240916.png","bd8d8cbde29c56e88c4d34bafe1b2348"],["/CN/VIT/image-20220418104816862.png","29ba52286fedb88fcd0a3b523bacb09e"],["/CN/VIT/image-20220418105537648.png","220d3a326a19cdd395b3907b8502ffed"],["/CN/VIT/index.html","53049ea03ce0ea89d9426e077b93c56c"],["/CN/YOLOV3/image-20220416194945035.png","dc1672429aa73cd1d84ee3b25057b69d"],["/CN/YOLOV3/image-20220419102411716.png","f7105a0eba90314ff8138fced59f5f06"],["/CN/YOLOV3/index.html","1e4d175b0c1efb09bc625bd8bf625303"],["/CN/YOLOV5/0b33c17fb3ac47cfb2b79a80d5b2fbaa.png","7ab427555edfe01e75bc0e1ba0abfcdf"],["/CN/YOLOV5/20200509113651540.png","e02237fe14857ea164e7dc768b7d4430"],["/CN/YOLOV5/20200519211538419.png","5abe16d135802ead130ee5d8736c1c24"],["/CN/YOLOV5/20200526140617608.png","9ab3d104b7c3ea31b29c587290cacab0"],["/CN/YOLOV5/7d1f567fc97140d4b9492b5e28cd0ebc.png","d04c9c5a548a930ecf8ee323b9928fee"],["/CN/YOLOV5/93fc40f7a47f46bbb37819115826ec1a.png","0a3f8778be0f54d5dd7c7814a54de663"],["/CN/YOLOV5/d232d9ef19cb4b3bbb7b492aaf6ae097.png","729f1ecec4f3cde9669d029bf0209434"],["/CN/YOLOV5/ddf3729aef4240b3aa6e5aa914ffff52.png","d8215b72a2210402c5aacc985f7bec0c"],["/CN/YOLOV5/e6cb6d3c11db4510a034ca9b1a0ca339.png","d04e6d444d175a88b6e9ef83f3db6a58"],["/CN/YOLOV5/image-20220505154442317.png","2384c714c9ecf5d290e15b0cc1860c04"],["/CN/YOLOV5/image-20220505154713232.png","77d01bd2b05e1ef4d625540f562aad27"],["/CN/YOLOV5/index.html","e898ac7b0b86dec52d51ef76791621ae"],["/CN/centernet/index.html","a87b46c39c66f85bb2a4403047ee6b78"],["/CN/concat_add/image-20220508171742020.png","f98a3801984cd0d1678f55b3f2e27db7"],["/CN/concat_add/index.html","0e85d0d384cde4a98deb1d28815c88ef"],["/CN/contiguous/index.html","ebd40a57c516deff7164248b8d26d01d"],["/CN/github使用指南/index.html","191d34ef2e8ea0cc5d5d07703002e096"],["/CN/grad-cam/image-20220922205142809.png","869c52d43cc6019ad90bda7a99c6b439"],["/CN/grad-cam/image-20220922205934818.png","dbe0c428b4ece8abbc839934c2e9049f"],["/CN/grad-cam/image-20220922210017803.png","3b51f6b31507aab75ffe5de50e6584f6"],["/CN/grad-cam/image-20220922210044972.png","d5fa31ed71d80713d002d0d685851cd4"],["/CN/grad-cam/index.html","c4203d717884f7cb7e64568071511fc5"],["/CN/hello-world/index.html","5c3503c52e7e201206c669c86a1cb9f8"],["/CN/hexo标签插件/index.html","cb01113ebb222abd0921c495e654c4b4"],["/CN/leetcode01/index.html","1295dea503531ec81434753b601ea99c"],["/CN/nn_relu和F_relu的区别/index.html","8dc68fda61b3970fc406fcdfff5d4097"],["/CN/np_cumsum/1078885-20220224122651707-981078391.png","e12c514e6a64a21701dfad65851b1e69"],["/CN/np_cumsum/copycode.gif","51e409b11aa51c150090697429a953ed"],["/CN/np_cumsum/index.html","210c3e162581bc09466961afef3da919"],["/CN/np_newaxis/index.html","5593f5a8009f912afad300c38608451a"],["/CN/pip换源/index.html","564043add671e4d50d74cc276924f627"],["/CN/pyperclip/index.html","dfe05456c34ecdaff1c6b19c37c5b7ec"],["/CN/python知识补充/index.html","6da818eb45242a737fb34971ecc3cab9"],["/CN/pytorch官方文档/index.html","ae5c38c324562e2fcb4040a8fb071282"],["/CN/wandb/index.html","e89eb568ca39e49ab4e53e66a06039dd"],["/CN/warning_unsample/image-20220922212728269.png","05398e7d9148b13efe2008a8a2b0e782"],["/CN/warning_unsample/image-20220922212820063.png","7a33becc778d0378472c4dd84f2c0e33"],["/CN/warning_unsample/index.html","3b295af9997259440576e678cc917172"],["/CN/可视化技术/index.html","42c48d3085513ef16353dd99ad10eb49"],["/CN/学习笔记/index.html","49de4baf19bb4f85eb4b72c6296ac1c3"],["/CN/学习网站集合/index.html","b1466b0c0225f3d9b8c3ded865acbaaa"],["/CN/学术搜索网站导航/index.html","9f7444b699e214728b0021bb32844aa6"],["/CN/感受野计算/image-20220427214037594.png","08542fc10d4ab8d01a2a86b6e2b83e99"],["/CN/感受野计算/image-20220427214256808.png","e5955559b73c14bf444a1f3b122ccf67"],["/CN/感受野计算/index.html","444c7ab273930b50e44031693cc216e3"],["/CN/扁平时代的写作/index.html","d4a27200e1df81d27931511b9e08fca2"],["/CN/提醒幸福/index.html","322cc758a923f47b24d44fb94bc52dda"],["/CN/教你学会色彩搭配/index.html","752ad43fd55ed333dc79fdc170d877b1"],["/CN/数据处理/index.html","fb3c4f105051cd591de97748823a67a2"],["/CN/数据集/index.html","14dfabc75532c19dc1a46ba5fbd85f7c"],["/CN/文献阅读合集/index.html","039f792afea515ce26ac63ca6ad94154"],["/CN/未婚妻/index.html","5e2b080e779be520282ebb9d7a503743"],["/CN/机器学习/image-20220425220526167.png","d75c92ab8bc0d51e067ca90ee94a537c"],["/CN/机器学习/image-20220425221025699.png","64d11c89150399c2d13f6a6057f624e5"],["/CN/机器学习/index.html","84f4aaa6834762cf620659073d82978d"],["/CN/注意力机制/image-20220331155344988.png","480790d67b46d18a3bf64c73e26c9e9d"],["/CN/注意力机制/image-20220331155451951.png","6e85506648c9c03bfe0afb2752a35f25"],["/CN/注意力机制/image-20220331160018390.png","f9abb2cbf784ce094e7698aa84a08d82"],["/CN/注意力机制/image-20220331160207149.png","d3290c5b024284f5f1c9f52a19d3f12d"],["/CN/注意力机制/image-20220331191026838.png","cdcdbed5afacdee7b9461900f5cc6132"],["/CN/注意力机制/image-20220427215849678.png","e25156fa9b579bb7ba74193936780639"],["/CN/注意力机制/index.html","7886e5b61c61377159c02b4ac83f7a83"],["/CN/激活函数合集/20190719210645402.png","9839e86af56208b37de978c2360e422b"],["/CN/激活函数合集/20190719210849124.png","705d6f158a4b70b2e1c0edce23dd5cfb"],["/CN/激活函数合集/20190719211201399.png","a0e792c13d625198a3567ba80682528b"],["/CN/激活函数合集/20210528102716672.png","74632f242c056d62f0cbc94b04239979"],["/CN/激活函数合集/20210528102737126.png","7429f0c252903ee327e310db4baa6d78"],["/CN/激活函数合集/20210528102747835.png","a724592e39f7cd7523bde442cf544f55"],["/CN/激活函数合集/20210528102949435.png","43d3d9be420d5ce6f6d104911270d74d"],["/CN/激活函数合集/20210528103004303.png","8ae70bef4986e2386366a0f0bb5091cb"],["/CN/激活函数合集/20210528105245598.png","333af9fd251a190d94d60bf7464a9aed"],["/CN/激活函数合集/image-20220421221448860.png","65517882de6dd23e56e466d72c9ea75c"],["/CN/激活函数合集/image-20220421222005130.png","3ecba7ffd260a92f4c549be9d5bc8d04"],["/CN/激活函数合集/index.html","771e44ec4ee82746a322965d21ecf013"],["/CN/烟之外/index.html","a468d930748f5261ce611f59b9bd52a9"],["/CN/目标检测/index.html","ae42e8e445796318f2aa129bb5f9f0c2"],["/CN/计算机视觉单词表/index.html","993822db43a57b5ec47b249cca011f58"],["/CN/遇到的问题/image-20220406191420560.png","40b1a153dac1d83a1b245b1a5e2c5150"],["/CN/遇到的问题/image-20220406191519097.png","4bb3ee6c9b645d69b25cf6f310e87d4d"],["/CN/遇到的问题/image-20220406191620889.png","e06766e48e3ca3bab2d07242cab03d56"],["/CN/遇到的问题/index.html","32fd8e4fad83fe924a869bea1bc4542d"],["/CN/马裤先生/index.html","0a591cf5c8936ea9356b87c112b7d780"],["/about/donate/image/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/about/donate/image/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/about/index.html","c8ca3cfe7c3b159b300b00a87d0fdf1d"],["/archives/2022/03/index.html","6ab9dcc4645e85b4969ccbef61ae23e0"],["/archives/2022/04/index.html","bf93114b417c0a007d8d80f0471af8e6"],["/archives/2022/04/page/2/index.html","d3b89d968ce3182b0c4c1adcd27785b5"],["/archives/2022/04/page/3/index.html","477c2a489d4351bce77e6a1991f456fe"],["/archives/2022/05/index.html","7db1cebde9c7ce1d28bb929122eef29e"],["/archives/2022/05/page/2/index.html","3cc96af61e8043b5cbef516619c9e466"],["/archives/2022/06/index.html","4295359bce6b0e025937f20929f62eea"],["/archives/2022/07/index.html","4488c0b197dd9fc4cc06d738331fbfa1"],["/archives/2022/09/index.html","cbb9f75ae0bcb9d5d68ad259bbbe7bc6"],["/archives/2022/09/page/2/index.html","48b2aea50fdd1e0f52eab0feb4ba2e42"],["/archives/2022/index.html","29f2ad1b6605fb6d6e035934c1b0ed71"],["/archives/2022/page/2/index.html","fefd2cf0242df1019b7f2c35a38b6518"],["/archives/2022/page/3/index.html","e6cc4110b0512099e0fdd709537b9849"],["/archives/2022/page/4/index.html","82b09570c2d0ae875fff22760867de28"],["/archives/2022/page/5/index.html","05d36046f51f6029b240dd37f24abff1"],["/archives/2022/page/6/index.html","3085485dc5553f16007b5c722ba2c3fa"],["/archives/2022/page/7/index.html","9006f57d5e32d79313ae792b448dddf6"],["/archives/index.html","396238adf0949d20d69c1bf31e7a142e"],["/archives/page/2/index.html","2fdd66b7d6e533a100f54062a6352e70"],["/archives/page/3/index.html","af06ff5f37dda27ddb520eaed21fa8e2"],["/archives/page/4/index.html","0142c51ecdcf01090773a4822dd4126d"],["/archives/page/5/index.html","fc0f2f2dcb4c31b17b1ad6921e527888"],["/archives/page/6/index.html","56d594096ebce636916717d0e90fb3c0"],["/archives/page/7/index.html","77c7f9d61be92f5260a4523df0ae614f"],["/artitalk/index.html","dafaf0a83b0f8ebd62f2223b0a59dc6a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo博客搭建/index.html","ffbdcd3ae550f08e9193b829559b60f3"],["/categories/Leetcode/index.html","7ca31991829ebdfdb22e425fca743a2c"],["/categories/Linux/index.html","612529f935e7ff185eee5c95218627f1"],["/categories/MySQL/index.html","1a184e726c20a053e454c9947e776686"],["/categories/cv/index.html","bb3c1b0ade32f59a77519af543504e09"],["/categories/cv/page/2/index.html","6a8dfbf8543e6d0301a7979e32fa42a6"],["/categories/cv/page/3/index.html","527859e5d34befe005c490ddd73d4a32"],["/categories/github/index.html","a6ba5f26088ed307dd31879e39cc696d"],["/categories/hexo/index.html","c05f58a9a9a22a430457600cb28abf04"],["/categories/index.html","b8aa032d700eb5a5aca0764479b2321e"],["/categories/novel/index.html","44579dea2188882044c7a1d99490e631"],["/categories/programming/index.html","240a8d9fb00db208208a8ecfdd64df3a"],["/categories/python/index.html","4b4b66b27ee87f8b1e84d1d6346bae6c"],["/categories/pytorch/index.html","4f2e11bce67de8f075e9ff7ad6f7be0a"],["/categories/typora/index.html","643b6121e98ffc89278ce3a8c5997b20"],["/categories/ubuntu/index.html","d21312aebcfd05f2ca55df93e3418f20"],["/categories/今日故事/index.html","78f5b627d9a2a84e79d18149759c79ae"],["/categories/学习网站/index.html","b9d33c0a550a7ada99d63df974a17824"],["/categories/目标检测/index.html","4eedf43aa6a1ce16ec6052456f213a83"],["/categories/算法练习/index.html","b66aa89f79d6f7083e931983752574ef"],["/categories/论文详解/index.html","652abb6456393b0ef3b176fd13db66cb"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","f849c0f4b7a7c3f815e571d01c99df21"],["/css/matery.css","00e31a921e09c25ee789fc56f6a11fd3"],["/css/style.css","6712deafd5cc424aeb26e8f7bb323ee4"],["/custom/darkmode.css","9b4407d3ba03e71ab8b6576037170c2b"],["/custom/darkmode.js","d19f67397c2b8f9f13a539558f0513bd"],["/en/CABNet/image-20220927153422183.png","ea12816a81c988a9f8c1c9016ef0b43c"],["/en/CABNet/image-20220927154959945.png","a5fe66e2f35171dbfa682cbbde81325d"],["/en/CABNet/image-20220927155113203.png","1cd313f07f5471fd14614fea01d367df"],["/en/CABNet/image-20220927160946040.png","e134dc3c0346d49dcaeb3fb63d8d53af"],["/en/CABNet/index.html","35b1c8729d458483b00c584c9d5ab407"],["/en/The_story_of_a_great_schoolmaster/index.html","0cfa815fc46c6757968eb0259859edd9"],["/en/epoch和iteration的区别/index.html","06a85ece267549fe8e79519012e04afa"],["/en/index.html","f0881a8157343abc4543a86451e7a1d4"],["/en/typora数学公式教程/index.html","ad1a458ea66cde9a74f675f617df06c2"],["/en/ubuntu安装软件问题/c89ffdc107df9a4e9185e7d51d5a8a21.png","5006eef670a4c474bc5c92c8d050504a"],["/en/ubuntu安装软件问题/d9085116a96c5c63859c5259fa0230bb.png","c9d4dc88ec69b34ac287577a3fa9c84a"],["/en/ubuntu安装软件问题/index.html","a13264f3e6a3f26896bac750d6955571"],["/en/use_agg/index.html","d61acf350f5a55dab5ddd7a1904b0be3"],["/en/visdom使用教程/image-20220920214849080.png","00e4fc3055cd1180d2af15ec6f7e2b03"],["/en/visdom使用教程/index.html","d337ed312ce9e58fb7b2fe6d65b383e5"],["/en/zetane的使用/index.html","9e542bed626495bfad83dd4ac150185e"],["/en/开放图谱协议/image-20220926204651449.png","e5e39eb78bbdfe1c09425eea24ab0541"],["/en/开放图谱协议/image-20220926204719850.png","b4b971a30711ebd276265ee249f34f28"],["/en/开放图谱协议/image-20220926205301882.png","3de7995b57918abcbc01a0f209ced46a"],["/en/开放图谱协议/index.html","1dd86a7bbf776483617538fc602bdf9c"],["/en/用两个栈实现队列/index.html","be9a75bea8dfcfd36d975b6637090702"],["/friends/index.html","a402627abaabecfc13a30feeb211bff1"],["/images/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/images/GFsoso.png","c64ccf4282dd930d373039a93e5ca88d"],["/images/SQL_JOINS.png","6ef8793d15b2767cd18a85ee38ceac9c"],["/images/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/images/image-20220404201407249.png","b24fef532aa0154cc1eb74400e821f3c"],["/images/shuoshuo_logo.jpg","f697ea82c35e9a4013fd8ca2ad83a076"],["/images/volantis_log.png","8e6a41190d5b709ac3c856427cc39367"],["/images/volantis_navbar_logo.png","e406cd1ee3aaccea433a073c267a7507"],["/index.html","7b38530137f6f12a38eb8aa608d0e1d8"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","70c5182f8c5595e4a299f0484ea875f7"],["/page/3/index.html","d0da945b71d12294ddf256413f5efebf"],["/page/4/index.html","58889b5921be385b68fc78d3fb7026bc"],["/page/5/index.html","94a99956398449c7bc62e70676dbc2d9"],["/page/6/index.html","02eff276a6a7680f5f2bce6d03330573"],["/page/7/index.html","13cdcda65a8d2bdc32937038d6a30c41"],["/sw-register.js","1943fca8798493c57c9037164ddf5573"],["/tags/API/index.html","fa8c3792d167815e0ec4c5c975ca615d"],["/tags/Attention/index.html","561deecb8bd328537ac85dbd6e6f0905"],["/tags/C/index.html","73a6fbe1bbfad5eff813f8b581bb73e5"],["/tags/FPS/index.html","7561eedfa0b049fa05bee9780478f817"],["/tags/GAN/index.html","3b7acc2ffd7a019aa5e66eb55032e06b"],["/tags/Hexo/index.html","8df963a36ecdb2a1a55995a77c89284a"],["/tags/Liunx-system/index.html","b4b2453ebccfdeebdd6ae4d604e1be90"],["/tags/Note/index.html","cbbf51254fd471dfe106de6a6802efc0"],["/tags/RFBNet/index.html","a807ba9b49fcb2c64434832d1206ea4a"],["/tags/SSD/index.html","fec4a70c59024bf2ff1d94e12211db53"],["/tags/contiguous/index.html","61c03d22570bf2e9cc24200a6fb790da"],["/tags/cumsum/index.html","de860823f8af8ae5420bd979da11310b"],["/tags/darknet/index.html","f3e586321151129912c9b1f008d2489c"],["/tags/function/index.html","80cbc6822a0efc958867ea2653b0db3b"],["/tags/github/index.html","01f64c53b589ea7fbf8018c4be415bad"],["/tags/grad-cam/index.html","a255db206a2db0e323c62f83dd5029be"],["/tags/index.html","5fe02648a43ba57fd86880c8abb4d0bc"],["/tags/matplotlib/index.html","76547f94d680401c88ed9239ac530700"],["/tags/module/index.html","b7cf86d6a91c7eb5d29a776a98d76186"],["/tags/open-graph/index.html","b875462159da93adbd5d9b6659fb4fe9"],["/tags/python/index.html","a5ee1d9e6c133a4b907fcc80afaf9339"],["/tags/relu/index.html","3f7cb356e4d9173c63a99eccb2f53e87"],["/tags/torch/index.html","6bbae4f517b671b0dc51003bc038ad10"],["/tags/warnings/index.html","23384beeb12599cd2d5bfa5bcaba60fa"],["/tags/yolov5/index.html","0dd325a73369f2f2d40aeeddd00f261e"],["/tags/代码复现/index.html","1aacca17b201a747ad8502987e0f40d9"],["/tags/使用指南/index.html","64847c861a9adcb23fb13c177ef98edd"],["/tags/博客搭建/index.html","71a0758df5905d1a05b4b92fef8a0cea"],["/tags/参数计算/index.html","86cdcc71531a619808107e6f962743d4"],["/tags/可视化/index.html","ce81bbf2c68d09c1ee10581121d63b15"],["/tags/学习网站/index.html","bf6d76523f29dfdb60609c8cfe73e9c1"],["/tags/感受野/index.html","7bc34d9696a5c61889d6173436906bb8"],["/tags/损失函数/index.html","bf24b20d4ae4146d3a20ab483aefe022"],["/tags/教程/index.html","d8cf4996e2a8bdccbf97dc2caec6fd4c"],["/tags/数据处理/index.html","1a8351b2822d6f9d663a31884a3d983a"],["/tags/文档/index.html","160e9eb0a260fefd4eaa24edfa334d25"],["/tags/机器学习/index.html","ec7a620d0d1e52e9e9433fc67a93f2b0"],["/tags/深度学习/index.html","d2a5b84cebffa49907c468fb756f94b4"],["/tags/激活函数/index.html","c3bda61f04485598fac22782119f3a18"],["/tags/目标检测/index.html","9292fcb6110787a81d0a52ea62f25a44"],["/tags/论文解读/index.html","118d640d80d9d10e1240fe540c95883e"],["/tags/论文详解/index.html","0c151a6a7ce0b0709370f5dab797e21d"],["/tags/软件安装/index.html","b180989f3cd0268e0783d96f75bdcba3"],["/tags/题解/index.html","a57415fd74e48c2bb03d06c7e7aa5f7a"],["/tw/shuoshuo_test/index.html","c1f53577d50e5a1105beb5405366fa5e"],["/tw/torch_/index.html","ceff3d6e46f6910b8dfb4d97a8d6938b"]];
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
