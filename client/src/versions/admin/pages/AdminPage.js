import React, { useCallback, useEffect, useState } from "react"
import { useHttp } from "../../../hooks/http.hook"
import DataItem from "../components/DataItem"
import { Widget } from "@uploadcare/react-widget"
import '../styles/AdminPage.css'

function AdminPage() {

    const [dataAbout, setDataAbout] = useState([]) // Полученные с свервера данные
    const {request} = useHttp()

    /* Данные формы создания */ 
    const [form, setForm] = useState({
        buildingId: 'test', 
        image: null,
        cardName: '', 
        date: '', 
        description: ''   
    })

    /* Обработчик создания данных карточки */
    const createHandler = async () => {
        try {
            // console.log(form)
            const data = await request ('/api/data/create', 'POST', {...form}) // делаем через кастомный хук POST запрос на добавление карточки
            //console.log('Data', data)
        } catch (error) {}
    }

    /* Получение данных карточек */
    const fetchDataAbout = useCallback( async () => {
        try {
            const fetched = await request('/api/data/cards', 'GET', null)
            setDataAbout(fetched)
            console.log(dataAbout)
        } catch (error) {}
    }, [request])

    useEffect(() => {
        fetchDataAbout()
    }, [])

    /* Обработчик изменения формы */ 
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    return(
        <div className="admin-wrapper">
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
                    <Widget publicKey="1cf87afbfe0335150cc6" />
                    <button style={{marginTop: '2%'}} onClick={createHandler}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AdminPage