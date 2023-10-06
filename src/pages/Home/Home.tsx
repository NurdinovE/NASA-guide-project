import AstroPicture from "../../components/AstroPicture/AstroPicture";
import AstroNews from "../../components/AstroNews/AstroNews";
import AppSolar from "../../components/SolarSystem/App/AppSolar";
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.home_page}>
            <div className={style.solar_page}>
                <h1>Solar System</h1>
                <AppSolar/>
            </div>
            <AstroPicture/>
            <AstroNews/>
        </div>
    );
};

export default Home;