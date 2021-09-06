import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';
import Loader from './Loader';

type Props = {
    show: Boolean,
    handleClose: any,
    setImage: any
}

const UploadModal: React.FC<Props> = ({show, handleClose, setImage}) => {

    const [uploading, setUploading] = useState(false);

    const uploadFileHandler = async (e: any) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading(true);
    
        try {
          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };
    
          const { data } = await axios.post("/api/meme/upload", formData, config);
          setImage(data);
          setUploading(false);
        } catch (error) {
          console.error(error);
          setUploading(false);
        }
      };


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Upload Meme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {uploading && <Loader />}
                <Form>
                    <Form.File
                    id="image-file"
                    custom
                    onChange={uploadFileHandler}
                ></Form.File>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
        </Modal>
        </>
    )
}

export default UploadModal;
