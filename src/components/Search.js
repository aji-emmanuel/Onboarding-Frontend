import React, { useRef } from 'react';

const Search = ({search, placeholder}) => {

    const keyword = useRef("");

    const onClick = (e) =>{
        if(keyword.current.value !== ""){
            search(e.target.value);
        };
    };

    return (
         <div className="search">
            <span className="fa fa-search" ></span>
            <input type="search" placeholder={placeholder} onChange={onClick}
                    ref={keyword} />
        </div>
    );
};

export default Search;
