(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ru = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Russian = {
      weekdays: {
          shorthand: ["ÐÑ", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
          longhand: [
              "ÐÐ¾ÑÐºÑÐµÑÐµÐ½ÑÐµ",
              "ÐÐ¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº",
              "ÐÑÐ¾ÑÐ½Ð¸Ðº",
              "Ð¡ÑÐµÐ´Ð°",
              "Ð§ÐµÑÐ²ÐµÑÐ³",
              "ÐÑÑÐ½Ð¸ÑÐ°",
              "Ð¡ÑÐ±Ð±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "Ð¯Ð½Ð²",
              "Ð¤ÐµÐ²",
              "ÐÐ°ÑÑ",
              "ÐÐ¿Ñ",
              "ÐÐ°Ð¹",
              "ÐÑÐ½Ñ",
              "ÐÑÐ»Ñ",
              "ÐÐ²Ð³",
              "Ð¡ÐµÐ½",
              "ÐÐºÑ",
              "ÐÐ¾Ñ",
              "ÐÐµÐº",
          ],
          longhand: [
              "Ð¯Ð½Ð²Ð°ÑÑ",
              "Ð¤ÐµÐ²ÑÐ°Ð»Ñ",
              "ÐÐ°ÑÑ",
              "ÐÐ¿ÑÐµÐ»Ñ",
              "ÐÐ°Ð¹",
              "ÐÑÐ½Ñ",
              "ÐÑÐ»Ñ",
              "ÐÐ²Ð³ÑÑÑ",
              "Ð¡ÐµÐ½ÑÑÐ±ÑÑ",
              "ÐÐºÑÑÐ±ÑÑ",
              "ÐÐ¾ÑÐ±ÑÑ",
              "ÐÐµÐºÐ°Ð±ÑÑ",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " â ",
      weekAbbreviation: "ÐÐµÐ´.",
      scrollTitle: "ÐÑÐ¾ÐºÑÑÑÐ¸ÑÐµ Ð´Ð»Ñ ÑÐ²ÐµÐ»Ð¸ÑÐµÐ½Ð¸Ñ",
      toggleTitle: "ÐÐ°Ð¶Ð¼Ð¸ÑÐµ Ð´Ð»Ñ Ð¿ÐµÑÐµÐºÐ»ÑÑÐµÐ½Ð¸Ñ",
      amPM: ["ÐÐ", "ÐÐ"],
      yearAriaLabel: "ÐÐ¾Ð´",
      time_24hr: true
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;

  exports.Russian = Russian;
  exports.default = ru;

  Object.defineProperty(exports, '__esModule', { value: true });

}));