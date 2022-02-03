import React, {useState, useEffect} from 'react';
import { GlobalStyle } from "./App.style";
import { Button } from '../components/Button/index.ts'
import { TextInput } from '../components/TextInput';
import { Image } from '../Types';
import { postData } from '../API/API';

export default () => {

    const [img, setImg] = useState(null);
    const [url, setUrl] = useState(null);

        useEffect(() => {
            async function getData(): Promise<Image> {
                if (!url) 
                    return;
                const data: Image = await postData("/get-size-from-url/", {"url": url});
                setImg(data);
            }
            getData()
        }, [url]);

    if (img) console.log("IMAGE->",img)

    return (
            <>
                <GlobalStyle/>
                <TextInput onChange={(e)=>{setUrl(e.target.value)}}/>
                <Button>load</Button>
                <h1>{img != null ? "The size of the image is : " + img.size + " pixels." : ""}</h1>
            </>
        );
};