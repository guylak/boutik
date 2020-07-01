import React from 'react';
import './collection-preview-styles.scss';
import '../collection-item/collection-item-component';
import CollectionItem from "../collection-item/collection-item-component";

const CollectionPreview = ({title,items})=>(
    <div className='collection-preview'>
    <h1 className='title'> {title.toUpperCase()}</h1>
        <div className='preview'>
            { //DESTRUCTURATION OF {item} in map and
                //Collection-item component
                items.filter((item,index)=>(index<4))
                    .map(({id,...otherItemProps})=>(
                    //<div key={item.id}> {item.name} </div>
                <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;