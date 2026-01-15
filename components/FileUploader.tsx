import { ChangeEvent, useState } from 'react';

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function FileUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [fileStatus, setFileStatus] = useState<UploadStatus>("idle");

    function handleFileChange(e: ChangeEvent<HTMLInputElement>){
        {/*Guardamos solo el primer archivo*/}
        if (e.target.files){
            setFile(e.target.files[0])
        }
    }

    function handleFileUpload() {
        if (!file) return;

        setFileStatus("uploading");

        
    }

    return (
    <div>
        <input type = "file" onChange={handleFileChange}/>
        {file && (
            <div>
                <p>File name: {file.name}</p>
                <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
            </div>
        )}

    </div>);
}