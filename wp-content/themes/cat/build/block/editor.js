/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/block/getHeroControls.js":
/*!*************************************!*\
  !*** ./js/block/getHeroControls.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackgroundImageControl": () => (/* binding */ getBackgroundImageControl),
/* harmony export */   "getButtonControl": () => (/* binding */ getButtonControl),
/* harmony export */   "getContentControl": () => (/* binding */ getContentControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const {
  PanelBody,
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  FocalPointPicker,
  Spinner,
  ResponsiveWrapper,
  ButtonGroup,
  Button,
  ColorPalette,
  Icon,
  ToggleControl,
  TextControl,
  CheckboxControl,
  SelectControl
} = wp.components;
const getBackgroundImageControl = (attributes, setAttributes) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'cat'),
    onSelect: imageObject => setAttributes({
      heroBackgroundImage: imageObject.url,
      heroBackgroundID: imageObject.id
    }),
    value: attributes.heroBackgroundID,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!attributes.heroBackgroundID && attributes.heroBackgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: attributes.heroBackgroundImage,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background image')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        className: "cat-panel__button",
        onClick: open,
        variant: "primary"
      }, !attributes.heroBackgroundID && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload image', 'cat'), !!attributes.heroBackgroundID && attributes.heroBackgroundImage && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update image', 'cat'), !!attributes.heroBackgroundID && !attributes.heroBackgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null)), !!attributes.heroBackgroundID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        className: "cat-panel__button",
        onClick: () => setAttributes({
          heroBackgroundID: undefined,
          heroBackgroundImage: ''
        }),
        isDestructive: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image', 'cat'))));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
    colors: [{
      name: 'gray',
      color: '#f1f1f0'
    }, {
      name: 'white',
      color: '#fff'
    }, {
      name: 'black',
      color: '#000'
    }],
    value: attributes.heroBackgroundColor,
    onChange: heroBackgroundColor => setAttributes({
      heroBackgroundColor
    })
  }));
};
const getButtonControl = (attributes, setAttributes) => {
  const isMultipleButtons = attributes.heroButtons.filter(item => item.visible);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isMultipleButtons.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Is horizontal', 'cat'),
    help: "are the buttons horizontal?",
    checked: attributes.heroButtonsHorizontal,
    onChange: () => setAttributes({
      heroButtonsHorizontal: !attributes.heroButtonsHorizontal
    })
  }), attributes.heroButtons.map((button, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    key: `button-${index}`,
    label: button.name,
    checked: button.visible,
    onChange: () => {
      button.visible = !button.visible;
      setAttributes({
        heroButtons: [...attributes.heroButtons]
      });
    }
  }), button.visible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: `${button.name} text`,
    value: button.text,
    onChange: value => {
      button.text = value;
      setAttributes({
        heroButtons: [...attributes.heroButtons]
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: `${button.name} url`,
    type: "url",
    value: button.url,
    onChange: value => {
      button.url = value;
      setAttributes({
        heroButtons: [...attributes.heroButtons]
      });
    }
  })))));
};
const getContentControl = (attributes, setAttributes) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: attributes.contentBox.name,
    checked: attributes.contentBox.visible,
    onChange: () => {
      setAttributes({
        contentBox: { ...attributes.contentBox,
          visible: !attributes.contentBox.visible
        }
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: "Layout",
    value: attributes.contentBox.columnWidth,
    options: [{
      label: 'Vertical',
      value: '100%'
    }, {
      label: 'Horizontal',
      value: '50%'
    }],
    onChange: newWidth => {
      setAttributes({
        contentBox: { ...attributes.contentBox,
          columnWidth: newWidth
        }
      });
    },
    __nextHasNoMarginBottom: true
  }));
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./js/block/editor.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getHeroControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHeroControls */ "./js/block/getHeroControls.js");


/* block.js */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;

const {
  PanelBody,
  Spinner,
  ButtonGroup,
  Button,
  Icon
} = wp.components;

