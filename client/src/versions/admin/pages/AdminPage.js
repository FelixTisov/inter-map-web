import React, { useCallback, useEffect, useState } from "react"
import { useHttp } from "../../../hooks/http.hook"
import DataItem from "../components/DataItem/DataItem"
import ImageUploader from 'react-image-upload'
import '../styles/AdminPage.css'
import 'react-image-upload/dist/index.css'

function AdminPage() {

    const [dataAbout, setDataAbout] = useState([]) // Полученные с свервера данные
    const {request} = useHttp() // Хук http запроса

    /* Обработчик добавления фотографии */ 
    function getImageFileObject(imageFile) {
        setForm({ ...form, ['image']: imageFile.dataUrl })
    }

    /* Обработчик удаления фотографии */ 
    function runAfterImageDelete() {
    setForm({ ...form, ['image']: null })
    }

    /* Данные формы создания карточки */ 
    const [form, setForm] = useState({
        buildingId: 'test', 
        image: require('../../../images/infoImages/default.png'),
        cardName: '', 
        date: '', 
        description: ``   
    })

    /* Обработчик создания данных карточки */
    const createHandler = async () => {
        try {
            console.log(form)
            const data = await request ('/api/data/create', 'POST', {...form}) // делаем через кастомный хук POST запрос на добавление карточки
            console.log('Data', data)
        } catch (error) {}
    }

    // const fileHandler= event => { 
    //     let img = event.target.files[0];        
    //     setForm({...form, [event.target.name]: URL.createObjectURL(img) }) 
    // };

    /* Получение данных карточек */
    const fetchDataAbout = useCallback( async () => {
        try {
            const fetched = await request('/api/data/cards', 'GET', null)
            setDataAbout(fetched)
        } catch (error) {}
    }, [request])

    /* Обработчик изменения формы */ 
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // Получение данных после обновления страницы
    useEffect(() => {
        fetchDataAbout()
    })

    return(
        <div className="admin-wrapper">

            {/* Отображение существующих в БД карточек */}
            <div className="half">
                {
                    dataAbout.map((item) => {
                    return (
                        <DataItem form={item}/>
                    )                 
                    })
                }             
            </div>

            <div className="half">
                <div className="input-cont">
                    <input placeholder="Идентификатор" type='text' name='buildingId' onChange={changeHandler}/>
                    <input placeholder="Название" type='text' name='cardName' onChange={changeHandler}/>
                    <input placeholder="Дата" type='text' name='date' onChange={changeHandler}/>
                    <textarea placeholder="Описание" type='text' name='description' onChange={changeHandler}/>
                    <ImageUploader
                        onFileAdded={(img) => getImageFileObject(img)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    {/* <input type='file' name='image' onChange={fileHandler}/> */}
                    <button style={{marginTop: '2%'}} onClick={createHandler}>Сохранить</button>
                </div>
            </div>

        </div>
    )
}

export default AdminPage