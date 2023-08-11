(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.no = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Norwegian = {
      weekdays: {
          shorthand: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
          longhand: [
              "SÃ¸ndag",
              "Mandag",
              "Tirsdag",
              "Onsdag",
              "Torsdag",
              "Fredag",
              "LÃ¸rdag",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Des",
          ],
          longhand: [
              "Januar",
              "Februar",
              "Mars",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Desember",
          ]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " til ",
      weekAbbreviation: "Uke",
      scrollTitle: "Scroll for Ã¥ endre",
      toggleTitle: "Klikk for Ã¥ veksle",
      time_24hr: true,
      ordinal: function () {
          return ".";
      }
  };
  fp.l10ns.no = Norwegian;
  var no = fp.l10ns;

  exports.Norwegian = Norwegian;
  exports.default = no;

  Object.defineProperty(exports, '__esModule', { value: true });

}));