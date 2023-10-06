import { useGetAstronomyPictureQuery } from "../../query/AstroPictureQuery"
import {motion} from 'framer-motion'
import style from './AstroPicture.module.css'

const AstroPicture = () => {
    const { data, error, isLoading } = useGetAstronomyPictureQuery({});

    const AstroPictureAnimR = {
        hidden:{
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.5},
        })
    }

    const AstroPictureAnimL = {
        hidden:{
            x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.5},
        })
    }


    if(error){
        console.log(error)
    }

    return(
        <motion.section 
            className={style.astro_picture_page}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}>
            <motion.h1 custom={1} variants={AstroPictureAnimR}>Astronomy picture of the day</motion.h1>
            <div className={style.astro_picture_content}>
                <div><motion.h2 custom={2} variants={AstroPictureAnimL} >{data?.title}</motion.h2></div>
                <motion.img custom={3} variants={AstroPictureAnimL} src={data?.url} alt="Astronomy picture of the day" />
                <motion.p custom={4} variants={AstroPictureAnimL}>Date: {data?.date}</motion.p>
                <motion.p custom={5} variants={AstroPictureAnimL} className={style.astro_picture_explanation}>{data?.explanation}</motion.p>
            </div>
        </motion.section>
    )
}

export default AstroPicture