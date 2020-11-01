import React from 'react'; 
import './SearchedTag.css';

const SearchedTag = props => {
    return (
        <div className='SearchedTag'>
            <div className={`text`}> 
                <div className="row">
                    <div className="left">
                        Tag Picture
                    </div>
                    <div className="middle">
                        Tag Name
                    </div>
                    <div className="right">
                        <button>        
                            Add/Delete
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    ); 
}
export default SearchedTag;