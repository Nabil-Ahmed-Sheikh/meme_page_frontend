import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import UploadModal from './UploadModal';

type Props = { 
    addURL: Function,
    setImage: Function
};


const AddMeme:React.FC<Props> = ({addURL, setImage}) => {
    console.log(typeof addURL);
    
    const [url, setUrl] = useState("");
    const [memeFile, setMemeFile] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        

    const dispatch = useDispatch()

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(addURL(url))
      };

    return (
        <Container>
            <Row>
                <Col sm={10}>
                    <Form onSubmit={submitHandler} inline>
                        <Row className="align-items-center">
                            <Col style={{ paddingLeft: 0, paddingRight: 1 }} sm={8}>
                            <Form.Control
                                type="text"
                                name="url"
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Add meme url"
                                className="mr-sm-2 ml-sm-5"
                            ></Form.Control>
                            </Col>
                            <Col style={{ paddingLeft: 1, paddingRight: 0 }} sm={4}>
                            <Button type="submit" variant="outline-success" className="p-2">
                                Add Meme
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col sm={2}>
                    <Button onClick={handleShow} >Upload Meme</Button>
                </Col>
            </Row>
            <UploadModal show={show} handleClose={handleClose} setImage={setImage} />
        </Container>
    )
}

export default AddMeme
