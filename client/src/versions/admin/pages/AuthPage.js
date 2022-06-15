import React, { useState } from "react"
import { useHttp } from "../../../hooks/http.hook"
import { useNavigate } from "react-router-dom"
import '../styles/AuthPage.css'

function AuthPage() {

    const navigate = useNavigate()
    const {loading, request, error } = useHttp()
    const [form, setForm] = useState({ // Дефолтные данные при регистрации
        login: 'abc', password: '123'   
    })

    /* Обработчик изменения input */ 
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    /* Обработчик нажатия кнопки регистрации */
    // const registerHandler = async () => {
    //     try {
    //         const data = await request ('/api/auth/register', 'POST', {...form}) // делаем через кастомный хук POST запрос на добавление юзера
    //         console.log('Data', data)
    //     } catch (error) {}
    // }

    /* Обработчик нажатия кнопки авторизации */
    const loginHandler = async () => {
        try {
            const data = await request ('/api/auth/login', 'POST', {...form}) // делаем через кастомный хук POST запрос на авторизацию юзера
            console.log('Data', data)
            navigate('/admin')
        } catch (error) {
            // alert('Неверный логин или пароль')
            console.log(error)
        }
    }

    return(
        <div className="auth-wrapper">
            <div className="form-cont">
                <h1>Авторизация</h1>
                <input placeholder="Логин" type='text' name='login' onChange={changeHandler}/>
                <input placeholder="Пароль" type='text' name='password' onChange={changeHandler}/>
                <button onClick={loginHandler}>Войти</button>
            </div>      
            {/* <button onClick={registerHandler}>Register</button> */}
        </div>
    )
}

export default AuthPage