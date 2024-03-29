import clsx from "clsx";

interface CardProps {
  id: number;
  name: string;
  image: string;
  level: string;
  code: string | undefined;
  live: string | undefined;
}

export default function Card({
  id,
  name,
  image,
  level,
  code,
  live,
}: CardProps) {
  return (
    <div className="w-full shadow rounded overflow-hidden">
      <img src={image} alt={`imagen-${name}`} />
      <div className="p-4 space-y-3">
        <div className="flex justify-end">
          <small
            className={clsx(
              "px-3 rounded-3xl font-semibold ",
              { "bg-blue-50 text-blue-500 font-semibold": level === "newbie" },
              {
                "bg-amber-50 text-amber-500 font-semibold": level === "junior",
              },
              {
                "bg-red-100 text-red-500 font-semibold": level === "intermedio",
              },
              {
                "bg-cyan-100 text-cyan-800 font-semibold": level === "avanzado",
              },
              {
                "bg-slate-200 text-slate-700 font-semibold":
                  level === "premium",
              }
            )}
          >
            {level}
          </small>
        </div>
        <h2 className="text-center font-semibold truncate">{name}</h2>

        <div className="flex justify-around md:justify-between">
          <a
            href={code}
            target="_blank"
            className="flex items-center gap-1 bg-indigo-600 py-1 px-4  lg:px-2 rounded-md text-gray-200"
          >
            Ver Codigo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-1 bg-amber-400 py-1 px-4 lg:px-2 rounded-md text-gray-200"
            >
              Vista Previa
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
