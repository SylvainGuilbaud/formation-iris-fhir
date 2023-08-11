(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mk = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Macedonian = {
      weekdays: {
          shorthand: ["ÐÐµ", "ÐÐ¾", "ÐÑ", "Ð¡Ñ", "Ð§Ðµ", "ÐÐµ", "Ð¡Ð°"],
          longhand: [
              "ÐÐµÐ´ÐµÐ»Ð°",
              "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
              "ÐÑÐ¾ÑÐ½Ð¸Ðº",
              "Ð¡ÑÐµÐ´Ð°",
              "Ð§ÐµÑÐ²ÑÑÐ¾Ðº",
              "ÐÐµÑÐ¾Ðº",
              "Ð¡Ð°Ð±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "ÐÐ°Ð½",
              "Ð¤ÐµÐ²",
              "ÐÐ°Ñ",
              "ÐÐ¿Ñ",
              "ÐÐ°Ñ",
              "ÐÑÐ½",
              "ÐÑÐ»",
              "ÐÐ²Ð³",
              "Ð¡ÐµÐ¿",
              "ÐÐºÑ",
              "ÐÐ¾Ðµ",
              "ÐÐµÐº",
          ],
          longhand: [
              "ÐÐ°Ð½ÑÐ°ÑÐ¸",
              "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
              "ÐÐ°ÑÑ",
              "ÐÐ¿ÑÐ¸Ð»",
              "ÐÐ°Ñ",
              "ÐÑÐ½Ð¸",
              "ÐÑÐ»Ð¸",
              "ÐÐ²Ð³ÑÑÑ",
              "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
              "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
              "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
              "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸",
          ]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "ÐÐµÐ´.",
      rangeSeparator: " Ð´Ð¾ ",
      time_24hr: true
  };
  fp.l10ns.mk = Macedonian;
  var mk = fp.l10ns;

  exports.Macedonian = Macedonian;
  exports.default = mk;

  Object.defineProperty(exports, '__esModule', { value: true });

}));