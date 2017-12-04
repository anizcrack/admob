var admobid={}
  if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
  banner: 'ca-app-pub-3513750679746065/5643915092',
  interstitial: 'ca-app-pub-3513750679746065/6679737506'
  }
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
  banner: 'ca-app-pub-3513750679746065/5643915092',
  interstitial: 'ca-app-pub-3513750679746065/6679737506'
  };
}
else {
  admobid = { // for Windows Phone
  banner: 'ca-app-pub-3513750679746065/5643915092',
  interstitial: 'ca-app-pub-3513750679746065/6679737506'
  };
}
//code for pop-up-ads
if(AdMob) AdMob createBanner({
  adId:admobid.banner,
  position:AdMob.AD_POSITION.BOTTOM_CENTER,
  autoShow:true
});