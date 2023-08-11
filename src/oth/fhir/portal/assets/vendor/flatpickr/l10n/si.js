(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.si = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Sinhala = {
      weekdays: {
          shorthand: ["à¶", "à·", "à¶", "à¶¶", "à¶¶à·âà¶»", "à·à·", "à·à·"],
          longhand: [
              "à¶à¶»à·à¶¯à·",
              "à·à¶³à·à¶¯à·",
              "à¶à¶à·à¶»à·à·à·à¶¯à·",
              "à¶¶à¶¯à·à¶¯à·",
              "à¶¶à·âà¶»à·à·à·à¶´à¶­à·à¶±à·à¶¯à·",
              "à·à·à¶à·à¶»à·à¶¯à·",
              "à·à·à¶±à·à·à¶»à·à¶¯à·",
          ]
      },
      months: {
          shorthand: [
              "à¶¢à¶±",
              "à¶´à·à¶¶",
              "à¶¸à·à¶»à·",
              "à¶à¶´à·âà¶»à·",
              "à¶¸à·à¶ºà·",
              "à¶¢à·à¶±à·",
              "à¶¢à·à¶½à·",
              "à¶à¶à·",
              "à·à·à¶´à·",
              "à¶à¶à·",
              "à¶±à·à·à·",
              "à¶¯à·à·à·",
          ],
          longhand: [
              "à¶¢à¶±à·à·à¶»à·",
              "à¶´à·à¶¶à¶»à·à·à¶»à·",
              "à¶¸à·à¶»à·à¶­à·",
              "à¶à¶´à·âà¶»à·à¶½à·",
              "à¶¸à·à¶ºà·",
              "à¶¢à·à¶±à·",
              "à¶¢à·à¶½à·",
              "à¶à¶à·à·à·à¶­à·",
              "à·à·à¶´à·à¶­à·à¶¸à·à¶¶à¶»à·",
              "à¶à¶à·à¶­à·à¶¶à¶»à·",
              "à¶±à·à·à·à¶¸à·à¶¶à¶»à·",
              "à¶¯à·à·à·à¶¸à·à¶¶à¶»à·",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.si = Sinhala;
  var si = fp.l10ns;

  exports.Sinhala = Sinhala;
  exports.default = si;

  Object.defineProperty(exports, '__esModule', { value: true });

}));