/*
 * アルバム作成画面
 */
(function(){
	var win = Ti.UI.currentWindow;
	var imgs = ['christmas.jpg', 'christmas.jpg', 'christmas.jpg'];
	
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
			top: 30,
			left:200,
			width: 100,
			height: 150,
			backgroundImage: "img/fukuda.jpeg"
		}));
		v.addEventListener('click', function(e){
			Ti.Media.openPhotoGallery({
				success: function(e) {
					var photo = e.media;
					var imgView = Ti.UI.createImageView({
						image: photo,
						top: 30,
						left:200,
						width: 100,
						height: 150
					});
					win.add(imgView);
				},
				error: function(event) {
					
				},
				cancel: function(event) {
					
				},
				allowEditing: true,
				// 選択可能なメディア種別を配列で指定
			    mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
			});
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
	
	win.add(scrollableView);
	win.open();
})();
