import AstroPicture from "../../components/AstroPicture/AstroPicture";
import AstroNews from "../../components/AstroNews/AstroNews";
import AppSolar from "../../components/SolarSystem/App/AppSolar";
import Stars from "../../components/Stars/Stars";
import style from './Home.module.css'

const Home = () => {
    return (
        <div className="wrapper">
            <Stars/>
            <div className={style.home_page}>
                <div className={style.solar_page}>
                    <h1>Solar System</h1>
                    <AppSolar/>
                </div>
                <AstroPicture/>
                <AstroNews/>
            </div>
        </div>
    );
};

export default Home;