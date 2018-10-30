var movie_database = [
  {
    date: "Sep 18 2016",
    title: "通讯中大量消息广播的设计和优化",
    imgSrc: "/images/post/p.png",
    avatar: "/images/avatar/1.png",
    content: "国际税收正发生天翻地覆的变化，包括中国大陆及香港在内的...",
    address: '中国上海市外滩',
    reading: "112",
    collection: "96",
    headImgSrc: "/images/post/p.png",
    author: "Lacey",
    dateTime: "24小时前",
    detail: "消息广播场在网络通讯应用还是普遍存在，如游戏中玩家状态通知，聊天和公共消息发送等，但在面对大量业务消息广播的情况可能会面临一些性能上的问题需要处理；毕竟大量业务不仅在消息序列化上非常损耗CPU，在网络IO读写上因过于频繁也会引起大量的损耗，如果没有处理好的情况还是非常影响整全服务性能。",
    postId: 0,
    music: {
      url: "http://music.163.com/song/media/outer/url?id=142604.mp3",
      title: "夜夜夜夜-齐秦",
      coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },
  {
    title: "XXL-RPC v1.2.0，分布式服务框架",
    content: "XXL-RPC 是一个分布式服务通讯框架，提供稳定高性能的RPC远程服务调用功能。现已开放源代码，开箱即用。",
    address: '中国上海市外滩',
    imgSrc: "/images/post/p.png",
    reading: 62,
    detail: "上周，微软宣布正式加入 Open Invention Network (“OIN”) 社区，开放其 6 万多项 Linux 专利。消息一出，许多人疑惑微软为什么要这么做？作为普通开发者，是否能使用这些专利？在开源欧洲峰会上，OIN CEO Keith Bergelt 对相关问题进行了解答。微软为什么加入 OIN ？按照 Bergelt 的说法，答案很简单：开源。在开源峰会欧洲的主题演讲中，微软 Azure 首席项目经理 Stephen Walli 说：“开源改变了一切。以前微软可能有人认为开源是错误的，但现在他们已经认识到开源的必要性。微软是一家开发者为主的公司，开发者喜欢开源！”",
    collection: 92,
    dateTime: "24小时前",
    headImgSrc: "/images/post/p.png",
    author: "王源",
    date: "Nov 20 2016",
    avatar: "/images/avatar/1.png",
    postId: 1,
    music: {
      url: "http://music.163.com/song/media/outer/url?id=108220.mp3",
      title: "鬼迷心窍-李宗盛",
      coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
    }
  },
  {
    //按住alt + shift + F 可以格式化代码样式
    title: "税务大会",
    content: "国际税收正发生天翻地覆的变化，包括中国大陆及香港在内的...",
    detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",
    imgSrc: "/images/post/p.png",
    address: '中国上海市外滩',
    headImgSrc: "/images/post/p.png",
    reading: 62,
    collection: 92,
    author: "李哈哈哈",
    date: "Nov 12 2016",
    dateTime: "三天前",
    avatar: "/images/avatar/3.png",
    postId: 2,
    music: {
      url: "http://music.163.com/song/media/outer/url?id=27538254.mp3",
      title: "女儿情-万晓利",
      coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
    }
  }
]

module.exports = {
  postList: movie_database
}