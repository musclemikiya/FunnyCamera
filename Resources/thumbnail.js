(function(){
	var win = Titanium.UI.currentWindow;
	var tableView = Ti.UI.createImageView({
		
	});
	
	// サムネ用の画像群
	var image = Titanium.UI.createImageView({
	    height: 150,
	    width: 150,
	    top: 0,
	    left:150,
	    image:'img/christmas.jpg'
	});
	win.add(image);
	
	// 閉じるボタン
	var image2 = Titanium.UI.createImageView({
	    top: 0,
	    left:280,
	    height: 50,
		width: 50,
	    image:'img/dark_x-2.png'
	});
	
	// 次へのボタン
	var more_img = Ti.UI.createImageView({
		top: 400,
		left: 280,
		height: 50,
		width: 50,
		image: 'img/dark_more.png'
	});
	
	// プレビューから作成画面へ遷移
	more_img.addEventListener('click', function(e){
		Ti.API.info(Ti.UI.currentWindow);
		modal.close();
		Ti.UI.currentTab.open(
			Ti.UI.createWindow({
				title: '作成画面',
				backgroundColor: '#fff',
				url: 'edit.js',
				tabBarHidden: true
			})
		);
	});
	
// currentWindow.close()が使えないのでglobalで定義
var modal;

	// サムネがクリックされた時
	image.addEventListener('click', function(e){
		modal = Ti.UI.createWindow({
			title: 'テンプレートプレビュー',
			backgroundColor: 'white',
			navBarHidden: true
		});
		
		// 画像プレビュー用
		var scrollableView = Ti.UI.createScrollableView({
			top: 0,
			left : 0,
		    width : 310,
		    height: 450,
		    cacheSize : 3
		});
		var imgs = ['christmas.jpg', 'img2.jpg', 'img3.jpg'];
		
		for (var i=0;i<imgs.length;i++) {
			var v = Ti.UI.createImageView({
				 width : 310,
		    	height: 450,
		    	backgroundImage: "img/"+imgs[i]
			});
			scrollableView.addView(v);
		}
		
		modal.add(scrollableView);
		modal.add(image2);
		modal.add(more_img);
		
		
		// 閉じるボタン
		image2.addEventListener('click', function(e){
			modal.close();
		});
		
		modal.open({
			modal:true,
		    modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE,
		    modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
		});
	});
	// win.open();
})();
