// before everything, api emulation
if (typeof vino === 'undefined') {
  console.log('Initialize API emulation');
  window.vino = {
      ls_getItem: function (key) {
        return localStorage.getItem(key);
      },
      ls_setItem: function (key, value) {
        localStorage.setItem(key, value);
        return true;
      },
      ls_removeItem: function (key) {
        localStorage.removeItem(key);
      },
      ls_clear: function () {
        localStorage.clear();
      },
      ls_key: function (index) {
        return localStorage.key(index);
      },
      ls_length: function () {
        return localStorage.length;
      },
      lyt_setIsEnableClientLoadingIcon: function (show) {
          console.log((show ? 'Show' : 'Hide') + ' blue loading icon');
      },
      lyt_setIsEnableWhiteMask: function (withmask) {
          console.log((withmask ? 'With' : 'Without') + ' white mask');
      },
      lyt_startTouchEffect: function () {
          console.log('Show touch effect');
      },
      lyt_reset: function () {
        console.log('Reset lyt');
     },
     lyt_decideFixedFrame: function () {
        console.log('Decide lyt');
     },
      lyt_drawFixedFrame: function (one, two, three, four) {
        console.log('Drew frame at ' + one, two, three, four);
      },
      lyt_startTouchNodeEffect: function(one, two, three, four) {
          console.log('Show touch mouse effect at ' + one, two, three, four);
      },
      video_enableOnTV: function(bool) {
        console.log('Enable video on TV is ' + bool);
      },
      emulate_touch: function(one, two, three) {
        console.log('Emulate touch at ' + one, two, three);
      },
      emulate_inputDelay: function(one) {
        console.log('Emulate input delay in ' + one + ' seconds');
      },
      exit: function () {
          console.log('Exit app');
          window.location.href = "https://google.com"
      },
      exitForce: function () {
          console.log('Forcing exit app');
          window.location.href = "https://google.com"
      },
      isReturnedFromOtherApplication: function () {
          console.log('App was not returned from other application');
          return false;
      },
      runOliveErrorDialog: function (errorCode) {
          alert('115-' + errorCode + '\n\n' + 'An Miiverse error occurred.');
      },
      runErrorDialog: function (errorCode) {
          alert('119-9' + errorCode + '\n\n' + 'An Vino error occurred.');
      },
      olv_getErrorCodeOnInitialize: function () {
          alert('115-5004' + '\n\n' + 'The Miiverse service has ended.');
      },
      runSingleButtonDialog: function (msg, btnStr) {
          alert(msg + "\n\n[ " + btnStr + " ]");
      },
      runTwoButtonDialog: function (msg, lBtnStr, rBtnStr) {
          return confirm(msg + "\n\n[ " + lBtnStr + " (Cancel) ]  [ " + rBtnStr + " (OK) ]");
      },
      info_getCountry: function () {
          return 'US';
      },
      info_getLanguage: function () {
          return 'EN';
      },
      loading_setIconRect: function (one, two, three, four) {
          console.log('Set loading icon position at ' + one, two, three, four);
      },
      loading_setIconAppear: function (show) {
          console.log((show ? 'Show' : 'Hide') + ' loading icon.');
      },
      loading_setIconVisibility: function (show) {
          console.log((show ? 'Instantly show' : 'Instantly hide') + ' loading icon.');
      },
      soundPlay: function (soundLabel) {
          console.log('Played sound effect ' + soundLabel);
      },
      soundPlayVolume: function (soundLabel, vol) {
        console.log('Played sound effect ' + soundLabel + ' with volume ' + vol);
      },
      ir_enableCodeset: function(one) {
          console.log('Enabled IR codeset ' + one);
      },
      ir_send: function(one, two) {
          console.log('Sent IR code ' + one);
      },
      navi_reset: function () {
        console.log('Reset navi position');
      },
      navi_getRect: function () {
        return;
      },
      navi_setMoveMethod: function(one) {
          console.log('Set move method ' + one);
      },
      navi_setBaseVisibilityOnKeyEvent: function(bool) {
          console.log('Base visibility is ' + bool);
      },
      act_getCurrentSlotNo: function() {
          console.log('Returned account slot "1"');
          return 1;
      },
      act_getMiiImage: function(slot) {
          console.log('Returned Mii image from ' + slot);
          return 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
      },
      act_getMiiImageEx: function (slot, expression) {
        console.log('Returned Mii image from ' + slot + ' with expression ' + expression);
        var imageUrl;
        switch (expression) {
            case 7:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_whole_body.png';
                break;
            case 2:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_happy_face.png';
                break;
            case 3:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_like_face.png';
                break;
            case 4:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_surprised_face.png';
                break;
            case 5:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_frustrated_face.png';
                break;
            case 6:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_puzzled_face.png';
                break;
            default:
                imageUrl = 'http://mii-images.account.nintendo.net/wt2v2fiu6ldf_normal_face.png';
                break;
        }
        return imageUrl;
    },    
      act_getMiiData: function(slot) {
          console.log('Returned Mii data from ' + slot);
          return 'AwAAQBs8xqsHR9PC3Oe15oXEaBemLwAAAQxTAGEAcgBhAGgAAAAAAAAAAAAAAEpACBCAD3ppRBgzFEYYhhIWSA4AACkAUkhQAABpAG4AdABlAG4AZABvAAAAAAAAANL3';
      },
      act_getNum: function() {
          console.log('Returned number of accounts');
          return 1;
      },
      act_getName: function(slot) {
          console.log('Returned Mii name from ' + slot);
          return 'Sarah';
      },
      act_getPid: function(slot) {
          console.log('Returned account PID from ' + slot);
          return 1738258923;
      },
      act_getAgeDivision: function(slot) {
          console.log('Returned account age division from ' + slot);
          return 1;
      },
      apd_isEnabled: function() {
          console.log('APD is enabled on console');
          return true;
      },
      apd_getPeriod: function() {
        console.log('Return APD period');
         return 6200;
      },
      apd_enable: function() {
          console.log('APD has been enabled');
          return true;
      },
      apd_disable: function() {
          console.log('APD has been disabled');
          return false;
      },
      memo_open: function(state) {
          console.log((state ? 'Open with reset' : 'Open without reset') + ' memo UI');
          return true;
      },
      memo_isFinish: function() {
          console.log('Memo UI finished');
          return true;
      },
      memo_getImagePng: function() {
          console.log('Return memo UI image');
          return 'https://i.ibb.co/rwr9J38/descarga.png';
      },
      memo_getImageTgaRaw: function() {
          console.log('Return memo UI raw image');
          return '';
      },
      memo_getImageTgaCompressed: function() {
          console.log('Return memo UI compressed image');
          return '';
      },
      fp_getFriendList: function() {
          console.log('Return friend list');
          return '1739044112, 1738830554, 1741588700, 1738406070';
      },
      fp_getFriendName: function(PID) {
          console.log('Get friend name of ' + PID);
          return 'David Joaq';
      },
      jumpToTitle: function(TID, bool) {
          console.log('Jump to app ' + TID);
      },
      jumpToMiiverse: function(bool) {
          console.log('Jump to Miiverse is ' + bool);
      },
      jumpToMiiversePostId: function(postid, bool) {
          console.log('Jump to post ' + postid + ' on Miiverse is ' + bool);
      },
      jumpToEShop: function(TID, bool) {
          console.log('Jump to eShop page of TID ' + TID + ' is ' + bool);
      },
      jumpToVod: function(url, TID, bool) {
          console.log('Jump to VOD app of TID ' + TID + ' with URL ' + url + ' is ' + bool);
          window.location.href = url;
      },
      jumpToBrowser: function(url, bool) {
          console.log((bool ? 'Jump' : 'Did not jump') + ' to URL ' + url);
          window.location.href = url;
      },
      jumpToSettingsTvRemote: function(bool) {
          console.log((bool ? 'Jump' : 'Did not jump') + ' to TV Remote Settings');
      },
      olv_isEnabled: function() {
          console.log('Miiverse is enabled');
          return true;
      },
      olv_getPostingResult: function() {
          console.log('Post was successful');
          return 1;
      },
      olv_getHostName: function() {
          console.log('Miiverse host name ' + 'api-us.olv.nintendo.net');
          return 'api-us.olv.nintendo.net';
      },
      olv_getUserAgent: function() {
          console.log('Miiverse user agent ' + 'WiiU/POLV-5.0.3/353');
          return 'WiiU/POLV-5.0.3/305';
      },
      olv_getServiceToken: function() {
          console.log('Return service token');
          return '837vCg+l8rgFmGSHhZXRH22xr7YUxPhQ95FvhWr3JmoYBsWxUfIYZHFF+J6NYy9eUVnEhv8y3YFw2BrZZ3UEunQfHf7omFk0t4kWywIZYQcaZUDx367u7uSwW+34xF4+/IPQFGLtCh6moWe97yHcOMR374iAmzb1uTDM2cRgDco=';
      },
      olv_getParameterPack: function() {
          console.log('Return param pack');
          return 'XHRpdGxlX2lkXDE0MDc1ODEzMTA0OTcwMzRcYWNjZXNzX2tleVwzNDczXHBsYXRmb3JtX2lkXDFc cmVnaW9uX2lkXDJcbGFuZ3VhZ2VfaWRcMVxjb3VudHJ5X2lkXDQ5XGFyZWFfaWRcMzZcbmV0d29y a19yZXN0cmljdGlvblwwXGZyaWVuZF9yZXN0cmljdGlvblwwXHJhdGluZ19yZXN0cmljdGlvblwx N1xyYXRpbmdfb3JnYW5pemF0aW9uXDFcdHJhbnNmZXJhYmxlX2lkXDExMDU5OTY0MDc3OTU4MjI1 MzQ3XHR6X25hbWVcQW1lcmljYS9OZXdfWW9ya1x1dGNfb2Zmc2V0XC0xNDQwMFw=';
      },
      olv_postText: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
          console.log('Post to Miiverse with message ' + '"' + body +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
      },
      olv_postTextFixedPhrase: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
          console.log('Post to Miiverse fixed phrase with message ' + '"' + body +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
      },
      olv_postImage: function(painting, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
          console.log('Post to Miiverse with drawing ' + '"' + painting +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
      },
      olv_postImageFixedPhrase: function(body, topicTag, communityID, spoiler, searchkey1, searchkey2, searchkey3, searchkey4, searchkey5) {
          console.log('Post to Miiverse fixed phrase with drawing ' + '"' + painting +  '"' + ' with topic ' + topicTag + ' to community ID ' + communityID + ' with spoilers ' + spoiler + ' with search key ' + searchkey1 + ' with search key ' + searchkey2 + ' with search key ' + searchkey3 + ' with search key ' + searchkey4 + ' with search key ' + searchkey5);
      },
      suggest_isOpening: function() {
          console.log('Suggest is opening');
          return true;
      },
      suggest_set: function(sug1, sug2, sug3, sug4, sug5, sug6, sug7, sug8, sug9, sug10) {
          console.log('Set suggestion strings ' + '"' + sug1 +  '", ' +  '"' + sug2 +  '", ' + '"' + sug3 +  '", ' + '"' + sug4 +  '", ' + '"' + sug5 +  '", ' + '"' + sug6 +  '", ' + '"' + sug7 +  '", ' + '"' + sug8 +  '", ' + '"' + sug9 +  '", ' + '"' + sug10 +  '"' );
          return true;
      },
      suggest_reset: function() {
          console.log('Reset suggestion strings');
          return true;
      },
      suggest_getString: function() {
          console.log('Get string ' + '"Hello"');
          return 'Hello';
      },
      pc_isControlled: function() {
          console.log('Parental Controls are disabled');
          return false;
      },
      pc_getMiiverseControlLevel: function() {
          console.log('No Miiverse Control Settings');
          return 0;
      },
      pc_isControlledNetworkCommunication: function() {
          console.log('No Network Communication Settings');
          return false;
      },
      pc_isControlledFriendReg: function() {
        console.log('No Friend Settings');
        return false;
      },
      pc_isControlledBrowser: function() {
        console.log('No Browser Settings');
        return false;
      },
      ng_checkText: function(message) {
          console.log(message + ' does not contain any blacklisted words.');
          return true;
      },
      ng_checkWord: function(message) {
          console.log(message + ' is not a blacklisted word.');
          return true;
      }

  };
}

if (typeof wiiu === 'undefined') {window.wiiu = {},window.wiiu.gamepad = {update: function() {}};}

// actual app JS stars here..., ill remove the emulation on prod, lo

// check for pc (parental controls)
if (!sessionStorage.getItem("pcCheck")) {

  if (vino.pc_getMiiverseControlLevel() === 1) {
    sessionStorage.setItem("olvPostState", "blocked");
  } else if (vino.pc_getMiiverseControlLevel() === 2) {
    sessionStorage.setItem("olvPostState", "read_only");
  } else {
    sessionStorage.setItem("olvPostState", "enabled");
  }

  if (vino.pc_isControlledFriendReg()) {
    sessionStorage.setItem("friendsReq", "blocked");
  } else {
    sessionStorage.setItem("friendsReq", "enabled");
  }

  if (vino.pc_isControlledBrowser()) {
    sessionStorage.setItem("intBrowser", "blocked");
  } else {
    sessionStorage.setItem("intBrowser", "enabled");
  }

  if (vino.pc_isControlled() && vino.pc_isControlledNetworkCommunication()) {
  alert("Parental Controls are enabled for\n this application\nPlease enter the PIN to access it.")
  if (vino.pc_checkPIN()) {
    alert("Nintendo TVii can be used now.")
  }
  else  {
    alert("The PIN was incorrect\nNintendo TVii will now close.\nTry again later.")
    vino.exit();
   }
  }

  sessionStorage.setItem("pcCheck", "complete");
 }

const activeUserSlot = vino.act_getCurrentSlotNo();
vino.lyt_setIsEnableClientLoadingIcon(true);
vino.lyt_setIsEnableWhiteMask(true);
vino.video_enableOnTV(true);
vino.loading_setIconRect(180, 160, 120, 120);

 function addHover(isAppear, el) {
    if (isAppear) {
        el.classList.add('hover');
    } else {
        el.classList.remove('hover');
    }
}

const vinoClientUrl =  window.location.origin;

document.addEventListener('DOMContentLoaded', function () {
    var bodyAttribute = document.body.getAttribute('data-page');

    switch (bodyAttribute) {
        case 'live-page':
            prepareLivePage();
            break;
        case 'all-programs-page':
            prepareAllPrograms();
            break;
        case 'my-favorites-page':
            prepareMyFavorites();
            break;
        case 'menu-page':
            prepareMenu();
            break;
        case 'program-page':
            prepareProgramPage();
            break;
        default:
            break;
    }
});

// Live page code, init logic...
function prepareLivePage() {
sessionStorage.setItem("current_page", "live");
(function () {
    var els = document.querySelectorAll("[data-sound]");
    if (!els) return;
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener("click", function(e) {
            vino.soundPlayVolume(e.currentTarget.getAttribute('data-sound'), 25);
        });
    }
  })();

(function () {
    var elt = document.querySelectorAll("a:not([no_touch]), input:not([no_touch]), select:not([no_touch])");
    if (!elt) return;
    for (var i = 0; i < elt.length; i++) {
        elt[i].addEventListener("click", function(e) {
            vino.lyt_startTouchEffect();
        });
    }
  })();

        var tipsArray = [
            "When you are using a program, open the  HOME Menu and launch this app to quickly check and then return to your suspended program.",
            "Use the  stick to scroll the page, and use  to highlight some of the clickable options that you can select pressing  over it.",
            "You can share and see comments on Miiverse about programs currently airing by clicking a program and touching the Miiverse icon.",
            "Every day the colors of elements and icons of the application interface change, and the tips every time you restart the app.",
            "You can report any issues you have with Nintendo TVii within the Manual in the Menu button, which is on the top right corner.",
            "Nintendo TVii fetches programs and shows them no matter the rating, so enable Parental Controls if you need to hide programs shown here.",
            "Did you know you can recommend programs to your friends with Miiverse as a message by clicking the recommend button on a show page?",
            "You can see programs your friends have favorited by touching the Popular button and filtering the programs as 'Favorited by Friends'.",
            "It is recommended to read the Manual in the Menu button on the top right corner to learn what Nintendo TVii offers and how to use it.",
        ];

        var tipContentElement = document.querySelector('.daily-tip .tip-content');

       setStartUpTip();
    
        function setStartUpTip() {
            var randomIndex = Math.floor(Math.random() * tipsArray.length);
            tipContentElement.textContent = tipsArray[randomIndex];
        }

        function updateDateTime() {
            var now = new Date();
        
            var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var dayName = dayNames[now.getDay()];
            var day = now.getDate();
            var hours = now.getHours();
            var ampm = hours >= 12 ? 'pm' : 'am';
        
            // Convert hours to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12; // Set 12 for midnight
        
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
        
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
        
            document.querySelector('.day-info .date-day-name').textContent = dayName;
            document.querySelector('.day-info .date-day').textContent = day;
            document.querySelector('.day-info .date-time').textContent = hours + ':' + minutes + ' ' + ampm;
        
            var dateClassSw = document.querySelector('.day-info .date-day-name').textContent;
        
            switch (dateClassSw) {
                case 'Sun':
                    document.querySelector('.day-info .date-day-name').classList.add('sun');
                    break;
                case 'Mon':
                    document.querySelector('.day-info .date-day-name').classList.add('mon');
                    break;
                case 'Tue':
                    document.querySelector('.day-info .date-day-name').classList.add('tue');
                    break;
                case 'Wed':
                    document.querySelector('.day-info .date-day-name').classList.add('wed');
                    break;
                case 'Thu':
                    document.querySelector('.day-info .date-day-name').classList.add('thu');
                    break;
                case 'Fri':
                    document.querySelector('.day-info .date-day-name').classList.add('fri');
                    break;
                case 'Sat':
                    document.querySelector('.day-info .date-day-name').classList.add('sat');
                    break;
            }
        }
        
        updateDateTime();
        
        setInterval(updateDateTime, 1000);
        

    var initialProgramRequest = new XMLHttpRequest();
    initialProgramRequest.open('GET', vinoClientUrl + '/v1/recommended.xml', true);

    initialProgramRequest.onreadystatechange = function () {
        if (initialProgramRequest.readyState == 4 && initialProgramRequest.status == 200) {
            var xmlDoc = initialProgramRequest.responseXML;

            var shows = xmlDoc.getElementsByTagName('show');
            var container = document.querySelector('.scroll-programs');

            for (var i = 0; i < shows.length; i++) {
                var show = shows[i];
                var showName = show.getElementsByTagName('show_name')[0].textContent;
                var showImage = show.getElementsByTagName('show_image')[0].textContent;
                var showId = show.getElementsByTagName('show_id')[0].textContent;
                var showDescription = show.getElementsByTagName('show_description')[0].textContent;
                var streamingServices = show.getElementsByTagName('streaming_service')[0].textContent;
                var showType = show.getElementsByTagName('show_type')[0].textContent;
                var isMovie = show.getElementsByTagName('is_movie')[0].textContent;

                var programLink = document.createElement('a');
                programLink.href = 'javascript:void(0);';
                programLink.classList.add('program', '1');
                
                var liveProgram = document.createElement('div');
                liveProgram.classList.add('live-program');

                liveProgram.setAttribute('data-image', showImage);
                liveProgram.setAttribute('data-show-id', showId);
                liveProgram.setAttribute('data-show-name', showName);
                liveProgram.setAttribute('data-streaming', streamingServices);
                liveProgram.setAttribute('data-show-description', showDescription);

                if (isMovie.toLowerCase() === 'true') {
                    liveProgram.classList.add('movie');
                }
                
                var showTypeSpan = document.createElement('span');
                showTypeSpan.classList.add('show-type');
                showTypeSpan.textContent = showType;
                
                var streamingNameSpan = document.createElement('span');
                streamingNameSpan.classList.add('streaming-service');
                streamingNameSpan.textContent = streamingServices;
                
                var programNameSpan = document.createElement('span');
                programNameSpan.classList.add('program-name');
                programNameSpan.textContent = showName;
                
                var programTimeSpan = document.createElement('span');
                programTimeSpan.classList.add('program-time');

                liveProgram.appendChild(streamingNameSpan);
                liveProgram.appendChild(programNameSpan);
                liveProgram.appendChild(showTypeSpan);

                programLink.appendChild(liveProgram);

                container.appendChild(programLink);

                function changePreviewImage(program) {
                    vino.loading_setIconAppear(true);
                    var prevImg = new Image();
                    var programImage = program.getAttribute('data-image');
                    prevImg.src = programImage;
                    prevImg.onload = function () {
                        document.querySelector('.program-preview .image').src = programImage;
                        vino.loading_setIconAppear(false);
                        var streamingI = program.getAttribute('data-streaming');
                        var ThisShowName = program.getAttribute('data-show-name');
                        var ThisShowDescription = program.getAttribute('data-show-description');

                        document.querySelector('.program-preview .show-title').textContent = ThisShowName;
                        document.querySelector('.program-preview .show-services').textContent = streamingI;
                        document.querySelector('.program-preview .show-description').textContent = ThisShowDescription;
                    };
                    prevImg.onerror = function () {
                        alert("There was an error loading the image.")
                        vino.loading_setIconAppear(false);
                    };
                }
                
liveProgram.addEventListener('click', function () {
    vino.lyt_startTouchEffect();
    if (this.classList.contains('selected')) {
        vino.lyt_decideFixedFrame();
        vino.soundPlayVolume("SE_APPEAR_DETAIL", 25);
        openShowPage(this);
    } else {
        vino.soundPlayVolume("SE_A_DECIDE_TOUCH_OFF", 25);
        changePreviewImage(this);
        scrollToProgram(this);
    }

    var allLivePrograms = document.querySelectorAll('.live-program');
    for (var i = 0; i < allLivePrograms.length; i++) {
        if (allLivePrograms[i] !== this) {
            allLivePrograms[i].classList.remove('selected');
        }
    }

    this.classList.toggle('selected');
});

}
            var scrollTimeout;

            function snapToCenter() {
                var programHeight = document.querySelector('.live-program').offsetHeight;
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var centerIndex = Math.round(scrollTop / programHeight);
                var targetScrollTop = centerIndex * programHeight;

                targetScrollTop = Math.min(targetScrollTop, document.body.scrollHeight - window.innerHeight);

                if (targetScrollTop !== scrollTop) {
                    document.body.scrollTop = targetScrollTop;
                    document.documentElement.scrollTop = targetScrollTop;
                }

                if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                    vino.soundPlayVolume("SE_BAR_SCROLL_END", 20);
                }

                if (window.scrollY === 0) {
                    vino.soundPlayVolume("SE_BAR_SCROLL_END", 20);
                }
            }

            function scrollToProgram(program) {
                if (program && program.offsetTop !== undefined) {
                    var programTop = program.getBoundingClientRect().top + window.scrollY;
            
                    var targetScrollTop = programTop - window.innerHeight / 2 + program.offsetHeight / 2;
            
                    targetScrollTop = Math.min(targetScrollTop, document.body.scrollHeight - window.innerHeight);
            
                    document.body.scrollTop = targetScrollTop;
                    document.documentElement.scrollTop = targetScrollTop;
                }
            }

            function handleScrollEnd() {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function () {
                    snapToCenter();
                }, 200);
            }
            
            window.addEventListener('scroll', function () {
                if (vino.navi_getRect() && wiiu.gamepad.tpTouch === 1) {
                    vino.navi_reset();
                }
                vino.soundPlayVolume("SE_BAR_SCROLL", 15);
                handleScrollEnd();
            });

            var firstChild = document.querySelector('.scroll-programs > :nth-child(2)');

        if (firstChild) {
        vino.loading_setIconRect(180, 125, 100, 100);
        vino.loading_setIconAppear(true);
        var rectfC = firstChild.getBoundingClientRect();
        var rectString = JSON.stringify({
            left: rectfC.left,
            top: rectfC.top,
            width: rectfC.width,
            height: rectfC.height
        });

        sessionStorage.setItem("lyt_frame_position", rectString);
        vino.lyt_drawFixedFrame(rectfC.left - 5, rectfC.top - 5, rectfC.width + 8, rectfC.height + 4);

        var bootPrevImg = new Image();
        bootPrevImg.src = firstChild.querySelector('.live-program').getAttribute('data-image');
        document.querySelector('.program-preview .image').src = bootPrevImg.src;
        firstChild.querySelector('.live-program').classList.add('selected');

        var bootAir = firstChild.querySelector('.live-program').getAttribute('data-air-date');
        var bootStreaming = firstChild.querySelector('.live-program').getAttribute('data-streaming');
        var bootThisShowName = firstChild.querySelector('.live-program').getAttribute('data-show-name');
        var bootThisShowDescription = firstChild.querySelector('.live-program').getAttribute('data-show-description');

        document.querySelector('.program-preview .show-services').textContent = bootStreaming;
        document.querySelector('.program-preview .show-title').textContent = bootThisShowName;
        document.querySelector('.program-preview .show-description').textContent = bootThisShowDescription;

        bootPrevImg.onload = function () {
        vino.loading_setIconAppear(false);
        };

        bootPrevImg.onerror = function () {
            alert("There was an error loading the image\nNintendo TVii will close now.")
            vino.loading_setIconAppear(false);
            vino.exitForce();
        };
          }
        }

        document.querySelector(".menu-buttons .menubtn").onclick = function() {
            openMenu()
          };


        function openMenu() {
            window.location.href = vinoClientUrl + '/menu.html';
        }

        function openShowPage(program) {
            window.location.href = vinoClientUrl + '/program_info.html' + '?show=' + program.getAttribute('data-show-id');
    }
        
