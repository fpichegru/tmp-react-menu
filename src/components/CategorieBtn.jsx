export default function CategorieBtn({categorie,filterMenus}) {
  return (
    <button 
    onClick={() => filterMenus(categorie)}
    className="btn">
        {categorie}
    </button>
  )
}