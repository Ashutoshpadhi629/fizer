"use client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Upload, UploadCloud } from "lucide-react";

export default function FileDrop() {
  const { toast } = useToast();
  const [files, setFiles] = useState<Array<File>>([]);
  const [hover, setHover] = useState<boolean>(false);
  const accepted_files = {
    "image/*": [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".ico",
      ".tif",
      ".tiff",
      ".raw",
      ".tga",
    ],
    "audio/*": [],
    "video/*": [],
  };
  const fileSubmitHandler = (uploadedFiles: Array<File>): void => {
    setFiles(uploadedFiles);
  };
  const dragHoverHandler = (): void => {
    setHover(true);
  };
  const exitHoverHandler = (): void => {
    setHover(false);
  };
  const rejectedFileHandler = (): void => {
    exitHoverHandler();
    toast({
      variant: "destructive",
      title: "File type not Allowed",
      description: "Only Audio, Video and Images are Allowed",
      duration: 5000,
    });
  };
  const uploadErrorHandler = (): void => {
    exitHoverHandler();
    toast({
      variant: "destructive",
      title: "Error While Uploading",
      description: "Only Audio, Video and Images are Allowed.",
      duration: 5000,
    });
  };

  return files.length ? (
    <div className="w-full  flex-col bg-slate-300  dark:bg-background mt-10 p-10 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center">
      {files.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  ) : (
    <Dropzone
      onDrop={fileSubmitHandler}
      onDragEnter={dragHoverHandler}
      onDragLeave={exitHoverHandler}
      accept={accepted_files}
      onDropRejected={rejectedFileHandler}
      onError={uploadErrorHandler}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className="w-full bg-slate-300  dark:bg-background mt-10 p-10 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <div className="space-y-4 text-foreground">
            {hover ? (
              <>
                <div className="justify-center flex text-6xl">
                  <UploadCloud />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Yes, right there
                </h3>
              </>
            ) : (
              <>
                <div className="justify-center flex text-6xl">
                  <Upload />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Click, or drop your files here
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </Dropzone>
  );
}
