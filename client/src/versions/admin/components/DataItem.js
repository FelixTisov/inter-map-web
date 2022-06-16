import { useHttp } from "../../../hooks/http.hook"
import './DataItem.css'

function DataItem({form}) {

    const {request} = useHttp()

    /* Обработчик удаления данных карточки */
    const deleteHandler = async () => {
        try {
            await request ('/api/data/delete', 'POST', {...form}) // делаем через кастомный хук POST запрос на добавление карточки
        } catch (error) {}
    }

    return (
        <div className="line-block">
            <div className='name-cont'>
                <h3>{form.cardName}</h3>  
            </div>
            <div className='change-cont'>
                {/* <button>Изменить</button> */}
                <button onClick={deleteHandler}>Удалить</button>
            </div>
              
        </div>
    )
}

export default DataItem