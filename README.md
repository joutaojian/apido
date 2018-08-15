# apido 

这是当时小组技术预言的产品，apido是一个前后分离的分布式应用（Vue2+SpringBoot+SpringCloud），拥有一个分布式项目的基本雏形。

apido更像是一个脚手架项目，你可以基于此**快速搭建前后分离的分布式应用**。

> 本项目只是雏形，建议用于学习参考，可以更好的理解前后分离和分布式的应用。

[![Build Status](https://img.shields.io/travis/joutaojian/apido.svg?style=flat-square)](https://travis-ci.org/joutaojian/apido)
[![License](https://img.shields.io/badge/license-MIT-4EB1BA.svg?style=flat-square)](https://github.com/joutaojian/apido/blob/master/LICENSE)
[![www.java2.ee on blog](https://img.shields.io/badge/blog-www.java2.ee-red.svg?style=flat-square)](https://www.java2.ee)



前端：

* npm install 安装依赖库
* npm run dev 以开发模式运行
* npm run build 打包到dist目录

后端：

* 典型的maven项目
* 拥有zuul，eureka，feign，ribbon等SpringCloud的分布式组件
* 前后分离可以使用@CrossOrigin注解，或者前端打包到后端的resources

