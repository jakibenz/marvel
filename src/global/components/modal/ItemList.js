import React from 'react'
import Button from 'react-bootstrap/Button'

const ItemList = ({ list }) => {

    return (
        <div className="pt3">
            {list.results.map((element, index) => (
                < article key={index} className='pb2 mt2' >
                        <div className='dtc w3'>
                            {element.thumbnail === null ? 
                            <img src={`http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg`} alt='itemImage' className='db w-100' /> :
                            <img src={`${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension}`} alt='itemImage' className='db w-100' />}
                        </div>
                        <div className='dtc v-top pl2'>
                            <h1 className='f6 f5-ns fw6 lh-title black mv0'>{element.title}</h1>
                            <h2 className='f6 fw4 mt2 mb0 black-60'>{element.modified}n</h2>
                            {element.urls && element.urls.map((url) => (
                                    <Button key={url.type} href={url.url} variant='outline-danger' size='sm' target='_blank' className='mh1 mt1'>
                                        {url.type.toUpperCase()}
                                    </Button>
                            ))}
                        </div>
                </article >
            ))
            }
        </div>

    )
}

export default ItemList