function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }

  var inputCheck = setInterval(input, 10);

  function input() {
      wiiu.gamepad.update();
      if (wiiu.gamepad.isDataValid === 0) return;
      
      switch (wiiu.gamepad.hold) {
          case 1073741824:
              document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
              break;
          case 536870912:
              document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
              break;
          case 268435456:
              document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
              break;
          case 134217728:
              document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
              break;
          case 4096:
                playSoundOnce("SE_POPUP");
                openMenu();
              break;
          case 16384:
            break;
      }
     }
    };

    initialProgramRequest.onerror = function() {
        alert("There was an error fetching shows.");
        vino.exitForce();
      };
      
    initialProgramRequest.send();
};

// All programs code
function prepareAllPrograms() {
};

// Favorites page code
function prepareMyFavorites() {
};

// Menu code
function prepareMenu() {
    sessionStorage.setItem("current_page", "menu");
    vino.navi_setBaseVisibilityOnKeyEvent(true);
(function () {
    var els = document.querySelectorAll("[data-sound]");
    if (!els) return;
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener("click", function(e) {
            vino.soundPlayVolume(e.currentTarget.getAttribute('data-sound'), 25);
        });
    }
  })();

(function () {
    var elt = document.querySelectorAll("a:not([no_touch]), input:not([no_touch]), select:not([no_touch]), button:not([no_touch])");
    if (!elt) return;
    for (var i = 0; i < elt.length; i++) {
        elt[i].addEventListener("click", function(e) {
            vino.lyt_startTouchEffect();
        });
    }
  })();

  (function () {
    var elm = document.querySelectorAll("[navi_mouse]");
    
    if (!elm) return;

    for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener("click", function(e) {
            var mRect = this.getBoundingClientRect();
            vino.lyt_startTouchNodeEffect(mRect.left, mRect.top, mRect.width, mRect.height);
        });
    }
})();

    console.log('Prepared Menu');

    function lerp( a, b, alpha ) {
        return a + alpha * ( b - a )
      }

    var inputCheck = setInterval(input, 10);

    function input() {
        wiiu.gamepad.update();
        if (wiiu.gamepad.isDataValid === 0) return;
        
        switch (wiiu.gamepad.hold) {
            case 1073741824:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
                break;
            case 536870912:
                vino.navi_reset();
                document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
                break;
            case 268435456:
                vino.navi_reset();
                document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
                break;
            case 134217728:
                vino.navi_reset();
                document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
                break;
            case 4096:
                break;
            case 16384:
                playSoundOnce("SE_CLOSE");
                goBack();
              break;
        }
       }
    
};

