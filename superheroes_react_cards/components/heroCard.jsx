import { useState, useEffect } from 'react'
import StarRating from './starRate.jsx'
import '../styles/style.css'

export function HeroCard({ hero }) {
    return (
        <div className="hero-card">
            <img src={hero.url} alt={hero.name} />
            <div className="hero-info">
                <h2>{hero.name}</h2>
                <p>Вселенная: {hero.universe}</p>
                <p>Альтер эго: {hero.alterego}</p>
                <p>Профессия: {hero.occupation}</p>
                <p>Друзья: {hero.friends}</p>
                <p>Суперспособности: {hero.superpowers}</p>
                <p>{hero.info}</p>

                <div className="rating">
                    <StarRating heroName={hero.name} />
                </div>
            </div>
        </div>
    )
}
