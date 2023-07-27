import { Link } from "react-router-dom";
const Me = () => {
  return (
    <div className="flex flex-col">
      <span className="text-xl md:text-3xl font-bold">Merhaba, ben Ali</span>
      <span className="text-base md:text-xl">
        Video oyunu oynamayı seven ve bir çok spor dalı ile uğraşan Web
        uygulamaları geliştirmeyi seven bir <br />
        <span className="text-yellow-400">Yazılım Mühendisi</span>yim. Şuan da
        ise{" "}
        <Link
          className="relative before:w-full before:absolute before:bottom-0 before:bg-yellow-400 before:h-1 before:left-1 before:hover:h-full z-[1] before:-z-[1] before:transition-all"
          to="https://bulutsoft.com.tr"
          target="_blank"
        >
          bulutsoft
        </Link>{" "}
        şirketinde Fullstack Geliştirici olarak çalışıyorum.
      </span>
      <span className="mt-5 text-base md:text-xl">
        Benim ile iletişime geçmek için{" "}
        <Link
          className="relative before:w-full before:absolute before:bottom-0 before:bg-gray-600 before:h-1 before:left-1 before:hover:h-full z-[1] before:-z-[1] before:transition-all"
          to="https://x.com/alisen_js"
          target="_blank"
        >
          X
        </Link>
        ,{" "}
        <Link
          className="relative before:w-full before:absolute before:bottom-0 before:bg-blue-700 before:h-1 before:left-1 before:hover:h-full z-[1] before:-z-[1] before:transition-all"
          to="https://linkedin.com/in/mr-ali-sen/"
          target="_blank"
        >
          linkedin
        </Link>
        ,{" "}
        <Link
          className="relative before:w-full before:absolute before:bottom-0 before:bg-purple-600 before:h-1 before:left-1 before:hover:h-full z-[1] before:-z-[1] before:transition-all"
          to="instagram.com/alisen.js"
          target="_blank"
        >
          instagram
        </Link>{" "}
        veya{" "}
        <Link
          className="relative before:w-full before:absolute before:bottom-0 before:bg-green-600 before:h-1 before:left-1 before:hover:h-full z-[1] before:-z-[1] before:transition-all"
          to="mailto:hello@alisen.me"
        >
          email
        </Link>
      </span>
    </div>
  );
};

export default Me;
