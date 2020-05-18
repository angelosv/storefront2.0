exports.ids = [0];
exports.modules = {

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/angelosepulveda/Documents/GitHub/storefront2.0/front-end/components/Drawer/Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: ".4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), closeButton && __jsx("div", {
    className: "drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, closeButton), children), __jsx("div", {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileDrawer.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileDrawer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Drawer/Drawer */ "./components/Drawer/Drawer.tsx");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./contexts/drawer/drawer.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");
var _jsxFileName = "/Users/angelosepulveda/Documents/GitHub/storefront2.0/front-end/containers/LayoutContainer/Header/MobileDrawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const DrawerMenuItems = [{
  id: 1,
  intlLabelId: 'navLinkHome',
  label: 'Home',
  href: '/'
}, {
  id: 2,
  intlLabelId: 'navlinkCheckout',
  label: 'Checkout',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROCEED_TO_CHECKOUT_PAGE"]
}, {
  id: 3,
  label: 'Checkout Second',
  intlLabelId: 'alternativeCheckout',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["ALTERNATIVE_CHECKOUT_PAGE"]
}, {
  id: 4,
  intlLabelId: 'navlinkProfile',
  label: 'Profile',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROFILE_PAGE"]
}, {
  id: 5,
  intlLabelId: 'sidebarYourOrder',
  label: 'Order',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["YOUR_ORDER"]
}, {
  id: 6,
  intlLabelId: 'navlinkOrderReceived',
  label: 'Received',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["ORDER_RECEIVED"]
}, {
  id: 7,
  intlLabelId: 'navlinkHelp',
  label: 'Help',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["HELP_PAGE"]
}, {
  id: 8,
  intlLabelId: 'navlinkOffer',
  label: 'Offer',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["OFFER_PAGE"]
}];

const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__["DrawerContext"]);
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]); // Toggle drawer

  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (false) {}
  };

  const resetSearch = () => {
    dispatch({
      type: 'RESET'
    });
  };

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE'
    });
    authDispatch({
      type: 'SIGNIN'
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__["default"],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  return __jsx(components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "316px",
    drawerHandler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["HamburgerIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerClose"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerProfile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, isAuthenticated ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LoginView"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserAvatar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "user_avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserDetails"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, "David Kinderson"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }, "+990 374 987"))) : __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LogoutView"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    intlButtonId: "mobileSignInButtonText",
    title: "Join In",
    size: "small",
    className: "sign_in" // variant="primary"
    ,
    onClick: signInOutForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, DrawerMenuItems.map(item => __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleHandler,
    href: item.href,
    label: item.label,
    intlId: item.intlLabelId,
    className: "drawer_menu_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  })))), isAuthenticated && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UesrOptionMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/profile",
    label: "Your Account Settings",
    className: "drawer_menu_item",
    intlId: "navlinkAccountSettings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, __jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "logoutBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileHeader.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileHeader.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./contexts/drawer/drawer.provider.tsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileDrawer */ "./containers/LayoutContainer/Header/MobileDrawer.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/SearchBox/SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/search/search.context */ "./contexts/search/search.context.tsx");
/* harmony import */ var contexts_header_header_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/header/header.context */ "./contexts/header/header.context.tsx");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! image/logo.svg */ "./image/logo.svg");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Logo/Logo */ "./components/Logo/Logo.tsx");
/* harmony import */ var _Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Menu/LanguageSwitcher/LanguageSwitcher */ "./containers/LayoutContainer/Header/Menu/LanguageSwitcher/LanguageSwitcher.tsx");
/* harmony import */ var _is_home_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../is-home-page */ "./containers/LayoutContainer/is-home-page.ts");
/* harmony import */ var helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! helper/useComponentSize */ "./helper/useComponentSize.js");
var _jsxFileName = "/Users/angelosepulveda/Documents/GitHub/storefront2.0/front-end/containers/LayoutContainer/Header/MobileHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const SearchModal = ({
  state,
  pathname,
  handleSearch
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.text || '');

  const handleSearchInput = text => {
    setText(text);
  };

  const {
    page
  } = state,
        urlState = _objectWithoutProperties(state, ["page"]);

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname,
      query: _objectSpread(_objectSpread({}, urlState), {}, {
        text
      })
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])();
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["SearchModalWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["SearchModalClose"], {
    type: "submit",
    onClick: () => Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__["LongArrowLeft"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "header-modal-search",
    bordered: false,
    inputStyle: {
      height: 35
    },
    buttonText: "",
    placeholder: "Search",
    handleSearch: handleSearchInput,
    value: text,
    onClick: handleClickSearchButton,
    pathname: pathname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
};

const MobileHeader = ({
  className,
  pathname
}) => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__["SearchContext"]);
  const [mobileHeaderRef, dimensions] = Object(helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const {
    headerDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_header_header_context__WEBPACK_IMPORTED_MODULE_8__["HeaderContext"]);
  const headerHeight = dimensions.height;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    headerDispatch({
      type: 'GET_MOBILE_HEIGHT',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        mobileHeight: headerHeight
      })
    });
  }, [headerHeight]);

  const handleSearch = text => {
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        text
      })
    });
  };

  const handleSearchModal = () => {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%'
      },
      closeOnClickOutside: false,
      component: SearchModal,
      componentProps: {
        state,
        pathname,
        handleSearch
      },
      closeComponent: () => __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 29
        }
      })
    });
  };

  const isHomePage = Object(_is_home_page__WEBPACK_IMPORTED_MODULE_13__["isCategoryPage"])(pathname);
  return __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__["DrawerProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderInnerWrapper"], {
    className: className,
    ref: mobileHeaderRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["DrawerWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(_MobileDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_11__["default"], {
    imageUrl: image_logo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "shop logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  })), __jsx(_Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), isHomePage ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__["SearchWrapper"], {
    onClick: handleSearchModal,
    className: "searchIconWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__["SearchIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ }),

