var debug = 2; // -1: disable; 0: all; N: show level N debug msg.

// 农历1900-2100查询表
var lunarInfo = new Array(
    0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,//1900-1909
    0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,//1910-1919
    0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,//1920-1929
    0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,//1930-1939
    0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,//1940-1949
    0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,//1950-1959
    0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,//1960-1969
    0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,//1970-1979
    0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,//1980-1989
    0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,//1990-1999
    0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,//2000-2009
    0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,//2010-2019
    0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,//2020-2029
    0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,//2030-2039
    0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,//2040-2049
    0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50, 0x06b20,0x1a6c4,0x0aae0,//2050-2059
    0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,//2060-2069
    0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,//2070-2079
    0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,//2080-2089
    0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,//2090-2099
    0x0d520//2100
)

//太阳历每月天数
var solarMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//天干
var Gan = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//地支
var Zhi = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
//属相
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//节气
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
//1900-2100各年的24节气日期速查表
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
//
var nStr2 = new Array('初','十','廿','卅','　');
//英语月份简写
var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
/*****************************************************************************
 黄历宜忌计算
 *****************************************************************************/
var jcName0 = new Array('建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭');
var jcName1 = new Array('闭', '建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开');
var jcName2 = new Array('开', '闭', '建', '除', '满', '平', '定', '执', '破', '危', '成', '收');
var jcName3 = new Array('收', '开', '闭', '建', '除', '满', '平', '定', '执', '破', '危', '成');
var jcName4 = new Array('成', '收', '开', '闭', '建', '除', '满', '平', '定', '执', '破', '危');
var jcName5 = new Array('危', '成', '收', '开', '闭', '建', '除', '满', '平', '定', '执', '破');
var jcName6 = new Array('破', '危', '成', '收', '开', '闭', '建', '除', '满', '平', '定', '执');
var jcName7 = new Array('执', '破', '危', '成', '收', '开', '闭', '建', '除', '满', '平', '定');
var jcName8 = new Array('定', '执', '破', '危', '成', '收', '开', '闭', '建', '除', '满', '平');
var jcName9 = new Array('平', '定', '执', '破', '危', '成', '收', '开', '闭', '建', '除', '满');
var jcName10 = new Array('满', '平', '定', '执', '破', '危', '成', '收', '开', '闭', '建', '除');
var jcName11 = new Array('除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭', '建');

var jcrjxy = new Array(
    '出行.上任.会友.上书.见工','除服.疗病.出行.拆卸.入宅',
    '祈福.祭祀.结亲.开市.交易','祭祀.修填.涂泥.余事勿取',
    '易.立券.会友.签约.纳畜','祈福.祭祀.求子.结婚.立约',
    '求医.赴考.祭祀.余事勿取','经营.交易.求官.纳畜.动土',
    '祈福.入学.开市.求医.成服','祭祀.求财.签约.嫁娶.订盟',
    '疗病.结婚.交易.入仓.求职','祭祀.交易.收财.安葬'
);

var jcrjxj = new Array(
    '动土.开仓.嫁娶.纳采','求官.上任.开张.搬家.探病',
    '服药.求医.栽种.动土.迁移','移徙.入宅.嫁娶.开市.安葬',
    '种植.置业.卖田.掘井.造船','开市.交易.搬家.远行',
    '动土.出行.移徙.开市.修造','登高.行船.安床.入宅.博彩',
    '词讼.安门.移徙','开市.安床.安葬.入宅.破土',
    '安葬.动土.针灸','宴会.安床.出行.嫁娶.移徙'
);

