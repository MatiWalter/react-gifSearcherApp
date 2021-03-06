import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifSearcherApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>GifSearcherApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                    // categories.map( category => (
                        <GifGrid 
                            key={ categories }
                            category={ categories } 
                        />
                    // )) 
                }
            </ol>

        </>
    )
};

