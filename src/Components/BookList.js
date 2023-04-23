// import React from 'react';
// import data from '../data/data';
// import { Link } from 'react-router-dom';


// const BookList = () => {

//     const [products, setProducts] = useState([]);

//     useEffect (() =>{
//         getProduct()
//     } []);




//   return (
//     <div className="main container"> 
//     <h3>Book List</h3>

//     <section style={{width: "100%"}} className='big-container'>
//         {
//             data.map((item) => {
//                 return(
//                     <div key={item._id} className='cards'>
//                         <div className='image-box'>
//                             <img src={item.img} alt={item.name}/>
//                         </div>

//                         <p className='book-name'>{item.name}</p>
//                         <p className='author-name'>{item.author}</p>

//                         <Link to="editbook"><button>Book now</button></Link>

//                     </div>
//                 )
//             })
//         }
//     </section>
    

//     </div>
//   )
// }

// export default BookList