Page({
    onContainerTap:function(event){
        // wx.navigateTo({
        //    url: '../posts/posts'
        // })
        // wx.redirectTo({
        //     url: '../posts/posts',
        // })
        wx.switchTab({
            url: "../posts/posts"
        });
    }
})