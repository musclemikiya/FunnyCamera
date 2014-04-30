// window 設定
Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	title: 'テンプレート一覧',
	window:	Ti.UI.createWindow({
			title: 'テンプレート一覧',
			backgroundColor: '#F0FFFF',
			url: 'thumbnail.js',
			tabBarHidden: true
	})
});

// 画面情報
Ti.API.info('width:'+Ti.Platform.displayCaps.platformWidth);
Ti.API.info('height:'+Ti.Platform.displayCaps.platformHeight);

//window open
tabGroup.addTab(tab1);
tabGroup.open();
