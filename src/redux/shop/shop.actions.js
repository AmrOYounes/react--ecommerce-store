import ShopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshhotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart= ()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
   
});

export const fetchCollectionsSuccess=collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});
export const fetchCollectionsFailure=errorMessage=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot=>{
            const collectionsMap= convertCollectionsSnapshhotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
          // updateCollections(collectionsMap);
           
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message))) ;
    };
};
