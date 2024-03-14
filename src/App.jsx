import Title from "./components/Title";
import menuItemsData from "./data"
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
const allCategories = ["all", ...new Set(menuItemsData.map((item) => item.category))];

const App = () => {

  const[menus, setMenus] = useState(menuItemsData)
  const [category, setCategories] = useState(allCategories);


  function filterMenus(category){
    if(category === "all"){
      setMenus(menuItemsData)
      return
    }
    const newMenus = menuItemsData.filter( (menu) => menu.category === category)
    setMenus(newMenus)
  }

  return <main>

    <section className="menu">
      <Title text= "our menu"/>
      <Categories categories={category} filterMenus={filterMenus}/>
      <Menu menus={menus}/>
    </section>
  </main>;
};
export default App;
