(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.kz = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Kazakh = {
      weekdays: {
          shorthand: ["ÐÑ", "ÐÑ", "Ð¡c", "Ð¡Ñ", "ÐÑ", "ÐÐ¼", "Ð¡Ð±"],
          longhand: [
              "ÐÐµÐºÑÐµÐ½Ð±i",
              "ÐÒ¯Ð¹ÑÐµÐ½Ð±i",
              "Ð¡ÐµÐ¹ÑÐµÐ½Ð±i",
              "Ð¡ÓÑÑÐµÐ½Ð±i",
              "ÐÐµÐ¹ÑÐµÐ½Ð±i",
              "ÐÒ±Ð¼Ð°",
              "Ð¡ÐµÐ½Ð±i",
          ]
      },
      months: {
          shorthand: [
              "ÒÐ°Ò£",
              "ÐÒÐ¿",
              "ÐÐ°Ñ",
              "Ð¡ÓÑ",
              "ÐÐ°Ð¼",
              "ÐÐ°Ñ",
              "Ð¨iÐ»",
              "Ð¢Ð°Ð¼",
              "ÒÑÑ",
              "ÒÐ°Ð·",
              "ÒÐ°Ñ",
              "ÐÐµÐ»",
          ],
          longhand: [
              "ÒÐ°Ò£ÑÐ°Ñ",
              "ÐÒÐ¿Ð°Ð½",
              "ÐÐ°ÑÑÑÐ·",
              "Ð¡ÓÑiÑ",
              "ÐÐ°Ð¼ÑÑ",
              "ÐÐ°ÑÑÑÐ¼",
              "Ð¨iÐ»Ð´Ðµ",
              "Ð¢Ð°Ð¼ÑÐ·",
              "ÒÑÑÐºÒ¯Ð¹ÐµÐº",
              "ÒÐ°Ð·Ð°Ð½",
              "ÒÐ°ÑÐ°ÑÐ°",
              "ÐÐµÐ»ÑÐ¾ÒÑÐ°Ð½",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " â ",
      weekAbbreviation: "ÐÐ¿ÑÐ°",
      scrollTitle: "Ò®Ð»ÐºÐµÐ¹ÑÑ Ò¯ÑÑÐ½ Ð°Ð¹Ð½Ð°Ð»Ð´ÑÑÑÒ£ÑÐ·",
      toggleTitle: "ÐÑÑÑÑÑÑÑ Ò¯ÑÑÐ½ Ð±Ð°ÑÑÒ£ÑÐ·",
      amPM: ["Ð¢Ð", "Ð¢Ð"],
      yearAriaLabel: "ÐÑÐ»"
  };
  fp.l10ns.kz = Kazakh;
  var kz = fp.l10ns;

  exports.Kazakh = Kazakh;
  exports.default = kz;

  Object.defineProperty(exports, '__esModule', { value: true });

}));