(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.bg = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Bulgarian = {
      weekdays: {
          shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
          longhand: [
              "ÐÐµÐ´ÐµÐ»Ñ",
              "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
              "ÐÑÐ¾ÑÐ½Ð¸Ðº",
              "Ð¡ÑÑÐ´Ð°",
              "Ð§ÐµÑÐ²ÑÑÑÑÐº",
              "ÐÐµÑÑÐº",
              "Ð¡ÑÐ±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "Ð¯Ð½Ñ",
              "Ð¤ÐµÐ²",
              "ÐÐ°ÑÑ",
              "ÐÐ¿Ñ",
              "ÐÐ°Ð¹",
              "Ð®Ð½Ð¸",
              "Ð®Ð»Ð¸",
              "ÐÐ²Ð³",
              "Ð¡ÐµÐ¿",
              "ÐÐºÑ",
              "ÐÐ¾Ðµ",
              "ÐÐµÐº",
          ],
          longhand: [
              "Ð¯Ð½ÑÐ°ÑÐ¸",
              "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
              "ÐÐ°ÑÑ",
              "ÐÐ¿ÑÐ¸Ð»",
              "ÐÐ°Ð¹",
              "Ð®Ð½Ð¸",
              "Ð®Ð»Ð¸",
              "ÐÐ²Ð³ÑÑÑ",
              "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
              "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
              "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
              "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸",
          ]
      },
      time_24hr: true,
      firstDayOfWeek: 1
  };
  fp.l10ns.bg = Bulgarian;
  var bg = fp.l10ns;

  exports.Bulgarian = Bulgarian;
  exports.default = bg;

  Object.defineProperty(exports, '__esModule', { value: true });

}));