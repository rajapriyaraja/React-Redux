import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";
import { getUserData, putData } from './MockAPI'; // Import API_URL and putData from MockAPI

export const Update = () => {
    const { id } = useParams();
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getUserData(id);
                setUname(user.uname);
                setEmail(user.email);
                setPassword(user.password);
            } catch (error) {
                console.error("Error in fetching the user data", error);
            }
        };
        fetchUserData();
    }, [id]);
    const updateAPIData = () => {
        putData(id, { // Call putData with id and updated data
            uname,
            password,
            email
        }).then(() => {
            nav('/read');
        }).catch((error) => {
            console.error("Error updating data:", error);
        });
    }
    return (
        <>
            <div>Update</div>
            <Form>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='name'
                        value={uname}
                        onChange={(e) => setUname(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <Button
                        type='button' // Change type to button
                        onClick={updateAPIData}>Update</Button> {/* onClick should trigger updateAPIData */}
                </div>
            </Form>
        </>
    )
}