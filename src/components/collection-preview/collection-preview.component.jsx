import React from 'react';

import  CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const PreviewCollection = ({title, items}) => {
    return ( 
        <div className="collection-preview">
            <h1 className="title">
                {title}
            </h1>
            <div className="preview">
                {
                    items
                    .filter((_, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={'item' + item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;