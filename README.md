# 2021Wanxiang-Blockchain-Hackathon-TimeRose

![metaverse](./images/timerose-1.png)

# TimeRose: 基于IPFS的计算网格编排框架
##Computing mesh orchestrator over IPFS

## 项目背景

#### 推动我国数字经济健康发展
2021年10月18日，中共中央政治局就推动我国数字经济健康发展进行第三十四次集体学习。习近平总书记在主持学习时强调，近年来，互联网、大数据、云计算、人工智能、区块链等技术加速创新，日益融入经济社会发展各领域全过程，数字经济发展速度之快、辐射范围之广、影响程度之深前所未有，正在成为重组全球要素资源、重塑全球经济结构、改变全球竞争格局的关键力量。要站在统筹中华民族伟大复兴战略全局和世界百年未有之大变局的高度，统筹国内国际两个大局、发展安全两件大事，充分发挥海量数据和丰富应用场景优势，促进数字技术与实体经济深度融合，赋能传统产业转型升级，催生新产业新业态新模式，不断做强做优做大我国数字经济。

我国要加强关键核心技术攻关，牵住自主创新这个“牛鼻子”，发挥我国社会主义制度优势、新型举国体制优势、超大规模市场优势，提高数字技术基础研发能力，打好关键核心技术攻坚战，尽快实现高水平自立自强，把发展数字经济自主权牢牢掌握在自己手中。

#### 元宇宙如火如荼，基础设施亟待完善
什么是元宇宙？元宇宙这一词随着资本市场的关注逐渐引发热议，但是还仍有许多人不了解这一概念。《元宇宙》和《元宇宙通证》作者赵国栋表示，元宇宙是人们娱乐、生活乃至工作的虚拟时空。元宇宙的核心是数字创造、数字资产、数字交易、数字货币和数字消费，尤其是在用户体验方面，达到了真假难辨、虚实混同的境界。元宇宙具备从虚拟物品生产到消费的宏观产业链条的闭环，从而形成以虚拟商品为主要交易对象的独立经济体系。元宇宙经济学呼之欲出，成为数字经济中最活跃、最具革命性的部分。共创、共享、共治是元宇宙的基本价值观。在元宇宙中生活、工作正在成为 M 世代（元宇宙世代）亚文化中的一部分，进而形成社会思潮，从而重塑元宇宙社会， 并影响现实社会。在传统文化和元宇宙文化相互渗透融合中，人类文明或将被重新塑造。

大约再过 15 年，互联网就可能会发生一次重大的变革。正如从 PC 为主要上网终端过渡到移动互联网，现在也将由移动互联网过渡到 VR/AR 等元宇宙生态，开始互联网下一个 15 年的演变周期，人类将迎来互联网大变局的前夜。在认知层，元宇宙突破了想象的极限，创造自由自在的世界（见表）。元宇宙的世界都是由人们所思所想直接幻化而成的，是人类精神的外在表现，是“我心即宇宙，宇宙即我心”的三维呈现。元宇宙秉持共创、共享、共治的价值观，在生产力、生产关系、上层建筑等方面达到了统一。元宇宙经济则由数字身份、数字资产、数字市场、数字货币、数字消费等关键要素形成的完整经济体系。基本特征体现为沉浸式体验、自由创造、社交网络、经济系统和文明形态。元宇宙综合了人类在各个领域的尖端技术，包括区块链、5G、人工智能、3D 引擎、VR/AR/XR、脑机接口。这些基础构成了元宇宙的基础设施。

如今，国家大力推进数字经济发展，元宇宙发展如火如荼，但是作为数字经济和元宇宙的基础还远不成熟。本项目以及凯云实验室的工作就是在这个方向进行的探索。

## 元宇宙与基于IPFS的数据宇宙
#### 元宇宙解剖
元宇宙的构建以资产为核心，目的是链接数字世界和物理世界。元宇宙的基础设施和原语覆盖Web3正在推进的各项技术变革。

![metaverse](./images/mv1.png)
#### 元宇宙操作系统

围绕元宇宙，需要构建的是一个基本的元宇宙操作系统。

![metaverse](./images/mv2.png)

#### 基于IPFS的数据宇宙

在Web3推进的各项技术中，IPFS所构建的数据宇宙是非常活跃的领域之一。

![metaverse](./images/dataverse.png)

#### 元宇宙与数据宇宙的关系

元宇宙和数据宇宙相辅相成，协调发展。

![metaverse](./images/mv3.png)

##TimeRose:构建数据宇宙的控制平面

这一部分从数据宇宙的控制平面的角度来介绍计算网格的编排框架。

#### 为什么构建控制平面？
> The history of the Internet maps roughly to the evolution of
> * control schemes for managing reachability information,
> * protocols for the distribution of reachability information,
> * and the algorithmic generation of optimized paths
> 
> in the face of several challenges.
> 
>  《软件定义网络》

