
import style from "./Slider.module.css"
import Arrow from "../../assets/img/Arrow";
import { Children, cloneElement, useEffect, useState } from "react";

export default function Slider({children}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 100

            return Math.min(newOffset, 0)
        })
    }

    const handleRigthArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 100

            const maxOffset = -(100 * (pages.length - 1))

            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    }
                })
            })
        )
    }, [])

    return (
        <div className={style.main_container}>
            <div className={style.arrows}>
                <div className={style.arrow_1} onClick={handleLeftArrowClick}>
                    <Arrow />
                </div>
                <div className={style.arrow_2} onClick={handleRigthArrowClick}>
                    <Arrow />
                </div>
            </div>
           <div className={style.window}>
            <div className={style.all_pages_container} 
            style={
                {
                    transform: `translateX(${offset}}%)`
                }
            }
            >
                {pages}
            </div>
           </div>
        </div>
    )
}

