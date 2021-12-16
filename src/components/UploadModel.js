import React, { useState } from 'react'

import { notification } from 'antd';

function UploadModel() {

    const [title, setTitle] = useState('');
    const [upload, setUpload] = useState(null);

    const [loading, setLoading] = useState(false);
    

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeFile = (e) => {
        if(e.target.files) {
            setUpload(e.target.files[0])
        }
    }

    
    //  function to handle the form submission
    const submitForm = (e) => {
        e.preventDefault();     //  prevent the default behavior (no refreshing of browser)

        setLoading(true);

        let body = new FormData();
        body.append('title', title);
        body.append('upload', upload);
        
        fetch('http://localhost:8000', {
            method : 'POST',
            body : body
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setLoading(false);
                notification.error({
                    message : 'Error occured',
                    description : data.error,
                    placement : 'bottomRight'
                })    
            } else {
                setLoading(false);
                notification.success({
                    message : 'Sucesfully uploaded',
                    description : 'Please go to home page',
                    placement : 'bottomRight'
                })
            }
            
        })
        .catch(err => {
            setLoading(false);
            notification.error({
                message : 'Error occured',
                description : err.message,
                placement : 'bottomRight'
            })
        })

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6' style={{margin : 'auto', marginTop : "50px"}}>
                    <div className='card'>
                        <div className='card-body'>
                            <form onSubmit={submitForm}>
                                <div className='form-group'>
                                    <label htmlFor='title'>Title of the modal</label>
                                    <input type={'text'} className='form-control' name='title' id='title' required={true} onChange={changeTitle} value={title} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='upload'>Select a 3-d file</label>
                                    <input type={'file'} className='form-control' name='upload' id='upload' required={true} onChange={changeFile} />
                                </div>
                                <div>
                                    <input
                                        type={'submit'}
                                        className='btn btn-outline-primary'
                                        value={loading ? 'Uploading the file ...' : 'Upload file'}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadModel
