// import React from 'react'
// import { connect } from "react-redux";

// function Description(props) {
//     // const { id } = props.match.params;
//     // const { movies } = props;
//     // console.log(id);
//     console.log('props :' , props.match)
    
//     return (
//     'darsoufa' 
//         //  {console.log('props: ', props.match.params )}
        
            

       
//     )
// }

import React from "react";
import { connect } from "react-redux";

function description(props) {
  const movie = props.movieList.filter(
    el => el.id === props.match.params.id
  )[0];
  
  return (
    
          <h1 >
            {movie.description}
          </h1>
     
  );
}

const mapStateToProps = state => ({
    movieList:state.movieList
});
export default connect(mapStateToProps)(description);
