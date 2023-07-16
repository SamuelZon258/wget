const cookiesArr = process.env.JD_COOKIE.split("&");
let pt_pin = []
for (let i = 0; i < cookiesArr.length; i++) {
    let keys = cookiesArr[i].split(";");
    for (let j = 0; j < keys.length; j++) {
        let vals = keys[j].split("=")
        if(vals[0].toLowerCase() == "pt_pin"){
            pt_pin.push(vals[1])
        }
    }
}
console.log(pt_pin)

/** 发送关键词列表 */
let PUSH_TITLE_ARR = ["已可兑换", "已可领取", "汪汪乐园养joy", "金融养猪", "历史红包统计", "未选择商品", "忘了种植", "未继续领养"];
PUSH_TITLE_ARR = process.env.PUSH_TITLE_ARR ? process.env.PUSH_TITLE_ARR.split('&') : PUSH_TITLE_ARR;

/** 屏蔽发送关键词列表 */
let NOT_PUSH_TITLE_ARR = ["京东资产变动"];
NOT_PUSH_TITLE_ARR = process.env.NOT_PUSH_TITLE_ARR ? process.env.NOT_PUSH_TITLE_ARR.split('&') : NOT_PUSH_TITLE_ARR;

const fs = require('fs');
let strUidFile = './CK_WxPusherUid.json';
let UidFileexists = fs.existsSync(strUidFile);
/** 用户列表 */
let TempCKUid = [];
if (UidFileexists) {
    TempCKUid = fs.readFileSync(strUidFile, 'utf-8');
    if (TempCKUid) {
        TempCKUid = TempCKUid.toString();
        TempCKUid = JSON.parse(TempCKUid);
    }
}


function getPtPin(text, desp) {
    console.log("getPtPin")
    for (let i = 0; i < PUSH_TITLE_ARR.length; i++) {

        if (text.indexOf(PUSH_TITLE_ARR[i]) > -1 || desp.indexOf(PUSH_TITLE_ARR[i]) > -1) {
            let arr = desp.split('\n\n');
            for (let i = 0; i < arr.length; i++) {
                console.log(i + "" + arr[i])
            }
            if (TempCKUid.length > 0) {
                let x = 0;
                for (let i = 0; i < TempCKUid.length; i++) {
                    let zh = `账号${i + 1 - x}`
                    let zh2 = `账号: ${i + 1 - x}`
                    if (TempCKUid[i].skip) {
                        x++;
                    }
                    else if (desp.indexOf(zh) > -1 || desp.indexOf(zh2) > -1) {
                        console.log(TempCKUid[i].pt_pin);
                        if (TempCKUid[i] != null && TempCKUid[i].Uid != "") {
                            return decodeURIComponent(TempCKUid[i].pt_pin)
                        }
                        return null
                    }
                }
            }
        }
    }
}

async function wxpusherNotify(text, desp, sendNotifybyWxPucher) {
    if (TempCKUid.length > 0 && pt_pin.length > 0) {
        let arr = desp.split('\n\n');
        let x = 0;
        //遍历所有用户,并判断保护
        for (let i = 0; i < pt_pin.length; i++) {
            let pin = pt_pin[i]
            let name = `账号${i + 1 - x}`
            let zh = [`${name}[`, `${name}】`, `账号: ${i + 1 - x}`, `${name} `, `${name}\n`]
            for (let x = 0; x < arr.length; x++) {
                let send = false;
                for (let z = 0; z < zh.length; z++) {
                    if (arr[x].indexOf(zh[z]) > -1) {
                        send = true;
                        break;
                    }
                }
                //console.log("判断是否为此用户 " , pin ,send);
                //判断是否为此用户
                if (send) {
                    //判断需要发送的关键词和不需要发送的关键词
                    for (let y = 0; y < PUSH_TITLE_ARR.length; y++) {
                        if (arr[x].indexOf(PUSH_TITLE_ARR[y]) > -1 || arr[x].indexOf(PUSH_TITLE_ARR[y]) > -1) {
                            //判断标题是否发送
                            let send = true
                            for (let n = 0; n < NOT_PUSH_TITLE_ARR.length; n++) {
                                if (arr[x].indexOf(NOT_PUSH_TITLE_ARR[n]) > -1 || arr[x].indexOf(NOT_PUSH_TITLE_ARR[n]) > -1) {
                                    send = false;
                                    break;
                                }
                            }
                            
                            //console.log("判断标题是否发送 " , arr[x] ,send);
                            if (send){
                                for(let j = 0; j < TempCKUid.length; j++){
                                    if(TempCKUid[j] != null && TempCKUid[j].pt_pin == pin && TempCKUid[j].Uid != ""){
                                        console.log(text, arr[x], decodeURIComponent(TempCKUid[i].pt_pin), " 开始单独发送");
                                        await sendNotifybyWxPucher(text, arr[x], decodeURIComponent(TempCKUid[i].pt_pin));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return
    }
    console.error(` ${pt_pin} ${TempCKUid}`)
}

module.exports = {
    wxpusherNotify,
    getPtPin
}