/***/ "./contexts/drawer/drawer.context.tsx":
/*!********************************************!*\
  !*** ./contexts/drawer/drawer.context.tsx ***!
  \********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./contexts/drawer/drawer.provider.tsx":
/*!*********************************************!*\
  !*** ./contexts/drawer/drawer.provider.tsx ***!
  \*********************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./contexts/drawer/drawer.context.tsx");
var _jsxFileName = "/Users/angelosepulveda/Documents/GitHub/storefront2.0/front-end/contexts/drawer/drawer.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./helper/debounce.ts":
/*!****************************!*\
  !*** ./helper/debounce.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./helper/useComponentSize.js":
/*!************************************!*\
  !*** ./helper/useComponentSize.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./helper/debounce.ts");

 // maybe use a hook instead?

function useDimensions(liveMeasure = true, delay = 250, initialDimensions = {}) {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialDimensions);
  const {
    0: node,
    1: setNode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newNode => {
    setNode(newNode);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // need ref to continue
    if (!node) {
      return;
    }

    const measure = () => {
      window.requestAnimationFrame(() => {
        const newDimensions = node.getBoundingClientRect();
        setDimensions(newDimensions);
      });
    }; // invoke measure right away


    measure();

    if (liveMeasure) {
      const debounceMeasure = Object(_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(measure, delay);

      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(debounceMeasure);
        resizeObserver.observe(node);
        window.addEventListener('scroll', debounceMeasure);
        return () => {
          resizeObserver.disconnect();
          window.removeEventListener('scroll', debounceMeasure);
        };
      }

      window.addEventListener('resize', debounceMeasure);
      window.addEventListener('scroll', debounceMeasure);
      return () => {
        window.removeEventListener('resize', debounceMeasure);
        window.removeEventListener('scroll', debounceMeasure);
      };
    }
  }, [node, liveMeasure, delay]);
  return [ref, dimensions, node];
}

/* harmony default export */ __webpack_exports__["default"] = (useDimensions); // Usage
// function App() {
//   const [wrapperRef, dimensions] = useDimensions();
//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlci9EcmF3ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0Q29udGFpbmVyL0hlYWRlci9Nb2JpbGVEcmF3ZXIudHN4Iiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvTGF5b3V0Q29udGFpbmVyL0hlYWRlci9Nb2JpbGVIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vaGVscGVyL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL2hlbHBlci91c2VDb21wb25lbnRTaXplLmpzIl0sIm5hbWVzIjpbIkRyYXdlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJwcm9wcyIsInRyaW0iLCJkaXNwbGF5IiwiZGVmYXVsdFByb3BzIiwiRHJhd2VyTWVudUl0ZW1zIiwiaWQiLCJpbnRsTGFiZWxJZCIsImxhYmVsIiwiaHJlZiIsIlBST0NFRURfVE9fQ0hFQ0tPVVRfUEFHRSIsIkFMVEVSTkFUSVZFX0NIRUNLT1VUX1BBR0UiLCJQUk9GSUxFX1BBR0UiLCJZT1VSX09SREVSIiwiT1JERVJfUkVDRUlWRUQiLCJIRUxQX1BBR0UiLCJPRkZFUl9QQUdFIiwiTW9iaWxlRHJhd2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiYXV0aFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aERpc3BhdGNoIiwiQXV0aENvbnRleHQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsImhhbmRsZUxvZ291dCIsInJlc2V0U2VhcmNoIiwic2lnbkluT3V0Rm9ybSIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJoZWlnaHQiLCJpc09wZW4iLCJVc2VySW1hZ2UiLCJtYXAiLCJpdGVtIiwiU2VhcmNoTW9kYWwiLCJwYXRobmFtZSIsImhhbmRsZVNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInBhZ2UiLCJ1cmxTdGF0ZSIsImhhbmRsZUNsaWNrU2VhcmNoQnV0dG9uIiwicHVzaCIsInF1ZXJ5IiwiY2xvc2VNb2RhbCIsIk1vYmlsZUhlYWRlciIsIlNlYXJjaENvbnRleHQiLCJtb2JpbGVIZWFkZXJSZWYiLCJkaW1lbnNpb25zIiwidXNlRGltZW5zaW9ucyIsImhlYWRlckRpc3BhdGNoIiwiSGVhZGVyQ29udGV4dCIsImhlYWRlckhlaWdodCIsInVzZUVmZmVjdCIsInBheWxvYWQiLCJtb2JpbGVIZWlnaHQiLCJoYW5kbGVTZWFyY2hNb2RhbCIsImNvbXBvbmVudFByb3BzIiwiaXNIb21lUGFnZSIsImlzQ2F0ZWdvcnlQYWdlIiwiTG9nb0ltYWdlIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJEcmF3ZXJQcm92aWRlciIsInVzZVJlZHVjZXIiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImV4ZWN1dGVkRnVuY3Rpb24iLCJhcmdzIiwiY29udGV4dCIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxpdmVNZWFzdXJlIiwiZGVsYXkiLCJpbml0aWFsRGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJub2RlIiwic2V0Tm9kZSIsInJlZiIsIm5ld05vZGUiLCJtZWFzdXJlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV3RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRlYm91bmNlTWVhc3VyZSIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFjQSxNQUFNQSxNQUE0QyxHQUFHLFVBVy9DO0FBQUEsTUFYZ0Q7QUFDcERDLGFBRG9EO0FBRXBEQyxZQUZvRDtBQUdwREMsZUFIb0Q7QUFJcERDLG9CQUpvRDtBQUtwREMsaUJBTG9EO0FBTXBEQyxpQkFOb0Q7QUFPcERDLFFBUG9EO0FBUXBEQyxTQVJvRDtBQVNwREM7QUFUb0QsR0FXaEQ7QUFBQSxNQUREQyxLQUNDOztBQUNKLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBRUgsSUFEUjtBQUVFLFdBQU8sRUFBRUQsYUFGWDtBQUdFLGFBQVMsRUFBRyxVQUFTTCxTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUFHLEVBQXJDLENBQXVDVSxJQUF2QyxFQUhiO0FBSUUsU0FBSyxFQUFFSCxLQUpUO0FBS0UsYUFBUyxFQUFFQyxTQUxiO0FBTUUsV0FBTyxFQUFFLEtBTlg7QUFPRSxTQUFLLEVBQUUsSUFQVDtBQVFFLFlBQVEsRUFBQztBQVJYLEtBU01DLEtBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdHUCxXQUFXLElBQ1Y7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLFdBQU8sRUFBRUcsYUFGWDtBQUdFLFNBQUssRUFBRUYsZ0JBSFQ7QUFBQTtB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxudHlwZSBEcmF3ZXJQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2xvc2VCdXR0b24/OiBhbnk7XG4gIGNsb3NlQnV0dG9uU3R5bGU/OiBhbnk7XG4gIGRyYXdlckhhbmRsZXI6IGFueTtcbiAgdG9nZ2xlSGFuZGxlcjogYW55O1xuICBvcGVuOiBhbnk7XG4gIHdpZHRoPzogc3RyaW5nO1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcCcgfCAnYm90dG9tJztcbn07XG5cbmNvbnN0IERyYXdlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8RHJhd2VyUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2xvc2VCdXR0b24sXG4gIGNsb3NlQnV0dG9uU3R5bGUsXG4gIGRyYXdlckhhbmRsZXIsXG4gIHRvZ2dsZUhhbmRsZXIsXG4gIG9wZW4sXG4gIHdpZHRoLFxuICBwbGFjZW1lbnQsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJjRHJhd2VyXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBoYW5kbGVyPXtmYWxzZX1cbiAgICAgICAgbGV2ZWw9e251bGx9XG4gICAgICAgIGR1cmF0aW9uPVwiLjRzXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9fY2xvc2VcIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cbiAgICAgICAgICAgIHN0eWxlPXtjbG9zZUJ1dHRvblN0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1JjRHJhd2VyPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkcmF3ZXJfX2hhbmRsZXJcIlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgPlxuICAgICAgICB7ZHJhd2VySGFuZGxlcn1cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5EcmF3ZXIuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogJzMwMHB4JyxcbiAgcGxhY2VtZW50OiAnbGVmdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9EcmF3ZXIvRHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJ2NvbXBvbmVudHMvTmF2TGluay9OYXZMaW5rJztcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvQWxsU3ZnSWNvbic7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvYXV0aC9hdXRoLmNvbnRleHQnO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tICcuLi8uLi9TaWduSW5PdXRGb3JtL0Zvcm0nO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtcbiAgSGFtYnVyZ2VySWNvbixcbiAgRHJhd2VyQ29udGVudFdyYXBwZXIsXG4gIERyYXdlckNsb3NlLFxuICBEcmF3ZXJQcm9maWxlLFxuICBMb2dvdXRWaWV3LFxuICBMb2dpblZpZXcsXG4gIFVzZXJBdmF0YXIsXG4gIFVzZXJEZXRhaWxzLFxuICBEcmF3ZXJNZW51LFxuICBEcmF3ZXJNZW51SXRlbSxcbiAgVWVzck9wdGlvbk1lbnUsXG59IGZyb20gJy4vSGVhZGVyLnN0eWxlJztcbmltcG9ydCBVc2VySW1hZ2UgZnJvbSAnaW1hZ2UvdXNlci5qcGcnO1xuXG5pbXBvcnQge1xuICBQUk9DRUVEX1RPX0NIRUNLT1VUX1BBR0UsXG4gIEFMVEVSTkFUSVZFX0NIRUNLT1VUX1BBR0UsXG4gIFBST0ZJTEVfUEFHRSxcbiAgWU9VUl9PUkRFUixcbiAgT1JERVJfUkVDRUlWRUQsXG4gIEhFTFBfUEFHRSxcbiAgT0ZGRVJfUEFHRSxcbn0gZnJvbSAnY29uc3RhbnRzL25hdmlnYXRpb24nO1xuXG5jb25zdCBEcmF3ZXJNZW51SXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbnRsTGFiZWxJZDogJ25hdkxpbmtIb21lJyxcbiAgICBsYWJlbDogJ0hvbWUnLFxuICAgIGhyZWY6ICcvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua0NoZWNrb3V0JyxcbiAgICBsYWJlbDogJ0NoZWNrb3V0JyxcbiAgICBocmVmOiBQUk9DRUVEX1RPX0NIRUNLT1VUX1BBR0UsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBsYWJlbDogJ0NoZWNrb3V0IFNlY29uZCcsXG4gICAgaW50bExhYmVsSWQ6ICdhbHRlcm5hdGl2ZUNoZWNrb3V0JyxcbiAgICBocmVmOiBBTFRFUk5BVElWRV9DSEVDS09VVF9QQUdFLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW50bExhYmVsSWQ6ICduYXZsaW5rUHJvZmlsZScsXG4gICAgbGFiZWw6ICdQcm9maWxlJyxcbiAgICBocmVmOiBQUk9GSUxFX1BBR0UsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpbnRsTGFiZWxJZDogJ3NpZGViYXJZb3VyT3JkZXInLFxuICAgIGxhYmVsOiAnT3JkZXInLFxuICAgIGhyZWY6IFlPVVJfT1JERVIsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBpbnRsTGFiZWxJZDogJ25hdmxpbmtPcmRlclJlY2VpdmVkJyxcbiAgICBsYWJlbDogJ1JlY2VpdmVkJyxcbiAgICBocmVmOiBPUkRFUl9SRUNFSVZFRCxcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua0hlbHAnLFxuICAgIGxhYmVsOiAnSGVscCcsXG4gICAgaHJlZjogSEVMUF9QQUdFLFxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgaW50bExhYmVsSWQ6ICduYXZsaW5rT2ZmZXInLFxuICAgIGxhYmVsOiAnT2ZmZXInLFxuICAgIGhyZWY6IE9GRkVSX1BBR0UsXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dDxhbnk+KERyYXdlckNvbnRleHQpO1xuICBjb25zdCB7XG4gICAgYXV0aFN0YXRlOiB7IGlzQXV0aGVudGljYXRlZCB9LFxuICAgIGF1dGhEaXNwYXRjaCxcbiAgfSA9IHVzZUNvbnRleHQ8YW55PihBdXRoQ29udGV4dCk7XG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgICAgYXV0aERpc3BhdGNoKHsgdHlwZTogJ1NJR05fT1VUJyB9KTtcbiAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldFNlYXJjaCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnUkVTRVQnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25Jbk91dEZvcm0gPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG5cbiAgICBhdXRoRGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NJR05JTicsXG4gICAgfSk7XG5cbiAgICBvcGVuTW9kYWwoe1xuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU6ICdxdWljay12aWV3LW92ZXJsYXknLFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Gb3JtLFxuICAgICAgY2xvc2VDb21wb25lbnQ6ICcnLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6ICdxdWljay12aWV3LW1vZGFsJyxcbiAgICAgICAgd2lkdGg6IDQ1OCxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgd2lkdGg9JzMxNnB4J1xuICAgICAgZHJhd2VySGFuZGxlcj17XG4gICAgICAgIDxIYW1idXJnZXJJY29uPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICA8L0hhbWJ1cmdlckljb24+XG4gICAgICB9XG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XG4gICAgICB0b2dnbGVIYW5kbGVyPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgY2xvc2VCdXR0b249e1xuICAgICAgICA8RHJhd2VyQ2xvc2U+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L0RyYXdlckNsb3NlPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxuICAgICAgICA8RHJhd2VyQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgPERyYXdlclByb2ZpbGU+XG4gICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICA8TG9naW5WaWV3PlxuICAgICAgICAgICAgICAgIDxVc2VyQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VzZXJJbWFnZX0gYWx0PSd1c2VyX2F2YXRhcicgLz5cbiAgICAgICAgICAgICAgICA8L1VzZXJBdmF0YXI+XG4gICAgICAgICAgICAgICAgPFVzZXJEZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPGgzPkRhdmlkIEtpbmRlcnNvbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4rOTkwIDM3NCA5ODc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Vc2VyRGV0YWlscz5cbiAgICAgICAgICAgICAgPC9Mb2dpblZpZXc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TG9nb3V0Vmlldz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpbnRsQnV0dG9uSWQ9J21vYmlsZVNpZ25JbkJ1dHRvblRleHQnXG4gICAgICAgICAgICAgICAgICB0aXRsZT0nSm9pbiBJbidcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaWduX2luJ1xuICAgICAgICAgICAgICAgICAgLy8gdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lnbkluT3V0Rm9ybX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xvZ291dFZpZXc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRHJhd2VyUHJvZmlsZT5cblxuICAgICAgICAgIDxEcmF3ZXJNZW51PlxuICAgICAgICAgICAge0RyYXdlck1lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPERyYXdlck1lbnVJdGVtIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIGludGxJZD17aXRlbS5pbnRsTGFiZWxJZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJhd2VyX21lbnVfaXRlbSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0RyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9EcmF3ZXJNZW51PlxuXG4gICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgICAgICAgICA8VWVzck9wdGlvbk1lbnU+XG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj0nL3Byb2ZpbGUnXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nWW91ciBBY2NvdW50IFNldHRpbmdzJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcmF3ZXJfbWVudV9pdGVtJ1xuICAgICAgICAgICAgICAgICAgaW50bElkPSduYXZsaW5rQWNjb3VudFNldHRpbmdzJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRHJhd2VyTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdkcmF3ZXJfbWVudV9pdGVtJz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbG9nb3V0QnRuJz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbmF2bGlua0xvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nTG9nb3V0J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0RyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgPC9VZXNyT3B0aW9uTWVudT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0RyYXdlckNvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xuaW1wb3J0IHsgRHJhd2VyUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9Nb2JpbGVEcmF3ZXInO1xuaW1wb3J0IHtcbiAgTW9iaWxlSGVhZGVyV3JhcHBlcixcbiAgTW9iaWxlSGVhZGVySW5uZXJXcmFwcGVyLFxuICBEcmF3ZXJXcmFwcGVyLFxuICBMb2dvV3JhcHBlcixcbiAgU2VhcmNoV3JhcHBlcixcbiAgU2VhcmNoTW9kYWxXcmFwcGVyLFxuICBTZWFyY2hNb2RhbENsb3NlLFxufSBmcm9tICcuL0hlYWRlci5zdHlsZSc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJ2NvbXBvbmVudHMvU2VhcmNoQm94L1NlYXJjaEJveCc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvc2VhcmNoL3NlYXJjaC5jb250ZXh0JztcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9oZWFkZXIvaGVhZGVyLmNvbnRleHQnO1xuaW1wb3J0IExvZ29JbWFnZSBmcm9tICdpbWFnZS9sb2dvLnN2Zyc7XG5cbmltcG9ydCB7IFNlYXJjaEljb24sIExvbmdBcnJvd0xlZnQgfSBmcm9tICdjb21wb25lbnRzL0FsbFN2Z0ljb24nO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9Mb2dvL0xvZ28nO1xuaW1wb3J0IExhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi9NZW51L0xhbmd1YWdlU3dpdGNoZXIvTGFuZ3VhZ2VTd2l0Y2hlcic7XG5pbXBvcnQgeyBpc0NhdGVnb3J5UGFnZSB9IGZyb20gJy4uL2lzLWhvbWUtcGFnZSc7XG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tICdoZWxwZXIvdXNlQ29tcG9uZW50U2l6ZSc7XG5cbnR5cGUgTW9iaWxlSGVhZGVyUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGF0aG5hbWU/OiBzdHJpbmc7XG4gIGNsb3NlU2VhcmNoPzogYW55O1xufTtcbnR5cGUgU2VhcmNoTW9kYWxQcm9wcyA9IHtcbiAgc3RhdGU/OiBhbnk7XG4gIGhhbmRsZVNlYXJjaD86IGFueTtcbiAgcGF0aG5hbWU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBTZWFyY2hNb2RhbDogUmVhY3QuRkM8U2VhcmNoTW9kYWxQcm9wcz4gPSAoe1xuICBzdGF0ZSxcbiAgcGF0aG5hbWUsXG4gIGhhbmRsZVNlYXJjaCxcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKHN0YXRlLnRleHQgfHwgJycpO1xuICBjb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBzZXRUZXh0KHRleHQpO1xuICB9O1xuICBjb25zdCB7IHBhZ2UsIC4uLnVybFN0YXRlIH0gPSBzdGF0ZTtcblxuICBjb25zdCBoYW5kbGVDbGlja1NlYXJjaEJ1dHRvbiA9ICgpID0+IHtcbiAgICBoYW5kbGVTZWFyY2godGV4dCk7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgLi4udXJsU3RhdGUsXG4gICAgICAgIHRleHQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoTW9kYWxXcmFwcGVyPlxuICAgICAgPFNlYXJjaE1vZGFsQ2xvc2UgdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKCl9PlxuICAgICAgICA8TG9uZ0Fycm93TGVmdCAvPlxuICAgICAgPC9TZWFyY2hNb2RhbENsb3NlPlxuICAgICAgPFNlYXJjaEJveFxuICAgICAgICBjbGFzc05hbWU9J2hlYWRlci1tb2RhbC1zZWFyY2gnXG4gICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgaW5wdXRTdHlsZT17eyBoZWlnaHQ6IDM1IH19XG4gICAgICAgIGJ1dHRvblRleHQ9JydcbiAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCdcbiAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2hJbnB1dH1cbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2VhcmNoQnV0dG9ufVxuICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XG4gICAgICAvPlxuICAgIDwvU2VhcmNoTW9kYWxXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlSGVhZGVyOiBSZWFjdC5GQzxNb2JpbGVIZWFkZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUsIHBhdGhuYW1lIH0pID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG5cbiAgY29uc3QgW21vYmlsZUhlYWRlclJlZiwgZGltZW5zaW9uc10gPSB1c2VEaW1lbnNpb25zKCk7XG4gIGNvbnN0IHsgaGVhZGVyRGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8YW55PihIZWFkZXJDb250ZXh0KTtcblxuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlYWRlckRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfTU9CSUxFX0hFSUdIVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb2JpbGVIZWlnaHQ6IGhlYWRlckhlaWdodCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFtoZWFkZXJIZWlnaHRdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoTW9kYWwgPSAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlYXJjaC1tb2RhbC1tb2JpbGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiBmYWxzZSxcbiAgICAgIGNvbXBvbmVudDogU2VhcmNoTW9kYWwsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBzdGF0ZSwgcGF0aG5hbWUsIGhhbmRsZVNlYXJjaCB9LFxuICAgICAgY2xvc2VDb21wb25lbnQ6ICgpID0+IDxkaXYgLz4sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIb21lUGFnZSA9IGlzQ2F0ZWdvcnlQYWdlKHBhdGhuYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDxNb2JpbGVIZWFkZXJXcmFwcGVyPlxuICAgICAgICA8TW9iaWxlSGVhZGVySW5uZXJXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByZWY9e21vYmlsZUhlYWRlclJlZn0+XG4gICAgICAgICAgPERyYXdlcldyYXBwZXI+XG4gICAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICAgICAgPC9EcmF3ZXJXcmFwcGVyPlxuXG4gICAgICAgICAgPExvZ29XcmFwcGVyPlxuICAgICAgICAgICAgPExvZ28gaW1hZ2VVcmw9e0xvZ29JbWFnZX0gYWx0PSdzaG9wIGxvZ28nIC8+XG4gICAgICAgICAgPC9Mb2dvV3JhcHBlcj5cblxuICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyIC8+XG5cbiAgICAgICAgICB7aXNIb21lUGFnZSA/IChcbiAgICAgICAgICAgIDxTZWFyY2hXcmFwcGVyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaEljb25XcmFwcGVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgPC9TZWFyY2hXcmFwcGVyPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L01vYmlsZUhlYWRlcklubmVyV3JhcHBlcj5cbiAgICAgIDwvTW9iaWxlSGVhZGVyV3JhcHBlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc09wZW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogYW55LCBhY3Rpb246IGFueSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVE9HR0xFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBEcmF3ZXJQcm92aWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RyYXdlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWJvdW5jZTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vZGVib3VuY2UnOyAvLyBtYXliZSB1c2UgYSBob29rIGluc3RlYWQ/XG5cbmZ1bmN0aW9uIHVzZURpbWVuc2lvbnMoXG4gIGxpdmVNZWFzdXJlID0gdHJ1ZSxcbiAgZGVsYXkgPSAyNTAsXG4gIGluaXRpYWxEaW1lbnNpb25zID0ge31cbikge1xuICBjb25zdCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShpbml0aWFsRGltZW5zaW9ucyk7XG4gIGNvbnN0IFtub2RlLCBzZXROb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJlZiA9IHVzZUNhbGxiYWNrKG5ld05vZGUgPT4ge1xuICAgIHNldE5vZGUobmV3Tm9kZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG5lZWQgcmVmIHRvIGNvbnRpbnVlXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVhc3VyZSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaW1lbnNpb25zID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc2V0RGltZW5zaW9ucyhuZXdEaW1lbnNpb25zKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaW52b2tlIG1lYXN1cmUgcmlnaHQgYXdheVxuICAgIG1lYXN1cmUoKTtcblxuICAgIGlmIChsaXZlTWVhc3VyZSkge1xuICAgICAgY29uc3QgZGVib3VuY2VNZWFzdXJlID0gZGVib3VuY2UobWVhc3VyZSwgZGVsYXkpO1xuXG4gICAgICBpZiAoJ1Jlc2l6ZU9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2VNZWFzdXJlKTtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlTWVhc3VyZSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlTWVhc3VyZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VNZWFzdXJlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZU1lYXN1cmUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VNZWFzdXJlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlTWVhc3VyZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW25vZGUsIGxpdmVNZWFzdXJlLCBkZWxheV0pO1xuXG4gIHJldHVybiBbcmVmLCBkaW1lbnNpb25zLCBub2RlXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGltZW5zaW9ucztcblxuLy8gVXNhZ2VcblxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICBjb25zdCBbd3JhcHBlclJlZiwgZGltZW5zaW9uc10gPSB1c2VEaW1lbnNpb25zKCk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IHJlZj17d3JhcHBlclJlZn0+XG4vLyAgICAgICBoZWlnaHQ6IHtkaW1lbnNpb25zLmhlaWdodH1cbi8vICAgICAgIHdpZHRoOiB7ZGltZW5zaW9ucy53aWR0aH1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=