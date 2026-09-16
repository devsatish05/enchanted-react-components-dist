"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const dayjs_1 = __importDefault(require("dayjs"));
const Paper_1 = __importDefault(require("../Paper"));
const Typography_1 = __importDefault(require("../Typography"));
const CalendarCell_1 = __importDefault(require("./CalendarCell"));
const constants_1 = require("./constants");
const DEFAULT_LABELS = {
    calendar: 'Calendar',
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    dateFormat: constants_1.MONTH_YEAR_FORMAT,
    dateFormatLong: constants_1.FULL_DATE_FORMAT,
    timePreposition: 'at',
    dayFormat: constants_1.DAY_FORMAT,
    dayAbbreviationFormat: constants_1.DAY_ABBREVIATION_FORMAT,
    weekRangeFormat: constants_1.WEEK_RANGE_FORMAT,
    weekRangeEndFormat: constants_1.WEEK_RANGE_END_FORMAT,
};
const getWeekStartDate = (date, weekStartsOn) => {
    const day = date.day(); // 0=Sun, 1=Mon, ..., 6=Sat — locale-independent
    if (weekStartsOn === 0) {
        return date.subtract(day, 'day'); // back to Sunday
    }
    return date.subtract(day === 0 ? 6 : day - 1, 'day'); // back to Monday
};
const getCalendarStyle = (theme, customStyles, view, width, height, responsive) => {
    const baseStyles = Object.assign({ width: width || (responsive ? '100%' : constants_1.DEFAULT_CALENDAR_WIDTH), height: height || (responsive ? 'auto' : constants_1.DEFAULT_CALENDAR_HEIGHT), minHeight: responsive ? constants_1.DEFAULT_MIN_HEIGHT : undefined, maxWidth: responsive ? '100%' : undefined, border: `1px solid ${theme.palette.divider}`, borderRadius: '4px', padding: '0px', overflow: 'hidden', display: 'flex', flexDirection: view === 'month' ? 'column' : 'row' }, customStyles);
    return baseStyles;
};
const Calendar = ({ view = 'month', items = [], currentDate, onDateChange, onItemClick, onNavigate, showWeekend = true, locale = 'en', disabled = false, customStyles = {}, labels, width, height, responsive = false, weekStartsOn = 1, }) => {
    const mergedLabels = Object.assign(Object.assign({}, DEFAULT_LABELS), labels);
    const [internalDate, setInternalDate] = (0, react_1.useState)(() => {
        return currentDate ? (0, dayjs_1.default)(currentDate) : (0, dayjs_1.default)();
    });
    const [focusedDate, setFocusedDate] = (0, react_1.useState)(null);
    const [announcement, setAnnouncement] = (0, react_1.useState)('');
    const activeDate = currentDate ? (0, dayjs_1.default)(currentDate) : internalDate;
    const handleNavigate = (0, react_1.useCallback)((direction) => {
        const newDate = direction === 'prev'
            ? activeDate.subtract(1, view === 'month' ? 'month' : 'week')
            : activeDate.add(1, view === 'month' ? 'month' : 'week');
        if (!currentDate) {
            setInternalDate(newDate);
        }
        const formattedDate = newDate.locale(locale).format(mergedLabels.dateFormat);
        setAnnouncement(`Navigated to ${formattedDate}`);
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(direction);
        onDateChange === null || onDateChange === void 0 ? void 0 : onDateChange(newDate);
    }, [activeDate, currentDate, onDateChange, onNavigate, view, locale, mergedLabels.dateFormat]);
    const weekdays = (0, react_1.useMemo)(() => {
        const days = mergedLabels.weekdaysShort;
        const rotated = weekStartsOn === 0 ? [days[days.length - 1], ...days.slice(0, days.length - 1)] : days;
        if (!showWeekend) {
            // weekStartsOn=0 → rotated is [Sun,Mon,Tue,Wed,Thu,Fri,Sat]; slice(1,6) = Mon-Fri
            // weekStartsOn=1 → rotated is [Mon,Tue,Wed,Thu,Fri,Sat,Sun]; slice(0,5) = Mon-Fri
            return weekStartsOn === 0 ? rotated.slice(1, 6) : rotated.slice(0, 5);
        }
        return rotated;
    }, [showWeekend, mergedLabels.weekdaysShort, weekStartsOn]);
    const calendarDays = (0, react_1.useMemo)(() => {
        if (view === 'week') {
            const weekStart = getWeekStartDate(activeDate, weekStartsOn);
            const days = [];
            // weekStartsOn=0 starts on Sunday; when hiding weekends, skip Sunday (+1) to start from Monday
            const startOffset = !showWeekend && weekStartsOn === 0 ? 1 : 0;
            const daysToShow = showWeekend ? 7 : 5;
            for (let i = 0; i < daysToShow; i += 1) {
                days.push(weekStart.add(i + startOffset, 'day'));
            }
            return days;
        }
        const startOfMonth = activeDate.startOf('month');
        const endOfMonth = activeDate.endOf('month');
        const startDate = getWeekStartDate(startOfMonth, weekStartsOn);
        const lastDay = endOfMonth.day();
        let daysUntilWeekEnd;
        if (weekStartsOn === 0) {
            daysUntilWeekEnd = 6 - lastDay;
        }
        else {
            daysUntilWeekEnd = lastDay === 0 ? 0 : 7 - lastDay;
        }
        const endDate = endOfMonth.add(daysUntilWeekEnd, 'day');
        const days = [];
        let currentDay = startDate;
        while (currentDay.isBefore(endDate) || currentDay.isSame(endDate, 'day')) {
            if (showWeekend || (currentDay.day() !== 0 && currentDay.day() !== 6)) {
                days.push(currentDay);
            }
            currentDay = currentDay.add(1, 'day');
        }
        return days;
    }, [activeDate, view, showWeekend, weekStartsOn]);
    const itemsByDate = (0, react_1.useMemo)(() => {
        const map = new Map();
        items.forEach((item) => {
            const date = (0, dayjs_1.default)(item.date);
            if (!date.isValid()) {
                return;
            }
            const dateKey = date.format(constants_1.DATE_KEY_FORMAT);
            if (!map.has(dateKey)) {
                map.set(dateKey, []);
            }
            map.get(dateKey).push(item);
        });
        return map;
    }, [items]);
    const getItemsForDate = (0, react_1.useCallback)((date) => {
        return itemsByDate.get(date.format(constants_1.DATE_KEY_FORMAT)) || [];
    }, [itemsByDate]);
    const handleGridKeyDown = (0, react_1.useCallback)((event, dateParam) => {
        var _a;
        let newFocusDate = null;
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                newFocusDate = dateParam.subtract(1, 'day');
                break;
            case 'ArrowRight':
                event.preventDefault();
                newFocusDate = dateParam.add(1, 'day');
                break;
            case 'ArrowUp':
                event.preventDefault();
                newFocusDate = dateParam.subtract(1, 'week');
                break;
            case 'ArrowDown':
                event.preventDefault();
                newFocusDate = dateParam.add(1, 'week');
                break;
            case 'Home':
                event.preventDefault();
                if (view === 'month') {
                    newFocusDate = dateParam.startOf('month');
                }
                else {
                    const weekStart = getWeekStartDate(dateParam, weekStartsOn);
                    newFocusDate = !showWeekend && weekStartsOn === 0 ? weekStart.add(1, 'day') : weekStart;
                }
                break;
            case 'End':
                event.preventDefault();
                if (view === 'month') {
                    newFocusDate = dateParam.endOf('month');
                }
                else {
                    const weekStart = getWeekStartDate(dateParam, weekStartsOn);
                    newFocusDate = showWeekend ? weekStart.add(6, 'day') : weekStart.add(weekStartsOn === 0 ? 5 : 4, 'day');
                }
                break;
            case 'PageUp':
                event.preventDefault();
                newFocusDate = dateParam.subtract(1, view === 'month' ? 'month' : 'week');
                break;
            case 'PageDown':
                event.preventDefault();
                newFocusDate = dateParam.add(1, view === 'month' ? 'month' : 'week');
                break;
            default:
                return;
        }
        if (newFocusDate) {
            setFocusedDate(newFocusDate);
            const formattedDate = newFocusDate.locale(locale).format(mergedLabels.dateFormatLong);
            const itemCount = ((_a = itemsByDate.get(newFocusDate.format(constants_1.DATE_KEY_FORMAT))) === null || _a === void 0 ? void 0 : _a.length) || 0;
            const itemText = itemCount === 1 ? '1 event' : `${itemCount} events`;
            setAnnouncement(`${formattedDate}, ${itemText}`);
            if (view === 'month' && newFocusDate.month() !== activeDate.month()) {
                handleNavigate(newFocusDate.isAfter(activeDate) ? 'next' : 'prev');
            }
            else if (view === 'week' && !calendarDays.some((day) => { return day.isSame(newFocusDate, 'day'); })) {
                handleNavigate(newFocusDate.isAfter(activeDate) ? 'next' : 'prev');
            }
        }
    }, [view, activeDate, handleNavigate, calendarDays, locale, mergedLabels.dateFormatLong, itemsByDate, weekStartsOn, showWeekend]);
    const renderMonthView = () => {
        const weeks = [];
        const daysPerRow = showWeekend ? 7 : 5;
        for (let i = 0; i < calendarDays.length; i += daysPerRow) {
            weeks.push(calendarDays.slice(i, i + daysPerRow));
        }
        return (react_1.default.createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'column', flex: 1 }, role: "grid", "aria-readonly": "true" },
            react_1.default.createElement(material_1.Box, { role: "rowgroup" },
                react_1.default.createElement(material_1.Box, { sx: (theme) => {
                        return {
                            display: 'flex',
                            backgroundColor: theme.palette.background.default,
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        };
                    }, role: "row" }, weekdays.map((day) => {
                    return (react_1.default.createElement(material_1.Box, { key: day, sx: (theme) => {
                            return {
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: theme.spacing(3.5),
                                padding: theme.spacing(0.75),
                                borderRight: `1px solid ${theme.palette.divider}`,
                                '&:last-child': {
                                    borderRight: 'none',
                                },
                            };
                        }, role: "columnheader" },
                        react_1.default.createElement(Typography_1.default, { variant: "body2", color: "text.primary" }, day)));
                }))),
            react_1.default.createElement(material_1.Box, { role: "rowgroup", sx: { display: 'flex', flexDirection: 'column', flex: 1 } }, weeks.map((week, weekIndex) => {
                var _a;
                const weekKey = ((_a = week[0]) === null || _a === void 0 ? void 0 : _a.format(constants_1.DATE_KEY_FORMAT)) || 'week';
                const isLastWeek = weekIndex === weeks.length - 1;
                return (react_1.default.createElement(material_1.Box, { key: weekKey, sx: {
                        display: 'flex',
                        flex: 1,
                        minHeight: 0,
                    }, role: "row" }, week.map((day) => {
                    const dayItems = getItemsForDate(day);
                    const isCurrentMonth = day.month() === activeDate.month();
                    const isToday = day.isSame((0, dayjs_1.default)(), 'day');
                    const isSelected = day.isSame(activeDate, 'day');
                    return (react_1.default.createElement(CalendarCell_1.default, { key: day.format(constants_1.DATE_KEY_FORMAT), date: day, items: dayItems, view: "month", isCurrentMonth: isCurrentMonth, isToday: isToday, isSelected: isSelected, isFocused: focusedDate === null || focusedDate === void 0 ? void 0 : focusedDate.isSame(day, 'day'), isLastRow: isLastWeek, disabled: disabled, onDateClick: onDateChange, onItemClick: onItemClick, onKeyDown: handleGridKeyDown, dateFormatLong: mergedLabels.dateFormatLong, dayFormat: mergedLabels.dayFormat, dayAbbreviationFormat: mergedLabels.dayAbbreviationFormat, timePreposition: mergedLabels.timePreposition, locale: locale }));
                })));
            }))));
    };
    const renderWeekView = () => {
        return (react_1.default.createElement(material_1.Box, { sx: {
                display: 'flex',
                flex: 1,
                overflow: 'hidden',
            } }, calendarDays.map((day, index) => {
            const dayItems = getItemsForDate(day);
            const isToday = day.isSame((0, dayjs_1.default)(), 'day');
            const isSelected = day.isSame(activeDate, 'day');
            return (react_1.default.createElement(CalendarCell_1.default, { key: day.format(constants_1.DATE_KEY_FORMAT), date: day, items: dayItems, view: "week", isCurrentMonth: true, isToday: isToday, isSelected: isSelected, isFocused: focusedDate === null || focusedDate === void 0 ? void 0 : focusedDate.isSame(day, 'day'), isLastColumn: index === calendarDays.length - 1, disabled: disabled, onDateClick: onDateChange, onItemClick: onItemClick, onKeyDown: handleGridKeyDown, dateFormatLong: mergedLabels.dateFormatLong, dayFormat: mergedLabels.dayFormat, dayAbbreviationFormat: mergedLabels.dayAbbreviationFormat, timePreposition: mergedLabels.timePreposition, locale: locale }));
        })));
    };
    return (react_1.default.createElement(Paper_1.default, { variant: "outlined", sx: (theme) => { return getCalendarStyle(theme, customStyles, view, width, height, responsive); }, role: "region", "aria-label": mergedLabels.calendar },
        view === 'month' ? renderMonthView() : renderWeekView(),
        react_1.default.createElement(material_1.Box, { role: "status", "aria-live": "polite", "aria-atomic": "true", sx: {
                position: 'absolute',
                left: '-10000px',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
            } }, announcement)));
};
exports.default = Calendar;