registerBlockType('cat/hero1', {
  title: __('Hero1a', 'cat'),
  // Block name visible to user
  icon: 'align-left',
  // Toolbar icon can be either using WP Dashicons or custom SVG
  category: 'custom-blocks',
  // Under which category the block would appear
  attributes: {
    heroTitle: {
      type: 'string',
      source: 'html',
      selector: '.heroblock-title'
    },
    heroUpperTitle: {
      type: 'string',
      source: 'html',
      selector: '.heroblock-upperTitle'
    },
    heroContent: {
      type: 'string',
      source: 'html',
      selector: '.heroblock-content'
    },
    heroBackgroundID: {
      type: 'number'
    },
    heroBackgroundImage: {
      type: 'string'
    },
    heroBackgroundColor: {
      type: 'string',
      default: '#fff'
    },
    heroButtons: {
      type: 'array',
      default: [{
        visible: false,
        name: 'Button 1',
        text: 'Button 1',
        url: '#',
        theme: 'dark'
      }, {
        visible: false,
        name: 'Button 2',
        text: 'Button 2',
        url: '#',
        theme: 'light'
      }]
    },
    heroButtonsHorizontal: {
      type: 'boolean',
      default: false
    },
    heroMedia: {
      type: 'object',
      default: {
        id: 0,
        url: '',
        name: '',
        type: ''
      }
    },
    contentBox: {
      type: 'object',
      default: {
        visible: false,
        name: 'Content box',
        color: 'white',
        columnWidth: '50%'
      }
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        heroTitle,
        heroUpperTitle,
        heroContent,
        heroBackgroundImage,
        heroBackgroundColor,
        heroButtons,
        contentBox,
        heroMedia,
        heroButtonsHorizontal
      },
      setAttributes
    } = props; // How our block renders in the editor in edit mode
    // const onChangeHeroTitle = (newHeroTitle) => {
    // 	setAttributes({ heroTitle: newHeroTitle });
    // };

    const onChangeHeroContent = newHeroContent => {
      setAttributes({
        heroContent: newHeroContent
      });
    };

    const getInspectorControls = () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        key: "inspector"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Background Image', 'cat')
      }, (0,_getHeroControls__WEBPACK_IMPORTED_MODULE_2__.getBackgroundImageControl)(props.attributes, setAttributes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Content box', 'cat')
      }, (0,_getHeroControls__WEBPACK_IMPORTED_MODULE_2__.getContentControl)(props.attributes, setAttributes)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Button', 'cat')
      }, (0,_getHeroControls__WEBPACK_IMPORTED_MODULE_2__.getButtonControl)(props.attributes, setAttributes)));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} heroblock heroblock-section`,
      style: {
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundColor: heroBackgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `container ${contentBox.columnWidth === '100%' ? 'align--vertical' : ''}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: contentBox.columnWidth
      },
      className: `column heroblock-contentBox ${contentBox.visible ? 'has-box' : ''}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      className: "heroblock-upperTitle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      placeholder: __('Upper title……………', 'cat'),
      value: heroUpperTitle,
      onChange: newUpperTitle => {
        setAttributes({
          heroUpperTitle: newUpperTitle
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "heroblock-title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      placeholder: __('Title……………', 'cat'),
      value: heroTitle,
      onChange: newTitle => {
        setAttributes({
          heroTitle: newTitle
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "heroblock-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      placeholder: __('Description……………', 'cat'),
      value: heroContent,
      onChange: onChangeHeroContent
    })), heroButtons.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `cat-bg__buttonWrapper ${heroButtonsHorizontal ? 'align--horizontal' : ''}`
    }, heroButtons.map((button, index) => button.visible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      key: `button-${index}`,
      className: `cat-bg__button ${button.theme}`,
      onClick: () => {},
      href: button.url
    }, button.text)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: contentBox.columnWidth
      },
      className: "column heroblock-mediaWrapper"
    }, heroMedia.id && heroMedia.type === 'image' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "heroblock-media",
      src: heroMedia.url,
      alt: heroMedia.name
    }) : heroMedia.type === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      className: "heroblock-video",
      controls: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      src: heroMedia.url,
      type: "video/mp4"
    }), "Your browser does not support HTML video."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: heroMediaObject => {
        heroMedia.url = heroMediaObject.url;
        heroMedia.id = heroMediaObject.id;
        heroMedia.name = heroMediaObject.name;
        heroMedia.type = heroMediaObject.type;
        setAttributes({
          heroMedia: { ...heroMedia
          }
        });
      },
      allowedTypes: ['image', 'video'],
      value: heroMedia.id,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: "cat-panel__button",
          onClick: open,
          variant: "primary"
        }, !heroMedia.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
          icon: "format-image"
        }), !!heroMedia.id && heroMedia.url && __('Update file', 'cat'), !!heroMedia.id && !heroMedia.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null)), !!heroMedia.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: "cat-panel__button",
          onClick: () => {
            heroMedia.id = undefined;
            heroMedia.url = '';
            heroMedia.name = '';
            heroMedia.type = '';
            setAttributes({
              heroMedia: { ...heroMedia
              }
            });
          },
          isDestructive: true
        }, __('Remove file', 'cat'))));
      }
    })))));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: `heroblock heroblock-section`,
      style: {
        backgroundImage: `url(${props.attributes.heroBackgroundImage})`,
        backgroundColor: props.attributes.heroBackgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `container ${props.attributes.contentBox.columnWidth === '100%' ? 'align--vertical' : ''} `
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: props.attributes.contentBox.columnWidth
      },
      className: `column heroblock-contentBox ${props.attributes.contentBox.visible ? 'has-box' : ''}`
    }, props.attributes.heroUpperTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      className: "heroblock-upperTitle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: props.attributes.heroUpperTitle
    })), props.attributes.heroTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "heroblock-title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: props.attributes.heroTitle
    })), props.attributes.heroContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "heroblock-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: props.attributes.heroContent
    })), props.attributes.heroButtons.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `cat-bg__buttonWrapper  ${props.attributes.heroButtonsHorizontal ? 'align--horizontal' : ''}`
    }, props.attributes.heroButtons.length > 0 && props.attributes.heroButtons.map((button, index) => button.visible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      key: `button-${index}`,
      className: `cat-bg__button ${button.theme}`,
      onClick: () => {},
      href: button.url
    }, button.text)))), props.attributes.heroMedia.id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: props.attributes.contentBox.columnWidth
      },
      className: "column heroblock-mediaWrapper"
    }, props.attributes.heroMedia.type === 'image' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "heroblock-media",
      src: props.attributes.heroMedia.url,
      alt: props.attributes.heroMedia.name
    })) : props.attributes.heroMedia.type === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      className: "heroblock-video",
      controls: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      src: props.attributes.heroMedia.url,
      type: "video/mp4"
    }), "Your browser does not support HTML video."))) : ''));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map