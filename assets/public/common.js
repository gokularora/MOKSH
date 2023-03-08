(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["common"],{

/***/ 34068:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 42810:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34068);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 47811)).then(m => new m.DeviceWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 63993:
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   "a": () => (/* binding */ getTs),
/* harmony export */   "c": () => (/* binding */ checkGesture),
/* harmony export */   "d": () => (/* binding */ debugLog),
/* harmony export */   "g": () => (/* binding */ getNormalizedScrollX),
/* harmony export */   "p": () => (/* binding */ pointerCoord),
/* harmony export */   "s": () => (/* binding */ scrollEl)
/* harmony export */ });
const DEFAULT_CONFIG = {
    dragThreshold: 20,
    allowElementScroll: false,
    maxDragAngle: 40,
    sideMenuThreshold: 50,
    transitionDuration: 150,
    shortSwipeDuration: 300,
    debug: false,
    avoidElements: false,
};
function pointerCoord(ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
const nativeScrollAvailable = 'scrollBehavior' in document.documentElement.style;
let _getTs;
if (window.performance && window.performance.now) {
    _getTs = window.performance.now.bind(window.performance);
}
else {
    _getTs = Date.now.bind(Date);
}
const getTs = _getTs;
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
function getScrollCoord(start, dest, startTime, currentTime, duration) {
    const time = Math.min(1, (currentTime - startTime) / duration);
    const timeFn = easeInOutCubic(time);
    return Math.ceil((timeFn * (dest - start)) + start);
}
function scroll(el, startX, x, y, startTime, duration) {
    const currentTime = getTs();
    const scrollX = startX === x ? x : getScrollCoord(startX, x, startTime, currentTime, duration);
    el.scrollTo(scrollX, y);
    if (currentTime - startTime >= duration) {
        return;
    }
    requestAnimationFrame(() => {
        scroll(el, startX, x, y, startTime, duration);
    });
}
const scrollEl = (el, x, y = 0, native = false, duration = 300) => {
    if (duration <= 0) {
        requestAnimationFrame(() => {
            el.scrollTo(x, y);
        });
        return;
    }
    if (native && nativeScrollAvailable) {
        el.scrollTo({
            left: x,
            top: y,
            behavior: 'smooth',
        });
        return;
    }
    requestAnimationFrame(() => {
        scroll(el, el.scrollLeft, x, y, getTs(), duration);
    });
};
function checkGesture(newCoords, initialCoords, config) {
    if (!initialCoords) {
        return false;
    }
    const radians = config.maxDragAngle * (Math.PI / 180);
    const maxCosine = Math.cos(radians);
    const deltaX = newCoords.x - initialCoords.x;
    const deltaY = newCoords.y - initialCoords.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance >= config.dragThreshold) {
        // swipe is long enough
        // lets check the angle
        const angle = Math.atan2(deltaY, deltaX);
        const cosine = Math.cos(angle);
        return Math.abs(cosine) > maxCosine;
    }
    return false;
}
function getNormalizedScrollX(el, width, delta = 0) {
    return Math.max(0, Math.min(el.scrollWidth - width, el.scrollLeft + delta));
}
const debugStyle1 = 'background: linear-gradient(135deg,#4150b2,#f71947); border: 1px solid #9a9a9a; color: #ffffff; border-bottom-left-radius: 2px; border-top-left-radius: 2px; padding: 2px 0 2px 4px;';
const debugStyle2 = 'background: #252b3e; border: 1px solid #9a9a9a; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: -2px; padding: 2px 4px; color: white;';
function debugLog(config, tag, vals) {
    if (!config || !config.debug) {
        return;
    }
    // Some gorgeous logging, because apparently I have lots of free time to style console logs and write this comment
    console.log(`%csuper-tabs %c%s`, debugStyle1, debugStyle2, ' '.repeat(10 - tag.length) + tag, ...vals);
}




/***/ }),

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 42114:
/*!*********************************************!*\
  !*** ./node_modules/otp-generator/index.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Generate password from allowed word
 */
