import React, {useState, useEffect} from 'react';
import { Container, GlobalStyle } from "./App.style";
import { Button } from '../components/Button/index.ts'
import { TextInput } from '../components/TextInput';
import { Image } from '../Types';
import { Image as Img } from '../components/Image';
import { postData } from '../API/API';
import isURL from 'validator/lib/isURL'
import ImageUpload from '../components/ImageUpload/ImageUpload';

export default () => {

    const [img, setImg] = useState(null);
    const [url, setUrl] = useState("");

        useEffect(() => {
            async function getData(): Promise<Image> {
                if (!isURL(url))
                    return;
                try {
                    const data: Image = await postData("/get-size-from-url/", {"url": url});
                    setImg(data);
                }
                catch(error) {
                    setImg(null)
                    console.log(error);
                }
            }
            getData()
        }, [url]);

    console.log("IMAGE->",img)

    return (
            <>
                <GlobalStyle/>
                <TextInput onChange={(e)=>{setUrl(e.target.value)}}/>
                { url && img && img.size ? <Img src={url} alt="img"/> : ""}
                <h1>{url && img && img.size ? "The original size of the image is : " + img.size + " pixels." : ""}</h1>
               <ImageUpload/> 
            </>
        );
};