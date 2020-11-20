import { OmitProps } from 'antd/lib/transfer/ListBody'
import React, { useEffect, useState } from 'react'
import './CreatePost.css'

const CreatePost = (props) => {

    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [imagePreview, setImage] = useState(null);
    let $imagePreview = null;

    const _handleSubmit = e => {
        console.log();
    }


    useEffect(() => {
        if (imagePreview) {
            $imagePreview = (<img src={imagePreview} />)
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    }, [imagePreview])

    const handleImageChange = e => {
        let reader = new FileReader();
        let file = e.target.files[0]
        reader.onloadend = () => {
            setFile(file);
            setImage(reader.result)
        }

        reader.readAsDataURL(file)
    }

    return (
        <form className="post-creater">

            <div className="fileInput">
                <input type="file" onChange={handleImageChange} />
            </div>
            <div className="imgPreview">
                {$imagePreview}
            </div>
            <div className="contentarea">
                <textarea className="content" type="text" value={content.value} placeholder="content" onChange={setContent} />
            </div>
            <button className="confirmButton" type="confirm">Confirm</button>
        </form>
    )
}

export default CreatePost;