const digits = '0123456789'
const alphabets = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = alphabets.toUpperCase()
const specialChars = '#!&@'

function rand (min, max) {
  const random = Math.random()
  return Math.floor(random * (max - min) + min)
}

module.exports = {
  /**
   * Generate OTP of the length
   * @param  {number} length length of password.
   * @param  {object} options
   * @param  {boolean} options.digits Default: `true` true value includes digits in OTP
   * @param  {boolean} options.alphabets Default: `true` true value includes alphabets in OTP
   * @param  {boolean} options.upperCase Default: `true` true value includes upperCase in OTP
   * @param  {boolean} options.specialChars Default: `true` true value includes specialChars in OTP
   */
  generate: function (length, options) {
    length = length || 10
    const generateOptions = options || {}

    generateOptions.digits = Object.prototype.hasOwnProperty.call(generateOptions, 'digits') ? options.digits : true
    generateOptions.alphabets = Object.prototype.hasOwnProperty.call(generateOptions, 'alphabets') ? options.alphabets : true
    generateOptions.upperCase = Object.prototype.hasOwnProperty.call(generateOptions, 'upperCase') ? options.upperCase : true
    generateOptions.specialChars = Object.prototype.hasOwnProperty.call(generateOptions, 'specialChars') ? options.specialChars : true

    const allowsChars = ((generateOptions.digits || '') && digits) +
      ((generateOptions.alphabets || '') && alphabets) +
      ((generateOptions.upperCase || '') && upperCase) +
      ((generateOptions.specialChars || '') && specialChars)
    let password = ''
    while (password.length < length) {
      const charIndex = rand(0, allowsChars.length - 1)
      password += allowsChars[charIndex]
    }
    return password
  }

}


/***/ }),

