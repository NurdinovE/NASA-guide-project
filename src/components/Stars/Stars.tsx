import styles from "./Stars.module.css"
import React, { useEffect } from 'react';

const Stars: React.FC = () => {
    useEffect(() => {
        const params = {
            amount: 200,
            size: {
                min: 1,
                max: 5,
                giant: 9,
            },
            duration: {
                min: 5,
                max: 25,
            },
        };

        const randomBetween = (a: number, b: number) => {
            return a + Math.random() * (b - a);
        };

        const createStar = () => {
            const star = document.createElement('div');
            const size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = randomBetween(0, 100) + '%';
            star.style.top = randomBetween(0, 100) + '%';
            // star.style.position = 'fixed';
            star.style.boxShadow = `0 0 ${size}px ${size / 2}px #043668`;
            star.style.animationDuration = randomBetween(params.duration.min, params.duration.max) + 's';
            star.className = styles.star; // Добавляем класс из CSS Modules
            return star;
        };

        const root = document.getElementById('stars');
        if (root) {
            for (let i = 0; i < params.amount; i++) {
                const star = createStar();
                root.appendChild(star);
            }
        }

        return () => {
            // Очистка звезд при размонтировании компонента
            const stars = document.querySelectorAll(`.${styles.star}`);
            stars.forEach((star) => {
                star.remove();
            });
        };
    }, []);

    return (
        <div className={styles.starBody}>
            <div id="stars" className={styles.stars}></div>
            <div className={styles.meteor1}></div>
            <div className={styles.meteor2}></div>
            <div className={styles.meteor3}></div>
            <div className={styles.meteor4}></div>
            <div className={styles.meteor5}></div>
            <div className={styles.meteor6}></div>
            <div className={styles.meteor7}></div>
            <div className={styles.meteor8}></div>
            <div className={styles.meteor9}></div>
            <div className={styles.meteor10}></div>
            <div className={styles.meteor11}></div>
            <div className={styles.meteor12}></div>
            <div className={styles.meteor13}></div>
            <div className={styles.meteor14}></div>
            <div className={styles.meteor15}></div>
        </div>
    );
};

export default Stars;