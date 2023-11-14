import { useEffect, useState } from "react";


const Brief = (props)=>{
    const [detail, setDetail] = useState(props.detail);
    useEffect(() => {
        setDetail(props.detail)
    }, [props.detail]);

    return (<div className="caja-detalle">
    <div className="contenido-detalle">
      +--------------------------------------------+
      <br />
      ID:{detail.id}
      <br />
      -----------------------------------------------
      <br />
      {detail.customer ? `Cliente:` : ""}
      <br />
      {detail.customer ? `Nombre: ${detail.customer.name}` : ""}
      <br />
      {detail.customer ? `Gmail: ${detail.customer.gmail}` : ""}
      <br />
      {detail.customer ? `Telefono: ${detail.customer.tel}` : ""}
      <br />
      -----------------------------------------------
      <br />
      {detail.customer ? `Fecha: ${detail.date}` : ""}
      <br />
      -----------------------------------------------
      <span>Productos: </span>
      {detail.items
        ? detail.items.map((o) => {
            return (
              <>
                Nombre: {o.name} x{o.cant} <br />
              </>
            );
          })
        : ""}
      <br />
      +--------------------------------------------+
    </div>
  </div>)
}
export default Brief