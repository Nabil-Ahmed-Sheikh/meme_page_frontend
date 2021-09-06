import React, {useState} from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getMemes, memeDelete, addMemeURL } from "../actions/memeActions";
import { RootState } from "../store";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Gallery from "../components/Gallery";
import AddMeme from "../components/AddMeme";


const HomeScreen = () => {

    const dispatch = useDispatch();
    const fetchMeme = useSelector((state: RootState) => state.fetchMeme);
    const {loading, memes, error} = fetchMeme;

    const deleteMeme = useSelector((state: RootState) => state.deleteMeme);
    const {loading: deleteLoading, success: deleteSuccess, error: deleteError} = deleteMeme;

    const addURL = useSelector((state: RootState) => state.addURL);
    const {loading: addUrlLoading, success: addUrlSuccess, error: addUrlError} = addURL;

    const [image, setImage] = useState("");

    const deleteItem = (id: String) => {
        dispatch(memeDelete(id))
    }

    useEffect(() => {
        dispatch(getMemes())
    }, [dispatch, deleteMeme, addUrlSuccess, image])

    return (
        <Container>
            <div className="statsContainer">
                <Link className='statsLink' to="/stats">Stats</Link>
            </div>
            {<AddMeme addURL={addMemeURL} setImage={setImage} />}
            {deleteLoading && <Loader />}
            {deleteError && <Message variant='danger'>Something went wrong!</Message>}
            {deleteSuccess && <Message variant='success'>Done</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : null}
            {memes && <Gallery images={memes} deleteItem={deleteItem} />}
            
            

        </Container>
    )
}

export default HomeScreen
