const e={summary:{income:0,expenses:0,netIncome:0},history:[]};function t(){localStorage.setItem("history",JSON.stringify(e.history))}function n(){localStorage.setItem("summary",JSON.stringify(e.summary))}function r(){return e.summary}function a(){return e.history}!function(){let t=localStorage.getItem("history"),n=localStorage.getItem("summary");t&&(e.history=JSON.parse(t)),n&&(e.summary=JSON.parse(n))}();class o{_parentElement=document.querySelector(".form");date=document.querySelector("#date");amount=document.querySelector("#amount");category=document.querySelector("#category");purpose=document.querySelector("#purpose");_reset(){this.date.value="",this.amount.value="",this.category.value="",this.purpose.value=""}addFormEventHandler(e,t,n){this._parentElement.addEventListener("submit",r=>{r.preventDefault();let a=this.date.value,o=this.amount.value,i=this.category.value,s=this.purpose.value;if(!a||!o||!i||!s)return;let u={id:new Date(a).toISOString()+Math.random(),date:a,amount:o,category:i,purpose:s};e(u),n(),t(),this._reset()})}}var i,s=new o;function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function l(e){m(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===u(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function d(e){m(1,arguments);var t=l(e);return t.setHours(0,0,0,0),t}var c={};function h(e,t){m(2,arguments);var n=l(e),r=l(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}var f={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var p={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function b(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,s=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function M(e){return function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var s=i[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(u,function(e){return e.test(s)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(u,function(e){return e.test(s)});return n=e.valueCallback?e.valueCallback(m):m,{value:n=r.valueCallback?r.valueCallback(n):n,rest:t.slice(s.length)}}}var w={code:"en-US",formatDistance:function(e,t,n){var r,a=y[e];return(r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:function(e,t,n,r){return v[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:b({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:b({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:b({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(i.matchPattern);if(!n)return null;var r=n[0],a=e.match(i.parsePattern);if(!a)return null;var o=i.valueCallback?i.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(e,t){if(null==e)throw TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function D(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}const x=e=>new Intl.NumberFormat("en",{style:"currency",currency:"NGN"}).format(e);function T(e){let t=e.split(" ");if(t.length>=2){let e=t.map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase());return e.join(" ")}return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}class C{_parentElement=document.querySelector("#history_box");resetHistory=document.querySelector(".btn-reset");_markup(e){let{id:t,date:n,amount:r,category:a,purpose:o}=e;return`<div class="history__item" data-id=${t}>
        <p class="date">${function(e){let t=new Date(Date.parse(e));return!function(e){return m(1,arguments),function(e,t){m(2,arguments);var n=d(e),r=d(t);return n.getTime()===r.getTime()}(e,Date.now())}(t)?(function(e,t){return m(1,arguments),function(e,t,n){m(2,arguments);var r,a,o,i,s,u=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:c.locale)&&void 0!==r?r:w;if(!u.formatDistance)throw RangeError("locale must contain formatDistance property");var d=h(e,t);if(isNaN(d))throw RangeError("Invalid time value");var y=S(S({},n),{addSuffix:!!(null==n?void 0:n.addSuffix),comparison:d});d>0?(o=l(t),i=l(e)):(o=l(e),i=l(t));var g=function(e,t,n){m(2,arguments);var r,a=function(e,t){return m(2,arguments),l(e).getTime()-l(t).getTime()}(e,t)/1e3;return((r=null==n?void 0:n.roundingMethod)?f[r]:f.trunc)(a)}(i,o),p=Math.round((g-(D(i)-D(o))/1e3)/60);if(p<2){if(null!=n&&n.includeSeconds){if(g<5)return u.formatDistance("lessThanXSeconds",5,y);if(g<10)return u.formatDistance("lessThanXSeconds",10,y);if(g<20)return u.formatDistance("lessThanXSeconds",20,y);if(g<40)return u.formatDistance("halfAMinute",0,y);else if(g<60)return u.formatDistance("lessThanXMinutes",1,y);else return u.formatDistance("xMinutes",1,y)}return 0===p?u.formatDistance("lessThanXMinutes",1,y):u.formatDistance("xMinutes",p,y)}if(p<45)return u.formatDistance("xMinutes",p,y);if(p<90)return u.formatDistance("aboutXHours",1,y);if(p<1440){var v=Math.round(p/60);return u.formatDistance("aboutXHours",v,y)}if(p<2520)return u.formatDistance("xDays",1,y);if(p<43200){var b=Math.round(p/1440);return u.formatDistance("xDays",b,y)}if(p<86400)return s=Math.round(p/43200),u.formatDistance("aboutXMonths",s,y);if((s=function(e,t){m(2,arguments);var n,r=l(e),a=l(t),o=h(r,a),i=Math.abs(function(e,t){m(2,arguments);var n=l(e),r=l(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(r,a));if(i<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*i);var s=h(r,a)===-o;(function(e){m(1,arguments);var t=l(e);return(function(e){m(1,arguments);var t=l(e);return t.setHours(23,59,59,999),t})(t).getTime()===(function(e){m(1,arguments);var t=l(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t})(t).getTime()})(l(e))&&1===i&&1===h(e,a)&&(s=!1),n=o*(i-Number(s))}return 0===n?0:n}(i,o))<12){var M=Math.round(p/43200);return u.formatDistance("xMonths",M,y)}var x=s%12,T=Math.floor(s/12);return x<3?u.formatDistance("aboutXYears",T,y):x<9?u.formatDistance("overXYears",T,y):u.formatDistance("almostXYears",T+1,y)}(e,Date.now(),t)})(t,{addSuffix:!0}).replace("about",""):"Today"}(n)}</p>
        <p class='${"income"===a?"income":"expense"} amount' >${x(r)}</p>
        <p class="category">${T(a)}</p>
        <p class="purpose">${T(o)}</p>
      </div>`}_errorMessage(){let e=`<div class="history__error">
    <p>You haven't recorded any data yet</p>
  </div>`;this._parentElement.insertAdjacentHTML("afterbegin",e)}renderHistory(e){let t=this._parentElement.querySelector(".history__error");t&&this._parentElement.removeChild(t);let n=e[e.length-1];this._parentElement.insertAdjacentHTML("afterbegin",this._markup(n)),this.resetHistory.classList.remove("hidden")}loadHistoryOnDOMLoad(e){let t=e();document.addEventListener("DOMContentLoaded",()=>{if(0===t.length)return this._errorMessage();t.forEach(e=>this._parentElement.insertAdjacentHTML("afterbegin",this._markup(e))),this.resetHistory.classList.remove("hidden")})}clearRecords(e,t){this.resetHistory.addEventListener("click",()=>{e(),t();let n=this._parentElement.querySelector(".history__error");n||(this.resetHistory.classList.add("hidden"),this._parentElement.innerHTML="",this._parentElement.innerHTML=this._errorMessage().bind(this))})}}var W=new C;class P{_parentElement=document.querySelector(".summary");income=document.getElementById("total-income");expenses=document.getElementById("total-expenses");netIncome=document.getElementById("total-netIncome");netIncomeParagraph=document.getElementById("total-netIncome");markup(e){return`<p>${e}</p>`}renderSummary(e){let t=this.income,n=this.expenses,r=this.netIncome,{income:a,expenses:o,netIncome:i}=e();t.textContent=x(a),n.textContent=x(o),r.textContent=x(i)}summaryDOMContentLoad(e){document.addEventListener("DOMContentLoaded",()=>{let t=this.income,n=this.expenses,r=this.netIncome,{income:a,expenses:o,netIncome:i}=e();t.textContent=x(a),n.textContent=x(o),r.textContent=x(i)})}clearSummary(){this.income.textContent=x(0),this.expenses.textContent=x(0),this.netIncome.textContent=x(0)}}var E=new P;W.loadHistoryOnDOMLoad(a),s.addFormEventHandler(function(r){e.history.push(r),e.summary.income=e.history.reduce((e,t)=>"income"===t.category?e+ +t.amount:e,0),e.summary.expenses=e.history.reduce((e,t)=>"income"!==t.category?e+ +t.amount:e,0),e.summary.netIncome=e.summary.income-e.summary.expenses,t(),n()},function(){E.renderSummary(r)},function(){let e=a();W.renderHistory(e)}),W.clearRecords(function(){e.history=[],t(),localStorage.removeItem("history")},function(){e.summary.income=0,e.summary.expenses=0,e.summary.netIncome=0,n(),localStorage.removeItem("summary"),E.clearSummary()}),E.summaryDOMContentLoad(r);
//# sourceMappingURL=index.ee056bfd.js.map