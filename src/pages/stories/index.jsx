import OpacityContent from "~/components/animated/opacity";
import Title from "~/components/title";
import { Link } from "react-router-dom";
const Stories = () => {
  return (
    <OpacityContent>
      <div className="container mx-auto px-5 pt-16">
        <Title
          title="Anılar"
          description="Hayatımda önemi olan ve paylaşma isteği duyduğum fotoğraflar"
        />
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col items-center w-full">
          <div className="bg-green-300/50 rounded-md p-2 mb-5">
            23 Eylül 2023, Cumartesi
          </div>
          <Link
            to={
              "https://tayfun.net/backend/upload/moments/68555_IMG_0924-Large.jpeg"
            }
            target="_blank"
          >
            <img
              src="https://tayfun.net/backend/upload/moments/68555_IMG_0924-Large.jpeg"
              alt=""
              className="h-96 object-cover rounded-lg"
            />
          </Link>

          <div className="my-5 bg-yellow-300/50 p-2 rounded-md text-base">
            Harika bir güne uyandım.
          </div>
        </div>
      </div>
    </OpacityContent>
  );
};

export default Stories;
