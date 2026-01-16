// FileUploader.tsx
import React, { ChangeEvent, useId } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

type Props = {
  file: File | null;
  setFile: (f: File | null) => void;
  fileStatus: UploadStatus;
  setFileStatus: (s: UploadStatus) => void;
};

function formatKB(bytes: number) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function getFileKind(file: File | null) {
  if (!file) return "none";
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) return "pdf";
  if (name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".jpeg")) return "image";
  return "other";
}

function FileIcon({ kind }: { kind: "pdf" | "image" | "other" | "none" }) {
  // Material Symbols (vos ya los usás en tu proyecto)
  const icon =
    kind === "pdf" ? "picture_as_pdf" :
    kind === "image" ? "image" :
    kind === "other" ? "attach_file" :
    "upload_file";

  return (
    <span className="material-symbols-outlined text-3xl">
      {icon}
    </span>
  );
}

export default function FileUploader({ file, setFile, fileStatus, setFileStatus }: Props) {
  const inputId = useId();
  const kind = getFileKind(file);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    setFileStatus("idle");
  }

  function clearFile() {
    setFile(null);
    setFileStatus("idle");
    // Tip: no podemos setear value del input file (seguridad),
    // pero al ocultarlo y depender del estado ya queda bien.
  }

  const hintText =
    file
      ? "Archivo seleccionado"
      : "Subí tu factura (PDF o imagen) para estimar la solución ideal.";

  const statusText =
    fileStatus === "uploading" ? "Subiendo..." :
    fileStatus === "success" ? "Archivo cargado ✔" :
    fileStatus === "error" ? "Error al subir. Probá de nuevo." :
    "";

  const statusClass =
    fileStatus === "uploading" ? "text-gray-600" :
    fileStatus === "success" ? "text-green-700" :
    fileStatus === "error" ? "text-red-700" :
    "text-gray-500";

  return (
    <div className="space-y-3">
      {/* Input real oculto */}
      <input
        id={inputId}
        type="file"
        onChange={handleFileChange}
        accept=".pdf,.png,.jpg,.jpeg"
        className="hidden"
      />

      {/* Área clickeable (label dispara el input) */}
      <label
        htmlFor={inputId}
        className={[
          "group block w-full cursor-pointer rounded-2xl border-2 border-dashed",
          "bg-gray-50 px-5 py-5 transition-all",
          "hover:bg-white hover:border-primary/60 hover:shadow-lg",
          file ? "border-primary/40" : "border-gray-200",
          fileStatus === "error" ? "border-red-300 bg-red-50/40" : "",
          fileStatus === "success" ? "border-green-300 bg-green-50/40" : "",
        ].join(" ")}
      >
        <div className="flex items-start gap-4">
          {/* Ícono */}
          <div
            className={[
              "mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl",
              "bg-white shadow-sm border border-gray-100",
              "group-hover:shadow-md transition",
            ].join(" ")}
          >
            <FileIcon kind={kind === "none" ? "none" : kind} />
          </div>

          {/* Textos */}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="font-black text-background-dark">
                {file ? file.name : "Seleccionar archivo"}
              </p>

              {/* Botoncito “Cambiar” visual (igual abre selector porque todo es label) */}
              <span className="text-sm font-bold text-primary group-hover:underline">
                {file ? "Cambiar" : "Elegir"}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              {hintText}
            </p>

            {file && (
              <p className="mt-2 text-xs text-gray-400">
                Tamaño: {formatKB(file.size)} • Formatos: PDF, JPG, PNG
              </p>
            )}

            {statusText && (
              <p className={`mt-2 text-sm font-semibold ${statusClass}`}>
                {statusText}
              </p>
            )}
          </div>
        </div>
      </label>

      {/* Acciones abajo cuando hay archivo */}
      {file && (
        <div className="flex items-center justify-between rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-gray-600">description</span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-background-dark">{file.name}</p>
              <p className="text-xs text-gray-500">{formatKB(file.size)}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={clearFile}
            className="rounded-xl px-3 py-2 text-sm font-black text-red-600 hover:bg-red-50 transition"
          >
            Quitar
          </button>
        </div>
      )}
    </div>
  );
}
