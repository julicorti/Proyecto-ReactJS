import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {useEffect, useState} from 'react'

const initialState = {
    response:{},
    error:{},
    data:[],
    loading:true,
}

const useFirestore = ({nameCollection,documentId})=>{
    const [state, setState] = useState(initialState)

    useEffect(()=>{
        const db = getFirestore()
        const biciRef = collection(db,nameCollection)
        getDocs(biciRef).then((snapshot)=>{
            const _data = snapshot.docs.map(doc=>doc.data());
            setState({...state, data:_data, loading:false})
        });
    },[documentId,nameCollection])
    return [state.data,state.loading,state.response,state.error];
}

export default useFirestore