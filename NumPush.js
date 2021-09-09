/*
厚颜无耻发个推荐码
中青推荐码:58763427
晶彩推荐码:55008511
*/
const $ = new Env("推送剩余body");
//中青
let zqwzbody = $.isNode() ? (process.env.zqwzbody ? process.env.zqwzbody : "") : ($.getdata('zqwzbody') ? $.getdata('zqwzbody') : "")
let zqwzbodyArr = []

let zq_timebody = $.isNode() ? (process.env.zq_timebody ? process.env.zq_timebody : "") : ($.getdata('zq_timebody') ? $.getdata('zq_timebody') : "")
let zq_timebodyArr = []

let zqqdbody = $.isNode() ? (process.env.zqqdbody ? process.env.zqqdbody : "") : ($.getdata('zqqdbody') ? $.getdata('zqqdbody') : "")
let zqqdbodyArr = []

let zq_cookie = $.isNode() ? (process.env.zq_cookie ? process.env.zq_cookie : "") : ($.getdata('zq_cookie') ? $.getdata('zq_cookie') : "")
let zq_cookieArr = []

let zqlookStartbody = $.isNode() ? (process.env.zqlookStartbody ? process.env.zqlookStartbody : "") : ($.getdata('zqlookStartbody') ? $.getdata('zqlookStartbody') : "")
let zqlookStartbodyArr = []

let zqboxbody = $.isNode() ? (process.env.zqboxbody ? process.env.zqboxbody : "") : ($.getdata('zqboxbody') ? $.getdata('zqboxbody') : "")
let zqboxbodyArr = []

let zqsszbody = $.isNode() ? (process.env.zqsszbody ? process.env.zqsszbody : "") : ($.getdata('zqsszbody') ? $.getdata('zqsszbody') : "")
let zqsszbodyArr = []

let zqllzbody = $.isNode() ? (process.env.zqllzbody ? process.env.zqllzbody : "") : ($.getdata('zqllzbody') ? $.getdata('zqllzbody') : "")
let zqllzbodyArr = []

let zq_withdraw = $.isNode() ? (process.env.zq_withdraw ? process.env.zq_withdraw : "") : ($.getdata('zq_withdraw') ? $.getdata('zq_withdraw') : "")
let zq_withdrawArr = []

let zq_cash =  $.getdata('zq_cash') || 0.3;

if (zq_withdraw) {
    if (zq_withdraw.indexOf("@") == -1 && zq_withdraw.indexOf("@") == -1) {
        zq_withdrawArr.push(zq_withdraw)
    } else if (zq_withdraw.indexOf("@") > -1) {
        zq_withdraws = zq_withdraw.split("@")
    }
}

if (zqsszbody) {
    if (zqsszbody.indexOf("&") == -1) {
        zqsszbodyArr.push(zqsszbody)
    } else if (zqsszbody.indexOf("&") > -1) {
        zqsszbodyArr = zqsszbody.split("&")
    }
}

if (zqllzbody) {
    if (zqllzbody.indexOf("&") == -1) {
        zqllzbodyArr.push(zqllzbody)
    } else if (zqllzbody.indexOf("&") > -1) {
        zqllzbodyArr = zqllzbody.split("&")
    }
}

if (zq_timebody) {
    if (zq_timebody.indexOf("&") == -1) {
        zq_timebodyArr.push(zq_timebody)
    } else if (zq_timebody.indexOf("&") > -1) {
        zq_timebodyArr = zq_timebody.split("&")
    }
}

if (zqwzbody) {
    if (zqwzbody.indexOf("&") == -1) {
        zqwzbodyArr.push(zqwzbody)
    } else if (zqwzbody.indexOf("&") > -1) {
        zqwzbodyArr = zqwzbody.split("&")
    }
}

if (zqqdbody) {
    if (zqqdbody.indexOf("&") == -1) {
        zqqdbodyArr.push(zqqdbody)
    } else if (zqqdbody.indexOf("&") > -1) {
        zqqdbodyArr = zqqdbody.split("&")
    }
}

if (zqlookStartbody) {
    if (zqlookStartbody.indexOf("&") == -1) {
        zqlookStartbodyArr.push(zqlookStartbody)
    } else if (zqlookStartbody.indexOf("&") > -1) {
        zqlookStartbodyArr = zqlookStartbody.split("&")
    }
}

if (zqboxbody) {
    if (zqboxbody.indexOf("&") == -1) {
        zqboxbodyArr.push(zqboxbody)
    } else if (zqboxbody.indexOf("&") > -1) {
        zqboxbodyArr = zqboxbody.split("&")
    }
}

let sendinfo = ""

if (zq_cookie) {
    if (zq_cookie.indexOf("@") == -1 && zq_cookie.indexOf("@") == -1) {
        zq_cookieArr.push(zq_cookie)
    } else if (zq_cookie.indexOf("@") > -1) {
        zq_cookies = zq_cookie.split("@")
    }

    let len = $.unique(zqwzbodyArr).length
    if (len != zqwzbodyArr.length)
        console.warn("中青body有重复")
    else
        console.log("中青body无重复,继续加油")

    len = $.unique(zqlookStartbodyArr).length
    if (len != zqlookStartbodyArr.length)
        console.warn("中青看看赚有重复")
    else
        console.log("中青看看赚无重复,继续加油")

    let info = `中青共有\\n\
Cookie:${zq_cookieArr.length}个\\n\
timebody(阅读):${zq_timebodyArr.length}个(只需要一个,多了自行删除)\\n\
body(阅读):${zqwzbodyArr.length}个\\n\
zqlookStartbody(看看赚):${zqlookStartbodyArr.length}个\\n\
zqsszbody(搜索赚):${zqsszbodyArr.length}个\\n\
zqllzbody(浏览赚):${zqllzbodyArr.length}个\\n\
zqwzbody(签到):${zqqdbodyArr.length}个\\n\
zqboxbody(宝箱)${zqboxbodyArr.length}\\n\
zq_withdraw(提现)${zq_withdrawArr.length}\\n\
自动提现金额${zq_cash}`

    console.log(info)
    sendinfo += info
}
sendinfo += "\\n"

