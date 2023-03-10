import style from "./catalog.module.css"
import search from "../../assets/img/search.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export const tovars = [
    {
        id: 1,
        name: 'asdadsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 123123,
        sale: 0
    },
    {
        id: 2,
        name: 'asdadhfdhgfdghfghsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 765567,
        sale: 0
    },
    {
        id: 3,
        name: 'asdadsdsa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 567567,
        sale: 50
    },
    {
        id: 4,
        name: 'aaaaaaaaaa',
        text: 'dsakfjabnshjkfhsakdfashdfsajkdfsajkfdjsadgfahjsdfalsdgflkasgdkdfokiawsguefoakie',
        img: 'https://3dnews.ru/assets/external/illustrations/2022/11/12/1077269/Atomic-Heart.jpg',
        price: 787878,
        sale: 50
    }
]

const Catalog = () => {
    const [data, setData] = useState(tovars)
    const [searchData, setSearch] = useState('')

    const unDataSale = data.filter((item) => item.sale === 0) 

    const searchDataMassive = unDataSale.filter((item) => item.name.toLowerCase().includes(searchData))  

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.catalog}>
            <div className={style.header_catalog}>
                <h1 className={style.h1_catalog}>
                    Каталог
                </h1>
                <div className={style.input}>
                    <input type="text" placeholder="Поиcк..." onChange={(e) => handleChangeSearch(e)} value={searchData}/>
                    <div className={style.ikon_search}>
                        <img src={search} alt=""/>
                    </div>
                </div>
            </div>
            <div className={style.catalog_wrapper}>
                {
                    searchDataMassive.map(item => {
                        return (
                            <div className={style.tovar} key={item.id}>
                                <Link to={`/tovar/${item.id}`}>
                                    <div className={style.img_tovar}>
                                        <img src={item.img} alt="" />
                                    </div>
                                </Link>
                                <p className={style.price}>от {item.price} ₽</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog