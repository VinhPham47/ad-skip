const bannerMSG = "Ad has been removed by Extension - Auto Skip Youtube Ads VP47 🤓";
const msgColor = "#4CAF50";

(function () {
    let hideHomePageAd = true;
    let hideAnnotation = true;
    let skipAd = true;
    let hideRightSideAd = true;
    let hidePromotion = false;


    let setContainerSection = () => {
        let theParent = document.getElementById("info-contents");
        if (theParent) {
            let myPromotion = document.createElement("div");
            myPromotion.id = "blockedAds";
            theParent.insertBefore(myPromotion, theParent.firstChild);
        }
    }

    setContainerSection();

    window.setInterval(function () {
        hideHomePageAd && hideHomeAds();
        skipAd && skipWhilePlaying();
        hideAnnotation && skipAnnotations();
        hideRightSideAd && skipOtherAds();
        skipAd && skipAdBannerInVideo();
        hideRightSideAd && skipGoogleClass();
        hideRightSideAd && skipSideAds();
        hideRightSideAd && skipRightSideOffers();
    }, 2000);


    let hideHomeAds = () => {
        let homeAd = document.getElementById('masthead-ad');
        if (homeAd) {
            if (hidePromotion) {
                homeAd.innerHTML = '';
            }
            else {
                homeAd.innerHTML = `<h3 style='color:#4CAF50'>${bannerMSG}</h3>`;
                homeAd.style.color = msgColor;
            }

        }
    }


    let showAdPromotion = () => {
        let myP = document.getElementById('blockedAds');
        if (myP) {
            myP.innerHTML = `<h3 style='color:#4CAF50'>${bannerMSG}</h3>`;
            myP.style.color = "#4CAF50";

        } else {
            setContainerSection();
        }
    }


    let skipWhilePlaying = () => {
        let btn = document.getElementsByClassName('ytp-ad-skip-button');
        let btnL = btn.length;
        for (let i = 0; i < btnL; i++) {
            btn[i].click();
            let info = document.getElementById('info-skeleton');
            info.innerHTML = '';
            info.style.color = msgColor;

        }
        btnL && showAdPromotion();
    }

    let skipAnnotations = () => {
        let anot = document.getElementsByClassName('video-annotations');
        let anotL = anot.length;
        for (let i = 0; i < anotL; i++) {
            if (i == 0) {
                anot[0].innerHTML = "";
                anot[0].style.color = msgColor;
            }
            else {
                anot[i].style.display = "none";
            }
        }
        anotL && showAdPromotion();
    }

    let skipOtherAds = () => {
        let ads = document.getElementsByClassName('adDisplay');
        let adsL = ads.length;
        for (var i = 0; i < adsL; i++) {
            ads[i].style.display = "none";
            var info = document.getElementById('info-skeleton');
            info.innerHTML = '';
            info.style.color = msgColor;
        }
        adsL && showAdPromotion();
    }

    let skipRightSideOffers = () => {
        let offerM = document.getElementById("offer-module");
        let offerMR = document.getElementById("ytd-movie-offer-module-renderer");

        if (offerM && offerM.innerHTML) {
            offerM.innerHTML = "";
        }
        if (offerMR && offerMR.innerHTML) {
            offerMR.innerHTML = "";
        }
        showAdPromotion();
    }



    let skipAdBannerInVideo = () => {
        let ads = document.getElementsByClassName('ytp-ad-overlay-container');
        let adsL = ads.length;
        for (var i = 0; i < adsL; i++) {
            let temp = document.getElementsByClassName("ytp-ad-overlay-container");
            temp = temp && typeof temp == "object" ? "" : temp && temp.length ? temp.empty() : "";
            temp = document.getElementsByClassName("ytp-ad-overlay-image");
            temp = temp && typeof temp == "object" ? "" : temp && temp.length ? temp.empty() : "";


            ads[i].style.display = "none";
            let info = document.getElementById('info-skeleton');
            info.innerHTML = '';
            info.style.color = msgColor;
        }
        adsL && showAdPromotion();
    }

    let skipGoogleClass = () => {
        let ads = document.getElementsByClassName('GoogleActiveViewClass');
        let adsL = ads.length;
        for (var i = 0; i < adsL; i++) {
            ads[i].style.display = "none";
        }
        adsL && showAdPromotion();
    }

    let skipSideAds = () => {
        let homeAd = document.getElementById('google_companion_ad_div');
        if (homeAd) {
            showAdPromotion();
            homeAd.innerHTML = bannerMSG;
            homeAd.style.color = msgColor;
        }

        let homeAd2 = document.getElementById('player-ads');
        if (homeAd2) {
            showAdPromotion();
            homeAd2.innerHTML = bannerMSG;
            homeAd2.style.color = msgColor;
        }
    }

})();

