/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fc8a811b89b0832fa7943d522a15cd03"],["/CN/CNN参数量计算/image-20220421212236498.png","e0c03f34b8d850b3751069f1792dc6dc"],["/CN/CNN参数量计算/image-20220421212929933.png","497ee94231336cda1ac8938eae35d52d"],["/CN/CNN参数量计算/image-20220421213603964.png","affc9aec92ddba0b88db3fa21d87c70e"],["/CN/CNN参数量计算/index.html","13d854c9a838aaa4ecb3b539814fd559"],["/CN/C语言/index.html","995a11b8b1992c9a09b2f37b55b4c615"],["/CN/DCGAN/20201202124131662.png","5d81ed784bcb28c8bbf6f94d5565602f"],["/CN/DCGAN/20201203114355820.png","1e21799e245213923a25299db2e5d2de"],["/CN/DCGAN/20201203114415814.png","35ee76b344a672b5fdd69b7c09aba793"],["/CN/DCGAN/image-20220421201415525.png","bce057902ff3111a085dc1ac731264be"],["/CN/DCGAN/index.html","fa17b595a0c4704f9cc18a31c853426f"],["/CN/Faster-rcnn/image-20220417152429746.png","d6d78f2cdb85c6f5390e233e8cfbeed7"],["/CN/Faster-rcnn/index.html","e434b4cc83f73547a42d124c9df0da85"],["/CN/Fork_github/image-20220502215437444.png","6680419f225ed138de3b70c50dc77f75"],["/CN/Fork_github/image-20220502220838865.png","dc2832f3a4b75df85fd640ebef370f0b"],["/CN/Fork_github/index.html","f9f1193e01e54e3d371724c0479de12b"],["/CN/InceptionV3/2019111309515588.png","1766f9d3827bd7b97b02647afe2ca66f"],["/CN/InceptionV3/20191113095610269.png","e6b296e9f90564c1823d0e7b353d1a00"],["/CN/InceptionV3/2019111309572648.png","da0311c71f538ebedb99d6fcc488f59f"],["/CN/InceptionV3/index.html","5cf58a4b636f2c43b5996066751a977f"],["/CN/Linux系统学习笔记/index.html","d2ac679623f756216d41586e7e5dd3cc"],["/CN/Matplotlib学习笔记/03D59143-B345-4B36-A7CD-53F698AB5284.jpg","48f26f9a97a5ab77bd305c27b738182e"],["/CN/Matplotlib学习笔记/image-20220403204022943.png","919ac42986651e4738131154ebab289e"],["/CN/Matplotlib学习笔记/image-20220403205635489.png","bc92ac21038579546b4f5a38e1ec4b1a"],["/CN/Matplotlib学习笔记/image-20220403205827906.png","022d6f1fb655a2ed38056b8218f02ee7"],["/CN/Matplotlib学习笔记/image-20220403210031623.png","8eace73c221d2a2013267174fffb8ffb"],["/CN/Matplotlib学习笔记/image-20220403210331668.png","46e3127caee481d419887ff4b6ce6882"],["/CN/Matplotlib学习笔记/image-20220403210514868.png","77bdea7a9f03b5d57fe3882b04b511f9"],["/CN/Matplotlib学习笔记/image-20220403212010830.png","704ddbe35ca8c310e3b945493055e131"],["/CN/Matplotlib学习笔记/image-20220403212950411.png","56f6c1312342d6b7ac8bafbae73761c9"],["/CN/Matplotlib学习笔记/image-20220403213418027.png","3601ca44693c77aa21e1f821d5f20887"],["/CN/Matplotlib学习笔记/image-20220403213911622.png","a19905aa4b01aeea18c414e1ae19326d"],["/CN/Matplotlib学习笔记/image-20220403215102017.png","174bff52b22eadd006f223cf15c5ad8f"],["/CN/Matplotlib学习笔记/image-20220403215856505.png","dabf66bea220aeae2765cf644823e7ec"],["/CN/Matplotlib学习笔记/image-20220403220017186.png","d884d2015eb25ac01277b6d2cfd3c500"],["/CN/Matplotlib学习笔记/image-20220403220233003.png","4f3867833d4de85dd81dcebdf50f2ac9"],["/CN/Matplotlib学习笔记/image-20220403221432174.png","3e9d0a136a3635323de5d467aebaac3a"],["/CN/Matplotlib学习笔记/image-20220403221604494.png","1101c22fadc5fecc213a5d8ab1a5eb68"],["/CN/Matplotlib学习笔记/image-20220403221822295.png","c2d7e2714f114a3d88fea127c6b95152"],["/CN/Matplotlib学习笔记/image-20220403222000966.png","1051d9a97a21047f0e1b4a739c3d9f77"],["/CN/Matplotlib学习笔记/image-20220403222117925.png","faaf3e7ad02a2103810280958249d1a1"],["/CN/Matplotlib学习笔记/image-20220403222318825.png","bd6dd296001e2e05e809ef1862512a43"],["/CN/Matplotlib学习笔记/image-20220403222526935.png","2b2a615f045240ff43bd853ba8da4eb3"],["/CN/Matplotlib学习笔记/image-20220403222628227.png","d3d19b3727d93c78a351f912017735e1"],["/CN/Matplotlib学习笔记/image-20220404095612577.png","72cac94403d8479a10b5df4cf6d965af"],["/CN/Matplotlib学习笔记/image-20220404100123540.png","bad3df5628cad4ac96ae429955d814a1"],["/CN/Matplotlib学习笔记/image-20220404104121709.png","7e41c07b2b726cb7eb8348536c3cfed3"],["/CN/Matplotlib学习笔记/image-20220404104415101.png","4fd2652734bb1c6a1efb6d131d0cc7f6"],["/CN/Matplotlib学习笔记/image-20220404104616081.png","354a98436823f5bf50aa17e8543232f4"],["/CN/Matplotlib学习笔记/image-20220404104841496.png","0e2c4a00b4bde7b6cfb97db33fbf175d"],["/CN/Matplotlib学习笔记/image-20220404104916266.png","86565c756b80b8d71a737b8ffb399edc"],["/CN/Matplotlib学习笔记/image-20220404152016310.png","512c3dc5cc36264dc6b77978171a4b81"],["/CN/Matplotlib学习笔记/image-20220404152129680.png","b83ac045b82958b1ed8f7ac8a5833739"],["/CN/Matplotlib学习笔记/image-20220404152316633.png","51cbcc8d5f2f7f88f3f6e4979a39ec19"],["/CN/Matplotlib学习笔记/image-20220404152756053.png","3fef0d81c6cf7e86932eea1f94c2b45e"],["/CN/Matplotlib学习笔记/image-20220404152958366.png","d5abe09dc1f041d25f34ab93403645f4"],["/CN/Matplotlib学习笔记/image-20220404153408476.png","11bb82bcfaf1b6792da81aac27f5e06e"],["/CN/Matplotlib学习笔记/image-20220404153431942.png","c7cdf1822dae005cfcb9c3fd55ebcc9a"],["/CN/Matplotlib学习笔记/image-20220404153453565.png","affef3dfd411e0da00985a430481c5e3"],["/CN/Matplotlib学习笔记/image-20220404153511622.png","ded25e5009462945a29fec94699826ec"],["/CN/Matplotlib学习笔记/image-20220404155337371.png","4dabeff1437de31a42025c5c4a8a7fc0"],["/CN/Matplotlib学习笔记/image-20220404155550197.png","436be9515492642d83c1505e38798f59"],["/CN/Matplotlib学习笔记/image-20220404155740263.png","793150e235771e1bff86ac0ad2466ca2"],["/CN/Matplotlib学习笔记/image-20220404155923033.png","f4b47e94359ccfcc237f551fbf591a2d"],["/CN/Matplotlib学习笔记/image-20220404160218777.png","d04d0bd4189fd5f00661c4605f8f203c"],["/CN/Matplotlib学习笔记/image-20220404160411035.png","b5d27d60625ddf2fed1d00286340a759"],["/CN/Matplotlib学习笔记/image-20220404160555429.png","4a0a121ed3eab4340274b52c0d3ff5e2"],["/CN/Matplotlib学习笔记/image-20220404160751739.png","14581add9bd472f05a69baaec2c9ace4"],["/CN/Matplotlib学习笔记/image-20220404160958004.png","4cddfe75ee99274e63d8ca0a6e4fa53e"],["/CN/Matplotlib学习笔记/image-20220404161117677.png","992f570a5002e304c6c1760f0f97fcb0"],["/CN/Matplotlib学习笔记/image-20220404161139138.png","19d6b21db11bfa5d893a678467b54aa2"],["/CN/Matplotlib学习笔记/image-20220404161157754.png","01318e1b2cbb6211893ab792d426044b"],["/CN/Matplotlib学习笔记/image-20220404162147295.png","18222adb38ea6db423944ab619bd02bb"],["/CN/Matplotlib学习笔记/image-20220404162341451.png","fe2040942619c1fec23114f7e98750c8"],["/CN/Matplotlib学习笔记/image-20220404162449487.png","8b02b3a30eeff7f4d2a6a22e874c7fec"],["/CN/Matplotlib学习笔记/image-20220404162554129.png","0808441d3b143dc484513a9be0eb8dc2"],["/CN/Matplotlib学习笔记/image-20220404162717588.png","215619a10e832542722a1247936b90ec"],["/CN/Matplotlib学习笔记/image-20220404162753714.png","db6c135dba570f1b3079c9a91071bb38"],["/CN/Matplotlib学习笔记/image-20220404165657025.png","5aae0cf326f09763bbd4fd7ac0321c93"],["/CN/Matplotlib学习笔记/image-20220404165759838.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/CN/Matplotlib学习笔记/image-20220404165814024.png","c10ba37dd71c8553c7ff1e8cadfcf531"],["/CN/Matplotlib学习笔记/image-20220404170000561.png","933ec2f4841c3785da663f6366e264f9"],["/CN/Matplotlib学习笔记/index.html","a78804819d19e0a1e457d49c6e5b8c70"],["/CN/MySQL学习笔记/index.html","219277909216cf929a0119339a127d7a"],["/CN/Resnet/image-20220503185916137.png","700434cdd87d31541bd440e1150e1c1e"],["/CN/Resnet/image-20220503193754428.png","077efd694a603f290cfb54138fc67ccf"],["/CN/Resnet/index.html","27e57d7822b2a6ac74633ffcf7c97bb6"],["/CN/RetinaNet/20191101111610548.png","d5d49a3bde157c852167d4ec0d6118b2"],["/CN/RetinaNet/20191101111700950.png","2620c6cb7f02e188d68ff4dc8ce1c601"],["/CN/RetinaNet/20191101111712727.png","6844345dc3f10ab7dcb45e1ece469804"],["/CN/RetinaNet/2019110111235956.png","94ee9b27c2e8e8ba12c2153e2cf172d5"],["/CN/RetinaNet/20191101113143598.png","431abf54c59eedb7b1ead2b67164b038"],["/CN/RetinaNet/20191101114056207.png","36d6140907b2871bcbe58e766e99c304"],["/CN/RetinaNet/20200129210050147.png","187eaf52a1314df9b0c3862d9d825394"],["/CN/RetinaNet/20200214164001867.png","0d63196d158ca181fa19bc70c50d185a"],["/CN/RetinaNet/20200214164354541.jpg","c814d84aee65291e2669b0ec557acaf3"],["/CN/RetinaNet/20200215151533258.png","9ce57b4800b82b715304da6596b36675"],["/CN/RetinaNet/2020021613520193.png","df42b8a1752f83e70790857a06adcf74"],["/CN/RetinaNet/image-20220418210603737.png","3337e9957cd8951e969ebc0f155de535"],["/CN/RetinaNet/image-20220419095619530.png","57945637a9882368e90f9a89e23f77d5"],["/CN/RetinaNet/image-20220419100322079.png","96a9db2fbc1533fceadee59176227bf4"],["/CN/RetinaNet/image-20220419100832971.png","b8fa7cc9f8848165809254e4f27961c4"],["/CN/RetinaNet/image-20220419103637923.png","9a1824514618874d2e377a1f55374b92"],["/CN/RetinaNet/index.html","8c367e506804272966d2230fae49e35e"],["/CN/SSD损失函数/390ed4e1f5fc0a137b65dea937b907a5.png","7d8cb1a5f2096976ba47107057f7a1f8"],["/CN/SSD损失函数/image-20220506200608617.png","83d78f2e3a544140a3be473e863692ea"],["/CN/SSD损失函数/index.html","16eec92ec324664cfca0d770520cf9c1"],["/CN/VIT/19f323060f1f41ba99e743cea1fa5174.png","7658fc596411b8ef454ac40a95b66b04"],["/CN/VIT/2500484f29ae4671944a06543ad3e026.png","ebdddc18eb8133ae8bf80b7c23e89ecb"],["/CN/VIT/32c551decdb64331a1c4ec0471cc1f3d.gif","56b05407a642afba9d35075c5b8e1360"],["/CN/VIT/4036cdfc91a6477d91009d574788a78b.png","8b6ac6ae1315a9f9d3858a7f0f604eb8"],["/CN/VIT/430e12e75fd44c82ac95e504b5da0d50.png","d3da05c27a6cacc15e9f6216f15c12a3"],["/CN/VIT/58cc10deb7dc45ae90ae606966d7c724.gif","e55837c3c109339eb66dbf941810bd7f"],["/CN/VIT/8ff82ad32b994a12bfc2356718ac9683.gif","dfa0eaacf638ba4c5af220eb9b56e2c8"],["/CN/VIT/90787898063c45fe888c136ba4b32e64.png","d6b94d2d68079ae9d811e8e6126dfa9d"],["/CN/VIT/c41d889912a64057ab571bdfd5458910.png","2f93eb88a545f31573efb3c89bfa7295"],["/CN/VIT/e3bf360d541c4eb1a243e100f17a48b6.png","12537cad8a5a49670c0097b12359e6ed"],["/CN/VIT/image-20220418091306571.png","6073130969f044b6b0f415aa68951138"],["/CN/VIT/image-20220418091855460.png","7897e151573d9fd81adfc9537a574dba"],["/CN/VIT/image-20220418092240916.png","bd8d8cbde29c56e88c4d34bafe1b2348"],["/CN/VIT/image-20220418104816862.png","29ba52286fedb88fcd0a3b523bacb09e"],["/CN/VIT/image-20220418105537648.png","220d3a326a19cdd395b3907b8502ffed"],["/CN/VIT/index.html","d4c2ddb0ccac5a4cac9249b17115147f"],["/CN/YOLOV3/image-20220416194945035.png","dc1672429aa73cd1d84ee3b25057b69d"],["/CN/YOLOV3/image-20220419102411716.png","f7105a0eba90314ff8138fced59f5f06"],["/CN/YOLOV3/index.html","0899992a6936d46744bb75b3c7117bdc"],["/CN/YOLOV5/0b33c17fb3ac47cfb2b79a80d5b2fbaa.png","7ab427555edfe01e75bc0e1ba0abfcdf"],["/CN/YOLOV5/20200509113651540.png","e02237fe14857ea164e7dc768b7d4430"],["/CN/YOLOV5/20200519211538419.png","5abe16d135802ead130ee5d8736c1c24"],["/CN/YOLOV5/20200526140617608.png","9ab3d104b7c3ea31b29c587290cacab0"],["/CN/YOLOV5/7d1f567fc97140d4b9492b5e28cd0ebc.png","d04c9c5a548a930ecf8ee323b9928fee"],["/CN/YOLOV5/93fc40f7a47f46bbb37819115826ec1a.png","0a3f8778be0f54d5dd7c7814a54de663"],["/CN/YOLOV5/d232d9ef19cb4b3bbb7b492aaf6ae097.png","729f1ecec4f3cde9669d029bf0209434"],["/CN/YOLOV5/ddf3729aef4240b3aa6e5aa914ffff52.png","d8215b72a2210402c5aacc985f7bec0c"],["/CN/YOLOV5/e6cb6d3c11db4510a034ca9b1a0ca339.png","d04e6d444d175a88b6e9ef83f3db6a58"],["/CN/YOLOV5/image-20220505154442317.png","2384c714c9ecf5d290e15b0cc1860c04"],["/CN/YOLOV5/image-20220505154713232.png","77d01bd2b05e1ef4d625540f562aad27"],["/CN/YOLOV5/index.html","c91bcf0bd8a4ffc72ceb3881dbe7d811"],["/CN/centernet/index.html","4676eda9521abef6c54cd4b61f4a960c"],["/CN/github使用指南/index.html","59cd283e8b9ecd476339588cab09cef3"],["/CN/hello-world/index.html","0715a400012c7a3dcfc01b29849c695c"],["/CN/hexo标签插件/index.html","e09ec0cfb68b2e226dda95376ede78d7"],["/CN/pip换源/index.html","e88857b0f282bc41916322984dc972ad"],["/CN/pytorch官方文档/index.html","4ee9ae9d17fd7d5e9aff1e2b055250cf"],["/CN/可视化技术/index.html","dd77aea44fbb257fb490e071f69410cb"],["/CN/学习笔记/index.html","f86339f47a8d8cfa044cb3abaa0fe0d1"],["/CN/学习网站集合/index.html","b54986021f95e831259c676925f867df"],["/CN/学术搜索网站导航/index.html","1b7b3aee81ac3dc1d34a8facaf5212ab"],["/CN/感受野计算/image-20220427214037594.png","08542fc10d4ab8d01a2a86b6e2b83e99"],["/CN/感受野计算/image-20220427214256808.png","e5955559b73c14bf444a1f3b122ccf67"],["/CN/感受野计算/index.html","fc589d974cdc33309985d39041432e07"],["/CN/扁平时代的写作/index.html","313d874c666a7db0bafdc24c8fced5df"],["/CN/提醒幸福/index.html","3e919418f82b9e2a7ee1c466fad80e29"],["/CN/教你学会色彩搭配/index.html","1935caa524eee6e294df0e76fda17c0e"],["/CN/数据处理/index.html","cd06dc0e17b8e7992581545704989a1b"],["/CN/数据集/index.html","85ef5c401b3aa94074804d56123a0a46"],["/CN/文献阅读合集/index.html","c136a2460d201986b67c712f934d54cf"],["/CN/未婚妻/index.html","61b244a654d6b24a05acfeeafca1f02a"],["/CN/机器学习/image-20220425220526167.png","d75c92ab8bc0d51e067ca90ee94a537c"],["/CN/机器学习/image-20220425221025699.png","64d11c89150399c2d13f6a6057f624e5"],["/CN/机器学习/index.html","bc8620d6aeac0f0268146db18b784822"],["/CN/注意力机制/image-20220331155344988.png","480790d67b46d18a3bf64c73e26c9e9d"],["/CN/注意力机制/image-20220331155451951.png","6e85506648c9c03bfe0afb2752a35f25"],["/CN/注意力机制/image-20220331160018390.png","f9abb2cbf784ce094e7698aa84a08d82"],["/CN/注意力机制/image-20220331160207149.png","d3290c5b024284f5f1c9f52a19d3f12d"],["/CN/注意力机制/image-20220331191026838.png","cdcdbed5afacdee7b9461900f5cc6132"],["/CN/注意力机制/image-20220427215849678.png","e25156fa9b579bb7ba74193936780639"],["/CN/注意力机制/index.html","fd48e7c9f947162aff0f9cd08bee8db9"],["/CN/激活函数合集/20190719210645402.png","9839e86af56208b37de978c2360e422b"],["/CN/激活函数合集/20190719210849124.png","705d6f158a4b70b2e1c0edce23dd5cfb"],["/CN/激活函数合集/20190719211201399.png","a0e792c13d625198a3567ba80682528b"],["/CN/激活函数合集/20210528102716672.png","74632f242c056d62f0cbc94b04239979"],["/CN/激活函数合集/20210528102737126.png","7429f0c252903ee327e310db4baa6d78"],["/CN/激活函数合集/20210528102747835.png","a724592e39f7cd7523bde442cf544f55"],["/CN/激活函数合集/20210528102949435.png","43d3d9be420d5ce6f6d104911270d74d"],["/CN/激活函数合集/20210528103004303.png","8ae70bef4986e2386366a0f0bb5091cb"],["/CN/激活函数合集/20210528105245598.png","333af9fd251a190d94d60bf7464a9aed"],["/CN/激活函数合集/image-20220421221448860.png","65517882de6dd23e56e466d72c9ea75c"],["/CN/激活函数合集/image-20220421222005130.png","3ecba7ffd260a92f4c549be9d5bc8d04"],["/CN/激活函数合集/index.html","7eb70d29f15b74116085738fe592cd6f"],["/CN/烟之外/index.html","1beb066091178b34953d5dd2156bb535"],["/CN/目标检测/index.html","628097633c8f3b91675a9a6e12223d86"],["/CN/计算机视觉单词表/index.html","2b869b677cb31cf1bd0b1835ab2e294e"],["/CN/遇到的问题/image-20220406191420560.png","40b1a153dac1d83a1b245b1a5e2c5150"],["/CN/遇到的问题/image-20220406191519097.png","4bb3ee6c9b645d69b25cf6f310e87d4d"],["/CN/遇到的问题/image-20220406191620889.png","e06766e48e3ca3bab2d07242cab03d56"],["/CN/遇到的问题/index.html","bb443758e3780d9ed55c71c6a8b52efd"],["/CN/马裤先生/index.html","b06e3c977b5e54fbe7b68e547cb4a687"],["/about/donate/image/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/about/donate/image/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/about/index.html","7a5e48d82708a2881a94cec1a7d33819"],["/archives/2022/03/index.html","21212b6c6797f76e2451ecabb183db73"],["/archives/2022/04/index.html","f4c60b1e18d0236eafba17a47e3f3242"],["/archives/2022/04/page/2/index.html","5a4fe9214ce280b5787d0a1ed8f65a65"],["/archives/2022/04/page/3/index.html","a57969a92cdb55751f6bbc3a899fa99c"],["/archives/2022/05/index.html","3f1f1b7b49a5f4edc8be34c206abc537"],["/archives/2022/index.html","9a3708ef6201c829fa81a1c4ecff0a78"],["/archives/2022/page/2/index.html","cdab94e662da0e2d813969789186a35b"],["/archives/2022/page/3/index.html","02d25c4e6d1d021172e6a95ea6d13579"],["/archives/2022/page/4/index.html","0307ce9a20824c6ccab0f5996584637a"],["/archives/2022/page/5/index.html","cf8e582d9ff13fe80f3ed2ae28eb5976"],["/archives/index.html","201b99576d43eb1f9c9fe0b7931a41e5"],["/archives/page/2/index.html","201b99576d43eb1f9c9fe0b7931a41e5"],["/archives/page/3/index.html","201b99576d43eb1f9c9fe0b7931a41e5"],["/archives/page/4/index.html","201b99576d43eb1f9c9fe0b7931a41e5"],["/archives/page/5/index.html","201b99576d43eb1f9c9fe0b7931a41e5"],["/artitalk/index.html","24c9123fcfcebf78b4bc671af2b4b88d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo博客搭建/index.html","941850d2c88241818b57ccf5d006e8b0"],["/categories/Linux/index.html","5255eaab29b7294b2dae2a5408185e5b"],["/categories/MySQL/index.html","1006fc8d7680b5e4653976cf1b92f3d2"],["/categories/cv/index.html","a56362429e394d37582afcd6f00b1274"],["/categories/cv/page/2/index.html","f4a7256ea5db28719e940084540b56e7"],["/categories/github/index.html","9ebc8f61d1c8c190c288b64c823a1379"],["/categories/index.html","cc0d444c3e289a32b8661196bd416a06"],["/categories/novel/index.html","8e8b9abcd84725b67950484643a8fb3e"],["/categories/programming/index.html","196267ab42fa34891aa210df1b30f3a6"],["/categories/pytorch/index.html","91d101d7a0272e9926609cf11069284e"],["/categories/今日故事/index.html","5df8f383592193d0c628b4f5a534e178"],["/categories/学习网站/index.html","5f26f02c8ace3f860433a15e652e242b"],["/categories/目标检测/index.html","9a882f4aa3b86188a0bd753050a9bfa2"],["/categories/论文详解/index.html","5f8ff8ecd8a117d059557bab29e0ccbe"],["/css/first.css","7c39cab227a924cfb92ed2ebc445f2da"],["/css/matery.css","00e31a921e09c25ee789fc56f6a11fd3"],["/css/style.css","53c171dc060acbfd2cd74e43ecd76f5d"],["/en/The_story_of_a_great_schoolmaster/index.html","86af2e232945797654a8d497d1796aad"],["/en/index.html","7feed8d1de6858067fe872d214034849"],["/friends/index.html","d01b281ec848f6c597f68117ef92a415"],["/images/AliPayQR.jpg","adf90302b56a801cc853eb605f8bf586"],["/images/GFsoso.png","c64ccf4282dd930d373039a93e5ca88d"],["/images/SQL_JOINS.png","6ef8793d15b2767cd18a85ee38ceac9c"],["/images/WeChatPayQR.png","4be9513e5c35c30ef66f0e556cca4182"],["/images/image-20220404201407249.png","b24fef532aa0154cc1eb74400e821f3c"],["/images/shuoshuo_logo.jpg","f697ea82c35e9a4013fd8ca2ad83a076"],["/images/volantis_log.png","8e6a41190d5b709ac3c856427cc39367"],["/images/volantis_navbar_logo.png","e406cd1ee3aaccea433a073c267a7507"],["/index.html","16ef2b97f553471a7ded62c63f35f053"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","142672a3cb323967ed7bb166a39236ee"],["/page/3/index.html","c9eebbefeadd3259f0d2b62fa5c67d1e"],["/page/4/index.html","9015755002f62c92a85c1dd6eb24ff99"],["/page/5/index.html","7f129ed217318f249dcdd6fbde9aa009"],["/sw-register.js","2f276e17b59dd3fe83837db8f2dd6d8c"],["/tags/Attention/index.html","9a654adb96998cc2d3f4a091d0ed5195"],["/tags/C/index.html","92445f6f12466adc7755eb4caeb945af"],["/tags/GAN/index.html","dfe8f590f9afd83cb3239366e1850916"],["/tags/Hexo/index.html","69af8758e800cbb07105f9b461dead43"],["/tags/Liunx-system/index.html","9dc04dcf24de5c4a2a0da0711d9f9834"],["/tags/Note/index.html","f638fa11612f6daf86a4443c35081efc"],["/tags/SSD/index.html","cf67ccda35cd5b2bd9a3484211d8ce89"],["/tags/github/index.html","1e794ebea76feeff4209eee200e5fea1"],["/tags/index.html","461f632e5535093f843bc1aea8ef01f7"],["/tags/yolov5/index.html","4d7477148e3f76120ff06a2bcb6ba844"],["/tags/代码复现/index.html","148b536fcf89ec28ab5f3b1081b0a44b"],["/tags/使用指南/index.html","47087750c13fa3c3b49cd1e50204ea0f"],["/tags/博客搭建/index.html","01b7e6cb3c952dfbc8dd458df748d559"],["/tags/参数计算/index.html","ffdc209fe56d4688519b3fbaa8d40509"],["/tags/可视化/index.html","f74e056606566d3be2daab06caae5f49"],["/tags/学习网站/index.html","b3d1f9c78667e1f0a22fb74aa7b9ed03"],["/tags/感受野/index.html","faf06b584d70f43fe4247541b7e167d4"],["/tags/损失函数/index.html","8bbab2a3fe19101033e1af4f4f2092dc"],["/tags/数据处理/index.html","e1e32a294e251fadc2a3a519cf01380b"],["/tags/文档/index.html","c15145dc40cebf317940a7bc88d9f5e5"],["/tags/机器学习/index.html","551b4d0c8961085380bb343dcfd55f77"],["/tags/激活函数/index.html","64596aad9c8a9c316eba890517279f1d"],["/tags/目标检测/index.html","baa76812521d4ad270fbde9bc72c17af"],["/tags/论文解读/index.html","7a957117183cd22c118b4062a28f2e6d"],["/tags/论文详解/index.html","43f37cbbdd26bb06474f9113895ae9f3"]];
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
