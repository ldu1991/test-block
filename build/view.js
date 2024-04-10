/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
console.log('view.js');

/*export default function Scripts( block ) {
    let blockElements =
        block !== undefined
            ? document.querySelectorAll( block )
            : document.querySelectorAll( '.wp-block-tt-test-block' );
    if ( blockElements.length ) {
        blockElements.forEach( ( el ) => {
            new Swiper( el.querySelector( '.swiper' ), {
                slidesPerView: '2',
                spaceBetween: 20,
                speed: 700,
                loop: true,
            } );
        } );
    }
}*/

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
/******/ })()
;
//# sourceMappingURL=view.js.map