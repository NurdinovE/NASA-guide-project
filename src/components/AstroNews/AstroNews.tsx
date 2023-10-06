import style from './AstroNews.module.css'
import {motion} from 'framer-motion'

const AstroNews = () => {

    const astroNewsUp = {
        hidden:{
            y: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.5},
        })
    }

    return(
        <motion.section 
            className={style.astroNews_page}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.8, once: true}}
        >
            <motion.h1 custom={6} variants={astroNewsUp}>News</motion.h1>
            <motion.h2 custom={7} variants={astroNewsUp}>closest to us</motion.h2>

            <div className={style.astroNews_card}>
                <img src="" alt="" />
                <motion.p custom={8} variants={astroNewsUp}>mmmm</motion.p>
            </div>
        </motion.section>
    )

}
export default AstroNews