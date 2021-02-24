import React, {useState} from 'react';
import {data} from "../../../data"


const UseStateArray = () => {

  const [people, setPeople] = React.useState(data)

    return( <section>{
            people.map((induvidual)=>{
              const {id, name, price} = induvidual

            const deletePerson = (id) =>{
              var newPeople = people.filter((induvidual) => induvidual.id !== id)
              setPeople(newPeople)
            }
            
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <h4>{price}</h4>
                <button onClick={() => {deletePerson(id)}}>Delete Item</button>
              </div>
            )
            })
          }
      </section>)
};
export default UseStateArray;

