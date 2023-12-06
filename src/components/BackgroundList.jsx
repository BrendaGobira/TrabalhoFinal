import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

import './BackgroundList.css';

function BackgroundList({ backgrounds, onFavorite, icon }) {
  return (
    <div className="grid-container">
      {
        backgrounds.map((bg) => (
          <div className="card" key={bg.background}>
            <div className="card-content">
              <img
                alt="Wallpaper 1"
                className="object-cover w-full h-48 mb-4"
                height="200"
                src={bg.background}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex justify-between items-center">
                <button onClick={() => onFavorite(bg)}>
                  {
                    icon == 'check' ? (
                      <>
                        {
                          bg.isFavorite ? <FaRegCheckSquare /> : <FaRegSquare />
                        }
                      </>
                    ) : (
                      <IconHeart className="w-6 h-6" filled={ bg.isFavorite } color="yellow" />
                    )
                  }
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default BackgroundList;

function IconHeart({ filled, color, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
