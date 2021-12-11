console.log("\n %c Made with love %c by AyagawaSeirin | qwq.best ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");

// 获取近期文章
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        /* Posts */
        $.ajax({
            method: 'GET',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.589000.xyz%2Ffeed',
            success: function (data) {
                var data = JSON.parse(data).items;
                // var data = JSON.parse(data);
                var container = document.getElementById("posts-label");
                for (var i = 0; i <= 4; i++) {
                    var element = document.createElement('a');
                    element.href = data[i].link;
                    // element.href = "https://blog.589000.xyz" + data[i].url;
                    element.classList = "mdui-list-item mdui-ripple";
                    element.textContent = data[i].title;
                    element.target = "blank"
                    container.appendChild(element);
                }
                $("#post-spinner").remove();
            }
        });
        /* Made by YFun https://yfun.top */
    }
}


// 赞赏栏
var tab = new mdui.Tab('#support-tab');
document.getElementById('support').addEventListener('open.mdui.dialog', function () {
    tab.handleUpdate();
});


var support = new mdui.Dialog('#support');

function qqpay() {
    window.open("https://cdn.jsdelivr.net/gh/mcxiaolan/jsdelivr@master/qqpay.png");
    // support.open();
}

var support = new mdui.Dialog('#support');

function wechatpay() {
    window.open("https://cdn.jsdelivr.net/gh/mcxiaolan/jsdelivr@master/wechatpay.png");
    // support.open();
}

switch (getParam('ref')) {
    case 'donate':
        donate();
        break;
    default:
        break;
}
function getWeather() {
    if (getParam("city") !== "") {
        $.ajax({
            method: 'GET',
            url: 'https://api.cyfan.top/weather?location=' + getParam("city"),
            success: function (d) {
                var d = JSON.parse(d);
                var weatherDay = d.weather[0].info.day;
                var weatherNight = d.weather[0].info.night;
                document.getElementById("day-weather").innerHTML = `<h3 class="mdui-text-center">${weatherDay[1]}, ${weatherDay[2]}°C, ${weatherDay[4]}（${weatherDay[3]}）</h3>
                `
                document.getElementById("night-weather").innerHTML = `<h3 class="mdui-text-center">${weatherNight[1]}, ${weatherNight[2]}°C, ${weatherNight[4]}（${weatherNight[3]}）</h3>
                `
                console.log(weatherDay, weatherNight);
                $("#weather-spinner").remove();
            }
        });
    } else {
        $.ajax({
            method: 'GET',
            url: 'https://api.myip.la/cn?json',
            success: function (data) {
                var data = JSON.parse(data);
                $.ajax({
                    method: 'GET',
                    url: 'https://api.cyfan.top/weather?location=' + data.location.city,
                    success: function (d) {
                        var d = JSON.parse(d);
                        var weatherDay = d.weather[0].info.day;
                        var weatherNight = d.weather[0].info.night;
                        document.getElementById("day-weather").innerHTML = `<h3 class="mdui-text-center">${weatherDay[1]}, ${weatherDay[2]}°C, ${weatherDay[4]}（${weatherDay[3]}）</h3>
                        `
                        document.getElementById("night-weather").innerHTML = `<h3 class="mdui-text-center">${weatherNight[1]}, ${weatherNight[2]}°C, ${weatherNight[4]}（${weatherNight[3]}）</h3>
                        `
                        console.log(weatherDay, weatherNight);
                        $("#weather-spinner").remove();
                    }
                });

            }
        });
    }

}

if (document.referrer) {
    console.log(document.referrer);


    console.log(
        '%c请注意！我们不会收集并发送上述的来源网址信息！',
        'color: red'
    );
}


// 获取原始的页面标题
var normal_title = document.title;
// 监听页面的可见性
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        // 如果页面不可见
        // 设定新标题
        document.title = 'Oops! 页面崩溃了！';
    } else {
        // 欢迎信息
        document.title = "好耶！页面修好了！";
        // 1 秒后恢复原始信息
        setTimeout(function () {
            document.title = normal_title
        }, 1000)
    }
});