function goBack() {
    window.location.href = document.referrer;
}

function goToIndex() {
    window.location.href = vinoClientUrl;
}


// Program page
function prepareProgramPage() {
    sessionStorage.setItem("current_page", "program-page");
    vino.loading_setIconRect(360, 160, 120, 120);
    vino.navi_setBaseVisibilityOnKeyEvent(true);

function getQueryParamByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.search);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var showQuery = getQueryParamByName('show');

if (showQuery !== null) {
    vino.loading_setIconAppear(true);
    var showReq = new XMLHttpRequest();
    showReq.onreadystatechange = function () {
        if (showReq.readyState === 4 && showReq.status === 200) {
            var showResponse = showReq.responseXML;
            var content = showResponse.getElementsByTagName("content")[0];
            var show = content.getElementsByTagName("show")[0];

            var showName = show.querySelector("show_name").textContent;
            var showId = show.querySelector("show_id").textContent;
            var showImage = show.querySelector("show_image").textContent;
            var showDescription = show.querySelector("show_description").textContent;
            var showYear = show.querySelector("show_year").textContent;
            var showCountry = show.querySelector("show_country").textContent;
            var showRating = show.querySelector("show_rating").textContent;
            var showTrailerSrc = show.querySelector("show_trailer_source").textContent;
            var showStreamingService = show.querySelector("streaming_service").textContent;

            var actors = show.getElementsByTagName("actor");
            document.querySelector(".top-bar.no-after").innerHTML = showName;
            var programContainer = document.querySelector(".program-content");
            programContainer.setAttribute("data-program-id", showId);
            if(vino.ls_getItem(showId)){
            programContainer.setAttribute('data-is-favorited', 'true');
            } else
            if(!vino.ls_getItem(showId)){
            programContainer.setAttribute('data-is-favorited', 'false');
            }

            if (showName.length > 47) {
                var showTagText = showName.substring(0, 47 - 3) + "...";
            } else {
                var showTagText = showName;
            }
            programContainer.setAttribute("data-miiverse-topic-tag", showTagText);
            

            programContainer.setAttribute("data-miiverse-search-key", showId);

            var programDetailsContainer = document.querySelector(".program-details");
            
            var programImage = document.createElement("img");
            programImage.src = showImage;
            programImage.classList.add("image");

            var programMetadata = document.createElement("div");
            programMetadata.classList.add("program-metadata");

            var showsSynopsisLabel = document.createElement("span");
            showsSynopsisLabel.classList.add("show-services");
            showsSynopsisLabel.innerHTML = "Synopsis";

            var showsDescriptionLabel = document.createElement("span");
            showsDescriptionLabel.classList.add("show-description");
            showsDescriptionLabel.innerHTML = showDescription;

            programDetailsContainer.appendChild(programImage);
            programDetailsContainer.appendChild(programMetadata);
            programMetadata.appendChild(showsSynopsisLabel);
            programMetadata.appendChild(showsDescriptionLabel);

            var actorsSection = document.querySelector(".actors");
        
            for (var i = 0; i < actors.length; i++) {
                var actor = actors[i];
        
                var actorLink = document.createElement("a");
                actorLink.href = "javascript:void(0)";
                actorLink.classList.add("actor");
        
                var actorImage = document.createElement("img");
                actorImage.setAttribute("navi_target", "");
                actorImage.setAttribute("navi_mouse", "");
                actorImage.setAttribute("data-sound", "SE_APPEAR_DETAIL");
                actorImage.classList.add("actor_image");
                actorImage.src = actor.querySelector("actor_image").textContent;
        
                var actorName = document.createElement("span");
                actorName.classList.add("actor_name");
                actorName.textContent = actor.querySelector("actor_name").textContent;
        
                actorLink.appendChild(actorImage);
                actorLink.appendChild(actorName);
        
                actorsSection.appendChild(actorLink);
            }

            var programDetailsContainer = document.querySelector(".extra-information");

            var programYear = document.createElement("span");
            programYear.classList.add("program-year");
            programYear.innerHTML = showYear;
            
            var programRating = document.createElement("span");
            programRating.classList.add("program-rating");
            programRating.innerHTML = showRating;
            
            var programCountry = document.createElement("span");
            programCountry.classList.add("program-country");
            programCountry.innerHTML = showCountry;
            
            var programService = document.createElement("span");
            programService.classList.add("program-plataform");

           if (showStreamingService.length > 27) {
            var serviceTrText = showStreamingService.substring(0, 27 - 3) + "...";
            } else {
            var serviceTrText = showStreamingService;
            }

            programService.innerHTML = serviceTrText;

            var programTrailer = document.createElement("video");
            programTrailer.setAttribute("navi_target", "");
            programTrailer.classList.add("program-trailer");
            programTrailer.width = "240";
            programTrailer.height = "135";
            programTrailer.src = showTrailerSrc;
            programTrailer.controls = true;
            programTrailer.preload = "controls";
            
            programDetailsContainer.appendChild(programYear);
            programDetailsContainer.appendChild(programRating);
            programDetailsContainer.appendChild(programCountry);
            programDetailsContainer.appendChild(programService);
            programDetailsContainer.appendChild(programTrailer);

            if(document.querySelector('.program-content').getAttribute('data-is-favorited') === 'true'){
            document.querySelector('.favoritebtn').classList.add('checked');
            } else
            if(document.querySelector('.program-content').getAttribute('data-is-favorited') === 'false'){
            document.querySelector('.favoritebtn').classList.remove('checked');
            }

            (function () {
                var els = document.querySelectorAll("[data-sound]");
                if (!els) return;
                for (var i = 0; i < els.length; i++) {
                els[i].addEventListener("click", function(e) {
                vino.soundPlayVolume(e.currentTarget.getAttribute('data-sound'), 25);
                });
                }
                })();
    
               (function () {
                var elt = document.querySelectorAll("a:not([no_touch]), input:not([no_touch]), select:not([no_touch]), button:not([no_touch])");
                if (!elt) return;
                for (var i = 0; i < elt.length; i++) {
                elt[i].addEventListener("click", function(e) {
                vino.lyt_startTouchEffect();
                 });
                 }
                 })();
    
                (function () {
                var elm = document.querySelectorAll("[navi_mouse]");
                if (!elm) return;
                for (var i = 0; i < elm.length; i++) {
                elm[i].addEventListener("click", function(e) {
                var mRect = this.getBoundingClientRect();
                vino.lyt_startTouchNodeEffect(mRect.left, mRect.top, mRect.width, mRect.height);
                });
                }
                })();

        }
    };

    showReq.onload = function () {
    document.querySelector('.miiverse-button').removeAttribute('disabled');
    vino.loading_setIconAppear(false);
    };

    showReq.onerror = function () {
    vino.loading_setIconAppear(false);
    alert('There was an error preparing the request');
    };

    showReq.open("GET", vinoClientUrl + "/v1/shows/" + showQuery + ".xml", true);
    showReq.send();
} else {
    alert('There was an error reading the show query');
    window.location.href = vinoClientUrl;
}

