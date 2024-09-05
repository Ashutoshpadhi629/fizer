import FileDrop from "@/components/file-drop";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center  bg-gradient-to-tr from-zinc-100 to-slate-700 dark:bg-gradient-to-tr dark:from-zinc-800 dark:to-slate-950 p-10">
      <div className=" text-center  space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold mt-4 dark:text-purple-300 text-purple-900">
          FIZER - Free File Converter
        </h1>
        <p className="font-semibold text-md md:text-lg md:text-center md:px-24 xl:px-44 2xl:px-52 text-left">
          Elevate your creativity with Fizer – the all-in-one online platform
          for limitless and free multimedia conversion. Seamlessly convert
          images, audio, and videos with ease, without any restrictions. Start
          transforming your media today and take your content to the next level!
        </p>
        <div className="font-light md:text-sm  text-xs text-justify items-center flex flex-col">
          <p>
            *We operate entirely on the client side, processing files in your
            browser; we don’t store your private files, ensuring your privacy.
          </p>
          <p>
            *For optimal performance, please close other browser tabs if you
            experience slowness.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full h-80">
        <FileDrop />
      </div>
    </div>
  );
}
