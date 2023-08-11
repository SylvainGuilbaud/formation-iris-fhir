(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.index = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Arabic = {
        weekdays: {
            shorthand: ["Ø£Ø­Ø¯", "Ø§Ø«ÙÙÙ", "Ø«ÙØ§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®ÙÙØ³", "Ø¬ÙØ¹Ø©", "Ø³Ø¨Øª"],
            longhand: [
                "Ø§ÙØ£Ø­Ø¯",
                "Ø§ÙØ§Ø«ÙÙÙ",
                "Ø§ÙØ«ÙØ§Ø«Ø§Ø¡",
                "Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡",
                "Ø§ÙØ®ÙÙØ³",
                "Ø§ÙØ¬ÙØ¹Ø©",
                "Ø§ÙØ³Ø¨Øª",
            ]
        },
        months: {
            shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            longhand: [
                "ÙÙØ§ÙØ±",
                "ÙØ¨Ø±Ø§ÙØ±",
                "ÙØ§Ø±Ø³",
                "Ø£Ø¨Ø±ÙÙ",
                "ÙØ§ÙÙ",
                "ÙÙÙÙÙ",
                "ÙÙÙÙÙ",
                "Ø£ØºØ³Ø·Ø³",
                "Ø³Ø¨ØªÙØ¨Ø±",
                "Ø£ÙØªÙØ¨Ø±",
                "ÙÙÙÙØ¨Ø±",
                "Ø¯ÙØ³ÙØ¨Ø±",
            ]
        },
        rangeSeparator: ' - '
    };
    fp.l10ns.ar = Arabic;
    fp.l10ns;

    var fp$1 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Austria = {
        weekdays: {
            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            longhand: [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
            ]
        },
        months: {
            shorthand: [
                "JÃ¤n",
                "Feb",
                "MÃ¤r",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dez",
            ],
            longhand: [
                "JÃ¤nner",
                "Februar",
                "MÃ¤rz",
                "April",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "Dezember",
            ]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum Ãndern scrollen",
        toggleTitle: "Zum Umschalten klicken"
    };
    fp$1.l10ns.at = Austria;
    fp$1.l10ns;

    var fp$2 = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$2.l10ns.az = Azerbaijan;
    fp$2.l10ns;

    var fp$3 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Belarusian = {
        weekdays: {
            shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
            longhand: [
                "ÐÑÐ´Ð·ÐµÐ»Ñ",
                "ÐÐ°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº",
                "ÐÑÑÐ¾ÑÐ°Ðº",
                "Ð¡ÐµÑÐ°Ð´Ð°",
                "Ð§Ð°ÑÐ²ÐµÑ",
                "ÐÑÑÐ½ÑÑÐ°",
                "Ð¡ÑÐ±Ð¾ÑÐ°",
            ]
        },
        months: {
            shorthand: [
                "Ð¡ÑÑ",
                "ÐÑÑ",
                "Ð¡Ð°Ðº",
                "ÐÑÐ°",
                "Ð¢ÑÐ°",
                "Ð§ÑÑ",
                "ÐÑÐ¿",
                "ÐÐ½Ñ",
                "ÐÐµÑ",
                "ÐÐ°Ñ",
                "ÐÑÑ",
                "Ð¡Ð½Ðµ",
            ],
            longhand: [
                "Ð¡ÑÑÐ´Ð·ÐµÐ½Ñ",
                "ÐÑÑÑ",
                "Ð¡Ð°ÐºÐ°Ð²ÑÐº",
                "ÐÑÐ°ÑÐ°Ð²ÑÐº",
                "Ð¢ÑÐ°Ð²ÐµÐ½Ñ",
                "Ð§ÑÑÐ²ÐµÐ½Ñ",
                "ÐÑÐ¿ÐµÐ½Ñ",
                "ÐÐ½ÑÐ²ÐµÐ½Ñ",
                "ÐÐµÑÐ°ÑÐµÐ½Ñ",
                "ÐÐ°ÑÑÑÑÑÐ½ÑÐº",
                "ÐÑÑÑÐ°Ð¿Ð°Ð´",
                "Ð¡Ð½ÐµÐ¶Ð°Ð½Ñ",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        },
        rangeSeparator: " â ",
        weekAbbreviation: "Ð¢ÑÐ´.",
        scrollTitle: "ÐÑÐ°ÐºÑÑÑÑÑÐµ Ð´Ð»Ñ Ð¿Ð°Ð²ÐµÐ»ÑÑÑÐ½Ð½Ñ",
        toggleTitle: "ÐÐ°ÑÑÑÐ½ÑÑÐµ Ð´Ð»Ñ Ð¿ÐµÑÐ°ÐºÐ»ÑÑÑÐ½Ð½Ñ",
        amPM: ["ÐÐ", "ÐÐ"],
        yearAriaLabel: "ÐÐ¾Ð´",
        time_24hr: true
    };
    fp$3.l10ns.be = Belarusian;
    fp$3.l10ns;

    var fp$4 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Bosnian = {
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
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Maj",
                "Jun",
                "Jul",
                "Avg",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            longhand: [
                "Januar",
                "Februar",
                "Mart",
                "April",
                "Maj",
                "Juni",
                "Juli",
                "August",
                "Septembar",
                "Oktobar",
                "Novembar",
                "Decembar",
            ]
        },
        time_24hr: true
    };
    fp$4.l10ns.bs = Bosnian;
    fp$4.l10ns;

    var fp$5 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Bulgarian = {
        weekdays: {
            shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
            longhand: [
                "ÐÐµÐ´ÐµÐ»Ñ",
                "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
                "ÐÑÐ¾ÑÐ½Ð¸Ðº",
                "Ð¡ÑÑÐ´Ð°",
                "Ð§ÐµÑÐ²ÑÑÑÑÐº",
                "ÐÐµÑÑÐº",
                "Ð¡ÑÐ±Ð¾ÑÐ°",
            ]
        },
        months: {
            shorthand: [
                "Ð¯Ð½Ñ",
                "Ð¤ÐµÐ²",
                "ÐÐ°ÑÑ",
                "ÐÐ¿Ñ",
                "ÐÐ°Ð¹",
                "Ð®Ð½Ð¸",
                "Ð®Ð»Ð¸",
                "ÐÐ²Ð³",
                "Ð¡ÐµÐ¿",
                "ÐÐºÑ",
                "ÐÐ¾Ðµ",
                "ÐÐµÐº",
            ],
            longhand: [
                "Ð¯Ð½ÑÐ°ÑÐ¸",
                "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
                "ÐÐ°ÑÑ",
                "ÐÐ¿ÑÐ¸Ð»",
                "ÐÐ°Ð¹",
                "Ð®Ð½Ð¸",
                "Ð®Ð»Ð¸",
                "ÐÐ²Ð³ÑÑÑ",
                "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
                "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
                "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
                "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸",
            ]
        },
        time_24hr: true,
        firstDayOfWeek: 1
    };
    fp$5.l10ns.bg = Bulgarian;
    fp$5.l10ns;

    var fp$6 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Bangla = {
        weekdays: {
            shorthand: ["à¦°à¦¬à¦¿", "à¦¸à§à¦®", "à¦®à¦à§à¦à¦²", "à¦¬à§à¦§", "à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿", "à¦¶à§à¦à§à¦°", "à¦¶à¦¨à¦¿"],
            longhand: [
                "à¦°à¦¬à¦¿à¦¬à¦¾à¦°",
                "à¦¸à§à¦®à¦¬à¦¾à¦°",
                "à¦®à¦à§à¦à¦²à¦¬à¦¾à¦°",
                "à¦¬à§à¦§à¦¬à¦¾à¦°",
                "à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°",
                "à¦¶à§à¦à§à¦°à¦¬à¦¾à¦°",
                "à¦¶à¦¨à¦¿à¦¬à¦¾à¦°",
            ]
        },
        months: {
            shorthand: [
                "à¦à¦¾à¦¨à§",
                "à¦«à§à¦¬à§à¦°à§",
                "à¦®à¦¾à¦°à§à¦",
                "à¦à¦ªà§à¦°à¦¿à¦²",
                "à¦®à§",
                "à¦à§à¦¨",
                "à¦à§à¦²à¦¾à¦",
                "à¦à¦",
                "à¦¸à§à¦ªà§à¦à§",
                "à¦à¦à§à¦à§",
                "à¦¨à¦­à§",
                "à¦¡à¦¿à¦¸à§",
            ],
            longhand: [
                "à¦à¦¾à¦¨à§à¦¯à¦¼à¦¾à¦°à§",
                "à¦«à§à¦¬à§à¦°à§à¦¯à¦¼à¦¾à¦°à§",
                "à¦®à¦¾à¦°à§à¦",
                "à¦à¦ªà§à¦°à¦¿à¦²",
                "à¦®à§",
                "à¦à§à¦¨",
                "à¦à§à¦²à¦¾à¦",
                "à¦à¦à¦¸à§à¦",
                "à¦¸à§à¦ªà§à¦à§à¦®à§à¦¬à¦°",
                "à¦à¦à§à¦à§à¦¬à¦°",
                "à¦¨à¦­à§à¦®à§à¦¬à¦°",
                "à¦¡à¦¿à¦¸à§à¦®à§à¦¬à¦°",
            ]
        }
    };
    fp$6.l10ns.bn = Bangla;
    fp$6.l10ns;

    var fp$7 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Catalan = {
        weekdays: {
            shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            longhand: [
                "Diumenge",
                "Dilluns",
                "Dimarts",
                "Dimecres",
                "Dijous",
                "Divendres",
                "Dissabte",
            ]
        },
        months: {
            shorthand: [
                "Gen",
                "Febr",
                "MarÃ§",
                "Abr",
                "Maig",
                "Juny",
                "Jul",
                "Ag",
                "Set",
                "Oct",
                "Nov",
                "Des",
            ],
            longhand: [
                "Gener",
                "Febrer",
                "MarÃ§",
                "Abril",
                "Maig",
                "Juny",
                "Juliol",
                "Agost",
                "Setembre",
                "Octubre",
                "Novembre",
                "Desembre",
            ]
        },
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "Ã¨";
            switch (s % 10) {
                case 1:
                    return "r";
                case 2:
                    return "n";
                case 3:
                    return "r";
                case 4:
                    return "t";
                default:
                    return "Ã¨";
            }
        },
        firstDayOfWeek: 1,
        time_24hr: true
    };
    fp$7.l10ns.cat = Catalan;
    fp$7.l10ns;

    var fp$8 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Czech = {
        weekdays: {
            shorthand: ["Ne", "Po", "Ãt", "St", "Ät", "PÃ¡", "So"],
            longhand: [
                "NedÄle",
                "PondÄlÃ­",
                "ÃterÃ½",
                "StÅeda",
                "Ätvrtek",
                "PÃ¡tek",
                "Sobota",
            ]
        },
        months: {
            shorthand: [
                "Led",
                "Ãn",
                "BÅe",
                "Dub",
                "KvÄ",
                "Äer",
                "Ävc",
                "Srp",
                "ZÃ¡Å",
                "ÅÃ­j",
                "Lis",
                "Pro",
            ],
            longhand: [
                "Leden",
                "Ãnor",
                "BÅezen",
                "Duben",
                "KvÄten",
                "Äerven",
                "Äervenec",
                "Srpen",
                "ZÃ¡ÅÃ­",
                "ÅÃ­jen",
                "Listopad",
                "Prosinec",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return ".";
        },
        rangeSeparator: " do ",
        weekAbbreviation: "TÃ½d.",
        scrollTitle: "Rolujte pro zmÄnu",
        toggleTitle: "PÅepnout dopoledne/odpoledne",
        amPM: ["dop.", "odp."],
        yearAriaLabel: "Rok",
        time_24hr: true
    };
    fp$8.l10ns.cs = Czech;
    fp$8.l10ns;

    var fp$9 = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Welsh = {
        weekdays: {
            shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
            longhand: [
                "Dydd Sul",
                "Dydd Llun",
                "Dydd Mawrth",
                "Dydd Mercher",
                "Dydd Iau",
                "Dydd Gwener",
                "Dydd Sadwrn",
            ]
        },
        months: {
            shorthand: [
                "Ion",
                "Chwef",
                "Maw",
                "Ebr",
                "Mai",
                "Meh",
                "Gorff",
                "Awst",
                "Medi",
                "Hyd",
                "Tach",
                "Rhag",
            ],
            longhand: [
                "Ionawr",
                "Chwefror",
                "Mawrth",
                "Ebrill",
                "Mai",
                "Mehefin",
                "Gorffennaf",
                "Awst",
                "Medi",
                "Hydref",
                "Tachwedd",
                "Rhagfyr",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function (nth) {
            if (nth === 1)
                return "af";
            if (nth === 2)
                return "ail";
            if (nth === 3 || nth === 4)
                return "ydd";
            if (nth === 5 || nth === 6)
                return "ed";
            if ((nth >= 7 && nth <= 10) ||
                nth == 12 ||
                nth == 15 ||
                nth == 18 ||
                nth == 20)
                return "fed";
            if (nth == 11 ||
                nth == 13 ||
                nth == 14 ||
                nth == 16 ||
                nth == 17 ||
                nth == 19)
                return "eg";
            if (nth >= 21 && nth <= 39)
                return "ain";
            // Inconclusive.
            return "";
        },
        time_24hr: true
    };
    fp$9.l10ns.cy = Welsh;
    fp$9.l10ns;

    var fp$a = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Danish = {
        weekdays: {
            shorthand: ["sÃ¸n", "man", "tir", "ons", "tors", "fre", "lÃ¸r"],
            longhand: [
                "sÃ¸ndag",
                "mandag",
                "tirsdag",
                "onsdag",
                "torsdag",
                "fredag",
                "lÃ¸rdag",
            ]
        },
        months: {
            shorthand: [
                "jan",
                "feb",
                "mar",
                "apr",
                "maj",
                "jun",
                "jul",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec",
            ],
            longhand: [
                "januar",
                "februar",
                "marts",
                "april",
                "maj",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "december",
            ]
        },
        ordinal: function () {
            return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "uge",
        time_24hr: true
    };
    fp$a.l10ns.da = Danish;
    fp$a.l10ns;

    var fp$b = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var German = {
        weekdays: {
            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            longhand: [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "MÃ¤r",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dez",
            ],
            longhand: [
                "Januar",
                "Februar",
                "MÃ¤rz",
                "April",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "Dezember",
            ]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "KW",
        rangeSeparator: " bis ",
        scrollTitle: "Zum Ãndern scrollen",
        toggleTitle: "Zum Umschalten klicken",
        time_24hr: true
    };
    fp$b.l10ns.de = German;
    fp$b.l10ns;

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        time_24hr: false
    };

    var fp$c = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$c.l10ns.eo = Esperanto;
    fp$c.l10ns;

    var fp$d = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Spanish = {
        weekdays: {
            shorthand: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
            longhand: [
                "Domingo",
                "Lunes",
                "Martes",
                "MiÃ©rcoles",
                "Jueves",
                "Viernes",
                "SÃ¡bado",
            ]
        },
        months: {
            shorthand: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
            ],
            longhand: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
            ]
        },
        ordinal: function () {
            return "Âº";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: true
    };
    fp$d.l10ns.es = Spanish;
    fp$d.l10ns;

    var fp$e = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Estonian = {
        weekdays: {
            shorthand: ["P", "E", "T", "K", "N", "R", "L"],
            longhand: [
                "PÃ¼hapÃ¤ev",
                "EsmaspÃ¤ev",
                "TeisipÃ¤ev",
                "KolmapÃ¤ev",
                "NeljapÃ¤ev",
                "Reede",
                "LaupÃ¤ev",
            ]
        },
        months: {
            shorthand: [
                "Jaan",
                "Veebr",
                "MÃ¤rts",
                "Apr",
                "Mai",
                "Juuni",
                "Juuli",
                "Aug",
                "Sept",
                "Okt",
                "Nov",
                "Dets",
            ],
            longhand: [
                "Jaanuar",
                "Veebruar",
                "MÃ¤rts",
                "Aprill",
                "Mai",
                "Juuni",
                "Juuli",
                "August",
                "September",
                "Oktoober",
                "November",
                "Detsember",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return ".";
        },
        weekAbbreviation: "NÃ¤d",
        rangeSeparator: " kuni ",
        scrollTitle: "Keri, et suurendada",
        toggleTitle: "KlÃµpsa, et vahetada",
        time_24hr: true
    };
    fp$e.l10ns.et = Estonian;
    fp$e.l10ns;

    var fp$f = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Persian = {
        weekdays: {
            shorthand: ["ÛÚ©", "Ø¯Ù", "Ø³Ù", "ÚÙØ§Ø±", "Ù¾ÙØ¬", "Ø¬ÙØ¹Ù", "Ø´ÙØ¨Ù"],
            longhand: [
                "ÛÚ©âØ´ÙØ¨Ù",
                "Ø¯ÙØ´ÙØ¨Ù",
                "Ø³ÙâØ´ÙØ¨Ù",
                "ÚÙØ§Ø±Ø´ÙØ¨Ù",
                "Ù¾ÙÚâØ´ÙØ¨Ù",
                "Ø¬ÙØ¹Ù",
                "Ø´ÙØ¨Ù",
            ]
        },
        months: {
            shorthand: [
                "ÚØ§ÙÙÛÙ",
                "ÙÙØ±ÛÙ",
                "ÙØ§Ø±Ø³",
                "Ø¢ÙØ±ÛÙ",
                "ÙÙ",
                "ÚÙØ¦Ù",
                "ÚÙØ¦ÛÙ",
                "Ø§ÙØª",
                "Ø³Ù¾ØªØ§ÙØ¨Ø±",
                "Ø§Ú©ØªØ¨Ø±",
                "ÙÙØ§ÙØ¨Ø±",
                "Ø¯Ø³Ø§ÙØ¨Ø±",
            ],
            longhand: [
                "ÚØ§ÙÙÛÙ",
                "ÙÙØ±ÛÙ",
                "ÙØ§Ø±Ø³",
                "Ø¢ÙØ±ÛÙ",
                "ÙÙ",
                "ÚÙØ¦Ù",
                "ÚÙØ¦ÛÙ",
                "Ø§ÙØª",
                "Ø³Ù¾ØªØ§ÙØ¨Ø±",
                "Ø§Ú©ØªØ¨Ø±",
                "ÙÙØ§ÙØ¨Ø±",
                "Ø¯Ø³Ø§ÙØ¨Ø±",
            ]
        },
        firstDayOfWeek: 6,
        ordinal: function () {
            return "";
        }
    };
    fp$f.l10ns.fa = Persian;
    fp$f.l10ns;

    var fp$g = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Finnish = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            longhand: [
                "Sunnuntai",
                "Maanantai",
                "Tiistai",
                "Keskiviikko",
                "Torstai",
                "Perjantai",
                "Lauantai",
            ]
        },
        months: {
            shorthand: [
                "Tammi",
                "Helmi",
                "Maalis",
                "Huhti",
                "Touko",
                "KesÃ¤",
                "HeinÃ¤",
                "Elo",
                "Syys",
                "Loka",
                "Marras",
                "Joulu",
            ],
            longhand: [
                "Tammikuu",
                "Helmikuu",
                "Maaliskuu",
                "Huhtikuu",
                "Toukokuu",
                "KesÃ¤kuu",
                "HeinÃ¤kuu",
                "Elokuu",
                "Syyskuu",
                "Lokakuu",
                "Marraskuu",
                "Joulukuu",
            ]
        },
        ordinal: function () {
            return ".";
        },
        time_24hr: true
    };
    fp$g.l10ns.fi = Finnish;
    fp$g.l10ns;

    var fp$h = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Faroese = {
        weekdays: {
            shorthand: ["Sun", "MÃ¡n", "TÃ½s", "Mik", "HÃ³s", "FrÃ­", "Ley"],
            longhand: [
                "Sunnudagur",
                "MÃ¡nadagur",
                "TÃ½sdagur",
                "Mikudagur",
                "HÃ³sdagur",
                "FrÃ­ggjadagur",
                "Leygardagur",
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
                "AprÃ­l",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "Septembur",
                "Oktobur",
                "Novembur",
                "Desembur",
            ]
        },
        ordinal: function () {
            return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        scrollTitle: "Rulla fyri at broyta",
        toggleTitle: "TrÃ½st fyri at skifta",
        yearAriaLabel: "Ãr",
        time_24hr: true
    };
    fp$h.l10ns.fo = Faroese;
    fp$h.l10ns;

    var fp$i = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var French = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
            longhand: [
                "dimanche",
                "lundi",
                "mardi",
                "mercredi",
                "jeudi",
                "vendredi",
                "samedi",
            ]
        },
        months: {
            shorthand: [
                "janv",
                "fÃ©vr",
                "mars",
                "avr",
                "mai",
                "juin",
                "juil",
                "aoÃ»t",
                "sept",
                "oct",
                "nov",
                "dÃ©c",
            ],
            longhand: [
                "janvier",
                "fÃ©vrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "aoÃ»t",
                "septembre",
                "octobre",
                "novembre",
                "dÃ©cembre",
            ]
        },
        ordinal: function (nth) {
            if (nth > 1)
                return "";
            return "er";
        },
        rangeSeparator: " au ",
        weekAbbreviation: "Sem",
        scrollTitle: "DÃ©filer pour augmenter la valeur",
        toggleTitle: "Cliquer pour basculer",
        time_24hr: true
    };
    fp$i.l10ns.fr = French;
    fp$i.l10ns;

    var fp$j = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Greek = {
        weekdays: {
            shorthand: ["ÎÏ", "ÎÎµ", "Î¤Ï", "Î¤Îµ", "Î Î­", "Î Î±", "Î£Î¬"],
            longhand: [
                "ÎÏÏÎ¹Î±ÎºÎ®",
                "ÎÎµÏÏÎ­ÏÎ±",
                "Î¤ÏÎ¯ÏÎ·",
                "Î¤ÎµÏÎ¬ÏÏÎ·",
                "Î Î­Î¼ÏÏÎ·",
                "Î Î±ÏÎ±ÏÎºÎµÏÎ®",
                "Î£Î¬Î²Î²Î±ÏÎ¿",
            ]
        },
        months: {
            shorthand: [
                "ÎÎ±Î½",
                "Î¦ÎµÎ²",
                "ÎÎ¬Ï",
                "ÎÏÏ",
                "ÎÎ¬Î¹",
                "ÎÎ¿Ï",
                "ÎÎ¿Ï",
                "ÎÏÎ³",
                "Î£ÎµÏ",
                "ÎÎºÏ",
                "ÎÎ¿Î­",
                "ÎÎµÎº",
            ],
            longhand: [
                "ÎÎ±Î½Î¿ÏÎ¬ÏÎ¹Î¿Ï",
                "Î¦ÎµÎ²ÏÎ¿ÏÎ¬ÏÎ¹Î¿Ï",
                "ÎÎ¬ÏÏÎ¹Î¿Ï",
                "ÎÏÏÎ¯Î»Î¹Î¿Ï",
                "ÎÎ¬Î¹Î¿Ï",
                "ÎÎ¿ÏÎ½Î¹Î¿Ï",
                "ÎÎ¿ÏÎ»Î¹Î¿Ï",
                "ÎÏÎ³Î¿ÏÏÏÎ¿Ï",
                "Î£ÎµÏÏÎ­Î¼Î²ÏÎ¹Î¿Ï",
                "ÎÎºÏÏÎ²ÏÎ¹Î¿Ï",
                "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï",
                "ÎÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        },
        weekAbbreviation: "ÎÎ²Î´",
        rangeSeparator: " Î­ÏÏ ",
        scrollTitle: "ÎÎµÏÎ±ÎºÏÎ»Î®ÏÏÎµ Î³Î¹Î± ÏÏÎ¿ÏÎ±ÏÎ¾Î·ÏÎ·",
        toggleTitle: "ÎÎ¬Î½ÏÎµ ÎºÎ»Î¹Îº Î³Î¹Î± Î±Î»Î»Î±Î³Î®",
        amPM: ["Î Î", "ÎÎ"]
    };
    fp$j.l10ns.gr = Greek;
    fp$j.l10ns;

    var fp$k = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Hebrew = {
        weekdays: {
            shorthand: ["×", "×", "×", "×", "×", "×", "×©"],
            longhand: ["×¨××©××", "×©× ×", "×©×××©×", "×¨×××¢×", "××××©×", "×©××©×", "×©××ª"]
        },
        months: {
            shorthand: [
                "×× ××³",
                "×¤××¨×³",
                "××¨×¥",
                "××¤×¨×³",
                "×××",
                "××× ×",
                "××××",
                "××××³",
                "×¡×¤××³",
                "×××§×³",
                "× ×××³",
                "××¦××³",
            ],
            longhand: [
                "×× ×××¨",
                "×¤××¨×××¨",
                "××¨×¥",
                "××¤×¨××",
                "×××",
                "××× ×",
                "××××",
                "×××××¡×",
                "×¡×¤××××¨",
                "×××§××××¨",
                "× ×××××¨",
                "××¦×××¨",
            ]
        },
        rangeSeparator: " ×× ",
        time_24hr: true
    };
    fp$k.l10ns.he = Hebrew;
    fp$k.l10ns;

    var fp$l = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Hindi = {
        weekdays: {
            shorthand: ["à¤°à¤µà¤¿", "à¤¸à¥à¤®", "à¤®à¤à¤à¤²", "à¤¬à¥à¤§", "à¤à¥à¤°à¥", "à¤¶à¥à¤à¥à¤°", "à¤¶à¤¨à¤¿"],
            longhand: [
                "à¤°à¤µà¤¿à¤µà¤¾à¤°",
                "à¤¸à¥à¤®à¤µà¤¾à¤°",
                "à¤®à¤à¤à¤²à¤µà¤¾à¤°",
                "à¤¬à¥à¤§à¤µà¤¾à¤°",
                "à¤à¥à¤°à¥à¤µà¤¾à¤°",
                "à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°",
                "à¤¶à¤¨à¤¿à¤µà¤¾à¤°",
            ]
        },
        months: {
            shorthand: [
                "à¤à¤¨",
                "à¤«à¤°",
                "à¤®à¤¾à¤°à¥à¤",
                "à¤à¤ªà¥à¤°à¥à¤²",
                "à¤®à¤",
                "à¤à¥à¤¨",
                "à¤à¥à¤²à¤¾à¤",
                "à¤à¤",
                "à¤¸à¤¿à¤¤",
                "à¤à¤à¥à¤",
                "à¤¨à¤µ",
                "à¤¦à¤¿",
            ],
            longhand: [
                "à¤à¤¨à¤µà¤°à¥ ",
                "à¤«à¤°à¤µà¤°à¥",
                "à¤®à¤¾à¤°à¥à¤",
                "à¤à¤ªà¥à¤°à¥à¤²",
                "à¤®à¤",
                "à¤à¥à¤¨",
                "à¤à¥à¤²à¤¾à¤",
                "à¤à¤à¤¸à¥à¤¤ ",
                "à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°",
                "à¤à¤à¥à¤à¥à¤¬à¤°",
                "à¤¨à¤µà¤®à¥à¤¬à¤°",
                "à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°",
            ]
        }
    };
    fp$l.l10ns.hi = Hindi;
    fp$l.l10ns;

    var fp$m = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$m.l10ns.hr = Croatian;
    fp$m.l10ns;

    var fp$n = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$n.l10ns.hu = Hungarian;
    fp$n.l10ns;

    var fp$o = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Indonesian = {
        weekdays: {
            shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
            longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Agu",
                "Sep",
                "Okt",
                "Nov",
                "Des",
            ],
            longhand: [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        },
        time_24hr: true,
        rangeSeparator: ' - '
    };
    fp$o.l10ns.id = Indonesian;
    fp$o.l10ns;

    var fp$p = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Icelandic = {
        weekdays: {
            shorthand: ["Sun", "MÃ¡n", "Ãri", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
            longhand: [
                "Sunnudagur",
                "MÃ¡nudagur",
                "ÃriÃ°judagur",
                "MiÃ°vikudagur",
                "Fimmtudagur",
                "FÃ¶studagur",
                "Laugardagur",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "MaÃ­",
                "JÃºn",
                "JÃºl",
                "ÃgÃº",
                "Sep",
                "Okt",
                "NÃ³v",
                "Des",
            ],
            longhand: [
                "JanÃºar",
                "FebrÃºar",
                "Mars",
                "AprÃ­l",
                "MaÃ­",
                "JÃºnÃ­",
                "JÃºlÃ­",
                "ÃgÃºst",
                "September",
                "OktÃ³ber",
                "NÃ³vember",
                "Desember",
            ]
        },
        ordinal: function () {
            return ".";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " til ",
        weekAbbreviation: "vika",
        yearAriaLabel: "Ãr",
        time_24hr: true
    };
    fp$p.l10ns.is = Icelandic;
    fp$p.l10ns;

    var fp$q = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Italian = {
        weekdays: {
            shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            longhand: [
                "Domenica",
                "LunedÃ¬",
                "MartedÃ¬",
                "MercoledÃ¬",
                "GiovedÃ¬",
                "VenerdÃ¬",
                "Sabato",
            ]
        },
        months: {
            shorthand: [
                "Gen",
                "Feb",
                "Mar",
                "Apr",
                "Mag",
                "Giu",
                "Lug",
                "Ago",
                "Set",
                "Ott",
                "Nov",
                "Dic",
            ],
            longhand: [
                "Gennaio",
                "Febbraio",
                "Marzo",
                "Aprile",
                "Maggio",
                "Giugno",
                "Luglio",
                "Agosto",
                "Settembre",
                "Ottobre",
                "Novembre",
                "Dicembre",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () { return "Â°"; },
        rangeSeparator: " al ",
        weekAbbreviation: "Se",
        scrollTitle: "Scrolla per aumentare",
        toggleTitle: "Clicca per cambiare",
        time_24hr: true
    };
    fp$q.l10ns.it = Italian;
    fp$q.l10ns;

    var fp$r = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Japanese = {
        weekdays: {
            shorthand: ["æ¥", "æ", "ç«", "æ°´", "æ¨", "é", "å"],
            longhand: [
                "æ¥ææ¥",
                "æææ¥",
                "ç«ææ¥",
                "æ°´ææ¥",
                "æ¨ææ¥",
                "éææ¥",
                "åææ¥",
            ]
        },
        months: {
            shorthand: [
                "1æ",
                "2æ",
                "3æ",
                "4æ",
                "5æ",
                "6æ",
                "7æ",
                "8æ",
                "9æ",
                "10æ",
                "11æ",
                "12æ",
            ],
            longhand: [
                "1æ",
                "2æ",
                "3æ",
                "4æ",
                "5æ",
                "6æ",
                "7æ",
                "8æ",
                "9æ",
                "10æ",
                "11æ",
                "12æ",
            ]
        },
        time_24hr: true,
        rangeSeparator: ' ãã '
    };
    fp$r.l10ns.ja = Japanese;
    fp$r.l10ns;

    var fp$s = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Korean = {
        weekdays: {
            shorthand: ["ì¼", "ì", "í", "ì", "ëª©", "ê¸", "í "],
            longhand: [
                "ì¼ìì¼",
                "ììì¼",
                "íìì¼",
                "ììì¼",
                "ëª©ìì¼",
                "ê¸ìì¼",
                "í ìì¼",
            ]
        },
        months: {
            shorthand: [
                "1ì",
                "2ì",
                "3ì",
                "4ì",
                "5ì",
                "6ì",
                "7ì",
                "8ì",
                "9ì",
                "10ì",
                "11ì",
                "12ì",
            ],
            longhand: [
                "1ì",
                "2ì",
                "3ì",
                "4ì",
                "5ì",
                "6ì",
                "7ì",
                "8ì",
                "9ì",
                "10ì",
                "11ì",
                "12ì",
            ]
        },
        ordinal: function () {
            return "ì¼";
        },
        rangeSeparator: ' ~ '
    };
    fp$s.l10ns.ko = Korean;
    fp$s.l10ns;

    var fp$t = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Khmer = {
        weekdays: {
            shorthand: ["á¢á¶áá·ááá", "áááá", "á¢áááá¶á", "áá»á", "áááá á.", "áá»ááá", "áááá"],
            longhand: [
                "á¢á¶áá·ááá",
                "áááá",
                "á¢áááá¶á",
                "áá»á",
                "áááá ááááá·á",
                "áá»ááá",
                "áááá",
            ]
        },
        months: {
            shorthand: [
                "áááá¶",
                "áá»áááá",
                "áá¸áá¶",
                "áááá¶",
                "á§ááá¶",
                "áá·áá»áá¶",
                "áááááá¶",
                "áá¸á á¶",
                "ááááá¶",
                "áá»áá¶",
                "áá·áááá·áá¶",
                "áááá¼",
            ],
            longhand: [
                "áááá¶",
                "áá»áááá",
                "áá¸áá¶",
                "áááá¶",
                "á§ááá¶",
                "áá·áá»áá¶",
                "áááááá¶",
                "áá¸á á¶",
                "ááááá¶",
                "áá»áá¶",
                "áá·áááá·áá¶",
                "áááá¼",
            ]
        },
        ordinal: function () {
            return "";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " ááá ",
        weekAbbreviation: "ááááá¶á á",
        scrollTitle: "áááá·ááá¾áááá¸ááááá¾á",
        toggleTitle: "áá»ááá¾áááá¸áááá¶áááááá¼á",
        yearAriaLabel: "áááá¶á",
        time_24hr: true
    };
    fp$t.l10ns.km = Khmer;
    fp$t.l10ns;

    var fp$u = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$u.l10ns.kz = Kazakh;
    fp$u.l10ns;

    var fp$v = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Lithuanian = {
        weekdays: {
            shorthand: ["S", "Pr", "A", "T", "K", "Pn", "Å "],
            longhand: [
                "Sekmadienis",
                "Pirmadienis",
                "Antradienis",
                "TreÄiadienis",
                "Ketvirtadienis",
                "Penktadienis",
                "Å eÅ¡tadienis",
            ]
        },
        months: {
            shorthand: [
                "Sau",
                "Vas",
                "Kov",
                "Bal",
                "Geg",
                "Bir",
                "Lie",
                "Rgp",
                "Rgs",
                "Spl",
                "Lap",
                "Grd",
            ],
            longhand: [
                "Sausis",
                "Vasaris",
                "Kovas",
                "Balandis",
                "GeguÅ¾Ä",
                "BirÅ¾elis",
                "Liepa",
                "RugpjuÌtis",
                "RugseÌjis",
                "Spalis",
                "Lapkritis",
                "Gruodis",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "-a";
        },
        weekAbbreviation: "Sav",
        scrollTitle: "Keisti laikÄ pelÄs rateliu",
        toggleTitle: "Perjungti laiko formatÄ",
        time_24hr: true
    };
    fp$v.l10ns.lt = Lithuanian;
    fp$v.l10ns;

    var fp$w = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$w.l10ns.lv = Latvian;
    fp$w.l10ns;

    var fp$x = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Macedonian = {
        weekdays: {
            shorthand: ["ÐÐµ", "ÐÐ¾", "ÐÑ", "Ð¡Ñ", "Ð§Ðµ", "ÐÐµ", "Ð¡Ð°"],
            longhand: [
                "ÐÐµÐ´ÐµÐ»Ð°",
                "ÐÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº",
                "ÐÑÐ¾ÑÐ½Ð¸Ðº",
                "Ð¡ÑÐµÐ´Ð°",
                "Ð§ÐµÑÐ²ÑÑÐ¾Ðº",
                "ÐÐµÑÐ¾Ðº",
                "Ð¡Ð°Ð±Ð¾ÑÐ°",
            ]
        },
        months: {
            shorthand: [
                "ÐÐ°Ð½",
                "Ð¤ÐµÐ²",
                "ÐÐ°Ñ",
                "ÐÐ¿Ñ",
                "ÐÐ°Ñ",
                "ÐÑÐ½",
                "ÐÑÐ»",
                "ÐÐ²Ð³",
                "Ð¡ÐµÐ¿",
                "ÐÐºÑ",
                "ÐÐ¾Ðµ",
                "ÐÐµÐº",
            ],
            longhand: [
                "ÐÐ°Ð½ÑÐ°ÑÐ¸",
                "Ð¤ÐµÐ²ÑÑÐ°ÑÐ¸",
                "ÐÐ°ÑÑ",
                "ÐÐ¿ÑÐ¸Ð»",
                "ÐÐ°Ñ",
                "ÐÑÐ½Ð¸",
                "ÐÑÐ»Ð¸",
                "ÐÐ²Ð³ÑÑÑ",
                "Ð¡ÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸",
                "ÐÐºÑÐ¾Ð¼Ð²ÑÐ¸",
                "ÐÐ¾ÐµÐ¼Ð²ÑÐ¸",
                "ÐÐµÐºÐµÐ¼Ð²ÑÐ¸",
            ]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "ÐÐµÐ´.",
        rangeSeparator: " Ð´Ð¾ ",
        time_24hr: true
    };
    fp$x.l10ns.mk = Macedonian;
    fp$x.l10ns;

    var fp$y = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Mongolian = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["ÐÐ°", "ÐÑ", "ÐÑ", "ÐÒ¯", "ÐÐ°", "ÐÑ", "ÐÑ"],
            longhand: ["ÐÐ°Ð²Ð°Ð°", "ÐÑÐ³Ð¼Ð°Ñ", "ÐÑÐ°Ð³Ð²Ð°", "ÐÒ¯ÑÑÐ²", "ÐÐ°Ð°ÑÐ°Ð½", "ÐÑÐ¼Ð±Ð°", "ÐÑÐ¼"]
        },
        months: {
            shorthand: [
                "1-Ñ ÑÐ°Ñ",
                "2-Ñ ÑÐ°Ñ",
                "3-Ñ ÑÐ°Ñ",
                "4-Ñ ÑÐ°Ñ",
                "5-Ñ ÑÐ°Ñ",
                "6-Ñ ÑÐ°Ñ",
                "7-Ñ ÑÐ°Ñ",
                "8-Ñ ÑÐ°Ñ",
                "9-Ñ ÑÐ°Ñ",
                "10-Ñ ÑÐ°Ñ",
                "11-Ñ ÑÐ°Ñ",
                "12-Ñ ÑÐ°Ñ",
            ],
            longhand: [
                "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
                "Ð¥Ð¾ÑÑÐ´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÑÑÐ°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÓ©ÑÓ©Ð²Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
                "Ð¢Ð°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÑÑÐ³Ð°Ð°Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÐ¾Ð»Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÐ°Ð¹Ð¼Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÑÐ´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
                "ÐÑÐ°Ð²Ð´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
                "ÐÑÐ²Ð°Ð½Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ ÑÐ°Ñ",
                "ÐÑÐ²Ð°Ð½ÑÐ¾ÑÑÐ´ÑÐ³Ð°Ð°Ñ ÑÐ°Ñ",
            ]
        },
        rangeSeparator: "-Ñ ",
        time_24hr: true
    };
    fp$y.l10ns.mn = Mongolian;
    fp$y.l10ns;

    var fp$z = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Malaysian = {
        weekdays: {
            shorthand: ["Min", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
            longhand: [
                "Minggu",
                "Isnin",
                "Selasa",
                "Rabu",
                "Khamis",
                "Jumaat",
                "Sabtu",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mac",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Ogo",
                "Sep",
                "Okt",
                "Nov",
                "Dis",
            ],
            longhand: [
                "Januari",
                "Februari",
                "Mac",
                "April",
                "Mei",
                "Jun",
                "Julai",
                "Ogos",
                "September",
                "Oktober",
                "November",
                "Disember",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        }
    };
    fp$z.l10ns;

    var fp$A = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Burmese = {
        weekdays: {
            shorthand: ["áá½á±", "áá¬", "áá«", "áá°á¸", "áá¼á¬", "áá±á¬", "áá±"],
            longhand: [
                "ááááºá¹ááá½á±",
                "ááááºá¹áá¬",
                "á¡ááºá¹áá«",
                "áá¯áá¹ááá°á¸",
                "áá¼á¬áááá±á¸",
                "áá±á¬áá¼á¬",
                "ááá±",
            ]
        },
        months: {
            shorthand: [
                "áááº",
                "áá±",
                "áááº",
                "áá¼á®",
                "áá±",
                "áá½ááº",
                "áá­á¯ááº",
                "áá¼",
                "áááº",
                "á¡á±á¬ááº",
                "áá­á¯",
                "áá®",
            ],
            longhand: [
                "áááºááá«áá®",
                "áá±áá±á¬áºáá«áá®",
                "áááº",
                "á§áá¼á®",
                "áá±",
                "áá½ááº",
                "áá°áá­á¯ááº",
                "áá¼áá¯ááº",
                "áááºáááºáá¬",
                "á¡á±á¬ááºáá­á¯áá¬",
                "áá­á¯áááºáá¬",
                "áá®áááºáá¬",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        },
        time_24hr: true
    };
    fp$A.l10ns.my = Burmese;
    fp$A.l10ns;

    var fp$B = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Dutch = {
        weekdays: {
            shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            longhand: [
                "zondag",
                "maandag",
                "dinsdag",
                "woensdag",
                "donderdag",
                "vrijdag",
                "zaterdag",
            ]
        },
        months: {
            shorthand: [
                "jan",
                "feb",
                "mrt",
                "apr",
                "mei",
                "jun",
                "jul",
                "aug",
                "sept",
                "okt",
                "nov",
                "dec",
            ],
            longhand: [
                "januari",
                "februari",
                "maart",
                "april",
                "mei",
                "juni",
                "juli",
                "augustus",
                "september",
                "oktober",
                "november",
                "december",
            ]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "wk",
        rangeSeparator: " tot ",
        scrollTitle: "Scroll voor volgende / vorige",
        toggleTitle: "Klik om te wisselen",
        time_24hr: true,
        ordinal: function (nth) {
            if (nth === 1 || nth === 8 || nth >= 20)
                return "ste";
            return "de";
        }
    };
    fp$B.l10ns.nl = Dutch;
    fp$B.l10ns;

    var fp$C = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$C.l10ns.no = Norwegian;
    fp$C.l10ns;

    var fp$D = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Punjabi = {
        weekdays: {
            shorthand: ["à¨à¨¤", "à¨¸à©à¨®", "à¨®à©°à¨à¨²", "à¨¬à©à©±à¨§", "à¨µà©à¨°", "à¨¸à¨¼à©à©±à¨à¨°", "à¨¸à¨¼à¨¨à¨¿à©±à¨à¨°"],
            longhand: [
                "à¨à¨¤à¨µà¨¾à¨°",
                "à¨¸à©à¨®à¨µà¨¾à¨°",
                "à¨®à©°à¨à¨²à¨µà¨¾à¨°",
                "à¨¬à©à©±à¨§à¨µà¨¾à¨°",
                "à¨µà©à¨°à¨µà¨¾à¨°",
                "à¨¸à¨¼à©à©±à¨à¨°à¨µà¨¾à¨°",
                "à¨¸à¨¼à¨¨à¨¿à©±à¨à¨°à¨µà¨¾à¨°",
            ]
        },
        months: {
            shorthand: [
                "à¨à¨¨",
                "à¨«à¨¼à¨°",
                "à¨®à¨¾à¨°",
                "à¨à¨ªà©à¨°à©",
                "à¨®à¨",
                "à¨à©à¨¨",
                "à¨à©à¨²à¨¾",
                "à¨à¨",
                "à¨¸à¨¤à©°",
                "à¨à¨",
                "à¨¨à¨µà©°",
                "à¨¦à¨¸à©°",
            ],
            longhand: [
                "à¨à¨¨à¨µà¨°à©",
                "à¨«à¨¼à¨°à¨µà¨°à©",
                "à¨®à¨¾à¨°à¨",
                "à¨à¨ªà©à¨°à©à¨²",
                "à¨®à¨",
                "à¨à©à¨¨",
                "à¨à©à¨²à¨¾à¨",
                "à¨à¨à¨¸à¨¤",
                "à¨¸à¨¤à©°à¨¬à¨°",
                "à¨à¨à¨¤à©à¨¬à¨°",
                "à¨¨à¨µà©°à¨¬à¨°",
                "à¨¦à¨¸à©°à¨¬à¨°",
            ]
        },
        time_24hr: true
    };
    fp$D.l10ns.pa = Punjabi;
    fp$D.l10ns;

    var fp$E = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Polish = {
        weekdays: {
            shorthand: ["Nd", "Pn", "Wt", "År", "Cz", "Pt", "So"],
            longhand: [
                "Niedziela",
                "PoniedziaÅek",
                "Wtorek",
                "Åroda",
                "Czwartek",
                "PiÄtek",
                "Sobota",
            ]
        },
        months: {
            shorthand: [
                "Sty",
                "Lut",
                "Mar",
                "Kwi",
                "Maj",
                "Cze",
                "Lip",
                "Sie",
                "Wrz",
                "PaÅº",
                "Lis",
                "Gru",
            ],
            longhand: [
                "StyczeÅ",
                "Luty",
                "Marzec",
                "KwiecieÅ",
                "Maj",
                "Czerwiec",
                "Lipiec",
                "SierpieÅ",
                "WrzesieÅ",
                "PaÅºdziernik",
                "Listopad",
                "GrudzieÅ",
            ]
        },
        rangeSeparator: " do ",
        weekAbbreviation: "tydz.",
        scrollTitle: "PrzewiÅ, aby zwiÄkszyÄ",
        toggleTitle: "Kliknij, aby przeÅÄczyÄ",
        firstDayOfWeek: 1,
        time_24hr: true,
        ordinal: function () {
            return ".";
        }
    };
    fp$E.l10ns.pl = Polish;
    fp$E.l10ns;

    var fp$F = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Portuguese = {
        weekdays: {
            shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            longhand: [
                "Domingo",
                "Segunda-feira",
                "TerÃ§a-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "SÃ¡bado",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
            ],
            longhand: [
                "Janeiro",
                "Fevereiro",
                "MarÃ§o",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ]
        },
        rangeSeparator: " atÃ© ",
        time_24hr: true
    };
    fp$F.l10ns.pt = Portuguese;
    fp$F.l10ns;

    var fp$G = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Romanian = {
        weekdays: {
            shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "SÃ¢m"],
            longhand: [
                "DuminicÄ",
                "Luni",
                "MarÈi",
                "Miercuri",
                "Joi",
                "Vineri",
                "SÃ¢mbÄtÄ",
            ]
        },
        months: {
            shorthand: [
                "Ian",
                "Feb",
                "Mar",
                "Apr",
                "Mai",
                "Iun",
                "Iul",
                "Aug",
                "Sep",
                "Oct",
                "Noi",
                "Dec",
            ],
            longhand: [
                "Ianuarie",
                "Februarie",
                "Martie",
                "Aprilie",
                "Mai",
                "Iunie",
                "Iulie",
                "August",
                "Septembrie",
                "Octombrie",
                "Noiembrie",
                "Decembrie",
            ]
        },
        firstDayOfWeek: 1,
        time_24hr: true,
        ordinal: function () {
            return "";
        }
    };
    fp$G.l10ns.ro = Romanian;
    fp$G.l10ns;

    var fp$H = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Russian = {
        weekdays: {
            shorthand: ["ÐÑ", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
            longhand: [
                "ÐÐ¾ÑÐºÑÐµÑÐµÐ½ÑÐµ",
                "ÐÐ¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº",
                "ÐÑÐ¾ÑÐ½Ð¸Ðº",
                "Ð¡ÑÐµÐ´Ð°",
                "Ð§ÐµÑÐ²ÐµÑÐ³",
                "ÐÑÑÐ½Ð¸ÑÐ°",
                "Ð¡ÑÐ±Ð±Ð¾ÑÐ°",
            ]
        },
        months: {
            shorthand: [
                "Ð¯Ð½Ð²",
                "Ð¤ÐµÐ²",
                "ÐÐ°ÑÑ",
                "ÐÐ¿Ñ",
                "ÐÐ°Ð¹",
                "ÐÑÐ½Ñ",
                "ÐÑÐ»Ñ",
                "ÐÐ²Ð³",
                "Ð¡ÐµÐ½",
                "ÐÐºÑ",
                "ÐÐ¾Ñ",
                "ÐÐµÐº",
            ],
            longhand: [
                "Ð¯Ð½Ð²Ð°ÑÑ",
                "Ð¤ÐµÐ²ÑÐ°Ð»Ñ",
                "ÐÐ°ÑÑ",
                "ÐÐ¿ÑÐµÐ»Ñ",
                "ÐÐ°Ð¹",
                "ÐÑÐ½Ñ",
                "ÐÑÐ»Ñ",
                "ÐÐ²Ð³ÑÑÑ",
                "Ð¡ÐµÐ½ÑÑÐ±ÑÑ",
                "ÐÐºÑÑÐ±ÑÑ",
                "ÐÐ¾ÑÐ±ÑÑ",
                "ÐÐµÐºÐ°Ð±ÑÑ",
            ]
        },
        firstDayOfWeek: 1,
        ordinal: function () {
            return "";
        },
        rangeSeparator: " â ",
        weekAbbreviation: "ÐÐµÐ´.",
        scrollTitle: "ÐÑÐ¾ÐºÑÑÑÐ¸ÑÐµ Ð´Ð»Ñ ÑÐ²ÐµÐ»Ð¸ÑÐµÐ½Ð¸Ñ",
        toggleTitle: "ÐÐ°Ð¶Ð¼Ð¸ÑÐµ Ð´Ð»Ñ Ð¿ÐµÑÐµÐºÐ»ÑÑÐµÐ½Ð¸Ñ",
        amPM: ["ÐÐ", "ÐÐ"],
        yearAriaLabel: "ÐÐ¾Ð´",
        time_24hr: true
    };
    fp$H.l10ns.ru = Russian;
    fp$H.l10ns;

    var fp$I = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$I.l10ns.si = Sinhala;
    fp$I.l10ns;

    var fp$J = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Slovak = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Ut", "Str", "Å tv", "Pia", "Sob"],
            longhand: [
                "NedeÄ¾a",
                "Pondelok",
                "Utorok",
                "Streda",
                "Å tvrtok",
                "Piatok",
                "Sobota",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "MÃ¡j",
                "JÃºn",
                "JÃºl",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            longhand: [
                "JanuÃ¡r",
                "FebruÃ¡r",
                "Marec",
                "AprÃ­l",
                "MÃ¡j",
                "JÃºn",
                "JÃºl",
                "August",
                "September",
                "OktÃ³ber",
                "November",
                "December",
            ]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: true,
        ordinal: function () {
            return ".";
        }
    };
    fp$J.l10ns.sk = Slovak;
    fp$J.l10ns;

    var fp$K = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Slovenian = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Tor", "Sre", "Äet", "Pet", "Sob"],
            longhand: [
                "Nedelja",
                "Ponedeljek",
                "Torek",
                "Sreda",
                "Äetrtek",
                "Petek",
                "Sobota",
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
                "Avg",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            longhand: [
                "Januar",
                "Februar",
                "Marec",
                "April",
                "Maj",
                "Junij",
                "Julij",
                "Avgust",
                "September",
                "Oktober",
                "November",
                "December",
            ]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " do ",
        time_24hr: true,
        ordinal: function () {
            return ".";
        }
    };
    fp$K.l10ns.sl = Slovenian;
    fp$K.l10ns;

    var fp$L = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Albanian = {
        weekdays: {
            shorthand: ["Di", "HÃ«", "Ma", "MÃ«", "En", "Pr", "Sh"],
            longhand: [
                "E Diel",
                "E HÃ«nÃ«",
                "E MartÃ«",
                "E MÃ«rkurÃ«",
                "E Enjte",
                "E Premte",
                "E ShtunÃ«",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Shk",
                "Mar",
                "Pri",
                "Maj",
                "Qer",
                "Kor",
                "Gus",
                "Sht",
                "Tet",
                "NÃ«n",
                "Dhj",
            ],
            longhand: [
                "Janar",
                "Shkurt",
                "Mars",
                "Prill",
                "Maj",
                "Qershor",
                "Korrik",
                "Gusht",
                "Shtator",
                "Tetor",
                "NÃ«ntor",
                "Dhjetor",
            ]
        },
        time_24hr: true
    };
    fp$L.l10ns.sq = Albanian;
    fp$L.l10ns;

    var fp$M = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Serbian = {
        weekdays: {
            shorthand: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
            longhand: [
                "Nedelja",
                "Ponedeljak",
                "Utorak",
                "Sreda",
                "Äetvrtak",
                "Petak",
                "Subota",
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
                "Avg",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            longhand: [
                "Januar",
                "Februar",
                "Mart",
                "April",
                "Maj",
                "Jun",
                "Jul",
                "Avgust",
                "Septembar",
                "Oktobar",
                "Novembar",
                "Decembar",
            ]
        },
        firstDayOfWeek: 1,
        weekAbbreviation: "Ned.",
        rangeSeparator: " do ",
        time_24hr: true
    };
    fp$M.l10ns.sr = Serbian;
    fp$M.l10ns;

    var fp$N = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$N.l10ns.sv = Swedish;
    fp$N.l10ns;

    var fp$O = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Thai = {
        weekdays: {
            shorthand: ["à¸­à¸²", "à¸", "à¸­", "à¸", "à¸à¸¤", "à¸¨", "à¸ª"],
            longhand: [
                "à¸­à¸²à¸à¸´à¸à¸¢à¹",
                "à¸à¸±à¸à¸à¸£à¹",
                "à¸­à¸±à¸à¸à¸²à¸£",
                "à¸à¸¸à¸",
                "à¸à¸¤à¸«à¸±à¸ªà¸à¸à¸µ",
                "à¸¨à¸¸à¸à¸£à¹",
                "à¹à¸ªà¸²à¸£à¹",
            ]
        },
        months: {
            shorthand: [
                "à¸¡.à¸.",
                "à¸.à¸.",
                "à¸¡à¸µ.à¸.",
                "à¹à¸¡.à¸¢.",
                "à¸.à¸.",
                "à¸¡à¸´.à¸¢.",
                "à¸.à¸.",
                "à¸ª.à¸.",
                "à¸.à¸¢.",
                "à¸.à¸.",
                "à¸.à¸¢.",
                "à¸.à¸.",
            ],
            longhand: [
                "à¸¡à¸à¸£à¸²à¸à¸¡",
                "à¸à¸¸à¸¡à¸ à¸²à¸à¸±à¸à¸à¹",
                "à¸¡à¸µà¸à¸²à¸à¸¡",
                "à¹à¸¡à¸©à¸²à¸¢à¸",
                "à¸à¸¤à¸©à¸ à¸²à¸à¸¡",
                "à¸¡à¸´à¸à¸¸à¸à¸²à¸¢à¸",
                "à¸à¸£à¸à¸à¸²à¸à¸¡",
                "à¸ªà¸´à¸à¸«à¸²à¸à¸¡",
                "à¸à¸±à¸à¸¢à¸²à¸¢à¸",
                "à¸à¸¸à¸¥à¸²à¸à¸¡",
                "à¸à¸¤à¸¨à¸à¸´à¸à¸²à¸¢à¸",
                "à¸à¸±à¸à¸§à¸²à¸à¸¡",
            ]
        },
        firstDayOfWeek: 1,
        rangeSeparator: " à¸à¸¶à¸ ",
        scrollTitle: "à¹à¸¥à¸·à¹à¸­à¸à¹à¸à¸·à¹à¸­à¹à¸à¸´à¹à¸¡à¸«à¸£à¸·à¸­à¸¥à¸",
        toggleTitle: "à¸à¸¥à¸´à¸à¹à¸à¸·à¹à¸­à¹à¸à¸¥à¸µà¹à¸¢à¸",
        time_24hr: true,
        ordinal: function () {
            return "";
        }
    };
    fp$O.l10ns.th = Thai;
    fp$O.l10ns;

    var fp$P = typeof window !== "undefined" && window.flatpickr !== undefined
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
    fp$P.l10ns.tr = Turkish;
    fp$P.l10ns;

    var fp$Q = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Ukrainian = {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["ÐÐ´", "ÐÐ½", "ÐÑ", "Ð¡Ñ", "Ð§Ñ", "ÐÑ", "Ð¡Ð±"],
            longhand: [
                "ÐÐµÐ´ÑÐ»Ñ",
                "ÐÐ¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº",
                "ÐÑÐ²ÑÐ¾ÑÐ¾Ðº",
                "Ð¡ÐµÑÐµÐ´Ð°",
                "Ð§ÐµÑÐ²ÐµÑ",
                "Ð'ÑÑÐ½Ð¸ÑÑ",
                "Ð¡ÑÐ±Ð¾ÑÐ°",
            ]
        },
        months: {
            shorthand: [
                "Ð¡ÑÑ",
                "ÐÑÑ",
                "ÐÐµÑ",
                "ÐÐ²Ñ",
                "Ð¢ÑÐ°",
                "Ð§ÐµÑ",
                "ÐÐ¸Ð¿",
                "Ð¡ÐµÑ",
                "ÐÐµÑ",
                "ÐÐ¾Ð²",
                "ÐÐ¸Ñ",
                "ÐÑÑ",
            ],
            longhand: [
                "Ð¡ÑÑÐµÐ½Ñ",
                "ÐÑÑÐ¸Ð¹",
                "ÐÐµÑÐµÐ·ÐµÐ½Ñ",
                "ÐÐ²ÑÑÐµÐ½Ñ",
                "Ð¢ÑÐ°Ð²ÐµÐ½Ñ",
                "Ð§ÐµÑÐ²ÐµÐ½Ñ",
                "ÐÐ¸Ð¿ÐµÐ½Ñ",
                "Ð¡ÐµÑÐ¿ÐµÐ½Ñ",
                "ÐÐµÑÐµÑÐµÐ½Ñ",
                "ÐÐ¾Ð²ÑÐµÐ½Ñ",
                "ÐÐ¸ÑÑÐ¾Ð¿Ð°Ð´",
                "ÐÑÑÐ´ÐµÐ½Ñ",
            ]
        },
        time_24hr: true
    };
    fp$Q.l10ns.uk = Ukrainian;
    fp$Q.l10ns;

    var fp$R = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Vietnamese = {
        weekdays: {
            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            longhand: [
                "Chá»§ nháº­t",
                "Thá»© hai",
                "Thá»© ba",
                "Thá»© tÆ°",
                "Thá»© nÄm",
                "Thá»© sÃ¡u",
                "Thá»© báº£y",
            ]
        },
        months: {
            shorthand: [
                "Th1",
                "Th2",
                "Th3",
                "Th4",
                "Th5",
                "Th6",
                "Th7",
                "Th8",
                "Th9",
                "Th10",
                "Th11",
                "Th12",
            ],
            longhand: [
                "ThÃ¡ng má»t",
                "ThÃ¡ng hai",
                "ThÃ¡ng ba",
                "ThÃ¡ng tÆ°",
                "ThÃ¡ng nÄm",
                "ThÃ¡ng sÃ¡u",
                "ThÃ¡ng báº£y",
                "ThÃ¡ng tÃ¡m",
                "ThÃ¡ng chÃ­n",
                "ThÃ¡ng mÆ°á»i",
                "ThÃ¡ng 11",
                "ThÃ¡ng 12",
            ]
        },
        firstDayOfWeek: 1,
        rangeSeparator: ' Äáº¿n '
    };
    fp$R.l10ns.vn = Vietnamese;
    fp$R.l10ns;

    var fp$S = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var Mandarin = {
        weekdays: {
            shorthand: ["å¨æ¥", "å¨ä¸", "å¨äº", "å¨ä¸", "å¨å", "å¨äº", "å¨å­"],
            longhand: [
                "æææ¥",
                "ææä¸",
                "ææäº",
                "ææä¸",
                "ææå",
                "ææäº",
                "ææå­",
            ]
        },
        months: {
            shorthand: [
                "ä¸æ",
                "äºæ",
                "ä¸æ",
                "åæ",
                "äºæ",
                "å­æ",
                "ä¸æ",
                "å«æ",
                "ä¹æ",
                "åæ",
                "åä¸æ",
                "åäºæ",
            ],
            longhand: [
                "ä¸æ",
                "äºæ",
                "ä¸æ",
                "åæ",
                "äºæ",
                "å­æ",
                "ä¸æ",
                "å«æ",
                "ä¹æ",
                "åæ",
                "åä¸æ",
                "åäºæ",
            ]
        },
        rangeSeparator: " è³ ",
        weekAbbreviation: "å¨",
        scrollTitle: "æ»å¨åæ¢",
        toggleTitle: "ç¹å»åæ¢ 12/24 å°æ¶æ¶å¶"
    };
    fp$S.l10ns.zh = Mandarin;
    fp$S.l10ns;

    var fp$T = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
            l10ns: {}
        };
    var MandarinTraditional = {
        weekdays: {
            shorthand: ["é±æ¥", "é±ä¸", "é±äº", "é±ä¸", "é±å", "é±äº", "é±å­"],
            longhand: [
                "æææ¥",
                "ææä¸",
                "ææäº",
                "ææä¸",
                "ææå",
                "ææäº",
                "ææå­",
            ]
        },
        months: {
            shorthand: [
                "ä¸æ",
                "äºæ",
                "ä¸æ",
                "åæ",
                "äºæ",
                "å­æ",
                "ä¸æ",
                "å«æ",
                "ä¹æ",
                "åæ",
                "åä¸æ",
                "åäºæ",
            ],
            longhand: [
                "ä¸æ",
                "äºæ",
                "ä¸æ",
                "åæ",
                "äºæ",
                "å­æ",
                "ä¸æ",
                "å«æ",
                "ä¹æ",
                "åæ",
                "åä¸æ",
                "åäºæ",
            ]
        },
        rangeSeparator: " è³ ",
        weekAbbreviation: "é±",
        scrollTitle: "æ»¾ååæ",
        toggleTitle: "é»æåæ 12/24 å°ææå¶"
    };
    fp$T.l10ns.zh_tw = MandarinTraditional;
    fp$T.l10ns;

    var l10n = {
        ar: Arabic,
        at: Austria,
        az: Azerbaijan,
        be: Belarusian,
        bg: Bulgarian,
        bn: Bangla,
        bs: Bosnian,
        cat: Catalan,
        cs: Czech,
        cy: Welsh,
        da: Danish,
        de: German,
        "default": __assign({}, english),
        en: english,
        eo: Esperanto,
        es: Spanish,
        et: Estonian,
        fa: Persian,
        fi: Finnish,
        fo: Faroese,
        fr: French,
        gr: Greek,
        he: Hebrew,
        hi: Hindi,
        hr: Croatian,
        hu: Hungarian,
        id: Indonesian,
        is: Icelandic,
        it: Italian,
        ja: Japanese,
        ko: Korean,
        km: Khmer,
        kz: Kazakh,
        lt: Lithuanian,
        lv: Latvian,
        mk: Macedonian,
        mn: Mongolian,
        ms: Malaysian,
        my: Burmese,
        nl: Dutch,
        no: Norwegian,
        pa: Punjabi,
        pl: Polish,
        pt: Portuguese,
        ro: Romanian,
        ru: Russian,
        si: Sinhala,
        sk: Slovak,
        sl: Slovenian,
        sq: Albanian,
        sr: Serbian,
        sv: Swedish,
        th: Thai,
        tr: Turkish,
        uk: Ukrainian,
        vn: Vietnamese,
        zh: Mandarin,
        zh_tw: MandarinTraditional
    };

    exports.default = l10n;

    Object.defineProperty(exports, '__esModule', { value: true });

}));