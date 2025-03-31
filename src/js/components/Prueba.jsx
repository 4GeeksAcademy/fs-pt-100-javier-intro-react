import React from "react";
import { MyCard } from "./MyCard";

const Prueba = () => {

    return (
        <>  {/* para envolver mis elementos SIN añadir una nueva etiqueta HTML */}
            <div>
                <h2> Prueba</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt excepturi necessitatibus ducimus consequatur veniam iure culpa non, velit esse consectetur atque cum dignissimos vel in obcaecati, delectus laudantium dolorem!
                </p>

            </div>
            <MyCard/>
            <div>
                <h2> Prueba secundaria</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sunt excepturi necessitatibus ducimus consequatur veniam iure culpa non, velit esse consectetur atque cum dignissimos vel in obcaecati, delectus laudantium dolorem!
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequuntur tenetur quo quia dolores, possimus aliquid sit sunt blanditiis fugit quibusdam id odio ad veritatis similique atque neque magnam quod.</p>
            </div>
        </>
    )
}

export default Prueba