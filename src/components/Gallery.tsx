import React from 'react'
import { Container, Button } from "react-bootstrap";

type Props = {
    images: Array<any>,
    deleteItem: Function
};


const Gallery:React.FC<Props> = ({images , deleteItem}) => {

    return (
        <Container >
            <div className="gallery">
                {images.map((image) => {
                    return ( <div className="imgHolder" key={image._id}>
                        <Button className='deleteButton' onClick={() => deleteItem(image._id)} >X</Button>
                    <img
                        src={image.url}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>)
                }        
            )}
            </div>
        </Container>
    )
}

export default Gallery
