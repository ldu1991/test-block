import {__} from '@wordpress/i18n';
import {InspectorControls, useBlockProps, RichText, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {registerBlockType} from '@wordpress/blocks';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Button, Spinner} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import Scripts from './scripts';

import './editor.scss';
import './style.scss';

import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            d="M260.4 254.9 131.5 33.1a2.2 2.2 0 0 0 -3.8 0L.3 254.9A2.2 2.2 0 0 0 .3 257.1L129.1 478.9a2.2 2.2 0 0 0 3.8 0L260.4 257.1A2.2 2.2 0 0 0 260.4 254.9zm39.1-25.7a2.2 2.2 0 0 0 1.9 1.1h66.5a2.2 2.2 0 0 0 1.9-3.3L259.1 33.1a2.2 2.2 0 0 0 -1.9-1.1H190.7a2.2 2.2 0 0 0 -1.9 3.3zM511.7 254.9 384.9 33.1A2.2 2.2 0 0 0 383 32h-66.6a2.2 2.2 0 0 0 -1.9 3.3L440.7 256 314.5 476.7a2.2 2.2 0 0 0 1.9 3.3h66.6a2.2 2.2 0 0 0 1.9-1.1L511.7 257.1A2.2 2.2 0 0 0 511.7 254.9zM366 284.9H299.5a2.2 2.2 0 0 0 -1.9 1.1l-108.8 190.6a2.2 2.2 0 0 0 1.9 3.3h66.5a2.2 2.2 0 0 0 1.9-1.1l108.8-190.6A2.2 2.2 0 0 0 366 284.9z"/>
    </svg>
);

registerBlockType(metadata.name, {
    icon: icon,
    edit: ({clientId, attributes, setAttributes}) => {
        const {anchor, image, title, content} = attributes;
        const blockId = `block-${clientId}`;
        setAttributes({id: anchor || blockId});

        useEffect(() => {
            //Scripts(`#${blockId}`);
        }, []);

        let blockProps = useBlockProps({
            className: ['alignfull'],
        });

        //console.log(wp.data.select( 'core/rich-text' ).getFormatTypes())

        const {mediaId, media} = useSelect(select => {
            return {
                mediaId: image,
                media: select('core').getMedia(image)
            }
        }, [image]);

        return (
            <>
                {/*<InspectorControls>
                    <PanelBody title={__('Settings', 'copyright-date-block')}>
                        <TextControl
                            label={__('Starting Text', 'copyright-date-block')}
                            value={startingText || ''}
                            onChange={(value) => setAttributes({startingText: value})}
                        />
                    </PanelBody>
                </InspectorControls>*/}

                <div {...blockProps}>

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
                    </div>

                </div>
            </>
        );
    }
});
