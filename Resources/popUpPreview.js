/**
 * Modal生成
 * @param {Object} text
 */
exports.showInfo = function(text) {
    //TODO: Add params like images/icons
    var infoWindow = Titanium.UI.createWindow({
    	title: 'プレビュー',
        width:300,
        height:400,	
       	backgroundColor: 'white',
       	opacity: 0.9
    });
    
    // 画像プレビュー用
	var scrollableView = Ti.UI.createScrollableView({
	    width : 300,
	    height: 400,
	    cacheSize : 3
	});
	
	/*
	 * toolbar
	 */
	var toolbar_space = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	var cancelButton = Titanium.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CANCEL
	});
	cancelButton.addEventListener('click',function(e)
	{
	   infoWindow.close();
	});
	// infoWindow.add(cancelButton);
	var okayButton = Titanium.UI.createButton({
	   systemButton: Ti.UI.iPhone.SystemButton.ACTION
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
	// infoWindow.add(okayButton);
	var imgs = ['001_a.jpg', '001_b.jpg', '001_c.jpg', '001_d.jpg', '001_e.jpg'];
	
	for (var i=0;i<imgs.length;i++) {
		var v = Ti.UI.createImageView({
			width : 300,
	    	height: 400,
	    	image: "img/album_template/"+imgs[i],
	    	opacity:1.0
		});
		scrollableView.addView(v);
	}
	
	infoWindow.setToolbar([toolbar_space,cancelButton,toolbar_space,okayButton]);
	// Ti.API.info(infoWindow);
    infoWindow.add(scrollableView);
    infoWindow.open({
    	modal: true,
    	modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
    	modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
    });
    // var animationProperties = {delay: 1500, duration: 1000, opacity: 0.1};
    // if (Ti.Platform.osname == "iPhone OS") {
        // animationProperties.transform = Ti.UI.create2DMatrix()
                                                     // .translate(-200,200).scale(0);
    // }
    // infoWindow.animate(animationProperties, function(){ infoWindow.close(); });
};