/***/ 56783:
/*!*********************************************!*\
  !*** ./src/app/services/api-lms.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiLMSService": () => (/* binding */ ApiLMSService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let ApiLMSService = class ApiLMSService {
    constructor(http, alertController, alert) {
        this.http = http;
        this.alertController = alertController;
        this.alert = alert;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiLMSUrl;
        this.blogApi = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiLMSBlogUrl;
        this.arrLMSStudentData = [];
        this.studentName = "";
        this.scholarshipStartDate = "";
        this.arrScholarships = [
            { 'id': 1, 'name': '1 Year of NEXT Coaching FREE', 'scholarships': 300, 'minMarks': 10, 'maxMarks': 60, 'worth': '30,000', 'remarks': 'All Universities' },
            { 'id': 2, 'name': '2 Years of NEXT Coaching FREE', 'scholarships': 200, 'minMarks': 61, 'maxMarks': 100, 'worth': '60,000', 'remarks': 'All Universities' },
            { 'id': 3, 'name': '3 months of FREE Indian food', 'scholarships': 100, 'minMarks': 150, 'maxMarks': 200, 'worth': '25,000', 'remarks': 'Kabardino, Orel, Kazan State, Belgorod, CFU' },
            { 'id': 4, 'name': '6 months of FREE Indian food', 'scholarships': 50, 'minMarks': 201, 'maxMarks': 240, 'worth': '50,000', 'remarks': 'Kabardino, Orel, Kazan State, Belgorod, CFU' },
            { 'id': 5, 'name': '3 Months  of Hostel charges', 'scholarships': 100, 'minMarks': 101, 'maxMarks': 150, 'worth': '20,000', 'remarks': 'Kabardino, Orel, Kazan State, Belgorod, CFU' },
            { 'id': 6, 'name': '6 Months of Hostel charges', 'scholarships': 50, 'minMarks': 151, 'maxMarks': 200, 'worth': '35,000', 'remarks': 'Kabardino, Orel, Kazan State, Belgorod, CFU' },
            { 'id': 7, 'name': 'Scholarship of 18000 USD', 'scholarships': 'First 100', 'minMarks': 120, 'maxMarks': 240, 'worth': '15,00,000', 'remarks': 'University of Georgia' }
        ];
    }
    getTestQuestions(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    setAnswer(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    setStudentInfo(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    getStudentInfo(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    getExamStatus(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    endTest(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    getTestResult(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    getFacultyList(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    getBlogs(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.blogApi;
            return this.http.post(url, body).toPromise();
        });
    }
    SetFreeTrial(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    generalAPI(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api;
            return this.http.post(url, body).toPromise();
        });
    }
    fnSubmitFreeTrial(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var data = new FormData();
            data.append("xAction", "studentRegistrationLandingPage");
            data.append("apiKey", "U0NJVFlSRVdBUkRa");
            data.append("emailID", obj.emailID);
            data.append("fullname", obj.fullname);
            data.append("studentMobileNo", obj.studentMobileNo);
            data.append("medicalCollegeName", obj.medicalCollegeName);
            data.append("yearOfMedicalSchool", obj.yearOfMedicalSchool);
            data.append("programTypeID", obj.programTypeID);
            data.append("batchID", obj.batchID);
            return new Promise((resolve, reject) => {
                this.generalAPI(data).then(resp => {
                    if (resp.status == 202) {
                        if (resp.programTypeID == obj.programTypeID) {
                            this.alert.basciAlert("You are already registered for this course.", "Please contact us in case any query", "", ['OK']);
                            resolve("exist");
                        }
                        else {
                            resolve("transfer");
                        }
                    }
                    else {
                        resolve("registered");
                    }
                })
                    .catch(err => {
                    console.log("onClickFreeTrial(): " + err);
                    reject(err);
                });
            });
        });
    }
    fnTransferCourse(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var data = new FormData();
            data.append("xAction", "studentTransfer");
            data.append("apiKey", "U0NJVFlSRVdBUkRa");
            data.append("studentEmailID", obj.emailID);
            data.append("programTypeID", obj.programTypeID);
            data.append("batchID", obj.batchID);
            return new Promise((resolve, reject) => {
                this.generalAPI(data).then(resp => {
                    if (resp.err == 0) {
                        this.alert.basciAlert("Your new course has been assigned successfully! Please check your email.", "", "", ['OK']);
                        resolve(true);
                    }
                    else if (resp.err == 1) {
                        this.alert.basciAlert("Sorry, We couldn't complete your request at this time", "Please try again later", "", ['OK']);
                        resolve(false);
                    }
                });
            });
        });
    }
    alertTransfer(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var response = "";
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class', header: "Are you sure to change the course?", message: 'On changing of course, your access to the previous course will be stopped', buttons: [
                    { text: 'No', role: 'cancel', cssClass: 'secondary', handler: () => {
                            this.isTransfer = false;
                        }
                    },
                    {
                        text: 'Yes', handler: () => {
                            this.isTransfer = true;
                            this.fnTransferCourse(obj);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ApiLMSService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService }
];
ApiLMSService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ApiLMSService);



/***/ }),

/***/ 64229:
/*!*********************************************************!*\
  !*** ./src/app/services/payment-integration.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentIntegrationService": () => (/* binding */ PaymentIntegrationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);




let PaymentIntegrationService = class PaymentIntegrationService {
    constructor(http) {
        this.http = http;
        this.apiRazor = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.razor_apiUrl;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiMokshUrl;
    }
    createRazorTestOrder(body) {
        //const url = this.api + 'WSGeneral.asmx/GenerateRazorOrderID';
        const url = this.api + 'WSGeneral.asmx/GenerateRazorTestOrderID';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    createRazorOrder(body) {
        //const url = this.api + 'WSGeneral.asmx/GenerateRazorOrderID';
        const url = this.api + 'WSGeneral.asmx/GenerateRazorOrderID';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
};
PaymentIntegrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PaymentIntegrationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PaymentIntegrationService);



/***/ })

}]);
//# sourceMappingURL=common.js.map