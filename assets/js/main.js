console.log("\n %c Made with love %c by AyagawaSeirin | qwq.best ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");
// 获取近期文章
document.onreadystatechange = function () {
        /* Posts */
        $.ajax({
            method: 'GET',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://blog.589000.xyz/feed',
            success: function (data) {
                var data = JSON.parse(data).items;
                // var data = JSON.parse(data);
                var container = document.getElementById("posts-label");
                for (var i = 0; i <= 4; i++) {
                    var element = document.createElement('a');
                    element.href = data[i].link;
                    element.classList = "mdui-list-item mdui-ripple";
                    element.textContent = data[i].title;
                    element.target = "blank"
                    container.appendChild(element);
                }
                $("#post-spinner").remove();
            }
        });
        /* Made by Yfun yfun.top */
    }
}
