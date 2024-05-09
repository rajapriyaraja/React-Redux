//  const CardsData=[{
//   name:"Nani",
//   Place:"Andhra",
//   Destination:"Frontend Developer",
//   Online:true,    
// }]
 
//  function Cards(Props){
//   return (
//     <div className="container">
//       <span className={Props.Online?"pro Online":"Props.offline"}>{Props.Online?"ONLINE":"OFFLINE"}</span>     <img src="images/img1.png" width={190}height={190}className="img"></img>
//       <h2>{Props.name}</h2>
//       <h3>{Props.Place}</h3>
//       <p>{Props.Destination}</p>
//       <div className="buuttons">
//         <button >Message</button>
//         <button>Follow</button>
//       </div>
//       <div className="skills">
//         <h3 className="hhh">Skill</h3>
//         <ul>
//           {/* {Props.Skill}; */}
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JAVASCRIPT</li>
//           <li>BOOTSTRAP</li>
//           <li>REACT JS</li>
//           <li>TYPESCRIPT</li>
//           <li>SQL</li>
//           <li>SASS</li> 
//         </ul>
//       </div>
//     </div>
//   )
// }

// // export const Card=(props)=>{
// //   return<Cards name="Nani" Place="Andhra" Destination="Frontend Developer" Online={true} />
// // }
// export const Cards=()=>{
// return<>
// {CardsData.map((index,Card)=>{
//   <Card key={index}>
//     name={Cards.name}
//     Place={Cards.Place}
//     Destination={Cards.Destination}
//     Online={Cards.Online}
//   </Card>
// })}</>
// }











// import React from 'react';

// const CardsData = [{
//   name: "Nani",
//   Place: "Andhra",
//   Destination: "Frontend Developer",
//   Online: true,
// },
// { name: "Nani",
// Place: "Andhra",
// Destination: "Frontend Developer",
// Online: false,
// },
// { name: "Nani",
// Place: "Andhra",
// Destination: "Frontend Developer",
// Online: false,
// }];
// function Cards(props) {
//   return (
//     <div className="container">
//       <span className={props.Online ? "pro Online" : "Offline"}>{props.Online ? "ONLINE" : "OFFLINE"}</span>
//       <img src="images/img1.png" width={190} height={190} className="img" alt="profile"></img>
//       <h2>{props.name}</h2>
//       <h3>{props.Place}</h3>
//       <p>{props.Destination}</p>
//       <div className="buuttons">
//         <button>Message</button>
//         <button>Follow</button>
//       </div>
//       <div className="skills">
//         <h3 className="hhh">Skill</h3>
//         <ul>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JAVASCRIPT</li>
//           <li>BOOTSTRAP</li>
//           <li>REACT JS</li>
//           <li>TYPESCRIPT</li>
//           <li>SQL</li>
//           <li>SASS</li>
//         </ul>
//       </div>
//     </div>
//   )
// }
// export const Card = () => {
//   return (
//     <>
//       {CardsData.map((item, index) => (
//         <Cards
//           key={index}
//           name={item.name}
//           Place={item.Place}
//           Destination={item.Destination}
//           Online={item.Online}
//           image={item.img}
//         />
//       ))}
//     </>
//   )
// }


import React from 'react';

const CardsData = [
  {
    name: "Nani",
    Place: "Andhra",
    Destination: "Frontend Developer",
    Online: true,
    img: "images/img1.png" // Assuming you have an image URL
  },
  {
    name: "Sai Pallavi",
    Place: "Tamil Nadu",
    Destination: "Full Stack Developer",
    Online: true,
    img: "images/img2.webp" // Another image URL
  },
  {
    name: "Dulquer",
    Place: "Kerela",
    Destination: "Backend Developer",
    Online: false,
    img: "images/img3.jpg" // Another image URL
  }
];

function Cards(props) {
  return (
    <div className="container">
      <span className={props.Online ? "pro Online" : "Offline"}>
        {props.Online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.img} width={190} height={190} className="image" alt="profile" />
      <h2>{props.name}</h2>
      <h3>{props.Place}</h3>
      <p>{props.Destination}</p>
      <div className="buuttons">
        <button>Message</button>
        <button>Follow</button>
      </div>
      <div className="skills">
        <h3 className="hhh">Skill</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>BOOTSTRAP</li>
          <li>REACT JS</li>
          <li>TYPESCRIPT</li>
          <li>SQL</li>
          <li>SASS</li>
        </ul>
      </div>
    </div>
  )
}

export const Card = () => {
  return (
    <>
      {CardsData.map((item, index) => (
        <Cards
          key={index}
          name={item.name}
          Place={item.Place}
          Destination={item.Destination}
          Online={item.Online}
          img={item.img} // Pass the img prop
        />
      ))}
    </>
  )
}
