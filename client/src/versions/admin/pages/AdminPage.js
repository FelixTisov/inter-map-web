import React, { useCallback, useEffect, useState } from "react"
import { useHttp } from "../../../hooks/http.hook"
import '../styles/AdminPage.css'

function AdminPage() {

    const [dataAbout, setDataAbout] = useState([])
    const {request} = useHttp()
    const [about, setAbout] = useState({ // Тестовые данные для создания карточки
        buildingId: 'test', 
        image: null,
        cardName: 'testName', 
        date: '1234', 
        description: 'testDescription'   
    })

    /* Обработчик создания данных карточки */
    const createHandler = async () => {
        try {
            const data = await request ('/api/data/create', 'POST', {...about}) // делаем через кастомный хук POST запрос на добавление карточки
            console.log('Data', data)
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

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData])

    return(
        <div className="admin-wrapper">
            <h1>Admin Page</h1>
            <button onClick={createHandler}>Создать</button>
            <button onClick={fetchDataAbout}>Получить</button>
        </div>
    )
}

export default AdminPage