import {MediaUpload, MediaUploadCheck, RichText} from "@wordpress/block-editor";
import {Button} from "@wordpress/components";
import {__} from "@wordpress/i18n";

export const Icon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
            d="M260.4 254.9 131.5 33.1a2.2 2.2 0 0 0 -3.8 0L.3 254.9A2.2 2.2 0 0 0 .3 257.1L129.1 478.9a2.2 2.2 0 0 0 3.8 0L260.4 257.1A2.2 2.2 0 0 0 260.4 254.9zm39.1-25.7a2.2 2.2 0 0 0 1.9 1.1h66.5a2.2 2.2 0 0 0 1.9-3.3L259.1 33.1a2.2 2.2 0 0 0 -1.9-1.1H190.7a2.2 2.2 0 0 0 -1.9 3.3zM511.7 254.9 384.9 33.1A2.2 2.2 0 0 0 383 32h-66.6a2.2 2.2 0 0 0 -1.9 3.3L440.7 256 314.5 476.7a2.2 2.2 0 0 0 1.9 3.3h66.6a2.2 2.2 0 0 0 1.9-1.1L511.7 257.1A2.2 2.2 0 0 0 511.7 254.9zM366 284.9H299.5a2.2 2.2 0 0 0 -1.9 1.1l-108.8 190.6a2.2 2.2 0 0 0 1.9 3.3h66.5a2.2 2.2 0 0 0 1.9-1.1l108.8-190.6A2.2 2.2 0 0 0 366 284.9z"/>
    </svg>
)
export function ToolbarItem({index, items, setAttributes}) {
    return (
        <div className="wp-block-tt-test-block__item-toolbar">
            <div className="wp-block-tt-test-block__item-toolbar-wrap">
                <button
                    className="wp-block-tt-test-block__item-toolbar-drag-handle">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         aria-hidden="true" focusable="false">
                        <path
                            d="M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"></path>
                    </svg>
                </button>
                <button
                    className="wp-block-tt-test-block__item-toolbar-add"
                    onClick={() => {
                        const newItems = [...items];
                        newItems.splice(index, 0, {image: 0, imageUrl: '', title: '', content: ''});
                        setAttributes({items: newItems});
                    }}
                >
                    <svg width="416" height="416" viewBox="0 0 416 416" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M240 32C240 14.3 225.7 0 208 0C190.3 0 176 14.3 176 32V176H32C14.3 176 0 190.3 0 208C0 225.7 14.3 240 32 240H176V384C176 401.7 190.3 416 208 416C225.7 416 240 401.7 240 384V240H384C401.7 240 416 225.7 416 208C416 190.3 401.7 176 384 176H240V32Z"/>
                    </svg>
                </button>
                <button
                    className="wp-block-tt-test-block__item-toolbar-duplicate"
                    onClick={() => {
                        const newItems = [...items];
                        newItems.splice(index + 1, 0, newItems[index]);
                        setAttributes({items: newItems});
                    }}
                >
                    <svg width="512" height="512" viewBox="0 0 512 512" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.7 512 0 483.3 0 448V224C0 188.7 28.7 160 64 160H128V208H64C55.2 208 48 215.2 48 224V448C48 456.8 55.2 464 64 464ZM224 304H448C456.8 304 464 296.8 464 288V64C464 55.2 456.8 48 448 48H224C215.2 48 208 55.2 208 64V288C208 296.8 215.2 304 224 304ZM160 288V64C160 28.7 188.7 0 224 0H448C483.3 0 512 28.7 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288Z"/>
                    </svg>
                </button>
                {items.length > 1 && (
                    <button
                        className="wp-block-tt-test-block__item-toolbar-remove"
                        onClick={() => {
                            const newItems = [...items];
                            newItems.splice(index, 1);
                            setAttributes({items: newItems});
                        }}
                    >
                        <svg width="448" height="512" viewBox="0 0 448 512" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64C0 81.7 14.3 96 32 96H416C433.7 96 448 81.7 448 64C448 46.3 433.7 32 416 32H320L312.8 17.7C307.4 6.8 296.3 0 284.2 0H163.8C151.7 0 140.6 6.8 135.2 17.7ZM416 128H32L53.2 467C54.8 492.3 75.8 512 101.1 512H346.9C372.2 512 393.2 492.3 394.8 467L416 128Z"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}
export function MediaItem({index, items, item, setAttributes}) {
    return (
        <div className="wp-block-tt-test-block__item-media">
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={(media) => {
                        const newItems = [...items];
                        newItems[index].image = media.id;
                        newItems[index].imageUrl = media.url;
                        setAttributes({items: newItems});
                    }}
                    allowedTypes={['image']}
                    value={item.image}
                    render={({open}) => (
                        <>
                            {!item.image && (
                                <Button
                                    className="wp-block-tt-test-block__item-media-upload"
                                    variant="link"
                                    onClick={open}
                                >
                                    {__('Upload Image', 'copyright-date-block')}
                                </Button>
                            )}
                            {!!item.image && (
                                <Button className="wp-block-tt-test-block__item-media-img"
                                        onClick={open}>
                                    <img src={item.imageUrl} alt=""/>
                                </Button>
                            )}

                            {!!item.image && (
                                <div className="wp-block-tt-test-block__item-media-footer">
                                    <Button variant="secondary" onClick={open}>
                                        {__('Replace', 'copyright-date-block')}
                                    </Button>

                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            const newItems = [...items];
                                            newItems[index].image = 0;
                                            setAttributes({items: newItems});
                                        }}
                                        isDestructive
                                    >
                                        {__('Remove', 'copyright-date-block')}
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                />
            </MediaUploadCheck>
        </div>
    )
}
export function ContentItem({index, items, item, setAttributes}) {
    return (
        <div className="wp-block-tt-test-block__item-content">
            <RichText
                tagName="div"
                className="h6"
                value={item.title}
                onChange={(nextTitle) => {
                    const newItems = [...items];
                    newItems[index].title = nextTitle;
                    setAttributes({items: newItems});
                }}
                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color', 'core/subscript', 'core/superscript', 'core/strikethrough']}
                placeholder="Enter heading..."
            />

            <RichText
                tagName="p"
                className="tt-test-paragraph"
                value={item.content}
                onChange={(nextContent) => {
                    const newItems = [...items];
                    newItems[index].content = nextContent;
                    setAttributes({items: newItems});
                }}
                placeholder="Enter your text here..."
            />
        </div>
    )
}
