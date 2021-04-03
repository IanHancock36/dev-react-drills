import React,{useState} from 'react'

function App5() {
    const [cars] = useState([
        {name: "Caddilac"},
        {name: 'Mercury'},
        {name: 'Ford'}
    ])

    const [carFilter , setCarFilter] = useState('')
    const handleInputChange = event => {
        setCarFilter(event.target.value)
    }
    const filterCars = cars.filter(car => car.name.toLowerCase()
    .includes(carFilter.toLowerCase()) )

    return (
        <div>
            <input type = 'text' placeholder='search cars here' onChange={ handleInputChange}/>
            <ul>
                {filterCars.map(car=>(
                    <li>{car.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default App5