var yj0 = '<font style="background-color:red; color:#FFF">&nbsp;宜&nbsp;</font>&nbsp;';
var yj1 = '<font style="background-color:green; color:#FFF">&nbsp;忌&nbsp;</font>&nbsp;';
function jcr(d) {
    var jcrjx;
    if (d == '建') jcrjx = yj0 + jcrjxy[0] + '<br>' + yj1 + jcrjxj[0];
    if (d == '除') jcrjx = yj0 + jcrjxy[1] + '<br>' + yj1 + jcrjxj[1];
    if (d == '满') jcrjx = yj0 + jcrjxy[2] + '<br>' + yj1 + jcrjxj[2];
    if (d == '平') jcrjx = yj0 + jcrjxy[3] + '<br>' + yj1 + jcrjxj[3];
    if (d == '定') jcrjx = yj0 + jcrjxy[4] + '<br>' + yj1 + jcrjxj[4];
    if (d == '执') jcrjx = yj0 + jcrjxy[5] + '<br>' + yj1 + jcrjxj[5];
    if (d == '破') jcrjx = yj0 + jcrjxy[6] + '<br>' + yj1 + jcrjxj[6];
    if (d == '危') jcrjx = yj0 + jcrjxy[7] + '<br>' + yj1 + jcrjxj[7];
    if (d == '成') jcrjx = yj0 + jcrjxy[8] + '<br>' + yj1 + jcrjxj[8];
    if (d == '收') jcrjx = yj0 + jcrjxy[9] + '<br>' + yj1 + jcrjxj[9];
    if (d == '开') jcrjx = yj0 + jcrjxy[10] + '<br>' + yj1 + jcrjxj[10];
    if (d == '闭') jcrjx = yj0 + jcrjxy[11] + '<br>' + yj1 + jcrjxj[11];
    return(jcrjx);
}
function cyclical2(num, num2) {
    if (num == 0) return(jcName0[num2]);
    if (num == 1) return(jcName1[num2]);
    if (num == 2) return(jcName2[num2]);
    if (num == 3) return(jcName3[num2]);
    if (num == 4) return(jcName4[num2]);
    if (num == 5) return(jcName5[num2]);
    if (num == 6) return(jcName6[num2]);
    if (num == 7) return(jcName7[num2]);
    if (num == 8) return(jcName8[num2]);
    if (num == 9) return(jcName9[num2]);
    if (num == 10) return(jcName10[num2]);
    if (num == 11) return(jcName11[num2]);
}
//国历节日 *表示节假日
var sFtv = new Array(
    "0101*元旦",
    "0214 情人节",
    "0308 妇女节",
    "0312 植树节",
    "0315 消费者权益日",
    "0321 世界森林日、世界儿歌日",
    "0322 世界水日",
    "0323 世界气象日",
    "0324 世界防治结核病日",

    "0401 愚人节",
    "0407 世界卫生日",
    "0422 世界地球日",

    "0501*劳动节",
    "0504 青年节",
    "0505 碘缺乏病防治日",
    "0508 世界红十字日",
    "0512 国际护士节",
    "0515 国际家庭日",
    "0517 世界电信日",
    "0518 国际博物馆日",
    "0520 全国学生营养日",
    "0523 国际牛奶日",
    "0531 世界无烟日",

    "0601 儿童节",
    "0605 世界环境日",
    "0606 全国爱眼日",
    "0616 防治荒漠化和干旱日",
    "0623 国际奥林匹克日",
    "0625 全国土地日",
    "0626 国际反毒品日",

    "0701 建党节 香港回归纪念 国际建筑日",
    "0707 中国人民抗日战争纪念日",
    "0711 世界人口日",

    "0801 建军节",
    "0808 父亲节",

    "0908 国际扫盲日",
    "0909 毛泽东逝世纪念",
    "0910 教师节",
    "0916 国际臭氧层保护日",
    "0920 国际爱牙日",
    "0927 世界旅游日",
    "0928 孔子诞辰",

    "1001*国庆节 国际音乐日",
    "1004 世界动物日",
    "1006 老人节",
    "1008 全国高血压日 世界视觉日",
    "1009 世界邮政日",
    "1015 国际盲人节",
    "1016 世界粮食日",
    "1017 世界消除贫困日",
    "1024 联合国日",

    "1108 中国记者日",
    "1109 消防宣传日",
    "1112 孙中山诞辰纪念",
    "1114 世界糖尿病日",
    "1117 国际大学生节",

    "1201 世界艾滋病日",
    "1203 世界残疾人日",
    "1209 世界足球日",
    "1220 澳门回归纪念",
    "1225 圣诞节",
    "1226 毛泽东诞辰纪念",
    "1229 国际生物多样性日"
);

