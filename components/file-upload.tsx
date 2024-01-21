"use client";

import toast from "react-hot-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (data: { url: string; originalFileName?: string }) => void;
  endpoint: keyof typeof ourFileRouter;
};

export const FileUpload = ({
  onChange,
  endpoint
}: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        const url = res?.[0].url;
        const originalFileName = res?.[0].name; // Assuming this field is available
        onChange({ url, originalFileName });
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  )
}