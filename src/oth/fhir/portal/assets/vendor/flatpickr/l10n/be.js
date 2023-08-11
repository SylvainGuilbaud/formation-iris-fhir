(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.be = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Belarusian = {
      weekdays: {
          shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
          longhand: [
              "ÐÑÐ´Ð·ÐµÐ»Ñ",
              "ÐÐ°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº",
              "ÐÑÑÐ¾ÑÐ°Ðº",
              "Ð¡ÐµÑÐ°Ð´Ð°",
              "Ð§Ð°ÑÐ²ÐµÑ",
              "ÐÑÑÐ½ÑÑÐ°",
              "Ð¡ÑÐ±Ð¾ÑÐ°",
          ]
      },
      months: {
          shorthand: [
              "Ð¡ÑÑ",
              "ÐÑÑ",
              "Ð¡Ð°Ðº",
              "ÐÑÐ°",
              "Ð¢ÑÐ°",
              "Ð§ÑÑ",
              "ÐÑÐ¿",
              "ÐÐ½Ñ",
              "ÐÐµÑ",
              "ÐÐ°Ñ",
              "ÐÑÑ",
              "Ð¡Ð½Ðµ",
          ],
          longhand: [
              "Ð¡ÑÑÐ´Ð·ÐµÐ½Ñ",
              "ÐÑÑÑ",
              "Ð¡Ð°ÐºÐ°Ð²ÑÐº",
              "ÐÑÐ°ÑÐ°Ð²ÑÐº",
              "Ð¢ÑÐ°Ð²ÐµÐ½Ñ",
              "Ð§ÑÑÐ²ÐµÐ½Ñ",
              "ÐÑÐ¿ÐµÐ½Ñ",
              "ÐÐ½ÑÐ²ÐµÐ½Ñ",
              "ÐÐµÑÐ°ÑÐµÐ½Ñ",
              "ÐÐ°ÑÑÑÑÑÐ½ÑÐº",
              "ÐÑÑÑÐ°Ð¿Ð°Ð´",
              "Ð¡Ð½ÐµÐ¶Ð°Ð½Ñ",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " â ",
      weekAbbreviation: "Ð¢ÑÐ´.",
      scrollTitle: "ÐÑÐ°ÐºÑÑÑÑÑÐµ Ð´Ð»Ñ Ð¿Ð°Ð²ÐµÐ»ÑÑÑÐ½Ð½Ñ",
      toggleTitle: "ÐÐ°ÑÑÑÐ½ÑÑÐµ Ð´Ð»Ñ Ð¿ÐµÑÐ°ÐºÐ»ÑÑÑÐ½Ð½Ñ",
      amPM: ["ÐÐ", "ÐÐ"],
      yearAriaLabel: "ÐÐ¾Ð´",
      time_24hr: true
  };
  fp.l10ns.be = Belarusian;
  var be = fp.l10ns;

  exports.Belarusian = Belarusian;
  exports.default = be;

  Object.defineProperty(exports, '__esModule', { value: true });

}));