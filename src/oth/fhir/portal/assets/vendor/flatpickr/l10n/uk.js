(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.uk = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Ukrainian = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
          longhand: [
              "ÐÐµÐ´ÑÐ»Ñ",
              "ÐÐ¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº",
              "ÐÑÐ²ÑÐ¾ÑÐ¾Ðº",
              "Ð¡ÐµÑÐµÐ´Ð°",
              "Ð§ÐµÑÐ²ÐµÑ",
              "Ð'ÑÑÐ½Ð¸ÑÑ",
              "Ð¡ÑÐ±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "Ð¡ÑÑ",
              "ÐÑÑ",
              "ÐÐµÑ",
              "ÐÐ²Ñ",
              "Ð¢ÑÐ°",
              "Ð§ÐµÑ",
              "ÐÐ¸Ð¿",
              "Ð¡ÐµÑ",
              "ÐÐµÑ",
              "ÐÐ¾Ð²",
              "ÐÐ¸Ñ",
              "ÐÑÑ",
          ],
          longhand: [
              "Ð¡ÑÑÐµÐ½Ñ",
              "ÐÑÑÐ¸Ð¹",
              "ÐÐµÑÐµÐ·ÐµÐ½Ñ",
              "ÐÐ²ÑÑÐµÐ½Ñ",
              "Ð¢ÑÐ°Ð²ÐµÐ½Ñ",
              "Ð§ÐµÑÐ²ÐµÐ½Ñ",
              "ÐÐ¸Ð¿ÐµÐ½Ñ",
              "Ð¡ÐµÑÐ¿ÐµÐ½Ñ",
              "ÐÐµÑÐµÑÐµÐ½Ñ",
              "ÐÐ¾Ð²ÑÐµÐ½Ñ",
              "ÐÐ¸ÑÑÐ¾Ð¿Ð°Ð´",
              "ÐÑÑÐ´ÐµÐ½Ñ",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.uk = Ukrainian;
  var uk = fp.l10ns;

  exports.Ukrainian = Ukrainian;
  exports.default = uk;

  Object.defineProperty(exports, '__esModule', { value: true });

}));