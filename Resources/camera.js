var registerPhoto = function(photo, win) {
    current_page = editView.currentPage;
    
    // もともとのフレーム
    var new_photo = Ti.UI.createImageView({
		width : 320,
    	height: 480,
    	backgroundImage: "img/album_template/"+imgs[current_page].name
	});
	
    for (var i=0;i<imgs[current_page].position.length;i++) {
    	var imgView = Ti.UI.createImageView({
            image: photo,
            top: imgs[current_page].position[i][0],
			left:imgs[current_page].position[i][1],
			width: imgs[current_page].size[i][0],
			height: imgs[current_page].size[i][1]
    	});
    	new_photo.add(imgView);
    }
    
	// 既にスクロールビューに存在する画像群を取得
	var view_imgs = editView.getViews();
	
	// スクロールビューを作り直し
	win.remove(editView);
	win.setToolbar([toolbar_space,camera,toolbar_space,camera_roll,toolbar_space]);
	editView = Ti.UI.createScrollableView({
		top: 0,
		left : 0,
	    width : 320,
	    height: 480,
	    cacheSize : 3
	});
	
    for (var i=0;i<view_imgs.length;i++) {
		if (i == current_page) {
			editView.addView(new_photo);
		} else {
			editView.addView(view_imgs[i]);
		}
	}
    editView.setCurrentPage(current_page);
    
    // 保存
    var cache_dir = Titanium.Filesystem.getApplicationDataDirectory;
    var file_name = 'FunnyCamera'+current_page+'.jpg';
    new_photo.toImage(function(e) {
    	Ti.Media.saveToPhotoGallery(e.blob);
    });
    
    win.add(editView);
}

exports.showCamera = function() {
	var win = Titanium.UI.currentWindow;
	Titanium.Media.showCamera({
        success:function(event)
        {
                var cropRect = event.cropRect;
                var image = event.media;
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        // カメラで撮った画像を表示する
                        registerPhoto(image, win);

                        // カメラで撮った画像をアップロード（uploadCameraImageはあとで説明）
                        uploadCameraImage(image);
                } else {
                        alert("got the wrong type back ="+event.mediaType);
                }
        },
        cancel:function()
        {
        },
        error:function(error)
        {
                // create alert
                var a = Titanium.UI.createAlertDialog({title:'Camera'});

                // set message
                if (error.code == Titanium.Media.NO_CAMERA)
                {
                        a.setMessage('Please run this test on device');
                }
                else
                {
                        a.setMessage('Unexpected error: ' + error.code);
                }
                
                // show alert
                a.show();
        },
        // tranceform: Ti.UI.create2DMatrix().scale(1),
        saveToPhotoGallery:true,
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
};

exports.showCameraRoll = function() {
	var win = Titanium.UI.currentWindow;
	var photo = Ti.Media.openPhotoGallery({
        success: function(e) {
            registerPhoto(e.media, win);    
        },
        error: function(event) {
                
        },
        cancel: function(event) {
                
        },
        // tranceform: Ti.UI.create2DMatrix().scale(1),
        allowEditing: true,
        // 選択可能なメディア種別を配列で指定
    	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
}
