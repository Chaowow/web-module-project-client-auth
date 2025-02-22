import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://localhost:9000/api/friends`, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
    <div>
        <h2>FRIENDS LIST</h2>
        <ul>
            {
                friends.map(friend => {
                    return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
            
        </ul>
    </div>
    );
  }

export default FriendsList;