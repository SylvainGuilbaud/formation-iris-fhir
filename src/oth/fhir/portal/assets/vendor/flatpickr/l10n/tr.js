(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.tr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Turkish = {
      weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Ãar", "Per", "Cum", "Cmt"],
          longhand: [
              "Pazar",
              "Pazartesi",
              "SalÄ±",
              "ÃarÅamba",
              "PerÅembe",
              "Cuma",
              "Cumartesi",
          ]
      },
      months: {
          shorthand: [
              "Oca",
              "Åub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "AÄu",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
          ],
          longhand: [
              "Ocak",
              "Åubat",
              "Mart",
              "Nisan",
              "MayÄ±s",
              "Haziran",
              "Temmuz",
              "AÄustos",
              "EylÃ¼l",
              "Ekim",
              "KasÄ±m",
              "AralÄ±k",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "ArtÄ±rmak iÃ§in kaydÄ±rÄ±n",
      toggleTitle: "AÃ§/Kapa",
      amPM: ["ÃÃ", "ÃS"],
      time_24hr: true
  };
  fp.l10ns.tr = Turkish;
  var tr = fp.l10ns;

  exports.Turkish = Turkish;
  exports.default = tr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));