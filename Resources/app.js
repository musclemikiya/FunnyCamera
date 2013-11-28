// window 設定
Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();
// alert(111);
var tab1 = Ti.UI.createTab({
	title: 'テンプレート一覧',
	window:	Ti.UI.createWindow({
			title: 'テンプレート一覧',
			backgroundColor: '#F0FFFF',
			url: 'thumbnail.js',
			tabBarHidden: true
	})
});

//window open
tabGroup.addTab(tab1);
tabGroup.open();
