// typing effect 0
var i = 0;
var txt0 = 'SCANNING . . .'; 
var element0 = document.getElementById("scanning");
element0.classList.add("input-cursor");
var speed0 = 70;
  
function typeWriter0() {
    if (i < txt0.length) {
        element0.innerHTML += txt0.charAt(i);
        i++;
        setTimeout(typeWriter0, speed0);
    }
}
typeWriter0();

// typing effect 1
var a = 0;
var txt1 = "06/15/2022 11:28 PM <DIR> \n 05292022 0510 PM <DIR> \n 05312022 0546 PM <DIR> android \n 06042022 1031 PM <DIR> dotnet \n 06/04/2022 1037 PM <DIR> templateengine \n 06/10/2022 1028 PM 527 vivaldi_reporting_data06/15/2022 11:28 PM <DIR> vscode \n 05/29/2022 05:00 PM <DIR> Contacts \n 06/10/2022 10:35 PM <DIR> Desktop \n 06/11/2022 12:59 PM <DIR> Documents \n 06/15/2022 11:16 PM <DIR> Downloads \n 05/29/2022 05:00 PM <DIR> Favorites \n 06/15/2022 11:16 PM <DIR> iCloudDrive \n 05/29/2022 05:00 PM <DIR> Links \n 06/10/2022 05:21 PM <DIR> Music \n 05/29/2022 05:11 PM <DIR> OneDrive \n 06/11/2022 12:59 PM <DIR> Pictures \n 05/29/2022 05:00 PM <DIR> Saved Games \n 05/29/2022 05:10 PM <DIR> Searches \n 06/12/2022 02:35 PM <DIR> Videos \n 1 File(s) 527 bytes \n 19 Dir(s) 71,044,661,248 bytes free";
var element1 = document.getElementById("codes");
var speed1 = 20;
  
function typeWriter1() {
    if (a < txt1.length) {
        element1.innerText += txt1.charAt(a);
        a++;
        setTimeout(typeWriter1, speed1);
    }
}
setTimeout(() => {
    typeWriter1();
}, 2000);

// disaper the text
setTimeout(() => {
    const scanning = document.getElementById("scanning");
    const codes = document.getElementById("codes");
    codes.style.display = 'none';
    scanning.style.display = 'none';
}, 22000); 

// typeing effect 2
var b = 0;
let txt2 = "DRIVE \u00a0 ACCEPTED \u00a0 : \u00a0 \n \u00a0 >> \u00a0 NO \u00a0 MALWARE \u00a0 DETECTED \n\n";
var element2 = document.getElementById("malware");
var speed2 = 50;

function typeWriter2() {
    if (b < txt2.length) {
        element2.innerText += txt2.charAt(b);
        b++;
        setTimeout(typeWriter2, speed2);
    }
}
setTimeout(() => {
    typeWriter2();
}, 23000);

// typing effect 3
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + "\u00a0" + time;

var c = 0;
var txt3 = "TIME \u00a0 AND \u00a0 DATE \u00a0 DETECTED \u00a0 : \n \u00a0 >> \u00a0 " + dateTime + "\n\n";
var element3 = document.getElementById("date_time");
var speed3 = 50;

function typeWriter3() {
    if (c < txt3.length) {
        element3.innerText += txt3.charAt(c);
        c++;
        setTimeout(typeWriter3, speed3);
    }
}
setTimeout(() => {
    typeWriter3();
}, 28000);

// typeing effect 4
function fnBrowserDetect(){            
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
    } else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
    } else if(userAgent.match(/safari/i)){
        browserName = "safari";
    } else if(userAgent.match(/opr\//i)){
        browserName = "opera";
    } else if(userAgent.match(/edg/i)){
        browserName = "edge";
    } else{
        browserName="No browser detection";
    }
    return browserName;
}

var d = 0;
var txt4 = "MASHIN \u00a0 DETECTED  \u00a0: \n \u00a0 >> \u00a0 " + fnBrowserDetect() + "\n\n";
var element4 = document.getElementById("Bname");
var speed4 = 50;

function typeWriter4() {
    if (d < txt4.length) {
        element4.innerText += txt4.charAt(d);
        d++;
        setTimeout(typeWriter4, speed4);
    }
}
setTimeout(() => {
    typeWriter4();
}, 33000);

// typing effect 5
{
let OS="Unknown";
}
function opDetect() {
    if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
    if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
    if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
    if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
    if (navigator.userAgent.indexOf("")!=-1) OS="Linux";

    navigator.userAgentData.getHighEntropyValues(["platformVersion"])
    .then(ua => {
        if (navigator.userAgentData.platform === "Windows") {
            const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
            if (majorPlatformVersion >= 13) {
                OS = "Windows 11 or later";
            }
            else if (majorPlatformVersion > 0) {
                OS = "Windows 10";
            }
            else {
                OS = "Before Windows 10";
            }
        }
    });
}

var e = 0;
var txt5 = "OPERATING \u00a0 SYSTEM \u00a0 DETECTED  \u00a0: \n \u00a0 >> \u00a0 " + opDetect() + "\n\n";
var element5 = document.getElementById("OPname");
var speed5 = 50;

function typeWriter5() {
    if (e < txt5.length) {
        element5.innerText += txt5.charAt(e);
        e++;
        setTimeout(typeWriter5, speed5);
    }
}
setTimeout(() => {
    typeWriter5();
}, 37000);

// btn effect
function btn_getAc() {
    document.getElementById("btn_get_access").style.display = "block";
}
setTimeout(() => {
    btn_getAc();
}, 41000);