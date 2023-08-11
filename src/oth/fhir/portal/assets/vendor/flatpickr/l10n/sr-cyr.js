(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['sr-cyr'] = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var SerbianCyrillic = {
      weekdays: {
          shorthand: ["ÐÐµÐ´", "ÐÐ¾Ð½", "Ð£ÑÐ¾", "Ð¡ÑÐµ", "Ð§ÐµÑ", "ÐÐµÑ", "Ð¡ÑÐ±"],
          longhand: [
              "ÐÐµÐ´ÐµÑÐ°",
              "ÐÐ¾Ð½ÐµÐ´ÐµÑÐ°Ðº",
              "Ð£ÑÐ¾ÑÐ°Ðº",
              "Ð¡ÑÐµÐ´Ð°",
              "Ð§ÐµÑÐ²ÑÑÐ°Ðº",
              "ÐÐµÑÐ°Ðº",
              "Ð¡ÑÐ±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "ÐÐ°Ð½",
              "Ð¤ÐµÐ±",
              "ÐÐ°Ñ",
              "ÐÐ¿Ñ",
              "ÐÐ°Ñ",
              "ÐÑÐ½",
              "ÐÑÐ»",
              "ÐÐ²Ð³",
              "Ð¡ÐµÐ¿",
              "ÐÐºÑ",
              "ÐÐ¾Ð²",
              "ÐÐµÑ",
          ],
          longhand: [
              "ÐÐ°Ð½ÑÐ°Ñ",
              "Ð¤ÐµÐ±ÑÑÐ°Ñ",
              "ÐÐ°ÑÑ",
              "ÐÐ¿ÑÐ¸Ð»",
              "ÐÐ°Ñ",
              "ÐÑÐ½",
              "ÐÑÐ»",
              "ÐÐ²Ð³ÑÑÑ",
              "Ð¡ÐµÐ¿ÑÐµÐ¼Ð±Ð°Ñ",
              "ÐÐºÑÐ¾Ð±Ð°Ñ",
              "ÐÐ¾Ð²ÐµÐ¼Ð±Ð°Ñ",
              "ÐÐµÑÐµÐ¼Ð±Ð°Ñ",
          ]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "ÐÐµÐ´.",
      rangeSeparator: " Ð´Ð¾ "
  };
  fp.l10ns.sr = SerbianCyrillic;
  var srCyr = fp.l10ns;

  exports.SerbianCyrillic = SerbianCyrillic;
  exports.default = srCyr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));