//农历节日 *表示节假日
var lFtv = new Array(
    "0101*春节",
    "0115 元宵节",
    "0505 端午节",
    "0707 七夕情人节",
    "0715 中元节",
    "0815 中秋节",
    "0909 重阳节",
    "1208 腊八节",
    "1223 小年",
    "0100*除夕"
);

//按周计算 月周日
var wFtv = new Array(
    "0520 国际母亲节",
    "0530 全国助残日",
    "0630 国际父亲节",
    "0932 国际和平日",
    "0940 国际聋人节",
    "1013 国际减轻自然灾害日",
    "1011 国际住房日"
);

//返回农历年一年的总天数
function lYearDays(y) {
    var i, sum = 348;
    for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
    return(sum+leapDays(y));
}
// 返回农历y年闰月的天数 若该年没有闰月则返回0
function leapDays(y) {
    if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29);
    else return(0);
}
//返回农历y年闰月是哪个月；若y年没有闰月 则返回0
function leapMonth(y) {
    return(lunarInfo[y-1900] & 0xf);
}
//返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
function monthDays(y,m) {
    return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}

//将公历年月日转化为农历年月日
function Lunar(objDate) {
    var i, leap=0, temp=0;
    var baseDate = new Date(1900,0,31);
    //修正年月日参数
    var offset   = Math.floor((objDate.getTime() - Date.UTC(1900,0,31))/86400000);//所求时间到起始年正月初一的天数
    this.dayCyl = offset + 40;
    this.monCyl = 14;
    //从起始年份开始，减去每一月的天数，一直到剩余天数没有下一个月多为止
    for(i=1900; i<2101 && offset>0; i++) {
        temp = lYearDays(i);//农历一年的总天数
        offset -= temp;
        this.monCyl += 12;
    }
    if(offset<0) {
        offset += temp;
        i--;
        this.monCyl -= 12;
    }
    this.year = i;//农历的年
    this.yearCyl = i-1864;
    leap = leapMonth(i);//来判断闰的是哪个月
    this.isLeap = false;
    //得到当月的天数
    for(i=1; i<13 && offset>0; i++) {
        if(leap>0 && i==(leap+1) && this.isLeap==false) {
            --i;
            this.isLeap = true;
            temp = leapDays(this.year);//得到闰月的天数
        }
        else
        {
            temp = monthDays(this.year, i);//得到平月的天数
        }
        //解除闰月
        if(this.isLeap==true && i==(leap+1))
            this.isLeap = false;
        offset -= temp;
        if(this.isLeap == false)
            this.monCyl ++;
    }
    if(offset==0 && leap>0 && i==leap+1)
        if(this.isLeap)
        {
            this.isLeap = false;
        }
        else
        {
            this.isLeap = true;
            --i;
            --this.monCyl;
        }
    if(offset<0)
    {
        offset += temp;
        --i;
        --this.monCyl;
    }
    this.month = i;//农历的月份
    this.day = offset + 1;//农历的日
}

//返回阳历天数
function solarDays(y,m) {
    //判断2月份的天数
    if(m==1)
        return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
    else
        return(solarMonth[m]);
}
//返回天干地支
function cyclical(num) {
    return(Gan[num%10]+Zhi[num%12]);
}

function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {
    this.isToday    = false;
    this.sYear      = sYear;
    this.sMonth     = sMonth;
    this.sDay       = sDay;
    this.week       = week;
    this.lYear      = lYear;
    this.lMonth     = lMonth;
    this.lDay       = lDay;
    this.isLeap     = isLeap;
    this.cYear      = cYear;
    this.cMonth     = cMonth;
    this.cDay       = cDay;
    this.color      = '';
    this.lunarFestival = '';
    this.solarFestival = '';
    this.solarTerms    = '';

}
//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
    var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) -2208549300000 );
    return(offDate.getUTCDate());
}

