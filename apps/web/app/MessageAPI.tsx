import React, {useState, useEffect} from 'react';

// fetch data from laravel api.
// maybe we should use axios instead of fetch to make it easier error handling.
export const getMessageFromAPI = async () => {
    try{
        const response = await fetch('http://localhost:8080/api/test');
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data.message;
    }catch(error){
        console.log(error);
    }
}