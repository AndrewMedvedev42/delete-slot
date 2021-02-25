import React, {useState} from 'react';
import {data} from "../../../data"


const UseStateArray = () => {

  const [movies, setPeople] = React.useState(data)

    return( <section>{
           movies.map((induvidual)=>{
              const {id, name, year, image, alt} = induvidual

            const deletePerson = (id) =>{
              var newPeople =movies.filter((induvidual) => induvidual.id !== id)
              setPeople(newPeople)
            }
            
            return (
              <div key={id} className="item">
                <img src={image} className="moviePoster" alt={alt} />
                <div className="itemContent">
                  <h3>{name}</h3>
                  <p>{year}</p>
                  <button onClick={() => {deletePerson(id)}}>Delete Item</button>
                </div>
                
              </div>
            )
            })
          }
      </section>)
};
export default UseStateArray;

