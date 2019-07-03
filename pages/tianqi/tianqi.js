Page({
    data: {
        text: "This is page data."
    },
    onLoad: function(options) {
    // Do some initialize when page load.
    },
    onReady: function() {
    // Do something when page ready.
    },
    onShow: function() {
    // Do something when page show.
        this.gettianqiInfo();
    },
    gettianqiInfo() {
        wx.request({
            url: 'https://www.tianqiapi.com/api/', //仅为示例，并非真实的接口地址
            data: {
                version: 'v1',
                ip: '116.233.93.104'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success (res) {
                console.log(res.data)
            }
        })
    }
})