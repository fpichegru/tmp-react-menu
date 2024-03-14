import CategorieBtn from "./CategorieBtn"

export default function Categories({categories, filterMenus}) {

 console.log("categories" , categories)

  return (
    <div className="btn-container">
        { categories && categories.map((categorie, index) => {

           return (
             <CategorieBtn
               key={categorie}
               categorie={categorie}
               filterMenus={filterMenus}
             />
           );

        })

        }
    </div>
  )
}