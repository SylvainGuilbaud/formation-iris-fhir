(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mn = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Mongolian = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["ÐÐ°", "ÐÑ", "ÐÑ", "ÐÒ¯", "ÐÐ°", "ÐÑ", "ÐÑ"],
          longhand: ["ÐÐ°Ð²Ð°Ð°", "ÐÑÐ³Ð¼Ð°Ñ", "ÐÑÐ°Ð³Ð²Ð°", "ÐÒ¯ÑÑÐ²", "ÐÐ°Ð°ÑÐ°Ð½", "ÐÑÐ¼Ð±Ð°", "ÐÑÐ¼"]
      },
      months: {
          shorthand: [
              "1-Ñ ÑÐ°Ñ",
              "2-Ñ ÑÐ°Ñ",
              "3-Ñ ÑÐ°Ñ",
              "4-Ñ ÑÐ°Ñ",
              "5-Ñ ÑÐ°Ñ",
              "6-Ñ ÑÐ°Ñ",
              "7-Ñ ÑÐ°Ñ",
              "8-Ñ ÑÐ°Ñ",
              "9-Ñ ÑÐ°Ñ",
              "10-Ñ ÑÐ°Ñ",
              "11-Ñ ÑÐ°Ñ",
              "12-Ñ ÑÐ°Ñ",
          ],
          longhand: [
              "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
              "Ð¥Ð¾ÑÑÐ´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÑÑÐ°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÓ©ÑÓ©Ð²Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
              "Ð¢Ð°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÑÑÐ³Ð°Ð°Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÐ¾Ð»Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÐ°Ð¹Ð¼Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÑÐ´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
              "ÐÑÐ°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
              "ÐÑÐ²Ð°Ð½Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
              "ÐÑÐ²Ð°Ð½ÑÐ¾ÑÑÐ´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
          ]
      },
      rangeSeparator: "-Ñ ",
      time_24hr: true
  };
  fp.l10ns.mn = Mongolian;
  var mn = fp.l10ns;

  exports.Mongolian = Mongolian;
  exports.default = mn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));