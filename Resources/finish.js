/*
 * 完成画面
 */
exports.complete = function(){
	var win = Ti.UI.createWindow({
			title: '完成プレビュー',
			backgroundColor: '#fff',
			tabBarHidden: true
	});
	// 画像プレビュー用
	// var scrollableView = Ti.UI.createScrollableView({
		// top: 0,
		// left : 0,
	    // width : 310,
	    // height: 480,
	    // cacheSize : 3
	// });
	// var imgs = ['001_a.jpg', '001_b.jpg', '001_c.jpg', '001_d.jpg', '001_e.jpg'];
	// var l = imgs.length;
	// for (var i=0;i<l;i++) {
		// var v = Ti.UI.createImageView({
			 // width : 310,
	    	// height: 480,
	    	// backgroundImage: "img/album_template/"+imgs[i]
		// });
		// v.add(Ti.UI.createImageView({
			// top: 250,
			// left:10,
			// width: 100,
			// height: 150,
			// backgroundImage: imgs[i]
		// }));
		// scrollableView.addView(v);
	// } 
	win.add(editView);
	// win.add(Ti.App.EditView);
	Ti.UI.currentTab.open(win);
	win.open();
}
