import React from 'react';
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';'); for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break; 
            }
            return cookieValue; 
        }
    } 
}
const csrftoken = getCookie('csrftoken');
const CSRFToken = () => {
    return (
        <div className="CSRFToken">
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} /> 
        </div>
    );
};
export default CSRFToken;