function lerp( a, b, alpha ) {
    return a + alpha * ( b - a )
  }

var inputCheck = setInterval(input, 10);

function input() {
    wiiu.gamepad.update();
    if (wiiu.gamepad.isDataValid === 0) return;
    
    switch (wiiu.gamepad.hold) {
        case 1073741824:
            vino.navi_reset();
            document.body.scrollLeft += lerp(-15, -15, (wiiu.gamepad.lStickX));
            break;
        case 536870912:
            vino.navi_reset();
            document.body.scrollLeft += lerp(-15, 15, (wiiu.gamepad.lStickX));
            break;
        case 268435456:
            vino.navi_reset();
            document.body.scrollTop += lerp(-15, -15, (wiiu.gamepad.lStickY));
            break;
        case 134217728:
            vino.navi_reset();
            document.body.scrollTop += lerp(15, 15, (wiiu.gamepad.lStickY));
            break;
        case 4096:
            break;
        case 16384:
            playSoundOnce("SE_RETURN");
            goBack();
          break;
        case 4:
            playSoundOnce("SE_TOP");
            goToIndex();
        break;
    }
   }

    console.log('Prepared Menu');

    function updateDateTime() {
        var now = new Date();
    
        var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var dayName = dayNames[now.getDay()];
        var day = now.getDate();
        var hours = now.getHours();
        var ampm = hours >= 12 ? 'pm' : 'am';
    
        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Set 12 for midnight
    
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
    
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        document.querySelector('.day-info .date-day-name').textContent = dayName;
        document.querySelector('.day-info .date-day').textContent = day;
        document.querySelector('.day-info .date-time').textContent = hours + ':' + minutes + ' ' + ampm;
    
        var dateClassSw = document.querySelector('.day-info .date-day-name').textContent;
    
        switch (dateClassSw) {
            case 'Sun':
                document.querySelector('.day-info .date-day-name').classList.add('sun');
                break;
            case 'Mon':
                document.querySelector('.day-info .date-day-name').classList.add('mon');
                break;
            case 'Tue':
                document.querySelector('.day-info .date-day-name').classList.add('tue');
                break;
            case 'Wed':
                document.querySelector('.day-info .date-day-name').classList.add('wed');
                break;
            case 'Thu':
                document.querySelector('.day-info .date-day-name').classList.add('thu');
                break;
            case 'Fri':
                document.querySelector('.day-info .date-day-name').classList.add('fri');
                break;
            case 'Sat':
                document.querySelector('.day-info .date-day-name').classList.add('sat');
                break;
        }
    }
    
    updateDateTime();
    
    setInterval(updateDateTime, 1000);
    
       window.addEventListener('scroll', function () {
        updateButtonVisibility();
        if (vino.navi_getRect() && wiiu.gamepad.tpTouch === 1) {
            vino.navi_reset();
        }
    });

};

