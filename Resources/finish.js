/*
 * 完成画面
 */
(function(){
	var win = Ti.UI.currentWindow;
	// 画像プレビュー用
	var scrollableView = Ti.UI.createScrollableView({
		top: 0,
		left : 0,
	    width : 310,
	    height: 450,
	    cacheSize : 3
	});
	var imgs = ['christmas.jpg', 'christmas2.jpg', 'img3.jpg'];
	
	for (var i=0;i<imgs.length;i++) {
		var v = Ti.UI.createImageView({
			 width : 310,
	    	height: 450,
	    	backgroundImage: "img/"+imgs[i]
		});
		scrollableView.addView(v);
	}
	win.add(scrollableView);
	win.open();
})()
