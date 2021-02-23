var card =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var Card, QJ, extend, payment,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	__webpack_require__(1);

	QJ = __webpack_require__(5);

	payment = __webpack_require__(6);

	extend = __webpack_require__(7);

	Card = (function() {
	  var bindVal;

	  Card.prototype.initializedDataAttr = "data-jp-card-initialized";

	  Card.prototype.cardTemplate = '' + '<div class="jp-card-container">' + '<div class="jp-card">' + '<div class="jp-card-front">' + '<div class="jp-card-logo jp-card-elo">' + '<div class="e">e</div>' + '<div class="l">l</div>' + '<div class="o">o</div>' + '</div>' + '<div class="jp-card-logo jp-card-visa">visa</div>' + '<div class="jp-card-logo jp-card-mastercard">MasterCard</div>' + '<div class="jp-card-logo jp-card-maestro">Maestro</div>' + '<div class="jp-card-logo jp-card-amex"></div>' + '<div class="jp-card-logo jp-card-discover">discover</div>' + '<div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div>' + '<div class="jp-card-lower">' + '<div class="jp-card-shiny"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-number jp-card-display">{{number}}</div>' + '<div class="jp-card-name jp-card-display">{{name}}</div>' + '<div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div>' + '</div>' + '</div>' + '<div class="jp-card-back">' + '<div class="jp-card-bar"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-shiny"></div>' + '</div>' + '</div>' + '</div>';

	  Card.prototype.template = function(tpl, data) {
	    return tpl.replace(/\{\{(.*?)\}\}/g, function(match, key, str) {
	      return data[key];
	    });
	  };

	  Card.prototype.cardTypes = ['jp-card-amex', 'jp-card-dankort', 'jp-card-dinersclub', 'jp-card-discover', 'jp-card-jcb', 'jp-card-laser', 'jp-card-maestro', 'jp-card-mastercard', 'jp-card-unionpay', 'jp-card-visa', 'jp-card-visaelectron', 'jp-card-elo'];

	  Card.prototype.defaults = {
	    formatting: true,
	    formSelectors: {
	      numberInput: 'input[name="number"]',
	      expiryInput: 'input[name="expiry"]',
	      cvcInput: 'input[name="cvc"]',
	      nameInput: 'input[name="name"]'
	    },
	    cardSelectors: {
	      cardContainer: '.jp-card-container',
	      card: '.jp-card',
	      numberDisplay: '.jp-card-number',
	      expiryDisplay: '.jp-card-expiry',
	      cvcDisplay: '.jp-card-cvc',
	      nameDisplay: '.jp-card-name'
	    },
	    messages: {
	      validDate: 'valid\nthru',
	      monthYear: 'month/year'
	    },
	    placeholders: {
	      number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
	      cvc: '&bull;&bull;&bull;',
	      expiry: '&bull;&bull;/&bull;&bull;',
	      name: 'Full Name'
	    },
	    masks: {
	      cardNumber: false
	    },
	    classes: {
	      valid: 'jp-card-valid',
	      invalid: 'jp-card-invalid'
	    },
	    debug: false,
	    events: {
	      onSubmit: function() {
	        return null;
	      }
	    }
	  };

	  function Card(opts) {
	    this.maskCardNumber = bind(this.maskCardNumber, this);
	    var toInitialize;
	    this.options = extend(true, this.defaults, opts);
	    if (!this.options.form) {
	      console.log("Please provide a form");
	      return;
	    }
	    this.$el = QJ(this.options.form);
	    if (!this.options.container) {
	      console.log("Please provide a container");
	      return;
	    }
	    this.$container = QJ(this.options.container);
	    toInitialize = QJ.isDOMElement(this.$container) ? this.$container : this.$container[0];
	    if (toInitialize.getAttribute(this.initializedDataAttr)) {
	      return;
	    }
	    toInitialize.setAttribute(this.initializedDataAttr, true);
	    this.render();
	    this.attachHandlers();
	    this.handleInitialPlaceholders();
	  }

	  Card.prototype.render = function() {
	    var $cardContainer, baseWidth, name, obj, prevInputForExpiry, ref, ref1, ref2, selector, ua;
	    QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders)));
	    ref = this.options.cardSelectors;
	    for (name in ref) {
	      selector = ref[name];
	      this["$" + name] = QJ.find(this.$container, selector);
	    }
	    ref1 = this.options.formSelectors;
	    for (name in ref1) {
	      selector = ref1[name];
	      selector = this.options[name] ? this.options[name] : selector;
	      obj = QJ.find(this.$el, selector);
	      if (!obj.length && this.options.debug) {
	        console.error("Card can't find a " + name + " in your form.");
	      }
	      this["$" + name] = obj;
	    }
	    QJ.data(this.$numberInput, 'next-input', ((ref2 = this.$nameInput) != null ? ref2.length : void 0) ? QJ.first(this.$nameInput) : QJ.first(this.$expiryInput));
	    QJ.data(this.$nameInput, 'next-input', QJ.first(this.$expiryInput));
	    if (this.$expiryInput.length === 1) {
	      QJ.data(this.$expiryInput, 'next-input', QJ.first(this.$cvcInput));
	    } else {
	      QJ.data(QJ.first(this.$expiryInput), 'next-input', QJ.last(this.$expiryInput));
	      QJ.data(QJ.last(this.$expiryInput), 'next-input', QJ.first(this.$cvcInput));
	    }
	    QJ.data(this.$cvcInput, 'prev-input', QJ.last(this.$expiryInput));
	    prevInputForExpiry = this.$nameInput.length ? QJ.first(this.$nameInput) : QJ.last(this.$numberInput);
	    if (this.$expiryInput.length === 1) {
	      QJ.data(this.$expiryInput, 'prev-input', prevInputForExpiry);
	    } else {
	      QJ.data(QJ.first(this.$expiryInput), 'prev-input', prevInputForExpiry);
	      QJ.data(QJ.last(this.$expiryInput), 'prev-input', QJ.first(this.$expiryInput));
	    }
	    if (this.options.formatting) {
	      Payment.formatCardNumber(this.$numberInput);
	      Payment.formatCardCVC(this.$cvcInput);
	      Payment.formatCardExpiry(this.$expiryInput);
	    }
	    if (this.options.width) {
	      $cardContainer = QJ(this.options.cardSelectors.cardContainer)[0];
	      baseWidth = parseInt($cardContainer.clientWidth || window.getComputedStyle($cardContainer).width);
	      $cardContainer.style.transform = "scale(" + (this.options.width / baseWidth) + ")";
	    }
	    if (typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0) {
	      ua = navigator.userAgent.toLowerCase();
	      if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
	        QJ.addClass(this.$card, 'jp-card-safari');
	      }
	    }
	    if (/MSIE 10\./i.test(navigator.userAgent)) {
	      QJ.addClass(this.$card, 'jp-card-ie-10');
	    }
	    if (/rv:11.0/i.test(navigator.userAgent)) {
	      return QJ.addClass(this.$card, 'jp-card-ie-11');
	    }
	  };

	  Card.prototype.attachHandlers = function() {
	    var expiryFilters, func, numberInputFilters;
	    numberInputFilters = [this.validToggler('cardNumber')];
	    if (this.options.masks.cardNumber) {
	      numberInputFilters.push(this.maskCardNumber);
	    }
	    bindVal(this.$numberInput, this.$numberDisplay, {
	      fill: false,
	      filters: numberInputFilters
	    });
	    QJ.on(this.$numberInput, 'payment.cardType', this.handle('setCardType'));
	    expiryFilters = [
	      function(val) {
	        return val.replace(/(\s+)/g, '');
	      }
	    ];
	    expiryFilters.push(this.validToggler('cardExpiry'));
	    bindVal(this.$expiryInput, this.$expiryDisplay, {
	      join: function(text) {
	        if (text[0].length === 2 || text[1]) {
	          return "/";
	        } else {
	          return "";
	        }
	      },
	      filters: expiryFilters
	    });
	    bindVal(this.$cvcInput, this.$cvcDisplay, {
	      filters: this.validToggler('cardCVC')
	    });
	    QJ.on(this.$cvcInput, 'focus', this.handle('flipCard'));
	    QJ.on(this.$cvcInput, 'blur', this.handle('unflipCard'));
	    func = (function(_this) {
	      return function(e) {
	        if (_this.isValid()) {
	          return _this.options.events.onSubmit(true);
	        } else {
	          _this.options.events.onSubmit(false);
	          e.preventDefault();
	          return e.stopPropagation();
	        }
	      };
	    })(this);
	    this.$el.addEventListener('submit', func, false);
	    return bindVal(this.$nameInput, this.$nameDisplay, {
	      fill: false,
	      filters: this.validToggler('cardHolderName'),
	      join: ' '
	    });
	  };

	  Card.prototype.isValid = function() {
	    var isValid, month, value, year;
	    isValid = true;
	    if (this.$expiryInput.length === 1) {
	      value = QJ.val(this.$expiryInput[0]);
	      value = value.replace(/\D/g, '');
	      month = value.substring(0, 2);
	      year = value.substring(2);
	    } else {
	      month = QJ.val(this.$expiryInput[0]);
	      year = QJ.val(this.$expiryInput[1]);
	    }
	    if (!Payment.fns.validateCardExpiry(month, year)) {
	      QJ.addClass(this.$expiryInput, 'error');
	      QJ.addClass(this.$expiryInput, 'jp-card-invalid');
	      isValid = false;
	    }
	    if (!QJ.val(this.$numberInput[0]) || !Payment.fns.validateCardNumber(QJ.val(this.$numberInput[0]))) {
	      QJ.addClass(this.$numberInput, 'error');
	      QJ.addClass(this.$numberInput, 'jp-card-invalid');
	      isValid = false;
	    }
	    if (!QJ.val(this.$cvcInput[0]) || !Payment.fns.validateCardCVC(QJ.val(this.$cvcInput[0]), this.cardType)) {
	      QJ.addClass(this.$cvcInput, 'error');
	      QJ.addClass(this.$cvcInput, 'jp-card-invalid');
	      isValid = false;
	    }
	    return isValid;
	  };

	  Card.prototype.handleInitialPlaceholders = function() {
	    var el, name, ref, results, selector;
	    ref = this.options.formSelectors;
	    results = [];
	    for (name in ref) {
	      selector = ref[name];
	      el = this["$" + name];
	      if (QJ.val(el)) {
	        QJ.trigger(el, 'paste');
	        results.push(setTimeout(function() {
	          return QJ.trigger(el, 'keyup');
	        }));
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  };

	  Card.prototype.handle = function(fn) {
	    return (function(_this) {
	      return function(e) {
	        var args;
	        args = Array.prototype.slice.call(arguments);
	        args.unshift(e.target);
	        return _this.handlers[fn].apply(_this, args);
	      };
	    })(this);
	  };

	  Card.prototype.validToggler = function(validatorName) {
	    var isValid;
	    if (validatorName === "cardExpiry") {
	      isValid = function(val) {
	        var objVal;
	        objVal = Payment.fns.cardExpiryVal(val);
	        return Payment.fns.validateCardExpiry(objVal.month, objVal.year);
	      };
	    } else if (validatorName === "cardCVC") {
	      isValid = (function(_this) {
	        return function(val) {
	          return Payment.fns.validateCardCVC(val, _this.cardType);
	        };
	      })(this);
	    } else if (validatorName === "cardNumber") {
	      isValid = function(val) {
	        return Payment.fns.validateCardNumber(val);
	      };
	    } else if (validatorName === "cardHolderName") {
	      isValid = function(val) {
	        return val !== "";
	      };
	    }
	    return (function(_this) {
	      return function(val, $in, $out) {
	        var result;
	        result = isValid(val);
	        _this.toggleValidClass($in, result);
	        _this.toggleValidClass($out, result);
	        return val;
	      };
	    })(this);
	  };

	  Card.prototype.toggleValidClass = function(el, test) {
	    QJ.toggleClass(el, this.options.classes.valid, test);
	    return QJ.toggleClass(el, this.options.classes.invalid, !test);
	  };

	  Card.prototype.maskCardNumber = function(val, el, out) {
	    var mask, numbers;
	    mask = this.options.masks.cardNumber;
	    numbers = val.split(' ');
	    if (numbers.length >= 3) {
	      numbers.forEach(function(item, idx) {
	        if (idx !== numbers.length - 1) {
	          return numbers[idx] = numbers[idx].replace(/\d/g, mask);
	        }
	      });
	      return numbers.join(' ');
	    } else {
	      return val.replace(/\d/g, mask);
	    }
	  };

	  Card.prototype.handlers = {
	    setCardType: function($el, e) {
	      var cardType;
	      cardType = e.data;
	      if (!QJ.hasClass(this.$card, cardType)) {
	        QJ.removeClass(this.$card, 'jp-card-unknown');
	        QJ.removeClass(this.$card, this.cardTypes.join(' '));
	        QJ.addClass(this.$card, "jp-card-" + cardType);
	        QJ.toggleClass(this.$card, 'jp-card-identified', cardType !== 'unknown');
	        return this.cardType = cardType;
	      }
	    },
	    flipCard: function() {
	      return QJ.addClass(this.$card, 'jp-card-flipped');
	    },
	    unflipCard: function() {
	      return QJ.removeClass(this.$card, 'jp-card-flipped');
	    }
	  };

	  bindVal = function(el, out, opts) {
	    var joiner, o, outDefaults;
	    if (opts == null) {
	      opts = {};
	    }
	    opts.fill = opts.fill || false;
	    opts.filters = opts.filters || [];
	    if (!(opts.filters instanceof Array)) {
	      opts.filters = [opts.filters];
	    }
	    opts.join = opts.join || "";
	    if (!(typeof opts.join === "function")) {
	      joiner = opts.join;
	      opts.join = function() {
	        return joiner;
	      };
	    }
	    outDefaults = (function() {
	      var j, len, results;
	      results = [];
	      for (j = 0, len = out.length; j < len; j++) {
	        o = out[j];
	        results.push(o.textContent);
	      }
	      return results;
	    })();
	    QJ.on(el, 'focus', function() {
	      return QJ.addClass(out, 'jp-card-focused');
	    });
	    QJ.on(el, 'blur', function() {
	      return QJ.removeClass(out, 'jp-card-focused');
	    });
	    QJ.on(el, 'keyup change paste', function(e) {
	      var elem, filter, i, j, join, k, len, len1, outEl, outVal, ref, results, val;
	      val = (function() {
	        var j, len, results;
	        results = [];
	        for (j = 0, len = el.length; j < len; j++) {
	          elem = el[j];
	          results.push(QJ.val(elem));
	        }
	        return results;
	      })();
	      join = opts.join(val);
	      val = val.join(join);
	      if (val === join) {
	        val = "";
	      }
	      ref = opts.filters;
	      for (j = 0, len = ref.length; j < len; j++) {
	        filter = ref[j];
	        val = filter(val, el, out);
	      }
	      results = [];
	      for (i = k = 0, len1 = out.length; k < len1; i = ++k) {
	        outEl = out[i];
	        if (opts.fill) {
	          outVal = val + outDefaults[i].substring(val.length);
	        } else {
	          outVal = val || outDefaults[i];
	        }
	        results.push(outEl.textContent = outVal);
	      }
	      return results;
	    });
	    return el;
	  };

	  return Card;

	})();

	module.exports = Card;

	global.Card = Card;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./card.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./card.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".jp-card.jp-card-safari.jp-card-identified .jp-card-front:before,.jp-card.jp-card-safari.jp-card-identified .jp-card-back:before{background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),-webkit-linear-gradient(-245deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%);background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),linear-gradient(-25deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%)}.jp-card.jp-card-ie-10.jp-card-flipped,.jp-card.jp-card-ie-11.jp-card-flipped{-webkit-transform:0deg;-moz-transform:0deg;-ms-transform:0deg;-o-transform:0deg;transform:0deg}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-front,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-front{-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg);transform:rotateY(0deg)}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back{-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-ms-transform:rotateY(0deg);-o-transform:rotateY(0deg);transform:rotateY(0deg)}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back:after,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back:after{left:18%}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-cvc,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-cvc{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);left:5%}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny{left:84%}.jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny:after,.jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny:after{left:-480%;-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.jp-card.jp-card-ie-10.jp-card-amex .jp-card-back,.jp-card.jp-card-ie-11.jp-card-amex .jp-card-back{display:none}.jp-card-logo{height:36px;width:60px;font-style:italic}.jp-card-logo,.jp-card-logo:before,.jp-card-logo:after{box-sizing:border-box}.jp-card-logo.jp-card-amex{text-transform:uppercase;font-size:4px;font-weight:bold;color:white;background-image:repeating-radial-gradient(circle at center, #fff 1px, #999 2px);background-image:repeating-radial-gradient(circle at center, #fff 1px, #999 2px);border:1px solid #EEE}.jp-card-logo.jp-card-amex:before,.jp-card-logo.jp-card-amex:after{width:28px;display:block;position:absolute;left:16px}.jp-card-logo.jp-card-amex:before{height:28px;content:\"american\";top:3px;text-align:left;padding-left:2px;padding-top:11px;background:#267AC3}.jp-card-logo.jp-card-amex:after{content:\"express\";bottom:11px;text-align:right;padding-right:2px}.jp-card.jp-card-amex.jp-card-flipped{-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none}.jp-card.jp-card-amex.jp-card-identified .jp-card-front:before,.jp-card.jp-card-amex.jp-card-identified .jp-card-back:before{background-color:#108168}.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-logo.jp-card-amex{opacity:1}.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-cvc{visibility:visible}.jp-card.jp-card-amex.jp-card-identified .jp-card-front:after{opacity:1}.jp-card-logo.jp-card-discover{background:#f60;color:#111;text-transform:uppercase;font-style:normal;font-weight:bold;font-size:10px;text-align:center;overflow:hidden;z-index:1;padding-top:9px;letter-spacing:.03em;border:1px solid #EEE}.jp-card-logo.jp-card-discover:before,.jp-card-logo.jp-card-discover:after{content:\" \";display:block;position:absolute}.jp-card-logo.jp-card-discover:before{background:white;width:200px;height:200px;border-radius:200px;bottom:-5%;right:-80%;z-index:-1}.jp-card-logo.jp-card-discover:after{width:8px;height:8px;border-radius:4px;top:10px;left:27px;background-color:#f60;background-image:-webkit-radial-gradient(#f60,#fff);background-image:radial-gradient(  #f60,#fff);content:\"network\";font-size:4px;line-height:24px;text-indent:-7px}.jp-card .jp-card-front .jp-card-logo.jp-card-discover{right:12%;top:18%}.jp-card.jp-card-discover.jp-card-identified .jp-card-front:before,.jp-card.jp-card-discover.jp-card-identified .jp-card-back:before{background-color:#86B8CF}.jp-card.jp-card-discover.jp-card-identified .jp-card-logo.jp-card-discover{opacity:1}.jp-card.jp-card-discover.jp-card-identified .jp-card-front:after{-webkit-transition:400ms;-moz-transition:400ms;transition:400ms;content:\" \";display:block;background-color:#f60;background-image:-webkit-linear-gradient(#f60,#ffa366,#f60);background-image:linear-gradient(#f60,#ffa366,#f60);height:50px;width:50px;border-radius:25px;position:absolute;left:100%;top:15%;margin-left:-25px;box-shadow:inset 1px 1px 3px 1px rgba(0,0,0,0.5)}.jp-card-logo.jp-card-visa{background:white;text-transform:uppercase;color:#1A1876;text-align:center;font-weight:bold;font-size:15px;line-height:18px}.jp-card-logo.jp-card-visa:before,.jp-card-logo.jp-card-visa:after{content:\" \";display:block;width:100%;height:25%}.jp-card-logo.jp-card-visa:before{background:#1A1876}.jp-card-logo.jp-card-visa:after{background:#E79800}.jp-card.jp-card-visa.jp-card-identified .jp-card-front:before,.jp-card.jp-card-visa.jp-card-identified .jp-card-back:before{background-color:#191278}.jp-card.jp-card-visa.jp-card-identified .jp-card-logo.jp-card-visa{opacity:1}.jp-card-logo.jp-card-mastercard{color:white;font-weight:bold;text-align:center;font-size:9px;line-height:36px;z-index:1;text-shadow:1px 1px rgba(0,0,0,0.6)}.jp-card-logo.jp-card-mastercard:before,.jp-card-logo.jp-card-mastercard:after{content:\" \";display:block;width:36px;top:0;position:absolute;height:36px;border-radius:18px}.jp-card-logo.jp-card-mastercard:before{left:0;background:red;z-index:-1}.jp-card-logo.jp-card-mastercard:after{right:0;background:#FFAB00;z-index:-2}.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front .jp-card-logo.jp-card-mastercard,.jp-card.jp-card-mastercard.jp-card-identified .jp-card-back .jp-card-logo.jp-card-mastercard{box-shadow:none}.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front:before,.jp-card.jp-card-mastercard.jp-card-identified .jp-card-back:before{background-color:#0061A8}.jp-card.jp-card-mastercard.jp-card-identified .jp-card-logo.jp-card-mastercard{opacity:1}.jp-card-logo.jp-card-maestro{color:white;font-weight:bold;text-align:center;font-size:14px;line-height:36px;z-index:1;text-shadow:1px 1px rgba(0,0,0,0.6)}.jp-card-logo.jp-card-maestro:before,.jp-card-logo.jp-card-maestro:after{content:\" \";display:block;width:36px;top:0;position:absolute;height:36px;border-radius:18px}.jp-card-logo.jp-card-maestro:before{left:0;background:#0064CB;z-index:-1}.jp-card-logo.jp-card-maestro:after{right:0;background:#c00;z-index:-2}.jp-card.jp-card-maestro.jp-card-identified .jp-card-front .jp-card-logo.jp-card-maestro,.jp-card.jp-card-maestro.jp-card-identified .jp-card-back .jp-card-logo.jp-card-maestro{box-shadow:none}.jp-card.jp-card-maestro.jp-card-identified .jp-card-front:before,.jp-card.jp-card-maestro.jp-card-identified .jp-card-back:before{background-color:#0B2C5F}.jp-card.jp-card-maestro.jp-card-identified .jp-card-logo.jp-card-maestro{opacity:1}.jp-card-logo.jp-card-dankort{width:60px;height:36px;padding:3px;border-radius:8px;border:#000 1px solid;background-color:#fff}.jp-card-logo.jp-card-dankort .dk{position:relative;width:100%;height:100%;overflow:hidden}.jp-card-logo.jp-card-dankort .dk:before{background-color:#ED1C24;content:'';position:absolute;width:100%;height:100%;display:block;border-radius:6px}.jp-card-logo.jp-card-dankort .dk:after{content:'';position:absolute;top:50%;margin-top:-7.7px;right:0;width:0;height:0;border-style:solid;border-width:7px 7px 10px 0;border-color:transparent #ED1C24 transparent transparent;z-index:1}.jp-card-logo.jp-card-dankort .d,.jp-card-logo.jp-card-dankort .k{position:absolute;top:50%;width:50%;display:block;height:15.4px;margin-top:-7.7px;background:white}.jp-card-logo.jp-card-dankort .d{left:0;border-radius:0 8px 10px 0}.jp-card-logo.jp-card-dankort .d:before{content:'';position:absolute;top:50%;left:50%;display:block;background:#ED1C24;border-radius:2px 4px 6px 0px;height:5px;width:7px;margin:-3px 0 0 -4px}.jp-card-logo.jp-card-dankort .k{right:0}.jp-card-logo.jp-card-dankort .k:before,.jp-card-logo.jp-card-dankort .k:after{content:'';position:absolute;right:50%;width:0;height:0;border-style:solid;margin-right:-1px}.jp-card-logo.jp-card-dankort .k:before{top:0;border-width:8px 5px 0 0;border-color:#ED1C24 transparent transparent transparent}.jp-card-logo.jp-card-dankort .k:after{bottom:0;border-width:0 5px 8px 0;border-color:transparent transparent #ED1C24 transparent}.jp-card.jp-card-dankort.jp-card-identified .jp-card-front:before,.jp-card.jp-card-dankort.jp-card-identified .jp-card-back:before{background-color:#0055C7}.jp-card.jp-card-dankort.jp-card-identified .jp-card-logo.jp-card-dankort{opacity:1}.jp-card-logo.jp-card-elo{height:50px;width:50px;border-radius:100%;background:black;color:white;text-align:center;text-transform:lowercase;font-size:21px;font-style:normal;letter-spacing:1px;font-weight:bold;padding-top:13px}.jp-card-logo.jp-card-elo .e,.jp-card-logo.jp-card-elo .l,.jp-card-logo.jp-card-elo .o{display:inline-block;position:relative}.jp-card-logo.jp-card-elo .e{-webkit-transform:rotate(-15deg);-moz-transform:rotate(-15deg);-ms-transform:rotate(-15deg);-o-transform:rotate(-15deg);transform:rotate(-15deg)}.jp-card-logo.jp-card-elo .o{position:relative;display:inline-block;width:12px;height:12px;right:0;top:7px;border-radius:100%;background-image:-webkit-linear-gradient( #ff0 50%,red 50%);background-image:linear-gradient( #ff0 50%,red 50%);-webkit-transform:rotate(40deg);-moz-transform:rotate(40deg);-ms-transform:rotate(40deg);-o-transform:rotate(40deg);transform:rotate(40deg);text-indent:-9999px}.jp-card-logo.jp-card-elo .o:before{content:\"\";position:absolute;width:49%;height:49%;background:black;border-radius:100%;text-indent:-99999px;top:25%;left:25%}.jp-card.jp-card-elo.jp-card-identified .jp-card-front:before,.jp-card.jp-card-elo.jp-card-identified .jp-card-back:before{background-color:#6F6969}.jp-card.jp-card-elo.jp-card-identified .jp-card-logo.jp-card-elo{opacity:1}.jp-card-container{-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px;width:350px;max-width:100%;height:200px;margin:auto;z-index:1;position:relative}.jp-card{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;line-height:1;position:relative;width:100%;height:100%;min-width:315px;border-radius:10px;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all 400ms linear;-moz-transition:all 400ms linear;transition:all 400ms linear}.jp-card>*,.jp-card>*:before,.jp-card>*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}.jp-card.jp-card-flipped{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden}.jp-card .jp-card-front,.jp-card .jp-card-back{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all 400ms linear;-moz-transition:all 400ms linear;transition:all 400ms linear;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;border-radius:10px;background:#DDD}.jp-card .jp-card-front:before,.jp-card .jp-card-back:before{content:\" \";display:block;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0;border-radius:10px;-webkit-transition:all 400ms ease;-moz-transition:all 400ms ease;transition:all 400ms ease}.jp-card .jp-card-front:after,.jp-card .jp-card-back:after{content:\" \";display:block}.jp-card .jp-card-front .jp-card-display,.jp-card .jp-card-back .jp-card-display{color:#fff;font-weight:normal;opacity:0.5;-webkit-transition:opacity 400ms linear;-moz-transition:opacity 400ms linear;transition:opacity 400ms linear}.jp-card .jp-card-front .jp-card-display.jp-card-focused,.jp-card .jp-card-back .jp-card-display.jp-card-focused{opacity:1;font-weight:700}.jp-card .jp-card-front .jp-card-cvc,.jp-card .jp-card-back .jp-card-cvc{font-family:\"Bitstream Vera Sans Mono\",Consolas,Courier,monospace;font-size:14px}.jp-card .jp-card-front .jp-card-shiny,.jp-card .jp-card-back .jp-card-shiny{width:50px;height:35px;border-radius:5px;background:#CCC;position:relative}.jp-card .jp-card-front .jp-card-shiny:before,.jp-card .jp-card-back .jp-card-shiny:before{content:\" \";display:block;width:70%;height:60%;border-top-right-radius:5px;border-bottom-right-radius:5px;background:#d9d9d9;position:absolute;top:20%}.jp-card .jp-card-front .jp-card-logo{position:absolute;opacity:0;right:5%;top:8%;-webkit-transition:400ms;-moz-transition:400ms;transition:400ms}.jp-card .jp-card-front .jp-card-lower{width:80%;position:absolute;left:10%;bottom:30px}@media only screen and (max-width: 480px){.jp-card .jp-card-front .jp-card-lower{width:90%;left:5%}}.jp-card .jp-card-front .jp-card-lower .jp-card-cvc{visibility:hidden;float:right;position:relative;bottom:5px}.jp-card .jp-card-front .jp-card-lower .jp-card-number{font-family:\"Bitstream Vera Sans Mono\",Consolas,Courier,monospace;font-size:24px;clear:both;margin-bottom:30px}.jp-card .jp-card-front .jp-card-lower .jp-card-expiry{font-family:\"Bitstream Vera Sans Mono\",Consolas,Courier,monospace;letter-spacing:0em;position:relative;float:right;width:25%}.jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before,.jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:bold;font-size:7px;white-space:pre;display:block;opacity:.5}.jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before{content:attr(data-before);margin-bottom:2px;font-size:7px;text-transform:uppercase}.jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after{position:absolute;content:attr(data-after);text-align:right;right:100%;margin-right:5px;margin-top:2px;bottom:0}.jp-card .jp-card-front .jp-card-lower .jp-card-name{text-transform:uppercase;font-family:\"Bitstream Vera Sans Mono\",Consolas,Courier,monospace;font-size:20px;max-height:45px;position:absolute;bottom:0;width:190px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.jp-card .jp-card-back{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.jp-card .jp-card-back .jp-card-bar{background-color:#444;background-image:-webkit-linear-gradient(#444,#333);background-image:linear-gradient(#444,#333);width:100%;height:20%;position:absolute;top:10%}.jp-card .jp-card-back:after{content:\" \";display:block;background-color:#fff;background-image:-webkit-linear-gradient(#fff,#fff);background-image:linear-gradient(#fff,#fff);width:80%;height:16%;position:absolute;top:40%;left:2%}.jp-card .jp-card-back .jp-card-cvc{position:absolute;top:40%;left:85%;-webkit-transition-delay:600ms;-moz-transition-delay:600ms;transition-delay:600ms}.jp-card .jp-card-back .jp-card-shiny{position:absolute;top:66%;left:2%}.jp-card .jp-card-back .jp-card-shiny:after{content:\"This card has been issued by Jesse Pollak and is licensed for anyone to use anywhere for free.AIt comes with no warranty.A  For support issues, please visit: github.com/jessepollak/card.\";position:absolute;left:120%;top:5%;color:white;font-size:7px;width:230px;opacity:.5}.jp-card.jp-card-identified{box-shadow:0 0 20px rgba(0,0,0,0.3)}.jp-card.jp-card-identified .jp-card-front,.jp-card.jp-card-identified .jp-card-back{background-color:#000;background-color:rgba(0,0,0,0.5)}.jp-card.jp-card-identified .jp-card-front:before,.jp-card.jp-card-identified .jp-card-back:before{-webkit-transition:all 400ms ease;-moz-transition:all 400ms ease;transition:all 400ms ease;background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 30% 30%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 70% 70%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 90% 20%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 15% 80%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),-webkit-linear-gradient(-245deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%);background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 30% 30%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 70% 70%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 90% 20%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-radial-gradient(circle at 15% 80%, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),linear-gradient(-25deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%);opacity:1}.jp-card.jp-card-identified .jp-card-front .jp-card-logo,.jp-card.jp-card-identified .jp-card-back .jp-card-logo{box-shadow:0 0 0 2px rgba(255,255,255,0.3)}.jp-card.jp-card-identified.no-radial-gradient .jp-card-front:before,.jp-card.jp-card-identified.no-radial-gradient .jp-card-back:before{background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),-webkit-linear-gradient(-245deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%);background-image:repeating-linear-gradient(45deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.03) 4px),repeating-linear-gradient(90deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),repeating-linear-gradient(210deg, rgba(255,255,255,0) 1px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.05) 4px),linear-gradient(-25deg, rgba(255,255,255,0) 50%,rgba(255,255,255,0.2) 70%,rgba(255,255,255,0) 90%)}\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var QJ, rreturn, rtrim;

	QJ = function(selector) {
	  if (QJ.isDOMElement(selector)) {
	    return selector;
	  }
	  return document.querySelectorAll(selector);
	};

	QJ.isDOMElement = function(el) {
	  return el && (el.nodeName != null);
	};

	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	QJ.trim = function(text) {
	  if (text === null) {
	    return "";
	  } else {
	    return (text + "").replace(rtrim, "");
	  }
	};

	rreturn = /\r/g;

	QJ.val = function(el, val) {
	  var ret;
	  if (arguments.length > 1) {
	    return el.value = val;
	  } else {
	    ret = el.value;
	    if (typeof ret === "string") {
	      return ret.replace(rreturn, "");
	    } else {
	      if (ret === null) {
	        return "";
	      } else {
	        return ret;
	      }
	    }
	  }
	};

	QJ.preventDefault = function(eventObject) {
	  if (typeof eventObject.preventDefault === "function") {
	    eventObject.preventDefault();
	    return;
	  }
	  eventObject.returnValue = false;
	  return false;
	};

	QJ.normalizeEvent = function(e) {
	  var original;
	  original = e;
	  e = {
	    which: original.which != null ? original.which : void 0,
	    target: original.target || original.srcElement,
	    preventDefault: function() {
	      return QJ.preventDefault(original);
	    },
	    originalEvent: original,
	    data: original.data || original.detail
	  };
	  if (e.which == null) {
	    e.which = original.charCode != null ? original.charCode : original.keyCode;
	  }
	  return e;
	};

	QJ.on = function(element, eventName, callback) {
	  var el, i, j, len, len1, multEventName, originalCallback, ref;
	  if (element.length) {
	    for (i = 0, len = element.length; i < len; i++) {
	      el = element[i];
	      QJ.on(el, eventName, callback);
	    }
	    return;
	  }
	  if (eventName.match(" ")) {
	    ref = eventName.split(" ");
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      multEventName = ref[j];
	      QJ.on(element, multEventName, callback);
	    }
	    return;
	  }
	  originalCallback = callback;
	  callback = function(e) {
	    e = QJ.normalizeEvent(e);
	    return originalCallback(e);
	  };
	  if (element.addEventListener) {
	    return element.addEventListener(eventName, callback, false);
	  }
	  if (element.attachEvent) {
	    eventName = "on" + eventName;
	    return element.attachEvent(eventName, callback);
	  }
	  element['on' + eventName] = callback;
	};

	QJ.addClass = function(el, className) {
	  var e;
	  if (el.length) {
	    return (function() {
	      var i, len, results;
	      results = [];
	      for (i = 0, len = el.length; i < len; i++) {
	        e = el[i];
	        results.push(QJ.addClass(e, className));
	      }
	      return results;
	    })();
	  }
	  if (el.classList) {
	    return el.classList.add(className);
	  } else {
	    return el.className += ' ' + className;
	  }
	};

	QJ.hasClass = function(el, className) {
	  var e, hasClass, i, len;
	  if (!el) {
	    return false;
	  }
	  if (el.length) {
	    hasClass = true;
	    for (i = 0, len = el.length; i < len; i++) {
	      e = el[i];
	      hasClass = hasClass && QJ.hasClass(e, className);
	    }
	    return hasClass;
	  }
	  if (el.classList) {
	    return el.classList.contains(className);
	  } else {
	    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  }
	};

	QJ.removeClass = function(el, className) {
	  var cls, e, i, len, ref, results;
	  if (!el) {
	    return;
	  }
	  if (el.length) {
	    return (function() {
	      var i, len, results;
	      results = [];
	      for (i = 0, len = el.length; i < len; i++) {
	        e = el[i];
	        results.push(QJ.removeClass(e, className));
	      }
	      return results;
	    })();
	  }
	  if (el.classList) {
	    ref = className.split(' ');
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      cls = ref[i];
	      results.push(el.classList.remove(cls));
	    }
	    return results;
	  } else {
	    return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  }
	};

	QJ.toggleClass = function(el, className, bool) {
	  var e;
	  if (!el) {
	    return;
	  }
	  return ((function() {
	    var i, len, results;
	    results = [];
	    for (i = 0, len = el.length; i < len; i++) {
	      e = el[i];
	      results.push(QJ.toggleClass(e, className, bool));
	    }
	    return results;
	  })()) && el.length;
	  if (bool) {
	    if (!QJ.hasClass(el, className)) {
	      return QJ.addClass(el, className);
	    }
	  } else {
	    return QJ.removeClass(el, className);
	  }
	};

	QJ.append = function(el, toAppend) {
	  var e;
	  if (el.length) {
	    return (function() {
	      var i, len, results;
	      results = [];
	      for (i = 0, len = el.length; i < len; i++) {
	        e = el[i];
	        results.push(QJ.append(e, toAppend));
	      }
	      return results;
	    })();
	  }
	  return el.insertAdjacentHTML('beforeend', toAppend);
	};

	QJ.find = function(el, selector) {
	  if (el instanceof NodeList || el instanceof Array) {
	    el = el[0];
	  }
	  return el.querySelectorAll(selector);
	};

	QJ.trigger = function(el, name, data) {
	  var e, error, ev;
	  try {
	    ev = new CustomEvent(name, {
	      detail: data
	    });
	  } catch (error) {
	    e = error;
	    ev = document.createEvent('CustomEvent');
	    if (ev.initCustomEvent) {
	      ev.initCustomEvent(name, true, true, data);
	    } else {
	      ev.initEvent(name, true, true, data);
	    }
	  }
	  return el.dispatchEvent(ev);
	};

	QJ.data = function(el, key, data) {
	  var element, elements, i, len;
	  if (data == null) {
	    data = void 0;
	  }
	  elements = [];
	  if (/NodeList\]/.test(el)) {
	    elements = el;
	  } else {
	    elements = [el];
	  }
	  for (i = 0, len = elements.length; i < len; i++) {
	    element = elements[i];
	    if (!element.customData) {
	      element.customData = {};
	    }
	    if (data === void 0) {
	      return element.customData[key];
	    }
	    element.customData[key] = data;
	  }
	};

	QJ.first = function(el) {
	  var elements;
	  elements = [];
	  if (/NodeList\]/.test(el)) {
	    elements = el;
	  } else {
	    elements = [el];
	  }
	  if (elements.length) {
	    return elements[0];
	  }
	};

	QJ.last = function(el) {
	  var elements;
	  elements = [];
	  if (/NodeList\]/.test(el)) {
	    elements = el;
	  } else {
	    elements = [el];
	  }
	  if (elements.length) {
	    return elements[elements.length - 1];
	  }
	};

	module.exports = QJ;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, inputCardNumber, inputExpire, inputExpireMonth, inputExpireYear, inputRestrictCVC, jumpToNext, luhnCheck, markAsInvalid, pasteCVC, prevInputHandler, reFormatCardNumber, rememberPrevValue, removeInvalidMarkHander, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType, setNewValue, setPreviewValue,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	QJ = __webpack_require__(5);

	defaultFormat = /(\d{1,4})/g;

	cards = [
	  {
	    type: 'mir',
	    pattern: /^(220[0-4])/,
	    format: defaultFormat,
	    length: [16, 19],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'maestro',
	    pattern: /^(50|5[6-9]|6[0-9])/,
	    format: defaultFormat,
	    length: [12, 13, 14, 15, 16, 17, 18, 19],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'mastercard',
	    pattern: /^(5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9][0-9]|27[0-1][0-9]|2720)/,
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'visaelectron',
	    pattern: /^4(026|17500|405|508|844|91[37])/,
	    format: defaultFormat,
	    length: [16],
	    cvcLength: [3],
	    luhn: true
	  }, {
	    type: 'visa',
	    pattern: /^4/,
	    format: defaultFormat,
	    length: [13, 14, 15, 16],
	    cvcLength: [3],
	    luhn: true
	  }
	];

	cardFromNumber = function(num) {
	  var card, i, len;
	  num = (num + '').replace(/\D/g, '');
	  for (i = 0, len = cards.length; i < len; i++) {
	    card = cards[i];
	    if (card.pattern.test(num)) {
	      return card;
	    }
	  }
	};

	cardFromType = function(type) {
	  var card, i, len;
	  for (i = 0, len = cards.length; i < len; i++) {
	    card = cards[i];
	    if (card.type === type) {
	      return card;
	    }
	  }
	};

	luhnCheck = function(num) {
	  var digit, digits, i, len, odd, sum;
	  odd = true;
	  sum = 0;
	  digits = (num + '').split('').reverse();
	  for (i = 0, len = digits.length; i < len; i++) {
	    digit = digits[i];
	    digit = parseInt(digit, 10);
	    if ((odd = !odd)) {
	      digit *= 2;
	    }
	    if (digit > 9) {
	      digit -= 9;
	    }
	    sum += digit;
	  }
	  return sum % 10 === 0;
	};

	hasTextSelected = function(target) {
	  var e, error, ref;
	  try {
	    if ((target.selectionStart != null) && target.selectionStart !== target.selectionEnd) {
	      return true;
	    }
	    if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
	      if (document.selection.createRange().text) {
	        return true;
	      }
	    }
	  } catch (error) {
	    e = error;
	  }
	  return false;
	};

	reFormatCardNumber = function(e) {
	  return setTimeout((function(_this) {
	    return function() {
	      var target, value;
	      target = e.target;
	      value = QJ.val(target);
	      value = value.replace(/\D/g, '');
	      value = Payment.fns.formatCardNumber(value);
	      QJ.val(target, value);
	      QJ.trigger(target, 'change');
	      QJ.trigger(target, 'keyup');
	      return null;
	    };
	  })(this));
	};

	formatCardNumber = function(e) {
	  var card, digit, length, re, target, upperLength, value;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  target = e.target;
	  value = QJ.val(target);
	  card = cardFromNumber(value + digit);
	  length = (value.replace(/\D/g, '') + digit).length;
	  upperLength = 16;
	  if (card) {
	    upperLength = card.length[card.length.length - 1];
	  }
	  if (length >= upperLength) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  if (card && card.type === 'amex') {
	    re = /^(\d{4}|\d{4}\s\d{6})$/;
	  } else {
	    re = /(?:^|\s)(\d{4})$/;
	  }
	  if (re.test(value)) {
	    e.preventDefault();
	    QJ.val(target, value + ' ' + digit);
	    return QJ.trigger(target, 'change');
	  } else if (re.test(value + digit)) {
	    e.preventDefault();
	    QJ.val(target, value + digit + ' ');
	    return QJ.trigger(target, 'change');
	  }
	};

	formatBackCardNumber = function(e) {
	  var target, value;
	  target = e.target;
	  value = QJ.val(target);
	  if (e.meta) {
	    return;
	  }
	  if (e.which !== 8) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  if (/\d\s$/.test(value)) {
	    e.preventDefault();
	    return QJ.val(target, value.replace(/\d\s$/, ''));
	  } else if (/\s\d?$/.test(value)) {
	    e.preventDefault();
	    return QJ.val(target, value.replace(/\s\d?$/, ''));
	  }
	};

	formatExpiry = function(e) {
	  var digit, target, val;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  target = e.target;
	  val = QJ.val(target) + digit;
	  if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
	    e.preventDefault();
	    return QJ.val(target, "0" + val + " / ");
	  } else if (/^\d\d$/.test(val)) {
	    e.preventDefault();
	    return QJ.val(target, val + " / ");
	  }
	};

	formatMonthExpiry = function(e) {
	  var digit, target, val;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  target = e.target;
	  val = QJ.val(target) + digit;
	  if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
	    e.preventDefault();
	    return QJ.val(target, "0" + val);
	  } else if (/^\d\d$/.test(val)) {
	    e.preventDefault();
	    return QJ.val(target, "" + val);
	  }
	};

	formatForwardExpiry = function(e) {
	  var digit, target, val;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  target = e.target;
	  val = QJ.val(target);
	  if (/^\d\d$/.test(val)) {
	    return QJ.val(target, val + " / ");
	  }
	};

	formatForwardSlash = function(e) {
	  var slash, target, val;
	  slash = String.fromCharCode(e.which);
	  if (slash !== '/') {
	    return;
	  }
	  target = e.target;
	  val = QJ.val(target);
	  if (/^\d$/.test(val) && val !== '0') {
	    return QJ.val(target, "0" + val + " / ");
	  }
	};

	formatBackExpiry = function(e) {
	  var target, value;
	  if (e.metaKey) {
	    return;
	  }
	  target = e.target;
	  value = QJ.val(target);
	  if (e.which !== 8) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  if (/\d(\s|\/)+$/.test(value)) {
	    e.preventDefault();
	    return QJ.val(target, value.replace(/\d(\s|\/)*$/, ''));
	  } else if (/\s\/\s?\d?$/.test(value)) {
	    e.preventDefault();
	    return QJ.val(target, value.replace(/\s\/\s?\d?$/, ''));
	  }
	};

	inputExpire = function(e) {
	  var matcher, month, target, value, year;
	  target = e.target;
	  value = QJ.val(target);
	  if (/^\d{2}[\/\.]\d{4}$/.test(value)) {
	    matcher = /^(\d{2})[\/\.](\d{4})$/.exec(value);
	    value = matcher[1] + ' / ' + matcher[2].substring(2);
	  }
	  if (/^\d\d \/$/.test(value)) {
	    setNewValue(target, value.replace(/\D/g, ''));
	    return;
	  }
	  value = value.replace(/\D/g, '');
	  if (value.length > 4) {
	    setPreviewValue(target);
	    month = value.substring(0, 2);
	    year = value.substring(2);
	    if (Payment.fns.validateCardExpiry(month, year)) {
	      jumpToNext(target);
	    } else {
	      markAsInvalid(target);
	    }
	    return;
	  }
	  if (/^\d$/.test(value) && value !== '0' && value !== '1') {
	    setNewValue(target, "0" + value + " / ");
	    return;
	  }
	  if (/^\d\d$/.test(value)) {
	    if (parseInt(value) > 12) {
	      value = '12';
	    }
	    setNewValue(target, value + " / ");
	    return;
	  }
	  if (/^\d\d\d*$/.test(value)) {
	    month = value.substring(0, 2);
	    year = value.substring(2);
	    setNewValue(target, month + " / " + year);
	    if (value.length === 4) {
	      if (Payment.fns.validateCardExpiry(month, year)) {
	        jumpToNext(target);
	      } else {
	        markAsInvalid(target);
	      }
	    }
	  }
	};

	inputExpireMonth = function(e) {
	  var target, value;
	  target = e.target;
	  value = QJ.val(target);
	  value = value.replace(/\D/g, '');
	  if (value.length > 2) {
	    setPreviewValue(target);
	    jumpToNext(target);
	    return;
	  }
	  if (/^\d$/.test(value) && value !== '0' && value !== '1') {
	    value = "0" + value;
	    setNewValue(target, value);
	  }
	  if (/^\d\d$/.test(value)) {
	    if (parseInt(value) > 12) {
	      value = '12';
	    }
	    setNewValue(target, value);
	  }
	  if (value.length === 2) {
	    jumpToNext(target);
	  }
	};

	inputExpireYear = function(e) {
	  var target, value;
	  target = e.target;
	  value = QJ.val(target);
	  value = value.replace(/\D/g, '');
	  if (value.length > 2) {
	    setPreviewValue(target);
	    jumpToNext(target);
	    return;
	  }
	  if (/^\d+$/.test(value)) {
	    setNewValue(target, "" + value);
	  }
	  if (value.length === 2) {
	    jumpToNext(target);
	  }
	};

	inputCardNumber = function(e) {
	  var card, i, l, len, length, maxLength, ref, target, value;
	  target = e.target;
	  value = QJ.val(target);
	  value = Payment.fns.formatCardNumber(value);
	  card = cardFromNumber(value);
	  length = value.replace(/\D/g, '').length;
	  maxLength = 16;
	  if (card) {
	    ref = card.length;
	    for (i = 0, len = ref.length; i < len; i++) {
	      l = ref[i];
	      maxLength = Math.max(l, maxLength);
	    }
	  }
	  if (length > maxLength) {
	    setPreviewValue(target);
	    if (card && Payment.fns.validateCardNumber(value)) {
	      jumpToNext(target);
	    } else {
	      markAsInvalid(target);
	    }
	    return;
	  }
	  setNewValue(target, value);
	  if (length === maxLength) {
	    if (card && Payment.fns.validateCardNumber(value)) {
	      jumpToNext(target);
	    } else {
	      markAsInvalid(target);
	    }
	  }
	};

	pasteCVC = function(e) {
	  return setTimeout((function(_this) {
	    return function() {
	      var target, value;
	      target = e.target;
	      value = QJ.val(target);
	      value = value.replace(/\D/g, '');
	      if (value.length > 3) {
	        value = value.substring(0, 3);
	      }
	      return QJ.val(target, value);
	    };
	  })(this));
	};

	inputRestrictCVC = function(e) {
	  var target, value;
	  target = e.target;
	  value = QJ.val(target);
	  value = value.replace(/\D/g, '');
	  if (!/^\d*/.test(value)) {
	    setPreviewValue(target);
	  }
	  if (value.length > 3) {
	    setNewValue(target, value.substring(0, 3));
	  }
	  if (value.length === 3) {
	    return jumpToNext(target);
	  }
	};

	prevInputHandler = function(e) {
	  var prev, target, which;
	  target = e.target;
	  which = e.which || e.keyCode;
	  if (which === 8 && QJ.val(target).length === 0) {
	    prev = QJ.data(target, 'prev-input');
	    if (prev) {
	      prev.focus();
	      try {
	        return prev.setSelectionRange && prev.setSelectionRange(QJ.val(prev).length, QJ.val(prev).length);
	      } catch (undefined) {}
	    }
	  }
	};

	jumpToNext = function(el) {
	  var next;
	  if (el && QJ.data(el, 'next-input')) {
	    next = QJ.data(el, 'next-input');
	    next.focus();
	    setTimeout(function() {
	      try {
	        next.select && next.select();
	        return next.setSelectionRange && next.setSelectionRange(0, QJ.val(next).length);
	      } catch (undefined) {}
	    });
	  }
	};

	removeInvalidMarkHander = function(e) {
	  var el, which;
	  el = e.target;
	  which = e.which || e.keyCode;
	  if (which === 9) {
	    return;
	  }
	  return QJ.removeClass(el, 'error');
	};

	markAsInvalid = function(el) {
	  return QJ.addClass(el, 'error');
	};

	rememberPrevValue = function(e) {
	  var target;
	  target = e.target;
	  QJ.data(target, 'prev-value', target.value);
	  try {
	    QJ.data(target, 'prev-start', target.selectionStart);
	  } catch (undefined) {}
	};

	setNewValue = function(el, newValue) {
	  var prevStart, prevValue;
	  prevValue = QJ.data(el, 'prev-value');
	  prevStart = QJ.data(el, 'prev-start');
	  if (!prevValue) {
	    prevValue = '';
	  }
	  if (!prevStart) {
	    prevStart = newValue.length + 1;
	  } else {
	    prevStart += newValue.length - prevValue.length;
	  }
	  QJ.val(el, newValue);
	  if (el.setSelectionRange) {
	    setTimeout(function() {
	      try {
	        return el.setSelectionRange(prevStart, prevStart);
	      } catch (undefined) {}
	    });
	  }
	};

	setPreviewValue = function(el) {
	  var prevStart, prevValue;
	  prevValue = QJ.data(el, 'prev-value');
	  prevStart = QJ.data(el, 'prev-start');
	  if (!prevValue) {
	    prevValue = '';
	  }
	  if (!prevStart) {
	    prevStart = prevValue.length;
	  }
	  QJ.val(el, prevValue);
	  if (el.setSelectionRange) {
	    setTimeout(function() {
	      try {
	        return el.setSelectionRange(prevStart, prevStart);
	      } catch (undefined) {}
	    });
	  }
	};

	restrictNumeric = function(e) {
	  var input, ref, ref1;
	  if (e.metaKey || e.ctrlKey || ((ref = e.originalEvent) != null ? ref.ctrlKey : void 0) || ((ref1 = e.originalEvent) != null ? ref1.metaKey : void 0)) {
	    return true;
	  }
	  if (e.which === 32) {
	    return e.preventDefault();
	  }
	  if (e.which === 0) {
	    return true;
	  }
	  if (e.which < 33) {
	    return true;
	  }
	  input = String.fromCharCode(e.which);
	  if (!/[\d\s]/.test(input)) {
	    return e.preventDefault();
	  }
	};

	restrictCardNumber = function(e) {
	  var card, digit, target, value;
	  target = e.target;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  value = (QJ.val(target) + digit).replace(/\D/g, '');
	  card = cardFromNumber(value);
	  if (card) {
	    if (!(value.length <= card.length[card.length.length - 1])) {
	      return e.preventDefault();
	    }
	  } else {
	    if (!(value.length <= 16)) {
	      return e.preventDefault();
	    }
	  }
	};

	restrictExpiry = function(e, length) {
	  var digit, target, value;
	  target = e.target;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  value = QJ.val(target) + digit;
	  value = value.replace(/\D/g, '');
	  if (value.length > length) {
	    return e.preventDefault();
	  }
	};

	restrictCombinedExpiry = function(e) {
	  return restrictExpiry(e, 4);
	};

	restrictMonthExpiry = function(e) {
	  return restrictExpiry(e, 2);
	};

	restrictYearExpiry = function(e) {
	  return restrictExpiry(e, 2);
	};

	restrictCVC = function(e) {
	  var digit, target, val;
	  target = e.target;
	  digit = String.fromCharCode(e.which);
	  if (!/^\d+$/.test(digit)) {
	    return;
	  }
	  if (hasTextSelected(target)) {
	    return;
	  }
	  val = QJ.val(target) + digit;
	  if (!(val.length <= 4)) {
	    return e.preventDefault();
	  }
	};

	setCardType = function(e) {
	  var allTypes, card, cardType, target, val;
	  target = e.target;
	  val = QJ.val(target);
	  cardType = Payment.fns.cardType(val) || 'unknown';
	  if (!QJ.hasClass(target, cardType)) {
	    allTypes = (function() {
	      var i, len, results;
	      results = [];
	      for (i = 0, len = cards.length; i < len; i++) {
	        card = cards[i];
	        results.push(card.type);
	      }
	      return results;
	    })();
	    QJ.removeClass(target, 'unknown');
	    QJ.removeClass(target, allTypes.join(' '));
	    QJ.addClass(target, cardType);
	    QJ.toggleClass(target.closest('.creditCard'), 'identified', cardType !== 'unknown');
	    QJ.toggleClass(target, 'identified', cardType !== 'unknown');
	    return QJ.trigger(target, 'payment.cardType', cardType);
	  }
	};

	Payment = (function() {
	  function Payment() {}

	  Payment.fns = {
	    cardExpiryVal: function(value) {
	      var month, prefix, ref, year;
	      value = value.replace(/\s/g, '');
	      ref = value.split('/', 2), month = ref[0], year = ref[1];
	      if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
	        prefix = (new Date).getFullYear();
	        prefix = prefix.toString().slice(0, 2);
	        year = prefix + year;
	      }
	      month = parseInt(month, 10);
	      year = parseInt(year, 10);
	      return {
	        month: month,
	        year: year
	      };
	    },
	    validateCardNumber: function(num) {
	      var card, ref;
	      num = (num + '').replace(/\s+|-/g, '');
	      if (!/^\d+$/.test(num)) {
	        return false;
	      }
	      card = cardFromNumber(num);
	      if (!card) {
	        return false;
	      }
	      return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
	    },
	    validateCardExpiry: function(month, year) {
	      var currentTime, expiry, prefix, ref, ref1;
	      if (typeof month === 'object' && 'month' in month) {
	        ref = month, month = ref.month, year = ref.year;
	      } else if (typeof month === 'string' && indexOf.call(month, '/') >= 0) {
	        ref1 = Payment.fns.cardExpiryVal(month), month = ref1.month, year = ref1.year;
	      }
	      if (!(month && year)) {
	        return false;
	      }
	      month = QJ.trim(month);
	      year = QJ.trim(year);
	      if (!/^\d+$/.test(month)) {
	        return false;
	      }
	      if (!/^\d+$/.test(year)) {
	        return false;
	      }
	      month = parseInt(month, 10);
	      if (!(month && month <= 12)) {
	        return false;
	      }
	      if (year.length === 2) {
	        prefix = (new Date).getFullYear();
	        prefix = prefix.toString().slice(0, 2);
	        year = prefix + year;
	      }
	      expiry = new Date(year, month);
	      currentTime = new Date;
	      expiry.setMonth(expiry.getMonth() - 1);
	      expiry.setMonth(expiry.getMonth() + 1, 1);
	      return expiry > currentTime;
	    },
	    validateCardCVC: function(cvc, type) {
	      var ref, ref1;
	      cvc = QJ.trim(cvc);
	      if (!/^\d+$/.test(cvc)) {
	        return false;
	      }
	      if (type && cardFromType(type)) {
	        return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
	      } else {
	        return cvc.length >= 3 && cvc.length <= 4;
	      }
	    },
	    cardType: function(num) {
	      var ref;
	      if (!num) {
	        return null;
	      }
	      return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
	    },
	    formatCardNumber: function(num) {
	      var card, groups, ref, upperLength;
	      card = cardFromNumber(num);
	      if (!card) {
	        return num;
	      }
	      upperLength = card.length[card.length.length - 1];
	      num = num.replace(/\D/g, '');
	      num = num.slice(0, upperLength);
	      if (card.format.global) {
	        return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
	      } else {
	        groups = card.format.exec(num);
	        if (groups != null) {
	          groups.shift();
	        }
	        return groups != null ? groups.join(' ') : void 0;
	      }
	    }
	  };

	  Payment.restrictNumeric = function(el) {
	    return QJ.on(el, 'keypress', restrictNumeric);
	  };

	  Payment.cardExpiryVal = function(el) {
	    return Payment.fns.cardExpiryVal(QJ.val(el));
	  };

	  Payment.formatCardCVC = function(el) {
	    Payment.restrictNumeric(el);
	    QJ.on(el, 'keydown', rememberPrevValue);
	    QJ.on(el, 'keydown', prevInputHandler);
	    QJ.on(el, 'keydown', removeInvalidMarkHander);
	    QJ.on(el, 'input', inputRestrictCVC);
	    QJ.on(el, 'paste', pasteCVC);
	    return el;
	  };

	  Payment.formatCardExpiry = function(el) {
	    var month, year;
	    Payment.restrictNumeric(el);
	    if (el.length && el.length === 2) {
	      month = el[0], year = el[1];
	      this.formatCardExpiryMultiple(month, year);
	    } else {
	      QJ.on(el, 'keydown', rememberPrevValue);
	      QJ.on(el, 'keydown', prevInputHandler);
	      QJ.on(el, 'keydown', removeInvalidMarkHander);
	      QJ.on(el, 'input', inputExpire);
	    }
	    return el;
	  };

	  Payment.formatCardExpiryMultiple = function(month, year) {
	    QJ.on(month, 'keydown', rememberPrevValue);
	    QJ.on(year, 'keydown', rememberPrevValue);
	    QJ.on(month, 'keydown', prevInputHandler);
	    QJ.on(year, 'keydown', prevInputHandler);
	    QJ.on(month, 'keydown', removeInvalidMarkHander);
	    QJ.on(year, 'keydown', removeInvalidMarkHander);
	    QJ.on(month, 'input', inputExpireMonth);
	    return QJ.on(year, 'input', inputExpireYear);
	  };

	  Payment.formatCardNumber = function(el) {
	    Payment.restrictNumeric(el);
	    QJ.on(el, 'keydown', rememberPrevValue);
	    QJ.on(el, 'keydown', prevInputHandler);
	    QJ.on(el, 'keydown', removeInvalidMarkHander);
	    QJ.on(el, 'input', inputCardNumber);
	    QJ.on(el, 'keypress', formatCardNumber);
	    QJ.on(el, 'keydown', formatBackCardNumber);
	    QJ.on(el, 'keyup', setCardType);
	    QJ.on(el, 'paste', reFormatCardNumber);
	    return el;
	  };

	  Payment.getCardArray = function() {
	    return cards;
	  };

	  Payment.setCardArray = function(cardArray) {
	    cards = cardArray;
	    return true;
	  };

	  Payment.addToCardArray = function(cardObject) {
	    return cards.push(cardObject);
	  };

	  Payment.removeFromCardArray = function(type) {
	    var key, value;
	    for (key in cards) {
	      value = cards[key];
	      if (value.type === type) {
	        cards.splice(key, 1);
	      }
	    }
	    return true;
	  };

	  return Payment;

	})();

	module.exports = Payment;

	global.Payment = Payment;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * node.extend
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * @fileoverview
	 * Port of jQuery.extend that actually works on node.js
	 */
	var is = __webpack_require__(9);
	var has = __webpack_require__(10);

	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;

	// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
	var setProperty = function setP(target, name, value) {
	  if (defineProperty && name === '__proto__') {
	    defineProperty(target, name, {
	      enumerable: true,
	      configurable: true,
	      value: value,
	      writable: true
	    });
	  } else {
	    target[name] = value;
	  }
	};

	// Return undefined instead of __proto__ if '__proto__' is not an own property
	var getProperty = function getP(obj, name) {
	  if (name === '__proto__') {
	    if (!has(obj, name)) {
	      return void 0;
	    } else if (gOPD) {
	      // In early versions of node, obj['__proto__'] is buggy when obj has
	      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
	      return gOPD(obj, name).value;
	    }
	  }

	  return obj[name];
	};

	// eslint-disable-next-line func-style
	function extend() {
	  var target = arguments[0] || {};
	  var i = 1;
	  var length = arguments.length;
	  var deep = false;
	  var options, name, src, copy, copyIsArray, clone;

	  // Handle a deep copy situation
	  if (typeof target === 'boolean') {
	    deep = target;
	    target = arguments[1] || {};
	    // skip the boolean and the target
	    i = 2;
	  }

	  // Handle case when target is a string or something (possible in deep copy)
	  if (typeof target !== 'object' && !is.fn(target)) {
	    target = {};
	  }

	  for (; i < length; i++) {
	    // Only deal with non-null/undefined values
	    options = arguments[i];
	    if (options != null) {
	      if (typeof options === 'string') {
	        options = options.split('');
	      }
	      // Extend the base object
	      for (name in options) {
	        src = getProperty(target, name);
	        copy = getProperty(options, name);

	        // Prevent never-ending loop
	        if (target === copy) {
	          continue;
	        }

	        // Recurse if we're merging plain objects or arrays
	        if (deep && copy && (is.hash(copy) || (copyIsArray = is.array(copy)))) {
	          if (copyIsArray) {
	            copyIsArray = false;
	            clone = src && is.array(src) ? src : [];
	          } else {
	            clone = src && is.hash(src) ? src : {};
	          }

	          // Never move original objects, clone them
	          setProperty(target, name, extend(deep, clone, copy));

	        // Don't bring in undefined values
	        } else if (typeof copy !== 'undefined') {
	          setProperty(target, name, copy);
	        }
	      }
	    }
	  }

	  // Return the modified object
	  return target;
	}

	/**
	 * @public
	 */
	extend.version = '1.1.7';

	/**
	 * Exports module.
	 */
	module.exports = extend;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/* globals window, HTMLElement */

	'use strict';

	/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */

	var objProto = Object.prototype;
	var owns = objProto.hasOwnProperty;
	var toStr = objProto.toString;
	var symbolValueOf;
	if (typeof Symbol === 'function') {
	  symbolValueOf = Symbol.prototype.valueOf;
	}
	var bigIntValueOf;
	if (typeof BigInt === 'function') {
	  bigIntValueOf = BigInt.prototype.valueOf;
	}
	var isActualNaN = function (value) {
	  return value !== value;
	};
	var NON_HOST_TYPES = {
	  'boolean': 1,
	  number: 1,
	  string: 1,
	  undefined: 1
	};

	var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
	var hexRegex = /^[A-Fa-f0-9]+$/;

	/**
	 * Expose `is`
	 */

	var is = {};

	/**
	 * Test general.
	 */

	/**
	 * is.type
	 * Test if `value` is a type of `type`.
	 *
	 * @param {*} value value to test
	 * @param {String} type type
	 * @return {Boolean} true if `value` is a type of `type`, false otherwise
	 * @api public
	 */

	is.a = is.type = function (value, type) {
	  return typeof value === type;
	};

	/**
	 * is.defined
	 * Test if `value` is defined.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if 'value' is defined, false otherwise
	 * @api public
	 */

	is.defined = function (value) {
	  return typeof value !== 'undefined';
	};

	/**
	 * is.empty
	 * Test if `value` is empty.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is empty, false otherwise
	 * @api public
	 */

	is.empty = function (value) {
	  var type = toStr.call(value);
	  var key;

	  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
	    return value.length === 0;
	  }

	  if (type === '[object Object]') {
	    for (key in value) {
	      if (owns.call(value, key)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  return !value;
	};

	/**
	 * is.equal
	 * Test if `value` is equal to `other`.
	 *
	 * @param {*} value value to test
	 * @param {*} other value to compare with
	 * @return {Boolean} true if `value` is equal to `other`, false otherwise
	 */

	is.equal = function equal(value, other) {
	  if (value === other) {
	    return true;
	  }

	  var type = toStr.call(value);
	  var key;

	  if (type !== toStr.call(other)) {
	    return false;
	  }

	  if (type === '[object Object]') {
	    for (key in value) {
	      if (!is.equal(value[key], other[key]) || !(key in other)) {
	        return false;
	      }
	    }
	    for (key in other) {
	      if (!is.equal(value[key], other[key]) || !(key in value)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if (type === '[object Array]') {
	    key = value.length;
	    if (key !== other.length) {
	      return false;
	    }
	    while (key--) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if (type === '[object Function]') {
	    return value.prototype === other.prototype;
	  }

	  if (type === '[object Date]') {
	    return value.getTime() === other.getTime();
	  }

	  return false;
	};

	/**
	 * is.hosted
	 * Test if `value` is hosted by `host`.
	 *
	 * @param {*} value to test
	 * @param {*} host host to test with
	 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
	 * @api public
	 */

	is.hosted = function (value, host) {
	  var type = typeof host[value];
	  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
	};

	/**
	 * is.instance
	 * Test if `value` is an instance of `constructor`.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an instance of `constructor`
	 * @api public
	 */

	is.instance = is['instanceof'] = function (value, constructor) {
	  return value instanceof constructor;
	};

	/**
	 * is.nil / is.null
	 * Test if `value` is null.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is null, false otherwise
	 * @api public
	 */

	is.nil = is['null'] = function (value) {
	  return value === null;
	};

	/**
	 * is.undef / is.undefined
	 * Test if `value` is undefined.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is undefined, false otherwise
	 * @api public
	 */

	is.undef = is.undefined = function (value) {
	  return typeof value === 'undefined';
	};

	/**
	 * Test arguments.
	 */

	/**
	 * is.args
	 * Test if `value` is an arguments object.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.args = is.arguments = function (value) {
	  var isStandardArguments = toStr.call(value) === '[object Arguments]';
	  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
	  return isStandardArguments || isOldArguments;
	};

	/**
	 * Test array.
	 */

	/**
	 * is.array
	 * Test if 'value' is an array.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an array, false otherwise
	 * @api public
	 */

	is.array = Array.isArray || function (value) {
	  return toStr.call(value) === '[object Array]';
	};

	/**
	 * is.arguments.empty
	 * Test if `value` is an empty arguments object.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
	 * @api public
	 */
	is.args.empty = function (value) {
	  return is.args(value) && value.length === 0;
	};

	/**
	 * is.array.empty
	 * Test if `value` is an empty array.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an empty array, false otherwise
	 * @api public
	 */
	is.array.empty = function (value) {
	  return is.array(value) && value.length === 0;
	};

	/**
	 * is.arraylike
	 * Test if `value` is an arraylike object.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */

	is.arraylike = function (value) {
	  return !!value && !is.bool(value)
	    && owns.call(value, 'length')
	    && isFinite(value.length)
	    && is.number(value.length)
	    && value.length >= 0;
	};

	/**
	 * Test boolean.
	 */

	/**
	 * is.bool
	 * Test if `value` is a boolean.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a boolean, false otherwise
	 * @api public
	 */

	is.bool = is['boolean'] = function (value) {
	  return toStr.call(value) === '[object Boolean]';
	};

	/**
	 * is.false
	 * Test if `value` is false.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is false, false otherwise
	 * @api public
	 */

	is['false'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === false;
	};

	/**
	 * is.true
	 * Test if `value` is true.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is true, false otherwise
	 * @api public
	 */

	is['true'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === true;
	};

	/**
	 * Test date.
	 */

	/**
	 * is.date
	 * Test if `value` is a date.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a date, false otherwise
	 * @api public
	 */

	is.date = function (value) {
	  return toStr.call(value) === '[object Date]';
	};

	/**
	 * is.date.valid
	 * Test if `value` is a valid date.
	 *
	 * @param {*} value value to test
	 * @returns {Boolean} true if `value` is a valid date, false otherwise
	 */
	is.date.valid = function (value) {
	  return is.date(value) && !isNaN(Number(value));
	};

	/**
	 * Test element.
	 */

	/**
	 * is.element
	 * Test if `value` is an html element.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an HTML Element, false otherwise
	 * @api public
	 */

	is.element = function (value) {
	  return value !== undefined
	    && typeof HTMLElement !== 'undefined'
	    && value instanceof HTMLElement
	    && value.nodeType === 1;
	};

	/**
	 * Test error.
	 */

	/**
	 * is.error
	 * Test if `value` is an error object.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an error object, false otherwise
	 * @api public
	 */

	is.error = function (value) {
	  return toStr.call(value) === '[object Error]';
	};

	/**
	 * Test function.
	 */

	/**
	 * is.fn / is.function (deprecated)
	 * Test if `value` is a function.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a function, false otherwise
	 * @api public
	 */

	is.fn = is['function'] = function (value) {
	  var isAlert = typeof window !== 'undefined' && value === window.alert;
	  if (isAlert) {
	    return true;
	  }
	  var str = toStr.call(value);
	  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
	};

	/**
	 * Test number.
	 */

	/**
	 * is.number
	 * Test if `value` is a number.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a number, false otherwise
	 * @api public
	 */

	is.number = function (value) {
	  return toStr.call(value) === '[object Number]';
	};

	/**
	 * is.infinite
	 * Test if `value` is positive or negative infinity.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
	 * @api public
	 */
	is.infinite = function (value) {
	  return value === Infinity || value === -Infinity;
	};

	/**
	 * is.decimal
	 * Test if `value` is a decimal number.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a decimal number, false otherwise
	 * @api public
	 */

	is.decimal = function (value) {
	  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
	};

	/**
	 * is.divisibleBy
	 * Test if `value` is divisible by `n`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} n dividend
	 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
	 * @api public
	 */

	is.divisibleBy = function (value, n) {
	  var isDividendInfinite = is.infinite(value);
	  var isDivisorInfinite = is.infinite(n);
	  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
	  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
	};

	/**
	 * is.integer
	 * Test if `value` is an integer.
	 *
	 * @param value to test
	 * @return {Boolean} true if `value` is an integer, false otherwise
	 * @api public
	 */

	is.integer = is['int'] = function (value) {
	  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
	};

	/**
	 * is.maximum
	 * Test if `value` is greater than 'others' values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is greater than `others` values
	 * @api public
	 */

	is.maximum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value < others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.minimum
	 * Test if `value` is less than `others` values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is less than `others` values
	 * @api public
	 */

	is.minimum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;

	  while (--len >= 0) {
	    if (value > others[len]) {
	      return false;
	    }
	  }

	  return true;
	};

	/**
	 * is.nan
	 * Test if `value` is not a number.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is not a number, false otherwise
	 * @api public
	 */

	is.nan = function (value) {
	  return !is.number(value) || value !== value;
	};

	/**
	 * is.even
	 * Test if `value` is an even number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an even number, false otherwise
	 * @api public
	 */

	is.even = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
	};

	/**
	 * is.odd
	 * Test if `value` is an odd number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an odd number, false otherwise
	 * @api public
	 */

	is.odd = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
	};

	/**
	 * is.ge
	 * Test if `value` is greater than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.ge = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value >= other;
	};

	/**
	 * is.gt
	 * Test if `value` is greater than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */

	is.gt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value > other;
	};

	/**
	 * is.le
	 * Test if `value` is less than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if 'value' is less than or equal to 'other'
	 * @api public
	 */

	is.le = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value <= other;
	};

	/**
	 * is.lt
	 * Test if `value` is less than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if `value` is less than `other`
	 * @api public
	 */

	is.lt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value < other;
	};

	/**
	 * is.within
	 * Test if `value` is within `start` and `finish`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} start lower bound
	 * @param {Number} finish upper bound
	 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
	 * @api public
	 */
	is.within = function (value, start, finish) {
	  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
	    throw new TypeError('all arguments must be numbers');
	  }
	  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
	  return isAnyInfinite || (value >= start && value <= finish);
	};

	/**
	 * Test object.
	 */

	/**
	 * is.object
	 * Test if `value` is an object.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is an object, false otherwise
	 * @api public
	 */
	is.object = function (value) {
	  return toStr.call(value) === '[object Object]';
	};

	/**
	 * is.primitive
	 * Test if `value` is a primitive.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a primitive, false otherwise
	 * @api public
	 */
	is.primitive = function isPrimitive(value) {
	  if (!value) {
	    return true;
	  }
	  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
	    return false;
	  }
	  return true;
	};

	/**
	 * is.hash
	 * Test if `value` is a hash - a plain object literal.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a hash, false otherwise
	 * @api public
	 */

	is.hash = function (value) {
	  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};

	/**
	 * Test regexp.
	 */

	/**
	 * is.regexp
	 * Test if `value` is a regular expression.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a regexp, false otherwise
	 * @api public
	 */

	is.regexp = function (value) {
	  return toStr.call(value) === '[object RegExp]';
	};

	/**
	 * Test string.
	 */

	/**
	 * is.string
	 * Test if `value` is a string.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if 'value' is a string, false otherwise
	 * @api public
	 */

	is.string = function (value) {
	  return toStr.call(value) === '[object String]';
	};

	/**
	 * Test base64 string.
	 */

	/**
	 * is.base64
	 * Test if `value` is a valid base64 encoded string.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
	 * @api public
	 */

	is.base64 = function (value) {
	  return is.string(value) && (!value.length || base64Regex.test(value));
	};

	/**
	 * Test base64 string.
	 */

	/**
	 * is.hex
	 * Test if `value` is a valid hex encoded string.
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
	 * @api public
	 */

	is.hex = function (value) {
	  return is.string(value) && (!value.length || hexRegex.test(value));
	};

	/**
	 * is.symbol
	 * Test if `value` is an ES6 Symbol
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a Symbol, false otherise
	 * @api public
	 */

	is.symbol = function (value) {
	  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
	};

	/**
	 * is.bigint
	 * Test if `value` is an ES-proposed BigInt
	 *
	 * @param {*} value value to test
	 * @return {Boolean} true if `value` is a BigInt, false otherise
	 * @api public
	 */

	is.bigint = function (value) {
	  // eslint-disable-next-line valid-typeof
	  return typeof BigInt === 'function' && toStr.call(value) === '[object BigInt]' && typeof bigIntValueOf.call(value) === 'bigint';
	};

	module.exports = is;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(11);

	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var implementation = __webpack_require__(12);

	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';

	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }

	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};


/***/ })
/******/ ]);