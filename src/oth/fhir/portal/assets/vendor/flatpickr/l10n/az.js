(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.az = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Azerbaijan = {
      weekdays: {
          shorthand: ["Baz", "BzE", "ÃAx", "ÃÉr", "CAx", "CÃ¼m", "ÅÉn"],
          longhand: [
              "Bazar",
              "Bazar ertÉsi",
              "ÃÉrÅÉnbÉ axÅamÄ±",
              "ÃÉrÅÉnbÉ",
              "CÃ¼mÉ axÅamÄ±",
              "CÃ¼mÉ",
              "ÅÉnbÉ",
          ]
      },
      months: {
          shorthand: [
              "Yan",
              "Fev",
              "Mar",
              "Apr",
              "May",
              "Ä°yn",
              "Ä°yl",
              "Avq",
              "Sen",
              "Okt",
              "Noy",
              "Dek",
          ],
          longhand: [
              "Yanvar",
              "Fevral",
              "Mart",
              "Aprel",
              "May",
              "Ä°yun",
              "Ä°yul",
              "Avqust",
              "Sentyabr",
              "Oktyabr",
              "Noyabr",
              "Dekabr",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "ArtÄ±rmaq Ã¼Ã§Ã¼n sÃ¼rÃ¼ÅdÃ¼rÃ¼n",
      toggleTitle: "AÃ§ / BaÄla",
      amPM: ["GÆ", "GS"],
      time_24hr: true
  };
  fp.l10ns.az = Azerbaijan;
  var az = fp.l10ns;

  exports.Azerbaijan = Azerbaijan;
  exports.default = az;

  Object.defineProperty(exports, '__esModule', { value: true });

}));