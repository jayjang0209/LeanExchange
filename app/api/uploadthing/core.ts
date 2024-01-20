import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  console.log("userId", userId)

  if (!userId ) throw new Error("Unauthorized");
  return { userId };
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512MB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
