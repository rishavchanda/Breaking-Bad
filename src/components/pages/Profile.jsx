import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {name} = useParams();
    const [Character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCharacter();
    }, []);

    const fetchCharacter = async () => {
        const result = await axios(
            `https://www.breakingbadapi.com/api/characters?name=${name}`
        )
        console.log(result.data)
        setCharacter(result.data)
        setIsLoading(false)
    }
    return (
        <div className="details">
            <img className="profileImage" src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" />
            <h3 className="Name">{name}</h3>
            <div className="information">
                <p className="bold">Date of Birth :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">Occupation :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">Status :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">Nickname :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">Actor who portrays the character :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">Seasons :</p>
                <p>19-19-3645</p>
            </div>
            <div className="information">
                <p className="bold">All quotes by the character :</p>
                <p>19-19-3645</p>
            </div>
        </div>
    )
}

export default Profile;