//晶彩
let jc_cookie = $.isNode() ? (process.env.jc_cookie ? process.env.jc_cookie : "") : ($.getdata('jc_cookie') ? $.getdata('jc_cookie') : "")
let jc_cookieArr = []

let wzbody = $.isNode() ? (process.env.wzbody ? process.env.wzbody : "") : ($.getdata('wzbody') ? $.getdata('wzbody') : "")
let wzbodyArr = []

let jc_timebody = $.isNode() ? (process.env.jc_timebody ? process.env.jc_timebody : "") : ($.getdata('jc_timebody') ? $.getdata('jc_timebody') : "")
let jc_timebodyArr = []

let lookStartbody = $.isNode() ? (process.env.lookStartbody ? process.env.lookStartbody : "") : ($.getdata('lookStartbody') ? $.getdata('lookStartbody') : "")
let lookStartbodyArr = []

let jcboxbody = $.isNode() ? (process.env.jcboxbody ? process.env.jcboxbody : "") : ($.getdata('jcboxbody') ? $.getdata('jcboxbody') : "")
let jcboxbodyArr = []

let qdbody = $.isNode() ? (process.env.qdbody ? process.env.qdbody : "") : ($.getdata('qdbody') ? $.getdata('qdbody') : "")
let qdbodyArr = []

let jc_withdraw = $.isNode() ? (process.env.jc_withdraw ? process.env.jc_withdraw : "") : ($.getdata('jc_withdraw') ? $.getdata('jc_withdraw') : "")
let jc_withdrawArr = []

let jc_cash = $.getdata('jc_cash') || 0.3;

if (jc_withdraw) {
    if (jc_withdraw.indexOf("@") == -1 && jc_withdraw.indexOf("@") == -1) {
        jc_withdrawArr.push(jc_withdraw)
    } else if (jc_withdraw.indexOf("@") > -1) {
        jc_withdraws = jc_withdraw.split("@")
    }
}

if (qdbody) {
    if (qdbody.indexOf("&") == -1) {
        qdbodyArr.push(qdbody)
    } else if (qdbody.indexOf("&") > -1) {
        qdbodyArr = qdbody.split("&")
    }
}

if (jc_timebody) {
    if (jc_timebody.indexOf("&") == -1) {
        jc_timebodyArr.push(jc_timebody)
    } else if (jc_timebody.indexOf("&") > -1) {
        jc_timebodyArr = jc_timebody.split("&")
    }
}

if (wzbody) {
    if (wzbody.indexOf("&") == -1) {
        wzbodyArr.push(wzbody)
    } else if (wzbody.indexOf("&") > -1) {
        wzbodyArr = wzbody.split("&")
    }
}

if (lookStartbody) {
    if (lookStartbody.indexOf("&") == -1) {
        lookStartbodyArr.push(lookStartbody)
    } else if (lookStartbody.indexOf("&") > -1) {
        lookStartbodyArr = lookStartbody.split("&")
    }
}

if (jcboxbody) {
    if (jcboxbody.indexOf("&") == -1) {
        jcboxbodyArr.push(jcboxbody)
    } else if (jcboxbody.indexOf("&") > -1) {
        jcboxbodyArr = jcboxbody.split("&")
    }
}

if (jc_cookie) {
    if (jc_cookie.indexOf("@") == -1 && jc_cookie.indexOf("@") == -1) {
        jc_cookieArr.push(jc_cookie)
    } else if (jc_cookie.indexOf("@") > -1) {
        jc_cookieArr = jc_cookie.split("@")
    }
    let len = $.unique(jc_timebodyArr).length
    if (len != jc_timebodyArr.length)
        console.warn("晶彩body有重复")
    else
        console.log("晶彩body无重复,继续加油")

    len = $.unique(lookStartbodyArr).length
    if (len != lookStartbodyArr.length)
        console.warn("晶彩看看赚有重复")
    else
        console.log("晶彩看看赚无重复,继续加油")

    let info = `晶彩共有\\n\
Cookie:${jc_cookieArr.length}个\\n\
timebody(阅读):${jc_timebodyArr.length}个(只需要一个,多了自行删除)\\n\
body(阅读):${wzbodyArr.length}个\\n\
lookStartbody(看看赚):${lookStartbodyArr.length}个\\n\
qdbody(签到):${qdbodyArr.length}个\\n\
jcboxbody(宝箱)${jcboxbodyArr.length}\\n\
jc_withdraw(提现)${jc_withdrawArr.length}\\n\
自动提现金额${jc_cash}`

    console.log(info)
    sendinfo += info
}
$feed.push($.name, sendinfo)

$.done()

// 公共tools
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        unique(arr) {
            if (!Array.isArray(arr)) {
                console.log('type error!')
                return
            }
            var array = [];
            for (var i = 0; i < arr.length; i++) {
                if (array.indexOf(arr[i]) === -1) {
                    array.push(arr[i])
                }
            }
            return array;
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
