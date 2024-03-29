import { useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export default function ToggleTheme() {
  const [ischecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toogleDark = useRef(document.documentElement.className === "dark");
  const handleDarkMode = () => {
    toogleDark.current = document.documentElement.classList.toggle("dark");
    toogleDark.current
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };

  return (
    <div className="flex justify-center py-4">
      <input
        className="hidden"
        type="checkbox"
        id="check"
        checked={ischecked}
        onChange={() => setIsChecked(!ischecked)}
      />
      <label
        htmlFor="check"
        className="flex items-center gap-2 cursor-pointer font-semibold uppercase tracking-wider text-slate-600 dark:text-white"
        onClick={handleDarkMode}
      >
        {!ischecked ? "Dark" : "Ligth"}
        {ischecked ? <BsFillSunFill /> : <FaMoon />}
      </label>
    </div>
  );
}
