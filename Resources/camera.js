var win = Titanium.UI.currentWindow;
Ti.Media.openPhotoGallery({
	success: function(e) {
		var photo = e.media;
		var imgView = Ti.UI.createImageView({
			image: photo,
			width:200
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
