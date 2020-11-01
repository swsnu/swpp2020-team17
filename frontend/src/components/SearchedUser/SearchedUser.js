import React from 'react'; 
import './SearchedUser.css';

const SearchedUser = props => {
    return (
        <div className='SearchedTag'>
            <div className={`text`}> 
                <div className="row">
                    <div className="left">
                        User Picture
                    </div>
                    <div className="middle">
                        User Name
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
export default SearchedUser;