function calendar(y,m) {
    var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2,lM2, lY2, lD2;
    var lDPOS = new Array(3);
    var n = 0;
    var firstLM = 0;
    sDObj = new Date(y,m,1);
    //返回该月份的天数
    this.length = solarDays(y,m);
    //返回当月第一天是周几
    this.firstWeek = sDObj.getDay();
    var term2=sTerm(y,2); //立春日期
    var firstNode = sTerm(y,m*2) //返回当月「节」为几日开始
    //当月一日与 1900/1/1 相差天数
    //1900/1/1与 1970/1/1 相差25567日, 1900/1/1 日柱为甲戌日(60进制10)
    var dayCyclical = Date.UTC(y,m,1,0,0,0,0)/86400000+25567+10;
    lM2 = (y - 1900) * 12 + m + 12;
    for(var i=0;i<this.length;i++) {
        if(lD>lX) {
            sDObj = new Date(y,m,i+1);//公立年月日
            lDObj = new Lunar(sDObj);//农历年月日
            lY = lDObj.year;
            lM = lDObj.month;
            lD = lDObj.day;
            lL = lDObj.isLeap;//返回是否为闰月
            lX = lL? leapDays(lY): monthDays(lY,lM);//如果是返回闰月的天数，如果不是返回平月的天数
            if(n==0) firstLM = lM;
            lDPOS[n++] = i-lD+1;
        }
        //依节气调整二月分的年柱, 以立春为界
        if(m==1 && (i+1)==term2) {
            cY = cyclical(y - 1900 + 36);
            lY2 = (y - 1900 + 36);
        }
        //依节气月柱, 以「节」为界
        if((i+1)==this.firstNode) {
            cM = cyclical((y - 1900) * 12 + m + 13);
            lM2 = (y - 1900) * 12 + m + 13;
        }
        this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
            lY, lM, lD++, lL,
            cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) );
//        //周六周天的字体都设置成橙色
//        if((i+this.firstWeek)%7==0||(i+this.firstWeek)%7==6)
//            this[i].style.color = '#CC0000';
        //设置吉宜
        lD2 = (dayCyclical + i);
        this[i].sgz3 = cyclical2(lM2 % 12, (lD2) % 12);
    }
    tmp1=sTerm(y,m*2)-1;
    tmp2=sTerm(y,m*2+1)-1;
    this[tmp1].solarTerms = solarTerm[m*2];
    this[tmp2].solarTerms = solarTerm[m*2+1];
    if(m==3) this[tmp1].color = '#ff5f07';
    for(i in sFtv)
        if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
            if(Number(RegExp.$1)==(m+1)) {
                this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' ';
                if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = '#ff5f07';
            }
    for(i in wFtv)
        if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
            if(Number(RegExp.$1)==(m+1)) {
                tmp1=Number(RegExp.$2);
                tmp2=Number(RegExp.$3);
                this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
            }
    for(i in lFtv)
        if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
            tmp1=Number(RegExp.$1)-firstLM;
            if(tmp1==-11) tmp1=1;
            if(tmp1 >=0 && tmp1<n) {
                tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
                if( tmp2 >= 0 && tmp2<this.length) {
                    this[tmp2].lunarFestival += RegExp.$4 + ' ';
                    if(RegExp.$3=='*') this[tmp2].color = '#ff5f07';
                }
            }
        }
    if((this.firstWeek+12)%7==5)
        this[12].solarFestival += '黑色星期五 ';
    //判断是否为今天
    if(y==tY && m==tM) {
        this[tD-1].isToday = true;
    }
}

function cDay(d){
    var s;
    switch (d) {
        case 10:
            s = '初十';
            break;
        case 20:
            s = '二十';
            break;
        case 30:
            s = '三十';
            break;
        default :
            s = nStr2[Math.floor(d/10)];
            s += nStr1[d%10];
    }
    return(s);
}

