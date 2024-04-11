import {__} from '@wordpress/i18n';
import {BlockControls, useBlockProps} from '@wordpress/block-editor';
import {registerBlockType} from '@wordpress/blocks';
import {useEffect, useState} from '@wordpress/element';
import {ToolbarButton} from '@wordpress/components';
import {ToolbarItem, MediaItem, ContentItem, Icon} from './components'
import {ReactSortable} from "react-sortablejs";

import './editor.scss';
import './style.scss';

import metadata from './block.json';


registerBlockType(metadata.name, {
    icon: Icon,
    edit: ({clientId, attributes, setAttributes}) => {
        const {anchor, items} = attributes;
        const blockId = `block-${clientId}`;

        useEffect(() => {
            setAttributes({id: anchor || blockId});
        }, []);

        const [state, setState] = useState(items);

        let blockProps = useBlockProps({
            className: ['alignfull'],
        });

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
                    <ReactSortable
                        className="wp-block-tt-test-block__wrap"
                        list={items}
                        setList={(newState) => setAttributes({items: newState})}
                        handle=".wp-block-tt-test-block__item-toolbar-drag-handle"
                        draggable=".wp-block-tt-test-block__item"
                        direction="vertical"
                    >
                        {items.map((item, index) => (
                            <div key={index} className="wp-block-tt-test-block__item">
                                <ToolbarItem index={index} items={items} setAttributes={setAttributes}/>

                                <MediaItem index={index} items={items} item={item} setAttributes={setAttributes}/>
                                <ContentItem index={index} items={items} item={item} setAttributes={setAttributes}/>
                            </div>
                        ))}
                    </ReactSortable>
                </div>
            </>
        );
    }
});
