
import React from 'react'
import { userdata } from './data'
const ExampleArray = () => {
    return (
        <div>
            {userdata.map((place) => {
                return (
                    <div>
                        <div>{place.username}</div>
                        <div>{place.email}</div>
                        <div>{place.address.city}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default ExampleArray