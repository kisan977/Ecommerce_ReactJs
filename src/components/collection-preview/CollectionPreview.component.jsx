import React from  'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import './CollectionPreview.style.css';

const CollectionPreview = ({title,items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {items.filter((item,idx)=>idx <4).map(({id,...otherItemProps})=>(
                   <CollectionItem id={id} {...otherItemProps} />
                ))}
            </div>

        </div>
    )
}
export default CollectionPreview;