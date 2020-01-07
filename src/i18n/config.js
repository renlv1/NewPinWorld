import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import {messages} from './data'
import cn from './langData/cn'

Vue.use(VueI18n)

// let lan = 'EN' // 默认为英文
// let language = navigator.browserLanguage ? navigator.browserLanguage : navigator.language
// 获取浏览器配置语言 #括号内是个运算，运算过后赋值给lang，当?前的内容为true时把?后的值赋给lang，为False时把:后的值赋给lang
// let langSub = language.substr(0, 2) // 获取lang字符串的前两位
// export const i18n = new VueI18n({
//   locale: lan, // set locale
//   messages // set locale messages
// })
// if (window.localStorage.getItem('lang')) {
//   if (window.localStorage.getItem('lang') === 'CN') {
//     lan = 'CN'
//   } else if (window.localStorage.getItem('lang') === 'EN') {
//     lan = 'EN'
//   } else {
//     lan = 'JN'
//   }
//   i18n.locale = lan
// } else { // 显示默认语言
//   window.localStorage.getItem('lang', 'EN')
// }

let language = navigator.browserLanguage ? navigator.browserLanguage : navigator.language // 获取浏览器语言
let langSub = language.substr(0, 2) // 获取lang字符串的前两位
let localeLang = localStorage.getItem('lang') // 本地储存的语言类型


export const i18n = new VueI18n({
  locale: 'cn', // set locale
  fallbackLocale: 'cn',
  messages: { cn } // 默认英文语言包
})

// 如果本地没储存语言类型
if (!localeLang) {
  const languageList = ['zh', 'en', 'jn']
  // 判断浏览器语言代码是否在十国语言之内，在就本地储存起来
  if (languageList.includes(langSub)) {
    if (langSub === 'zh') {
      // 中文由于历史遗留命名为cn，与浏览器的zh不符，需特殊处理
      localStorage.setItem('lang', 'cn')
    } else {
      localStorage.setItem('lang', langSub)
    }
  } else {
    // 其他语言一律默认为英文
    localStorage.setItem('lang', 'en')
  }
}

// 异步加载语言文件
function loadAsync (lang) {
  lang = lang.toLowerCase()
  if (lang !== 'en') {
    import(`@/i18n/langData/${lang}`).then(msgs => {
      i18n.setLocaleMessage(lang, msgs.default)
      i18n.locale = lang
    })
  }
}

loadAsync(localeLang)
