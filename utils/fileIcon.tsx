import { Image, File, Text, BookAudio, VideoIcon } from "lucide-react";

export function FileIcon({ file_type }: { file_type: string }) {
  if (file_type.includes("video")) return <VideoIcon />;
  if (file_type.includes("audio")) return <BookAudio />;
  if (file_type.includes("text")) return <Text />;
  if (file_type.includes("image")) return <Image />;
  else return <File />;
}
