import { useState, useEffect } from 'react'
import '../styles/style.css'

export default function StarRating({ heroName }) {
    const [rating, setRating] = useState(
        parseInt(localStorage.getItem(heroName)) || 0
    )

    useEffect(() => {
        localStorage.setItem(heroName, rating)
    }, [heroName, rating])

    return (
        <div className="rating">
            <label>Оцените героя:</label>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? 'filled' : ''}`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    )
}
