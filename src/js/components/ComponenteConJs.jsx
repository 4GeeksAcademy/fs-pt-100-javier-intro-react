import React from "react";


export const ComponenteConJs = () => {
//aqui va JS
    console.log('ejecutando js')


    const sum = (a, b) => a + b
    console.log(sum(5, 5));

    

    return (
        <div>
            {/* Aqui va HTML y si se queire ejecutar JS, SE TIENEN QUE PONER LAS LLAVES {} */}
            <h1>ja ja ...</h1>
            <h2>

                {sum(20, 20)}
            </h2>


            {
            sum(20, 60) > 50 ? 
            <div className="bg-success">
                <h3>Pedazo de numercaos!!!</h3>
            </div> 
            : <div className="bg-danger">
                <h3>pequeñinos</h3>
            </div>
            }

        </div>
    )

}

