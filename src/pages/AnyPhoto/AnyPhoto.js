import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import '../../App.css';
import '../../styles/home.css';
import '../../styles/AnyPhoto.css';
import NavBar from '../components/NavBar';
import Background from '../../img/Background.mp4';

const My_Key_NASA = "Vq97MOsOP0GXqS1NIS1v5Kjhf2MvL2bBvsEjCsya";

  
  export default function AnyPhoto() {
    const [show, setShow] = useState(false);
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
      fetchPhotoDay();

      async function fetchPhotoDay() {
        const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}`
        );
        const data = await res.json();
        setPhotoData(data);
        console.log(data);
      }
    }, []);
    if (!photoData) return <div />;

      return (
        <>
          <NavBar />
          <video class="Video_Background" autoPlay loop muted >
             <source src={Background} type="video/mp4"/>
            </video>
          <div className="AnyPhoto"> 
          <Home2>
        <div>

         </div>
        <h1 className="date">{photoData.date}</h1>
        <div className="Photo_Day">
        {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (

        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />

      )}
      <div>
        
        <h1>{photoData.title}</h1>
        <br/> 
        <p className="explanation">{photoData.explanation}</p>
      </div>
      </div>
        </Home2>
        </div>
        </>
    )
}

const Home2 = styled.div`

`;

 
 