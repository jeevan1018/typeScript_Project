import {useState, useEffect} from 'react';

interface fetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch <T>(url:string):fetchState<T>{
    const [state, setData] = useState<fetchState<T>>({
        data:null,
        loading:true,
        error:null
    });


    return state
   
}