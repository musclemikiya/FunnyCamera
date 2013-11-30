(function(){
	var win = Titanium.UI.currentWindow;
	var tableView = Ti.UI.createImageView({
		
	});
	
	// サムネイル用画像
	var imgs = ['christmas.jpg', 'christmas2.jpg', 'christmas2.jpg', 'christmas3.gif', 'christmas3.gif', 'christmas2.jpg'];
	var tops = [0, 0, 130, 130, 130, 130];
	var len = imgs.length;
	for (var l=0;l<len;l++){
		if ((l+1)%2 == 0) {
			var options = {
				height: 150,
			    width: 150,
			    top: tops[l],
			    right: 5,
			    image:'img/'+imgs[l]
			};
		} else{
			var options = {
				height: 150,
			    width: 150,
			    top: tops[l],
			    left: 5,
			    image:'img/'+imgs[l]
			};
		}
		var image = Ti.UI.createImageView(options);
		image.addEventListener('click', function(e){
			show_modal(e);
		});
		win.add(image);
	}
	
	
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
	var show_modal = function(e){
		modal = Ti.UI.createWindow({
	        title: 'Modal Window',
	        backgroundColor:'#000', 
	        opacity:0.60
		});
		
		// 画像プレビュー用
		var scrollableView = Ti.UI.createScrollableView({
			top: 50,
			left : 50,
		    width : 250,
		    height: 300,
		    cacheSize : 3
		});
		var imgs = ['christmas.jpg', 'christmas2.jpg', 'christmas3.gif'];
		
		for (var i=0;i<imgs.length;i++) {
			var v = Ti.UI.createImageView({
				width : 200,
		    	height: 250,
		    	image: "img/"+imgs[i]
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
		
		var Modal = require('popUpPreview');
		Modal.showInfo("This is an information modal view");
		
		// modal.open({
			// modal:true,
		    // modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
		    // modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
		    // navBarHidden:true
		// });
	};
	// win.open();
})();
