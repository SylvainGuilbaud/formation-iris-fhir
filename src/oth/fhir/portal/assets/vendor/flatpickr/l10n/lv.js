(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.lv = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Latvian = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
          longhand: [
              "SvÄtdiena",
              "Pirmdiena",
              "Otrdiena",
              "TreÅ¡diena",
              "Ceturtdiena",
              "Piektdiena",
              "Sestdiena",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "JÅ«n",
              "JÅ«l",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec",
          ],
          longhand: [
              "JanvÄris",
              "FebruÄris",
              "Marts",
              "AprÄ«lis",
              "Maijs",
              "JÅ«nijs",
              "JÅ«lijs",
              "Augusts",
              "Septembris",
              "Oktobris",
              "Novembris",
              "Decembris",
          ]
      },
      rangeSeparator: " lÄ«dz ",
      time_24hr: true
  };
  fp.l10ns.lv = Latvian;
  var lv = fp.l10ns;

  exports.Latvian = Latvian;
  exports.default = lv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));