function updateButtonVisibility() {
    var scrollThreshold = 800; // Adjust this threshold as needed

    if (window.scrollX > scrollThreshold) {
        document.querySelector('.before_page_button').style.display = 'block';
        document.querySelector('.next_page_button').style.display = 'none';
    } else {
        document.querySelector('.before_page_button').style.display = 'none';
        document.querySelector('.next_page_button').style.display = 'block';
    }
}

function scrollLeftPPage() {
    document.querySelector('.before_page_button').style.display = 'none';
    document.querySelector('.next_page_button').style.display = 'block';
    window.scrollBy(-900, 0);
}

function scrollRightPPage() {
    document.querySelector('.before_page_button').style.display = 'block';
    document.querySelector('.next_page_button').style.display = 'none';
    window.scrollBy(900, 0);
}

function toggleFavorite() {
    var programToFavorite = document.querySelector('.program-content');
    if(programToFavorite.getAttribute('data-is-favorited') === 'true'){
    document.querySelector('.favoritebtn').classList.remove('checked');
    vino.soundPlayVolume('SE_NO_FAVORITE_TOUCH_OFF', 25);
    vino.ls_removeItem(programToFavorite.getAttribute('data-program-id'))
    programToFavorite.setAttribute('data-is-favorited', 'false');
    } else
    if(programToFavorite.getAttribute('data-is-favorited') === 'false'){
        document.querySelector('.favoritebtn').classList.add('checked');
        vino.soundPlayVolume('SE_FAVORITE_TOUCH_OFF', 25);
        vino.ls_setItem(programToFavorite.getAttribute('data-program-id'), '1')
        programToFavorite.setAttribute('data-is-favorited', 'true');

        if (!vino.ls_getItem("favoriteMessage")) {
        alert('You have favorited this program\nIt will appear on your "My Favorites" tab.');
        vino.ls_setItem("favoriteMessage", "true");
         }
    }
}

