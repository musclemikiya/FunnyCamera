exports.showCamera =function() {
	var win = Titanium.UI.currentWindow;
	Titanium.Media.showCamera({
        success:function(event)
        {
                var cropRect = event.cropRect;
                var image = event.media;
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                        // カメラで撮った画像を表示する
                        var imageView = Ti.UI.createImageView({
                                top: 250,
								left:10,
								width: 100,
								height: 150,                    
                                image:event.media
                        });
                        win.add(imageView);

                        // カメラで撮った画像をアップロード（uploadCameraImageはあとで説明）
                        uploadCameraImage(image);
                }
                else
                {
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
        saveToPhotoGallery:true,
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
};

exports.showCameraRoll = function() {
	var win = Titanium.UI.currentWindow;
	Ti.Media.openPhotoGallery({
        success: function(e) {
                var photo = e.media;
                var imgView = Ti.UI.createImageView({
                        image: photo,
                        top: 250,
						left:10,
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
}
