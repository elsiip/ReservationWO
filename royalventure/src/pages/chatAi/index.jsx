import React, { useState, useEffect } from "react";
import "../../App.css"
import axios from "axios"
import ReactMarkDown from "react-markdown"
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { getAuth } from "firebase/auth";
import { db } from '../../firebase'; 
import { query, where, collection, getDocs, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatAi(){
    const [userName, setUserName] = useState('Default Name');
    const auth = getAuth()
    const user = auth.currentUser
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [generatingAnswer, setGeneratingAnswer] = useState(false)

    async function generateAnswer(e){
        e.preventDefault();
        setGeneratingAnswer(true);
        setAnswer('Loading your answers... \n It might take up to 10 seconds');
        try {
            const response = await axios({
                url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDMCYxHypBRpsZ6czn8W6Tx-5QjWBXx-WA',
                method: 'post',
                data: {
                    contents: [{parts: [{text: question}] }]
                }
            });
            setAnswer(response.data.candidates[0].content.parts[0].text);
            setQuestion('')
        } catch (error) {
            console.log(error);
            setAnswer("Something went wrong. please try again!");
        }
        setGeneratingAnswer(false);
    }

    useEffect(() => {
        const fetchUserName = async () => {
            if (user) {
                const q = query(collection(db, "users"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (userData && userData.name) {
                        setUserName(userData.name);
                    }
                });
            }
        };
      
        if (user) {
            fetchUserName();
        }
    }, [user]);
    
    return(
        <div className="bg-[#576250]">
            <Navbar />
            <h1 className="mt-[17px] roboto-bold text-[56px] text-center text-white" style={{ lineHeight: '64px', letterSpacing: '-1.12px' }}>Hi, {userName}!</h1>
            <p className="mt-[16px] roboto-regular text-[25px] text-center text-[#D9D9D9]" style={{ lineHeight: '24px', letterSpacing: '-0.2px' }}>FAQ</p>
            <div className="flex justify-center items-center">
                <div className="mt-[26px] bg-[#727C6C] w-[1040px] h-[300px] rounded-[15px] mb-[17px]">
                    <div className="flex space-x-[19px] pt-[20px] justify-center">
                        <div className="w-[933px] h-auto bg-[#B8C1B2] rounded-[15px] p-3">
                            <ReactMarkDown>{answer}</ReactMarkDown>
                        </div>
                        <FontAwesomeIcon icon={faCircleUser} className="w-[35px] h-[35px] text-white" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <form onSubmit={generateAnswer}>
                    <label className="input input-bordered flex items-center w-[1040px] mb-[60px]">
                        <input type="text" className="grow" placeholder="Input your question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                        <button type="submit" className="button-icon" disabled={generatingAnswer}>
                            <FontAwesomeIcon icon={faPaperPlane} className="w-[20px] h-[20px]" />
                        </button>
                    </label>
                </form>
            </div>
            <Footer />
        </div>
    )
}