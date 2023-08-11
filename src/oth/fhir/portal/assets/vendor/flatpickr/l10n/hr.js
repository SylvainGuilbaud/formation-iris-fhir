(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.hr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Croatian = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["Ned", "Pon", "Uto", "Sri", "Äet", "Pet", "Sub"],
          longhand: [
              "Nedjelja",
              "Ponedjeljak",
              "Utorak",
              "Srijeda",
              "Äetvrtak",
              "Petak",
              "Subota",
          ]
      },
      months: {
          shorthand: [
              "Sij",
              "Velj",
              "OÅ¾u",
              "Tra",
              "Svi",
              "Lip",
              "Srp",
              "Kol",
              "Ruj",
              "Lis",
              "Stu",
              "Pro",
          ],
          longhand: [
              "SijeÄanj",
              "VeljaÄa",
              "OÅ¾ujak",
              "Travanj",
              "Svibanj",
              "Lipanj",
              "Srpanj",
              "Kolovoz",
              "Rujan",
              "Listopad",
              "Studeni",
              "Prosinac",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.hr = Croatian;
  var hr = fp.l10ns;

  exports.Croatian = Croatian;
  exports.default = hr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));