###### 当搜索与市场开始融合
在Web2中，数据形成基于广告收入的竖井。在Web3中，数据价值链基于Filecoin/IPFS协议统一在元宇宙中:
* 内容
* 搜索
* 市场
* 支付

从Web3的角度来看索引。索引更像是一种curation服务，而不是靠广告赚钱的搜索引擎企业。

###### 当CDN与SDN开始融合
SDN + CDN =  (Software Defined Content Delivery Network)

基于IPFS的新型 CDN 称为软件定义内容交付网络。SD-CDN重新定义了传统 CDN 商业模式，打破了传统 CDN 思维模式的界限。无论 SD-CDN 创建什么功能，它都将是基于算法的智能应用程序，可实时分析内容/流量模式并实时做出决策。

###### 当数据宇宙与数据湖融合
从某种意义上说，我们正在构建一个基于IPFS的广域网络数据湖业务。在数据宇宙中，数据湖服务必须合并多个数据源。所以我们需要基于这些数据源建立控制平面。

###### 当智能合约与通用计算融合
目前协议实验室正在构建可以跨越整个IPLD层的智能合约虚拟机。这种虚拟机不仅可以应用于区块链的共识计算，也可以以WASM的方式支持通用计算。
![metaverse](./images/fvm.png)

这种支持IPLD代码的虚拟机也是在IPFS中引入计算的关键。

###### 当云原生service mesh与Web3融合
在IPFS引入计算的基础之上，在Web2领域中非常成熟的计算框架可以引入进来。这也是本项目创新的关键点。
比较熟知的Web2计算框架如下：
* Borg
* Mesos
* YARN
* Omega
* Kubernetes
* Istio


#### 在IPFS中引入计算
###### 内容寻址网络
IPFS作为内容寻址存储网络，业内已经非常熟悉。
![metaverse](./images/cm4.png)

###### 计算寻址网络
协议实验室最新的研究成果是在IPFS中引入计算：IPFS-FAN。

![metaverse](./images/cm5.png)

具体来说，就是存储的数据和计算的代码都统一表示为CID。在此基础上，借助于通用运行时环境的支持，可以实现通过的无服务器计算。

![metaverse](./images/cm6.png)

#### 在IPFS-FAN中引入计算网格

###### 当前问题: 目前Web3领域的所有计算类型都无法提供通用计算

目前Web3领域的所有计算类型都无法提供通用计算。

* 计算类型1：虚拟机。EVM、FVM和IPFS-FAN 都没有调度能力。 
>
>来自 ethereumbook：
> 
> “The EVM, therefore, has no scheduling capability, because execution ordering is organized externally to it—Ethereum clients run through verified block transactions to determine which smart contracts need executing and in which order. In this sense, the Ethereum world computer is single-threaded, like JavaScript.”
>

* 计算类型2：去中心化计算市场，例如Golem 和 iExec，并不是通用计算，而只是计算offloading 的一种方式。

* 计算类型3：通用去中心化计算网络，Fluence 网络和Dfinity互联网计算机，两者都使用了和IPFS-FAN类似的概念：编程语言、WASM、部署、编排等。这两个网络但缺乏自描述的策略来标识代码，缺乏全局访问数据结构能力。

![metaverse](./images/cm8.png)

###### 解决方案: 在IPFS-FAN之上构建计算网格

我们构建计算网格的过程中，借鉴了Web2的service mesh架构。

![metaverse](./images/cm9.png)

###### TimeRose 计算网格的架构

![metaverse](./images/arch1.png)

###### TimeRose 计算网格的功能

![metaverse](./images/cm10.png)

###### TimeRose 计算网格的用例

全球无服务器基础设施。通过CID来部署、调用、运行代码的能力，使得应用开发者不需要服务器基础设施。

负载均衡和就近服务。根据DHT分布计算和存储，迁移计算靠近存储。

提升后端服务的高可用性。可以分别设置计算和存储的副本数，依此来控制服务的高可用性。

协作计算和计算外包。联邦机器学习。新型云计算企业。

###### TimeRose Demo 说明

###### Scheduler
用于就近调度计算节点，并告知客户端该节点的PubSub通道，用于发送任务消息和接收结果


###### Executor
计算节点，从PubSub中接收任务消息，在docker:lambda中计算并将结果输出在PubSub中


###### Client
客户端。向Scheduler请求调度最近计算节点，然后和计算节点通过PubSub提交任务并得到结果
###### demo 架构
![image](./images/img.png)


## 关于凯云实验室

![image](./images/kenlabs.png)
> 我们正在构建基于区块链的下一代云基础设施。

凯云实验室的目标是创建一个具有丰富产品影响力的研究环境，并建立一个积极受益于研究的产品环境。

一些最激动人心的研究能够催生我们今天还无法想象的新产品，甚至新业务。

