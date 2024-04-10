import {__} from '@wordpress/i18n';
import {BlockControls, useBlockProps} from '@wordpress/block-editor';
import {registerBlockType} from '@wordpress/blocks';
import {useEffect, useState} from '@wordpress/element';
import {ToolbarButton} from '@wordpress/components';
import {ToolbarItem, MediaItem, ContentItem} from './item-components'

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
        const {anchor, items} = attributes;
        const blockId = `block-${clientId}`;
        setAttributes({id: anchor || blockId});

        useEffect(() => {

        }, []);

        let blockProps = useBlockProps({
            className: ['alignfull'],
        });

        const [useItem, setItem] = useState(items);

        //console.log(wp.data.select( 'core/rich-text' ).getFormatTypes())


        return (
            <>
                {
                    <BlockControls>
                        <ToolbarButton
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
                            </svg>}
                            label={__('Add item', 'download-list-block-with-icons')}
                            onClick={() => {
                                setAttributes({
                                    items: [...items, {image: 0, imageUrl: '', title: '', content: ''}],
                                });
                            }}
                        />
                    </BlockControls>
                }

                <div {...blockProps}>
                    <div className="wp-block-tt-test-block__wrap">
                        {items.map((item, index) => (
                            <div key={index} className="wp-block-tt-test-block__item">
                                <ToolbarItem index={index} items={items} setAttributes={setAttributes}/>

                                <MediaItem index={index} items={items} item={item} setAttributes={setAttributes}/>
                                <ContentItem index={index} items={items} item={item} setAttributes={setAttributes}/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
});
