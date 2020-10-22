

function bot_ui_ini() {
    var botui = new BotUI("hello-nikkyoya") // id of container

    botui.message.bot({
        delay: 800,
        content: "看这里看这里👋"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 nikkyoya"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个可爱的女孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "少废话！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "信管本科在读ing"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "会敲一点代码，偶尔写一点文章"
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "试图找到机器性和诗性之间的桥梁"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "兴趣是网络文学、二次元文化"
                        }).then(function () {
                            botui.message.add({
                                delay: 1500,
                                content: "喜欢番剧和音乐剧"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800,
                                    content: "玩游戏，也看人玩游戏"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "为什么叫nikkyoya呢？🤔",
                                            value: "why-nikkyoya"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "nikki是我的英文名哦，kyoya是中学有段时间很喜欢的番剧-家庭教师HITMAN REBORN-里角色的名字😜"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "为什么这么起呢？",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "我喜欢这种搭积木造词的感觉，很有趣😉"
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "当然也是因为nikki太容易重名了，不能作为唯一标识符😬"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "建这个站点用来做什么呢？",
                            value: "why-site"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "记录学习、生活和读书的点滴，也敦促自己去整理自己的收获😊"
            }).then(function () {
                botui.message.add({
                    delay: 1600,
                    content: "所谓相遇即是缘分，留下你的足迹吧 ^_^"
                })
            })
        } 
}



