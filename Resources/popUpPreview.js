/**
 * Modal Info View module - Titanium JS
 * @author César Cavazos - @cesarcvz
 * Based on: https://github.com/appcelerator/KitchenSink
 */
/**
 * Open an infomation modal anywhere in hour app
 * @param {String} text
 * @param {Object} params
 */
exports.showInfo = function(text) {
    //TODO: Add params like images/icons
    var infoWindow = Titanium.UI.createWindow({
        height:450,
        width:300,
    });
    
    // 画像プレビュー用
	var scrollableView = Ti.UI.createScrollableView({
	    width : 400,
	    height: 300,
	    cacheSize : 3
	});
	var cancelButton = Titanium.UI.createButton({
	   title: 'Cancel',
	   top: 400,
	   width: 50,
	   height: 50,
	   left:10
	});
	cancelButton.addEventListener('click',function(e)
	{
	   infoWindow.close();
	});
	
	var okayButton = Titanium.UI.createButton({
	   title: 'OK',
	   top: 400,
	   width: 50,
	   height: 50,
	   right:10
	});
	okayButton.addEventListener('click',function(e)
	{
		infoWindow.close();
	   	Ti.UI.currentTab.open(
			Ti.UI.createWindow({
				title: '作成画面',
				backgroundColor: '#fff',
				url: 'edit.js',
				tabBarHidden: true
			})
		);
	});
	
	var imgs = ['christmas.jpg', 'christmas2.jpg', 'img3.jpg'];
	
	for (var i=0;i<imgs.length;i++) {
		var v = Ti.UI.createImageView({
			width : 400,
	    	height: 300,
	    	image: "img/"+imgs[i]
		});
		scrollableView.addView(v);
	}
	
	infoWindow.add(cancelButton);
	infoWindow.add(okayButton);
    infoWindow.add(scrollableView);
    infoWindow.open();
    var animationProperties = {delay: 1500, duration: 1000, opacity: 0.1};
    if (Ti.Platform.osname == "iPhone OS") {
        animationProperties.transform = Ti.UI.create2DMatrix()
                                                     .translate(-200,200).scale(0);
    }
    // infoWindow.animate(animationProperties, function(){ infoWindow.close(); });
};