import MenuItem from "./MenuItem"

export default function Menu({menus}) {
  
  console.log(menus)  

  return (
    <div className="section-center">

    {menus && menus.map( (item) => {

       return <MenuItem key={item.id} {...item}/>
    } )}
    </div>
  )
}