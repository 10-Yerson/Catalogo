import { useState, useEffect } from 'react'
import React from 'react'

import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {

    const [items, setItems] = useState(null)
    useEffect(() => {
        // https://fakeapi.platzi.com/
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))

    }, [])
    return (
        <>
            <Layout>
                Home
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        items?.map(item => (
                            <Card key={item.id} data={item} />
                        ))
                    }

                </div>
            </Layout>
        </>

    )
}
export default Home

/*
function Home() {
    return (
        <>
            <Layout>
                Home
                <Card />
            </Layout>
        </>
    )
}

export default Home  

*/

