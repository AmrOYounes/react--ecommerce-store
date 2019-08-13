import React from 'react';
import SHOP_DATA from  './shop.data';
import CollectionPreview from '../../components/Collection-Preview/Collection-Preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        console.log(this.state.collections);
        const {collections}=this.state;
    return(
    <div className="shop-page">
     {
         collections.map(({id,...otherCollectionProps})=>(
           <CollectionPreview key={id} {...otherCollectionProps} />
        ))
     }
    
    </div>
    )

    }

}

export default ShopPage;
