/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scripts)
/* harmony export */ });
function Scripts(block) {
  let blockElements = block !== undefined ? document.querySelectorAll(block) : document.querySelectorAll('.wp-block-tt-test-block');
  if (blockElements.length) {
    blockElements.forEach(el => {
      new Swiper(el.querySelector('.swiper'), {
        slidesPerView: '2',
        spaceBetween: 20,
        speed: 700,
        loop: true
      });
    });
  }
}

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
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");

(0,_scripts__WEBPACK_IMPORTED_MODULE_0__["default"])();

/*
<div className="wp-block-tt-test-block__item">
    <div className="wp-block-tt-test-block__item-media">
        <MediaUploadCheck>
            <MediaUpload
                onSelect={(media) => {
                    setAttributes({image: media.id})
                }}
                allowedTypes={['image']}
                value={image}
                render={({open}) => (
                    <>
                        {!mediaId &&
                            <Button className="wp-block-tt-test-block__item-media-upload"
                                    variant="link"
                                    onClick={open}>
                                {__('Upload Image', 'copyright-date-block')}
                            </Button>
                        }
                        {!!mediaId && !media && <Spinner/>}
                        {!!media && media &&
                            <Button className="wp-block-tt-test-block__item-media-img" onClick={open}>
                                <img src={media.source_url} alt=""/>
                            </Button>
                        }

                        {!!mediaId && media &&
                            <div className="wp-block-tt-test-block__item-media-footer">
                                <Button variant="secondary" onClick={open}>
                                    {__('Replace', 'copyright-date-block')}
                                </Button>

                                <Button variant="primary"
                                        onClick={() => {
                                            setAttributes({image: 0})
                                        }}
                                        isDestructive>
                                    {__('Remove', 'copyright-date-block')}
                                </Button>
                            </div>
                        }
                    </>
                )}
            />
        </MediaUploadCheck>
    </div>

    <div className="wp-block-tt-test-block__item-content">
        <RichText
            tagName="div"
            className="h6"
            value={title}
            onChange={(nextTitle) => {
                setAttributes({
                    title: nextTitle,
                });
            }}
            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color', 'core/subscript', 'core/superscript', 'core/strikethrough']}
            placeholder="Enter heading..."
        />

        <RichText
            tagName="p"
            className="tt-test-paragraph"
            value={content}
            onChange={(nextContent) => {
                setAttributes({
                    content: nextContent,
                });
            }}
            placeholder="Enter your text here..."
        />
    </div>
</div>*/
})();

/******/ })()
;
//# sourceMappingURL=view.js.map