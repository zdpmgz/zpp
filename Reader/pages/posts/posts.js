var postsData = require('../../data/posts-data.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        // this.data.postList = postsData.postList    
        this.setData({
            posts_key:postsData.postList
        });
    },

    onPostTap:function(event) {
        var postId = event.currentTarget.dataset.postid;//获取到了postId
        wx.navigateTo({
            url: "post-detail/post-detail?id=" + postId
        })
    },
    
    onSwiperTap: function (event) {
        // target 和currentTarget
        // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
        // target这里指的是image，而currentTarget指的是swiper
        var postId = event.target.dataset.postid;
        wx.navigateTo({
            url: "post-detail/post-detail?id=" + postId
        })
    }

    // /**
    //  * 生命周期函数--监听页面初次渲染完成
    //  */
    // onReady: function() {

    // },

    // /**
    //  * 生命周期函数--监听页面显示
    //  */
    // onShow: function() {

    // },

    // /**
    //  * 生命周期函数--监听页面隐藏
    //  */
    // onHide: function() {

    // },

    // /**
    //  * 生命周期函数--监听页面卸载
    //  */
    // onUnload: function() {

    // }
})