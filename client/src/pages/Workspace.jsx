import React, { useState, useRef, useEffect } from 'react'
import imageProcessingEffects from '../utilities/effects';
import axios from 'axios'
import '../styles/workspace.css'
import { grid } from 'ldrs'
import base64toblob from 'base64toblob'

function Workspace() {

    const [imageFile, setImageFile] = useState('');
    const [dropDownMenu, setDropDownMenu] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fileInput = useRef()
    const dropDownBtnContainer = useRef()

    useEffect(() => {
        const effects = imageProcessingEffects.map((obj, i) => ({
            ...obj,
            hidden: true,
            id: i
        }))
        setDropDownMenu(effects)

        grid.register() // registering the loader 
    }, [])

    useEffect(() => {
        setIsLoading(prev => true)
        setTimeout(() => setIsLoading(prev => false), 2000)
        console.log(imageFile)
    }, [imageFile])

    return (
        <section className='relative flex flex-col justify-center h-screen' style={{ fontSize: 15 }}>
            <div className='absolute top-0 right-0 left-0 bottom-0 flex '>
                <section className='modifier-pane overflow-y-scroll'>
                    <h1>Modifiers</h1>
                    <div className='relative'>
                        <DropDownMenu dropDownMenu={dropDownMenu} setDropDownMenu={setDropDownMenu} dropDownBtnContainer={dropDownBtnContainer} imageFile={imageFile} setImageFile={setImageFile} />
                    </div>
                </section >
                <section className='canvas'>
                    <div className='canvas-tab'>
                        <label>Canvas</label>
                        {imageFile !== '' && <i className='fa-solid fa-trash' onClick={() => setImageFile('')}></i>}
                    </div>
                    <div className='canvas-main'>
                        {
                            imageFile !== '' ?
                                (isLoading ? <Loader /> : <Image imageFile={imageFile} />)
                                : <AddImageComponent fileInput={fileInput} setImageFile={setImageFile} />
                        }
                    </div>
                </section>
            </div >
        </section >
    )
}
export default Workspace

const handleEffectClick = async (effect, imageFile, setImageFile) => {
    if (imageFile instanceof File) {
        let file = imageFile
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                file = arrayBuffer
            };

            reader.readAsArrayBuffer(file);
        }
    }
    try {
        const requestURL = `http://localhost:5000/${effect}`;
        const formData = new FormData()
        formData.append('imageFile', imageFile)
        axios.post(requestURL, formData)
            .then(response => {
                setImageFile(response.data.newURL)
            })
            .catch(error => console.log(error))

    } catch (error) {

    }
}

const DropDownMenu = ({ dropDownMenu, setDropDownMenu, dropDownBtnContainer, imageFile, setImageFile }) => {

    return (
        <>
            {
                dropDownMenu.map((obj, i) => (
                    <div className='drop-down'>
                        <div key={i} className='dropdown-menu' onClick={() => dropDownMenuClick(i, dropDownMenu, setDropDownMenu)}>
                            <label htmlFor="">{obj.category}</label>
                            <i className={`fa-solid ${!obj.hidden ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </div>

                        {
                            !obj.hidden &&
                            <div className={`dropdown-menu-buttons-container`} key={i} ref={dropDownBtnContainer}>

                                {obj.effects.map((effect, j) => (
                                    <div key={j} className='dropdown-menu-button' onClick={() => handleEffectClick(effect, imageFile, setImageFile)}>
                                        <label htmlFor="">{effect}</label>
                                    </div>
                                ))}
                            </div>
                        }

                    </div>
                ))
            }
        </>
    )
}


const AddImageComponent = ({ fileInput, setImageFile }) => {
    return (
        <>
            <div className='add-image-wrapper' onClick={() => addImageClicked(fileInput)}>
                <input type="file" ref={fileInput} onChange={(e) => handleFileChange(e, setImageFile)} hidden />
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                </div>
                <div className="text">
                    <span>Click to upload image</span>
                </div>
            </div>
        </>
    )
}


const Loader = () => {
    return (
        <>
            <l-grid size={"120"} speed={"1.5"} color={"black"}></l-grid>
            <br></br>
            <p>Loading file...</p>
        </>
    )
}

const Image = ({ imageFile }) => {
    const isBase64 = value => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
    let imageUrl = imageFile
    if (isBase64(imageFile)) {
        console.log("YES ITS BASE 64")
        imageUrl = base64toblob(imageFile, 'image/jpg')
    }
    return (
        <>
            <img src={`${URL.createObjectURL(imageUrl)}`} alt='' className='image'></img>
        </>
    )
}


const handleFileChange = (e, setImageFile) => {
    setImageFile(e.target.files[0])
}

const addImageClicked = (fileInput) => {
    fileInput.current.click()
}

const dropDownMenuClick = (index, dropDownMenu, setDropDownMenu) => {
    const updated = dropDownMenu.map((obj, i) => {
        if (i === index) {
            return ({
                ...obj,
                hidden: obj.hidden ? false : true
            })
        }
        return obj
    })
    setDropDownMenu(prev => updated)
}