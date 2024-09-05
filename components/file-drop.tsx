"use client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { Upload, UploadCloud } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { compressFilename } from "@/utils/compress-name";
import bytesToSize from "@/utils/bytesTosize";
import { FileIcon } from "@/utils/fileIcon";
import { Button } from "./ui/button";

export default function FileDrop() {
  const { toast } = useToast();
  const [files, setFiles] = useState<Array<any>>([]);
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
  const fileSubmitHandler = (uploadedFiles: Array<any>): void => {
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
    <div className="w-full  flex-col bg-slate-300  dark:bg-background mt-10 p-10 rounded-3xl shadow-sm border-secondary border-2 border-dashed flex ">
      <ScrollArea>
        {files.map((p, index) => (
          <div key={index} className="w-full ">
            <Card className=" w-full p-2 m-2 dark:bg-slate-900">
              <CardContent>
                <div className="flex ">
                  <FileIcon file_type={p.type} />
                  <span className="ml-2">{compressFilename(p.name)}</span>
                  <span className="ml-2">{p.file_type}</span>
                  <span className="ml-2">({bytesToSize(p.size)})</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="flex justify-end">
          <Button>CONVERT</Button>
        </div>
      </ScrollArea>
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
