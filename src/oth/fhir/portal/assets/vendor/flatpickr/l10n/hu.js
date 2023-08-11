(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.hu = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Hungarian = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
          longhand: [
              "VasÃ¡rnap",
              "HÃ©tfÅ",
              "Kedd",
              "Szerda",
              "CsÃ¼tÃ¶rtÃ¶k",
              "PÃ©ntek",
              "Szombat",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "MÃ¡r",
              "Ãpr",
              "MÃ¡j",
              "JÃºn",
              "JÃºl",
              "Aug",
              "Szep",
              "Okt",
              "Nov",
              "Dec",
          ],
          longhand: [
              "JanuÃ¡r",
              "FebruÃ¡r",
              "MÃ¡rcius",
              "Ãprilis",
              "MÃ¡jus",
              "JÃºnius",
              "JÃºlius",
              "Augusztus",
              "Szeptember",
              "OktÃ³ber",
              "November",
              "December",
          ]
      },
      ordinal: function () {
          return ".";
      },
      weekAbbreviation: "HÃ©t",
      scrollTitle: "GÃ¶rgessen",
      toggleTitle: "Kattintson a vÃ¡ltÃ¡shoz",
      rangeSeparator: " - ",
      time_24hr: true
  };
  fp.l10ns.hu = Hungarian;
  var hu = fp.l10ns;

  exports.Hungarian = Hungarian;
  exports.default = hu;

  Object.defineProperty(exports, '__esModule', { value: true });

}));