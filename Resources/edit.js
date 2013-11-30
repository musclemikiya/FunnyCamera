/*
 * アルバム作成画面
 */
(function(){
	var win = Ti.UI.currentWindow;
	var imgs = ['christmas.jpg', 'christmas2.jpg', 'christmas3.gif'];
	
	// 画像プレビュー用
	var scrollableView = Ti.UI.createScrollableView({
		top: 0,
		left : 0,
	    width : 310,
	    height: 450,
	    cacheSize : 3
	});
	for (var i=0;i<imgs.length;i++) {
		var v = Ti.UI.createImageView({
			width : 310,
	    	height: 450,
	    	backgroundImage: "img/"+imgs[i]
		});
		
		scrollableView.addView(v);
	}
	// 作成完了ボタン
	var right_button = Ti.UI.createButton({title:'完了'});
	right_button.addEventListener('click', function(e){
		alert('完成しました！');
		Ti.UI.currentTab.open(
			Ti.UI.createWindow({
				title: '完成プレビュー',
				backgroundColor: '#fff',
				url: 'finish.js',
				tabBarHidden: true
			})
		);
	});
	win.rightNavButton = right_button;
	
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
	camera_roll.addEventListener('click', function(e){
		Camera.showCameraRoll();
	});
	Ti.API.debug(scrollableView);
	win.setToolbar([toolbar_space,camera,toolbar_space,camera_roll,toolbar_space]);
	win.add(scrollableView);
	
	win.open();
})();