var cld;
//创建整个月份板的显示
function drawCld(SY,SM) {
    var i,sD,s,size;
    cld = new calendar(SY,SM);
    document.getElementById("gz").innerHTML = '&nbsp;&nbsp;农历'
        + cyclical(SY-1900+36) + '年 &nbsp;&nbsp;【'+Animals[(SY-4)%12]+'】';
    for(i=0;i<42;i++) {
        //标定要显示信息的位置
       var sObj = document.getElementById('sd'+ i);
       var lObj = document.getElementById('ld'+ i);
        //背景清空
        sObj.style.backgroundColor='#ffffff';
        lObj.style.background = '';
        //返回当月第一天是周几
        sD = i - cld.firstWeek;
        if(sD>-1 && sD<cld.length) {
            sObj.innerHTML = sD+1;
            if(cld[sD].isToday){
                //设置今天的背景色
                window.console.log(sD);
                sObj.style.background = '#ffa400';
                //sObj.style.color="#FFFFFF";
                lObj.style.background = '#ffa400';
            }
            if(cld[sD].lDay==1)
                lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'')
                    + cld[sD].lMonth + '月'
                    + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</b>';
            else
                lObj.innerHTML = cDay(cld[sD].lDay);

            s=cld[sD].lunarFestival;
            if(s.length>0) {
                //农历节日名称大于5个字截去
                if(s.length>7) s = s.substr(0, 5)+'…';
                s = s.fontcolor('#ff5f07');
            }
            else {
                s=cld[sD].solarFestival;
                if(s.length>0) {
                    //阳历节日名称截去
                    size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?9:5;
                    if(s.length>size+1) s = s.substr(0, size-1)+'…';
                    s = s.fontcolor('#0168ea');
                }
                else {
                    s=cld[sD].solarTerms;
                    if(s.length>0) s = s.fontcolor('#44d7cf');
                }
            }
            if(s.length>0) lObj.innerHTML = s;

        }
        else {
            sObj.innerHTML = ' ';
            lObj.innerHTML = ' ';
        }
    }
}


function changeCld() {
    var y, m,n;
    y = document.getElementById("sy").selectedIndex + 1900;
    m = document.getElementById("sm").selectedIndex;
    drawCld(y,m);
    //在换页时记录上一页的位置，并将上一页选择的位置作为当前页选择的位置
    n=selectedLoc+cld.firstWeek;
    var sObj = document.getElementById('sd'+ n);
    var lObj = document.getElementById('ld'+ n);
    sObj.style.backgroundColor='#33FFFF';
    lObj.style.backgroundColor='#33FFFF';
}

//进行月份年份的前进后退
function pushBtm(K) {
    switch (K){
        case 'YU' :
            if(document.getElementById("sy").selectedIndex > 0)
                document.getElementById("sy").selectedIndex--;
            break;
        case 'YD' :
            if(document.getElementById("sy").selectedIndex < 149)
                document.getElementById("sy").selectedIndex++;
            break;
        case 'MU' :
            if(document.getElementById("sm").selectedIndex > 0) {
                document.getElementById("sm").selectedIndex--;
            }
            else {
                document.getElementById("sm").selectedIndex = 11;
                if(document.getElementById("sy").selectedIndex > 0)
                    document.getElementById("sy").selectedIndex--;
            }
            break;
        case 'MD' :
            if(document.getElementById("sm").selectedIndex < 11) {
                document.getElementById("sm").selectedIndex++;
            }
            else {
                document.getElementById("sm").selectedIndex = 0;
                if(document.getElementById("sy").selectedIndex < 149)
                    document.getElementById("sy").selectedIndex++;
            }
            break;
        default :
            document.getElementById("sy").selectedIndex = tY - 1900;
            document.getElementById("sm").selectedIndex = tM;
    }
    changeCld();
}

var Today = new Date();
var tY = Today.getFullYear();//获取现在年份
var tM = Today.getMonth();//获取现在月份
var tD = Today.getDate();//获取现在的日期

