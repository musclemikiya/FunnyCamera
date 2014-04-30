/*
 * アルバム作成画面
 */
var editView, current_page=0;

// 画像名と当てはめるフレームの座標
var imgs = [
	{name:'001_a.jpg', position:[[147, 18]], size:[[280, 170]]}, 
	{name:'001_b.jpg', position:[[12, 8], [225, 90]], size:[[195, 185], [215, 240]]},
	{name:'001_c.jpg', position:[[25, 22], [25, 167], [165, 27], [165, 167]], size:[[130, 120], [130, 120], [130, 120], [130, 120]]},
	{name:'001_d.jpg', position:[[20, 20], [255, 145], [350, 20]], size:[[180, 230], [130, 120], [135, 120]]}, 
	{name:'001_e.jpg', position:[[30, 5]], size:[[290, 260]]}
];

/**
 * toolbar
 */
var toolbar_space = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
// カメラ起動ボタン
var camera = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.CAMERA
});
var Camera = require('camera');
camera.addEventListener('click', function(e){
	Camera.showCamera();
});
// カメラロール起動
var camera_roll = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.ORGANIZE
});
var camera_roll_photos = {};

// カメラロールから写真選択
camera_roll.addEventListener('click', function(e){
	camera_roll_photos[current_page] = Camera.showCameraRoll();
});

(function(){	
	var win = Ti.UI.currentWindow;
	// 画像プレビュー用
	editView = Ti.UI.createScrollableView({
		top: 0,
		left : 0,
	    width : 320,
	    height: 480,
	    cacheSize : 3
	});
	
	for (var i=0;i<imgs.length;i++) {
		var v = Ti.UI.createImageView({
			width : 320,
	    	height: 480,
	    	backgroundImage: "img/album_template/"+imgs[i].name
		});
		editView.addView(v);
	}
	
	// 作成完了ボタン
	var right_button = Ti.UI.createButton({title:'完了'});
	right_button.addEventListener('click', function(e){
		alert('完成しました！');
		var Finish = require('finish');
		Finish.complete();
	});
	win.rightNavButton = right_button;
	
	win.setToolbar([toolbar_space,camera,toolbar_space,camera_roll,toolbar_space]);
	win.add(editView);
	
	win.open();
})();
