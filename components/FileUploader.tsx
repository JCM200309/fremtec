// FileUploader.tsx
import { ChangeEvent } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

type Props = {
  file: File | null;
  setFile: (f: File | null) => void;
  fileStatus: UploadStatus;
  setFileStatus: (s: UploadStatus) => void;
};

export default function FileUploader({ file, setFile, fileStatus, setFileStatus }: Props) {
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    setFileStatus("idle");
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />

      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      {fileStatus === "uploading" && <p>Subiendo...</p>}
    </div>
  );
}
