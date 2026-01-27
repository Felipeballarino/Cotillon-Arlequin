import { Checkbox, Collapse, Input } from "antd";
import { useCategoriesStore } from "../../../../store/categoriesStore";

const { Search } = Input;
const { Panel } = Collapse;

const FiltrosCatalogos = ({
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    onSearch,
}) => {
    const { categories } = useCategoriesStore();

    const handleCategoriaChange = (checked, nombreCategoria) => {
      setCategoriaSeleccionada((prev) =>
          checked
              ? [...prev, nombreCategoria]
              : prev.filter((c) => c !== nombreCategoria)
      );
  };

    return (
      <aside className="col-span-2 w-full">
          <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-4">

              {/* BUSCADOR */}
              <div>
                  <h2 className="font-semibold text-lg mb-2">Buscar</h2>
                  <Search
                      placeholder="Buscar productos..."
                      onSearch={onSearch}
                      size="large"
                      className="custom-search"
                  />
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block">
                  <h2 className="font-semibold text-lg mb-2">Categorías</h2>
                  <ul className="flex flex-col gap-2">
                      {categories?.grupos?.map((cat) => (
                          <Checkbox
                              key={cat.id}
                              checked={categoriaSeleccionada.includes(cat.grupo)}
                              onChange={(e) =>
                                  handleCategoriaChange(e.target.checked, cat.grupo)
                              }
                          >
                              {cat.grupo}
                          </Checkbox>
                      ))}
                  </ul>
        </div>

              {/* MOBILE */}
              <div className="md:hidden">
                  <Collapse ghost>
                      <Panel
                          header="Categorías"
                          key="1"
                          className="font-semibold"
                      >
                          <ul className="flex flex-col gap-2">
                              {categories?.grupos?.map((cat) => (
                                  <Checkbox
                                      key={cat.id}
                                      checked={categoriaSeleccionada.includes(cat.grupo)}
                                      onChange={(e) =>
                                          handleCategoriaChange(e.target.checked, cat.grupo)
                                      }
                    >
                        {cat.grupo}
                    </Checkbox>
                ))}
                            </ul>
                        </Panel>
                    </Collapse>
                </div>

            </div>
        </aside>
    );
};

export default FiltrosCatalogos;
