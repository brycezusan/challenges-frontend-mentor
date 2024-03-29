import { useState, useId } from "react";
import { proyectos as initialState } from "../data/datos";
import Card from "./Card";

const opciones = [
  { id: 1, name: "newbie" },
  { id: 2, name: "junior" },
  { id: 3, name: "intermedio" },
  { id: 4, name: "avanzado" },
  { id: 5, name: "premium" },
];

export default function Filtros() {
  const [filtro, setFiltro] = useState("newbie");
  const [proyectos] = useState(initialState)
  const levelID = useId();

  const handleChangeFiltro = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltro(evt.target.value);
  };

  const filterProjects = filtro !== '' && filtro.length > 0 ? proyectos.filter(state=>state.level === filtro) : proyectos
   

  return (
    <>
      <div className="flex flex-col gap-2 md:justify-between md:flex-row mb-6">
        <h1 className="text-2xl">Lista de Proyectos</h1>
        <form className="max-w-xs w-full">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-slate-800 dark:text-white" htmlFor={levelID}>
              Niveles
            </label>
            <select
              id={levelID}
              className="text-center font-semibold capitalize text-slate-800  py-1 border rounded-md"
              value={filtro}
              onChange={handleChangeFiltro}
            >
              {opciones.map((opc) => (
                <option key={opc.id} value={opc.name}>
                  {opc.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[42vh] content-center">
        {filterProjects.map((prj) => (
          <Card
            key={prj.id}
            id={prj.id}
            name={prj.name}
            level={prj.level}
            image={prj.img}
            code={prj.code}
            live={prj.live}
          />
        ))}
      </section>
    </>
  );
}
