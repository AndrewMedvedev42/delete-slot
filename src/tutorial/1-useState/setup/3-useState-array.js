import React, {useState} from 'react';
import {data} from "../../../data"


const UseStateArray = () => {

  const [people, setPeople] = React.useState(data)

    return( <section>{
            people.map((induvidual)=>{
              const {id, name} = induvidual





            const deletePerson = (id) =>{
              var newPeople = people.filter((induvidual) => induvidual.id !== id)
              alert(induvidual.id)
              setPeople(newPeople)
            }
            






            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <h4>{id}</h4>
                <button onClick={() => {deletePerson(id)}}>Change Title</button>
              </div>
            )
            })
          }
      </section>)
};
export default UseStateArray;

