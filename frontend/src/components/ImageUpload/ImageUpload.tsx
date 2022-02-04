import React, { useState } from 'react'
import { postData } from '../../API/API';
import { Button } from '../Button/index.ts';
import { File, Image } from '../../Types';
import { Image as Img } from '../../components/Image';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e: any) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        const response: Image = await postData("/get-size-from-path/", data, true);
        console.log("FILES->", files);
        console.log("RESPONSE->", response)
        console.log("FORMDATA->", data)
        setImage(response)
        if (image) console.log("PAH->",image.path)
    }
    return (
        <div>
            <input type="file"
                name="file"
                placeholder="Upload an image"
                onChange={(e)=>{uploadImage(e)}}
            />
            {image && image.path ? <Img src={image.path} alt="image"/> : "Loading..."}
            <h1>{image && image.size ? "The original size of the image is : " + image.size + " pixels." : ""}</h1>
        </div>
    );
}

export default ImageUpload;
