// window 設定
Titanium.UI.setBackgroundColor('#000');
var win = Titanium.UI.createWindow({
    title:'CameraTest',
    backgroundColor:'red'
});

// カメラ起動ボタン
var b1 = Titanium.UI.createButton({
        title:'camera start',
        height:40,
        width:200,
        top:10,
});

//クリック時の動作
b1.addEventListener('click', function(e)
{
        var win = Titanium.UI.createWindow({
                url:"camera.js",
                title:"camera",
        });
        win.open(win,{animated:true});
});
//windowにボタン追加
win.add(b1);
//window open
win.open();
