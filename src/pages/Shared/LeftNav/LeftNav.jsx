import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=> res.json())
        .then(data => setCategory(data))
        .catch(error=> console.log(error))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
                {
                    category.map(categories=><p
                    key={categories.id}>
                        <Link to={`/categories/${categories.id}`} className='text-black 
                        text-decoration-none  text-Secondary fs-5'>{categories.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;