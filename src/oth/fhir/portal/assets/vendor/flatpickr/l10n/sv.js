(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.sv = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Swedish = {
      firstDayOfWeek: 1,
      weekAbbreviation: "v",
      weekdays: {
          shorthand: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
          longhand: [
              "SÃ¶ndag",
              "MÃ¥ndag",
              "Tisdag",
              "Onsdag",
              "Torsdag",
              "Fredag",
              "LÃ¶rdag",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Maj",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec",
          ],
          longhand: [
              "Januari",
              "Februari",
              "Mars",
              "April",
              "Maj",
              "Juni",
              "Juli",
              "Augusti",
              "September",
              "Oktober",
              "November",
              "December",
          ]
      },
      time_24hr: true,
      ordinal: function () {
          return ".";
      }
  };
  fp.l10ns.sv = Swedish;
  var sv = fp.l10ns;

  exports.Swedish = Swedish;
  exports.default = sv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));