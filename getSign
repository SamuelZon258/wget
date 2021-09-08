/*
https://api.m.jd.com/client.action 重写目标 https://raw.githubusercontent.com/SamuelZon258/wget/main/getSign.js
*/
function getsign() {
    if ($request.url.match(/\/api.m.jd.com\/client.action\?functionId=genToken/)) {
        console.log($request)
    }
}

if (typeof $request !== "undefined") {
    getsign()
    $.done()
}
