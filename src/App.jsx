/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
  const usuarios = [
    {
      name: "Hector",
      lastname: "Lopez",
      email: "HectorLopez22@gmail.com",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Foto_Perfil_.jpg/480px-Foto_Perfil_.jpg",
    },
    {
      name: "Sofia",
      lastname: "Mendez",
      email: "sofiMendez@gmail.com",
      img: "https://media.istockphoto.com/id/1437816897/es/foto/mujer-de-negocios-gerente-o-retrato-de-recursos-humanos-para-el-%C3%A9xito-profesional-la-empresa.webp?b=1&s=170667a&w=0&k=20&c=BlEVDfvaJCZRUrytbmAwZZQwE7Y43oiEEOi_FSDSjtQ=",
    },
    {
      name: "Raymundo",
      lastname: "Mamani",
      email: "Ray14@gmail.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYyco8W8ciju9OoqUbLgx__oc39uCAzKAvA&usqp=CAU",
    },
    {
      name: "Lara",
      lastname: "Benitez",
      email: "LaraBenitez@gmail.com",
      img: "https://media.istockphoto.com/id/1320651997/es/foto/retrato-de-estudio-aislado-de-un-primer-plano-de-mujer-joven.jpg?s=612x612&w=0&k=20&c=5vNnvJGhbFkBPc222nGyyqCdQYDdy5JesMlAlm-RlJw=",
    },
  ];

  const [userState, setUserState] = useState(usuarios);

  return (
    <>
      <h1>empleados</h1>
      <div className="containerCards">
        {userState?.map((usuario, index) => {
          return (
            <div key={index} className="Card">
              <img src={usuario.img} />
              <h2>{usuario.name}</h2>
              <h2>{usuario.lastname} </h2>
              <p>{usuario.email} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
