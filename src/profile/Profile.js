import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
function Profile({name="Name Here",age="Age Here",pro="Profession Here", alrt}) {
    const styleObject = {textAlign:"center",fontSize: "60px", background:"cyan", color:"white",paddingTop : '0px'}
    return (
        <div style = {styleObject}>
            <p>
                Hello! I'm {name}, a {age} years old, and i'm a {pro} in Go My Code Gabes.
                
            </p>
            {alrt(name)}
            <div>
            <Image className="pic" src="pic.jpg" thumbnail />
            </div>
        </div>
    )
}
Profile.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    pro:PropTypes.string
}
export default Profile