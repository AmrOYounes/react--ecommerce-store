import  React from 'react';
import './Collection-Preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview =({title,items})=>(
    <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
    { 
     items.filter((item,idx)=>idx<4).map(({id,...itemProps})=>(
        <CollectionItem key={id} {...itemProps}/>
     ))
    }
    </div>
    </div>
);
export default CollectionPreview;