function prepareMiiverseModal() {
    function loadMiiversePosts() {
        var miiverseRequest = new XMLHttpRequest();
        miiverseRequest.open("GET", vino.olv_getHostName() + "/v1/communities/0/posts?language_id=254&limit=65&search_key=" + document.querySelector(".program-content").getAttribute("data-miiverse-search-key") + "&distinct_pid=1&with_mii=1", true);
        miiverseRequest.onreadystatechange = function () {
            if (miiverseRequest.readyState == 4 && miiverseRequest.status == 200) {
                document.querySelector('.posts-top-bar').innerHTML = 'Miiverse posts for ' + '"' + document.querySelector('.program-content').getAttribute('data-miiverse-topic-tag') + '"';
                var miiResponse = miiverseRequest.responseXML;
                var postsContainer = miiResponse.getElementsByTagName('posts')[0];
                var posts = postsContainer.getElementsByTagName('post');

                function formatPostDate(dateString) {
                    var parts = dateString.match(/(\d+)/g);
                    var postDate = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
                
                    var currentDate = new Date();
                    var timeDifference = currentDate - postDate;
                    var seconds = Math.floor(timeDifference / 1000);
                    var minutes = Math.floor(seconds / 60);
                    var hours = Math.floor(minutes / 60);
                
                    if (seconds < 60) {
                        return "Less than a minute ago";
                    } else if (minutes < 60) {
                        return minutes + " minute" + (minutes !== 1 ? "s" : "") + " ago";
                    } else if (hours < 24) {
                        return hours + " hour" + (hours !== 1 ? "s" : "") + " ago";
                    } else {
                        var formattedDate = postDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }) + " " +
                            postDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                        return formattedDate;
                    }
                }
    
                for (var i = 0; i < posts.length; i++) {
                    var post = posts[i];
                    
                    var postBodyElement = post.getElementsByTagName('body')[0];
                    var postPaintingElement = post.getElementsByTagName('painting')[0];
                
                    var postContent;
                    var postType;
                
                    if (postPaintingElement) {
                        postContent = postPaintingElement.getElementsByTagName('url')[0].textContent;
                        postType = 'painting';
                    } else {
                        postContent = postBodyElement.textContent;
                        postType = 'body';
                    }

                    var postMiiName = post.getElementsByTagName('screen_name')[0].textContent;
                    var postMiiImage = post.getElementsByTagName('mii_face_url')[0].textContent;
                    var postDate = post.getElementsByTagName('created_at')[0].textContent;
                    var postId = post.getElementsByTagName('id')[0].textContent;
                    var postIsSpoiler = post.getElementsByTagName('is_spoiler')[0].textContent;
                    var postEmpathyCount = post.getElementsByTagName('empathy_count')[0].textContent;
                    var postReplyCount = post.getElementsByTagName('reply_count')[0].textContent;
                    var postPid = post.getElementsByTagName('pid')[0].textContent;
                    
                    var postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.setAttribute('data-miiverse-post-id', postId);
                    postDiv.setAttribute('data-miiverse-is-spoiler', postIsSpoiler);
                    postDiv.setAttribute('data-miiverse-user-pid', postPid);

                    var userMii = document.createElement('img');
                    userMii.classList.add('user-mii');
                    userMii.setAttribute('data-sound', 'SE_WORD_MII');
                    userMii.setAttribute('navi_target', '');
                    userMii.src = postMiiImage;

                    var userMiiName = document.createElement('span');
                    userMiiName.classList.add('username');
                    userMiiName.innerHTML = postMiiName;

                    var postTime = document.createElement('span');
                    postTime.classList.add('post-date');
                    postTime.innerHTML = formatPostDate(postDate);

                    var postElement;
                    if (postType === 'painting') {
                        postElement = document.createElement('img');
                        postElement.classList.add('painting');
                        postElement.src = postContent;
                    } else if (postType === 'body') {
                        postElement = document.createElement('p');
                        postElement.classList.add('body');
                        postElement.innerHTML = postContent;
                    }

                    var postDowReplyCount = document.createElement('span');
                    postDowReplyCount.classList.add('reply-count');
                    postDowReplyCount.innerHTML = postReplyCount;

                    var postDowYeahCount = document.createElement('span');
                    postDowYeahCount.classList.add('yeah-count');
                    postDowYeahCount.innerHTML = postEmpathyCount;

                    var postDowJumpPost = document.createElement('button');
                    postDowJumpPost.classList.add('jump-miiverse');
                    postDowJumpPost.onclick = function() {
                        vino.jumpToMiiversePostId(this.parentElement.getAttribute('data-miiverse-post-id'), true);
                    };
                    
                    var postEmpathyAdder = document.createElement('button');
                    postEmpathyAdder.classList.add('yeah-button');
                    postEmpathyAdder.setAttribute('navi_target', '');
                    postEmpathyAdder.setAttribute('navi_mouse', '');
                    postEmpathyAdder.innerHTML = 'Yeah!';
                    postEmpathyAdder.onclick = function() {addEmpathy(this);};

                    postDiv.appendChild(userMii);
                    postDiv.appendChild(userMiiName);
                    postDiv.appendChild(postTime);
                    postDiv.appendChild(postElement);
                    postDiv.appendChild(postDowReplyCount);
                    postDiv.appendChild(postDowYeahCount);
                    postDiv.appendChild(postDowJumpPost);
                    postDiv.appendChild(postEmpathyAdder);

                    document.querySelector('.post-list').appendChild(postDiv);
                }

                var goToMiiverse = document.createElement('button');
                goToMiiverse.classList.add('jump-miiverse-button');
                goToMiiverse.innerHTML = 'See more on Miiverse';
                goToMiiverse.onclick = function() {
                    vino.jumpToMiiverse(true);
                };

                var inputPostMiiverse = document.createElement('input');
                inputPostMiiverse.type = 'text';
                inputPostMiiverse.style.position = 'fixed';
                inputPostMiiverse.style.bottom = '0px';
                inputPostMiiverse.classList.add('input-post');
                inputPostMiiverse.onchange = function() {
                    var postContent = inputPostMiiverse.value;
                    vino.olv_postText(postContent, document.querySelector('.program-content').getAttribute('data-miiverse-topic-tag'), 1, false, document.querySelector('.program-content').getAttribute('data-miiverse-search-key'),'','','','' );
                };
                document.querySelector('.post-list').appendChild(goToMiiverse);
                document.querySelector('.post-list').appendChild(inputPostMiiverse);

                            
           (function () {
            var els = document.querySelectorAll("[data-sound]");
            if (!els) return;
            for (var i = 0; i < els.length; i++) {
            els[i].addEventListener("click", function(e) {
            vino.soundPlayVolume(e.currentTarget.getAttribute('data-sound'), 25);
            });
            }
            })();

           (function () {
            var elt = document.querySelectorAll("a:not([no_touch]), input:not([no_touch]), select:not([no_touch]), button:not([no_touch])");
            if (!elt) return;
            for (var i = 0; i < elt.length; i++) {
            elt[i].addEventListener("click", function(e) {
            vino.lyt_startTouchEffect();
             });
             }
             })();

            (function () {
            var elm = document.querySelectorAll("[navi_mouse]");
            if (!elm) return;
            for (var i = 0; i < elm.length; i++) {
            elm[i].addEventListener("click", function(e) {
            var mRect = this.getBoundingClientRect();
            vino.lyt_startTouchNodeEffect(mRect.left, mRect.top, mRect.width, mRect.height);
            });
            }
            })();
            } 
        };

        miiverseRequest.onload = function () {
        vino.loading_setIconAppear(false);
        };
            
        miiverseRequest.onerror = function () {
        vino.loading_setIconAppear(false);
        alert('There was an error preparing the Miiverse request');
        closeMiiverseModal();
        };

        miiverseRequest.setRequestHeader('content-type', 'application/xml');
        miiverseRequest.setRequestHeader('user-agent', vino.olv_getUserAgent().toString());
        miiverseRequest.setRequestHeader('x-nintendo-parampack', vino.olv_getParameterPack().toString());
        miiverseRequest.setRequestHeader('x-nintendo-servicetoken', vino.olv_getServiceToken().toString());
        miiverseRequest.send();
    }
    if (vino.olv_isEnabled() && sessionStorage.getItem("olvPostState") === "enabled") {
        vino.loading_setIconAppear(true);
        loadMiiversePosts();
        document.body.classList.add("mii");
        document.querySelector(".program-content").style.display = "none";
        document.querySelector(".menu-buttons").style.display = "none";
        document.querySelector(".miiverse-posts").style.display = "block";
        var prevNaviBoxCoordinates = null;
        var intervalId;

        function checkNaviBox() {
            var naviBoxCoordinates = vino.navi_getRect();
            if (naviBoxCoordinates && naviBoxCoordinates !== prevNaviBoxCoordinates) {
                var coordinatesArray = naviBoxCoordinates.split(',').map(function (item) {
                    return Number(item);
                });
                var x = coordinatesArray[0];
                var y = coordinatesArray[1];
                var width = coordinatesArray[2];
                var height = coordinatesArray[3];
                var scrollThreshold = 30;
                var scrollSpeed = 60;

                if (x < scrollThreshold && window.scrollBy) {
                    window.scrollBy(-scrollSpeed, 0);
                } else if (x + width > window.innerWidth - scrollThreshold && window.scrollBy) {
                    window.scrollBy(scrollSpeed, 0);
                }

                if (y < scrollThreshold && window.scrollBy) {
                    window.scrollBy(0, -scrollSpeed);
                } else if (y + height > window.innerHeight - scrollThreshold && window.scrollBy) {
                    window.scrollBy(0, scrollSpeed);
                }
                prevNaviBoxCoordinates = naviBoxCoordinates;
            }
        }

        intervalId = setInterval(checkNaviBox, 0);

        sessionStorage.setItem("miiverseIntervalId", intervalId);
    } else if (vino.olv_isEnabled() && sessionStorage.getItem("olvPostState") === "blocked") {
    alert("Miiverse functionality is\nblocked by Parental Controls");
    closeMiiverseModal();
    }
    else {
    alert("Miiverse is preparing...\nTry again later");
    closeMiiverseModal();
    }
}

