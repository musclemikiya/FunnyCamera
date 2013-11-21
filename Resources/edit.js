/*
 * アルバム作成画面
 */
(function(){
	var win = Ti.UI.currentWindow;
	var imgs = ['christmas.jpeg', 'img2.jpg', 'img3.jpg'];
	
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
		v.add(Ti.UI.createImageView({
			width: 50,
			height: 50,
			backgroundImage: "img/dark_more.png"
		}));
		scrollableView.addView(v);
	}
	win.add(scrollableView);
	win.open();
})();
