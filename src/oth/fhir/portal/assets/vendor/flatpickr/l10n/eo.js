(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.eo = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Esperanto = {
      firstDayOfWeek: 1,
      rangeSeparator: " Äis ",
      weekAbbreviation: "Sem",
      scrollTitle: "Rulumu por pligrandigi la valoron",
      toggleTitle: "Klaku por Åalti",
      weekdays: {
          shorthand: ["Dim", "Lun", "Mar", "Mer", "Ä´aÅ­", "Ven", "Sab"],
          longhand: [
              "dimanÄo",
              "lundo",
              "mardo",
              "merkredo",
              "ÄµaÅ­do",
              "vendredo",
              "sabato",
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
              "AÅ­g",
              "Sep",
              "Okt",
              "Nov",
              "Dec",
          ],
          longhand: [
              "januaro",
              "februaro",
              "marto",
              "aprilo",
              "majo",
              "junio",
              "julio",
              "aÅ­gusto",
              "septembro",
              "oktobro",
              "novembro",
              "decembro",
          ]
      },
      ordinal: function () {
          return "-a";
      },
      time_24hr: true
  };
  fp.l10ns.eo = Esperanto;
  var eo = fp.l10ns;

  exports.Esperanto = Esperanto;
  exports.default = eo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));