var width = "130"; //detail层宽度
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var show = 0;
var sw = 0;
var cnt = 0;

var dStyle;

var selectedLoc = tD-1;//初始化选择位置停留在当前的位置上
//document.onmousemove = mEvn;

//用detail层显示详细信息
function mOvr(v) {
    var festival = document.getElementById("festival");
    var datedetail = document.getElementById("datedetail");
    var tr1 = document.getElementById("tr1");
    //获取的点击的具体的哪个空格
    var sObj = document.getElementById('sd'+ v);
    var lObj = document.getElementById('ld'+v);
    var d = sObj.innerHTML - 1;
    //记录下点击的位置
    selectedLoc=v-cld.firstWeek;
    var sD,sD1;
    if( sObj.innerHTML != '' ) {
        datedetail.innerHTML = cld[d].sYear +' 年 '+ cld[d].sMonth
            + ' 月 '+cld[d].sDay +' 日<br />星期' + cld[d].week + '<br />'
            + '<span>农历' + (cld[d].isLeap?'闰 ':' ')
            + cld[d].lMonth + ' 月 ' + cld[d].lDay + ' 日<br />'
            + cld[d].cYear + '年 ' + cld[d].cMonth
            + '月 ' + cld[d].cDay + '日</span>';
        //边框清空
        for(var i=0;i<42;i++){
            var sObj1 = document.getElementById('sd'+ i);
            var lObj1 = document.getElementById('ld'+ i);
            //具体选择的是哪一天
            sD = i - cld.firstWeek;
            if(sD>-1 && sD<cld.length){
                if(!cld[sD].isToday)
                {
                    sObj1.style.backgroundColor='#ffffff';
                    lObj1.style.backgroundColor='#ffffff';
                }
            }
        }
        //只有当其为非今天时才可变色
        sD1=v-cld.firstWeek;
        if(!cld[sD1].isToday){
            sObj.style.backgroundColor = '#33FFFF';
            lObj.style.backgroundColor = '#33FFFF';
        }
        var jyt1 = jcr(cld[d].sgz3);
        festival.innerHTML=jyt1;
        if (show == 0) {
            dStyle.left = (x + offsetx - (width/2)) + "px";
            dStyle.top = (y + offsety) + "px";
            dStyle.visibility = "visible";
            show = 1;
        }
    }
}

//获取鼠标坐标
//function mEvn(e) {
//    if (!show) return;
//    if(window.event){
//        x = event.x ;
//        y = event.y ;
//        if (document.body.scrollLeft){
//            x += document.body.scrollLeft;
//            y += document.body.scrollTop;
//        }
//        // changed by hmisty 2005/07/23
//        dStyle.left = (x + offsetx-(width/2)) + "px";
//        dStyle.top = (y + offsety) + "px";
//    }
//    else {
//        dStyle.left = (e.pageX + offsetx-(width/2)) + "px";
//        dStyle.top = (e.pageY + offsety) + "px";
//    }
//}

//function changeTZ() {
//    document.getElementById("city").innerHTML = document.getElementById("tz").value.substr(6);
//    setCookie("TZ",document.getElementById("tz").selectedIndex);
//}

//function tick() {
//    var today;
//    today = new Date();
//    document.getElementById("clock").innerHTML = today.getFullYear() + "年"
//        + today.getMonth() + "月" + today.getDay() + "日" + today.getTime();
//    window.setTimeout("tick()", 1000);
//}

function setCookie(name, value) {
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000*60*60*24*365);
    document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString();
}

