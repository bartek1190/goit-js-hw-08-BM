!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",a=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return m.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return a;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):o.test(e)?a:+e}n=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var a,r,o,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(i);function T(t){var n=a,i=r;return a=r=void 0,s=t,u=e.apply(i,n)}function w(e){var n=e-l,i=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||m&&i>=o}function h(){var e,n,i,a=g();if(w(a))return j(a);// Restart the timer.
f=setTimeout(h,(e=a-l,n=a-s,i=t-e,m?v(i,o-n):i))}function j(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,d&&a)?T(e):(a=r=void 0,u))}function x(){var e,n=g(),i=w(n);if(a=arguments,r=this,l=n,i){if(void 0===f)return(// Reset any `maxWait` timer.
s=e=l,// Start the timer for the trailing edge.
f=setTimeout(h,t),c?T(e):u);if(m)return(// Handle invocations in a tight loop.
f=setTimeout(h,t),T(l))}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(c=!!n.leading,o=(m="maxWait"in n)?p(b(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==f&&clearTimeout(f),s=0,a=l=r=f=void 0},x.flush=function(){return void 0===f?u:j(g())},x}(e,t,{leading:a,maxWait:t,trailing:r})};let T=document.querySelector(".feedback-form"),w="feedback-form-state";T.addEventListener("input",function(e){formData[e.target.name]=e.target.value,throttledSave(formData)}),form.addEventListener("submit",function(e){e.preventDefault(),function(){let e=emailInput.value.trim(),t=messageTextarea.value.trim();// Remove leading and trailing spaces
return""!==e&&""!==t||(alert("Proszę wypełnić wszystkie pola formularza."),!1)}()&&(clearFormState(),console.log("Formularz został wysłany. Dane wyczyszczone."))}),function(){let e=JSON.parse(localStorage.getItem(w));e&&(emailInput.value=e.email,messageTextarea.value=e.message)}();let h=((e=n)&&e.__esModule?e.default:e)(function(){let e={email:emailInput.value,message:messageTextarea.value};localStorage.setItem(w,JSON.stringify(e))},500);emailInput.addEventListener("input",h),messageTextarea.addEventListener("input",h)}();//# sourceMappingURL=03-feedback.9e0bbcd0.js.map

//# sourceMappingURL=03-feedback.9e0bbcd0.js.map