function closeMiiverseModal() {
    document.querySelector(".post-list").innerHTML = '';
    document.body.classList.remove("mii");
    var intervalId = sessionStorage.getItem("miiverseIntervalId"); // Retrieve the interval ID
    clearInterval(intervalId); // Clear the interval using the stored ID
    document.querySelector(".miiverse-posts").style.display = "none";
    document.querySelector(".program-content").style.display = "block";
    document.querySelector(".menu-buttons").style.display = "block";
}

function addEmpathy(miitooEvt) {
    var miitooReq = new XMLHttpRequest();
    var miitooDadii = miitooEvt.parentNode;

    if (!miitooDadii.hasAttribute("miitoo-added")) {
        vino.soundPlay('SE_COMMON_TOUCH_ON');
        miitooEvt.classList.add("adding");
        miitooReq.open('POST', vino.olv_getHostName() + '/v1/posts/' + miitooEvt.parentNode.getAttribute('data-miiverse-post-id') + '/empathies', true);

        miitooReq.onreadystatechange = function () {
            if (miitooReq.readyState == 4 && miitooReq.status == 200) {
                vino.soundPlayVolume("SE_WORD_MII_1", 25);
                miitooEvt.classList.remove("adding");
                miitooEvt.classList.add("added");
                miitooDadii.setAttribute("miitoo-added", "");
            } else if (miitooReq.readyState == 4 && miitooReq.status != 200) {
                vino.soundPlayVolume("SE_BAR_ERROR_APPEAR", 25);
                vino.runOliveErrorDialog(5927);
                miitooEvt.classList.remove("adding");
            }
        };
        miitooReq.setRequestHeader('content-type', 'application/xml');
        miitooReq.setRequestHeader('user-agent', vino.olv_getUserAgent().toString());
        miitooReq.setRequestHeader('x-nintendo-parampack', vino.olv_getParameterPack().toString());
        miitooReq.setRequestHeader('x-nintendo-servicetoken', vino.olv_getServiceToken().toString());
        miitooReq.send();
    } else{
        vino.soundPlayVolume("SE_WORD_MII_1", 25);
    } 
}



// other set of functions
function playSoundOnce(soundEffect) {
    if (!playSoundOnce.soundPlayed) {
        vino.soundPlayVolume(soundEffect, 25);
        playSoundOnce.soundPlayed = true;
    }
}
playSoundOnce.soundPlayed = false;

if (vino.apd_isEnabled()) {
    vino.apd_enable();
    const apdPeriodInSeconds = vino.apd_getPeriod();
    const timeBeforeApd = apdPeriodInSeconds - 600;
    
    setTimeout(function () {
      alert("Auto power down will turn off\nthe console in 10 minutes")
    }, timeBeforeApd * 1000);
    
    } else {
      vino.apd_disable();
    }