function getCookie(Name) {
    var search = Name + "=";
    if(document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if(offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if(end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
        else return "";
    }
}

//function fillSelect() {
//    syd = document.getElementById("sy");
//    syd.innerHTML = "";
//    for(i=1900;i<2050;i++)
//    {
//        ins = document.createElement("OPTION");
//        ins.innerHTML = i;
//        syd.appendChild(ins);
//    }
//    smd = document.getElementById("sm");
//    smd.innerHTML = "";
//    for(i=1;i<13;i++)
//    {
//        ins = document.createElement("OPTION");
//        ins.innerHTML = i;
//        smd.appendChild(ins);
//    }
//}

//function fillCalendar() {
//    var gNum;
//    var tablex = document.createElement("table");
//    tablex.setAttribute("id","week");
//    for(i=0;i<6;i++) {
//        var trx1 = document.createElement("tr");
//        var trx2 = document.createElement("tr");
//        trx1.setAttribute("class","tr1");
//        trx2.setAttribute("class","tr2");
//        for(j=0;j<7;j++) {
//            gNum = i*7+j;
//            var tdx = document.createElement("td");
//            tdx.setAttribute("id","sd"+gNum);
//            tdx.setAttribute("onMouseOver",'mOvr('+gNum+')');
//            tdx.setAttribute("onMouseOut","mOut()");
//            if(j == 0){
//                tdx.setAttribute("class","aorange");
//            }
//            else if(j == 6){
//                if(i%2==1) tdx.setAttribute("class","aorange");
//                else tdx.setAttribute("class","agreen");
//            }
//            else{
//                tdx.setAttribute("class","one");
//            }
//            trx1.appendChild(tdx);
//
//            tdx = document.createElement("td");
//            tdx.setAttribute("id","ld"+gNum);
//            tdx.setAttribute("onMouseOver",'mOvr('+gNum+')');
//            tdx.setAttribute("onMouseOut","mOut()");
//            trx2.appendChild(tdx);
//        }
//        tablex.appendChild(trx1);
//        tablex.appendChild(trx2);
//    }
//    document.getElementById("calendar").appendChild(tablex);
//}

//界面初始化
function initial() {
    dStyle = document.getElementById("detail").style;
    //初始化年份下拉列表
    var objYear=document.getElementById('sy');
    for(var i=1900;i<2100;i++) {
        var j=i+'年';
        objYear.options.add(new Option(j));
    }
    //初始化月份下拉列表
    var objMonth=document.getElementById('sm');
    for(var i=1;i<13;i++) {
        var j=i+'月';
        objMonth.options.add(new Option(j));
    }
    document.getElementById("sy").selectedIndex=tY-1900;
    document.getElementById("sm").selectedIndex=tM;
    //显示北京时间
    showLocalTime();

    var cld = new calendar(tY,tM);
    var d=tD-1;
    jyt1 = jcr(cld[d].sgz3);
    var festival = document.getElementById("festival");
    var datedetail = document.getElementById("datedetail");
    datedetail.innerHTML = cld[d].sYear +' 年 '+ cld[d].sMonth
        + ' 月 '+cld[d].sDay +' 日<br />星期' + cld[d].week + '<br />'
        + '<span>农历' + (cld[d].isLeap?'闰 ':' ')
        + cld[d].lMonth + ' 月 ' + cld[d].lDay + ' 日<br />'
        + cld[d].cYear + '年 ' + cld[d].cMonth
        + '月 ' + cld[d].cDay + '日</span>';
    festival.innerHTML=jyt1;
    //用系统的月与年来初始化table月份
    drawCld(tY,tM);
}

//返回至当前日期
function returnNowDate(){
    document.getElementById("sy").selectedIndex=tY-1900;
    document.getElementById("sm").selectedIndex=tM;
    drawCld(tY,tM);
}

//显示北京时间
function showLocalTime()
{
    var today;
    today = new Date();
    var hh = today.getHours();
    if(hh<10) hh = '0' + hh;
    var mm = today.getMinutes();
    if(mm<10) mm = '0' + mm;
    var ss = today.getSeconds();
    if(ss<10) ss = '0' + ss;
    var str = hh + ":" + mm + ":" + ss ;
    document.getElementById("nowTime").innerHTML = str;
    window.setTimeout("showLocalTime()", 1000);
};

function TimeAdd(UTC,T)
{
    var PlusMinus, DST, y;
    alert(UTC);
    if (T.substr(0,1) == "-"){
        PlusMinus = -1;
    }
    else{
        PlusMinus = 1;
    }
}

