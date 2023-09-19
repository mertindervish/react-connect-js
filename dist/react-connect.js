'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "2.0.2";

var ConnectComponentsContext = /*#__PURE__*/React__namespace.createContext(null);
ConnectComponentsContext.displayName = 'ConnectComponents';
var ConnectComponentsProvider = function ConnectComponentsProvider(_ref) {
  var connectInstance = _ref.connectInstance,
    children = _ref.children;
  return /*#__PURE__*/React__namespace.createElement(ConnectComponentsContext.Provider, {
    value: {
      connectInstance: connectInstance
    }
  }, children);
};
var useConnectComponents = function useConnectComponents() {
  var context = React__namespace.useContext(ConnectComponentsContext);
  if (!context) {
    throw new Error("Could not find Components context; You need to wrap the part of your app in an <ConnectComponentsProvider> provider.");
  }
  return context;
};

var useCreateComponent = function useCreateComponent(tagName) {
  var _React$useState = React__namespace.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    component = _React$useState2[0],
    setComponent = _React$useState2[1];
  var _useConnectComponents = useConnectComponents(),
    connectInstance = _useConnectComponents.connectInstance;
  var wrapperDivRef = React__namespace.useRef(null);
  var wrapper = /*#__PURE__*/React__namespace.createElement("div", {
    ref: wrapperDivRef
  });
  React__namespace.useLayoutEffect(function () {
    if (wrapperDivRef.current !== null && component === null) {
      try {
        connectInstance.setReactSdkAnalytics(version);
      } catch (e) {
        console.log('Error setting React Sdk version with error message: ', e);
      }
      var newComponent = connectInstance.create(tagName);
      setComponent(newComponent);
      if (newComponent !== null) {
        wrapperDivRef.current.replaceChildren(newComponent);
      }
    }
  }, []);
  return {
    wrapper: wrapper,
    component: component
  };
};

var useAttachAttribute = function useAttachAttribute(component, attribute, value) {
  React__default["default"].useEffect(function () {
    if (component && value !== undefined) {
      component.setAttribute(attribute, value.toString());
    }
  }, [component, attribute, value]);
};

exports.ConnectElementEventNames = void 0;
(function (ConnectElementEventNames) {
  ConnectElementEventNames["exit"] = "exit";
  ConnectElementEventNames["close"] = "close";
  ConnectElementEventNames["instantPayoutCreated"] = "instantpayoutcreated";
})(exports.ConnectElementEventNames || (exports.ConnectElementEventNames = {}));
var useAttachEvent = function useAttachEvent(component, eventName, listener) {
  React__default["default"].useEffect(function () {
    if (component) {
      component.addEventListener(eventName, listener);
    }
    return function () {
      if (component) {
        component.removeEventListener(eventName, listener);
      }
    };
  }, [component, eventName, listener]);
};

var ConnectAccountOnboarding = function ConnectAccountOnboarding(_ref) {
  var onExit = _ref.onExit,
    recipientTermsOfServiceUrl = _ref.recipientTermsOfServiceUrl,
    fullTermsOfServiceUrl = _ref.fullTermsOfServiceUrl,
    privacyPolicyUrl = _ref.privacyPolicyUrl,
    skipTermsOfServiceCollection = _ref.skipTermsOfServiceCollection;
  var _useCreateComponent = useCreateComponent('account-onboarding'),
    wrapper = _useCreateComponent.wrapper,
    onboarding = _useCreateComponent.component;
  useAttachAttribute(onboarding, 'recipient-terms-of-service-url', recipientTermsOfServiceUrl);
  useAttachAttribute(onboarding, 'full-terms-of-service-url', fullTermsOfServiceUrl);
  useAttachAttribute(onboarding, 'privacy-policy-url', privacyPolicyUrl);
  useAttachAttribute(onboarding, 'skip-terms-of-service-collection', skipTermsOfServiceCollection);
  useAttachEvent(onboarding, exports.ConnectElementEventNames.exit, onExit);
  return wrapper;
};

exports.ConnectAccountOnboarding = ConnectAccountOnboarding;
exports.ConnectComponentsProvider = ConnectComponentsProvider;
exports.useAttachAttribute = useAttachAttribute;
exports.useAttachEvent = useAttachEvent;
exports.useConnectComponents = useConnectComponents;
exports.useCreateComponent = useCreateComponent;
