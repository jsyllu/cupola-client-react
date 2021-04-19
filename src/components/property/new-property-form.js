import React, {useState} from 'react'

const NewPropertyForm = (
    {
        uid,
        createNewPropertySale
    }) => {

    const [property, setProperty] = useState({'uid': uid})


    return (
        <div className="new-property-form">
            <form action="">
                <h2 className="text-center">
                    Enter Property Information
                </h2>
                <hr />
                <button onClick={() => createNewPropertySale(property)}>
                    Confirm Property
                </button>
            </form>
        </div>
    )
}

export default NewPropertyForm