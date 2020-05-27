//this is a form that will allow the business to add a pickup to their profile
//when the business creates a new pickup it will also display on the pickup list 
//it will also display on the business profile
import React from 'react'
import { useForm } from 'react-hook-form'

import {axiosWithAuth} from '../../utils/axiosWithAuth';

const AddPickup = () => {
  // Extract the named exports from the useForm hook that are needed for this form
  // The useForm hook handles the form management including state
  const { register, handleSubmit, errors } = useForm()

  // Create the callback for the handleSubmit function. The parameter (whatever I name it)
  // will contain all the form's data.
  const onSubmit = (formData) => {
    //   e.preventDefault()
    axiosWithAuth()
    .post("pickups", formData)
    .then((res) => {
        console.log(res);
         
       })
       .catch((err) => console.log(err.response));
  }

  return (
    <div>
      <h2>Add a Pickup</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='amount'>Amount: </label>&nbsp;
        <input type='text' name='amount' 
          ref={register({required:'Please provide a quantity',minLength: 5})} /><br />
          {errors.amount && <p>{errors.amount.message}</p>}

        <label htmlFor='pickup-date'>Pickup Date: </label>&nbsp;
        <input type='text' name='pickup-date' placeholder='yyyy-mm-dd' ref={register} /><br />

        <label htmlFor='type'>Type: </label>&nbsp;
        <input type='text' name='type' 
          ref={register({required:'Please describe what is to be picked up', minLength: 5})} />
          {errors.type && <p>{errors.type.message}</p>}
          <br /><br />

        <button>Add Pickup</button>
        
      </form>
      <button>Return To Profile</button>
    </div>
  )
}


export default AddPickup

// let initialState = {
//     "amount": '',
//     "pickup-date": '',
//     "type": ''


// }





// ~~ N O T E S ~~ //
// [ Web Unit 2 ]
// [ Skills Based Assessment - 2+ ON EACH OBJECTIVE REQUIRED TO PASS ]

// -- Rubric Item 1: Applied JavaScript
// 2 ==> Student created functional components and used events in application to add dynamic functionality to app.
// 3 ==> Student incorperated a third party event/animation library like unto Greensock, Anime, React-motion etc.

// -- Rubric Item 2: Intro to React
// 2 ==> Student's code was organized at the component level, proper usage of state and props are demonstrated 
//       throughout the project, the UI is composed of small reusable components, proper usage of useState and 
//       useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to 
//       dynamically render HTML elements.
// 3 ==> Student was able to architect components to be easily reused. Student used advanced React techniques 
//       like the composition pattern, custom hooks, render props, HOCs, etc.

// -- Rubric Item 3: Single Page Application
// 2 ==> Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. 
//       Route management properly installed and used to show top level pages as well as nested views where necessary.
// 3 ==> Not only are standard network request techniques employed, the code is organized in such a fashion that 
//       the student demonstrated proper use of container vs presentational components or other industry standards, 
//       conventions or patterns.

// -- Rubric Item 4: Form Management
// 2 ==> Student has set up component management for the forms in the app that makes sense for each form. 
//       Student made the decision to use a third-party library, like Formik, or not, and can defend 
//       their decision. Some form validation is in place.
// 3 ==> Student showed great insight in setting up the state management for the app's forms. Form validation 
//       is in place for all fields, and covers all use cases. Loading states and success/error notifications 
//       are in place and add to the overall UX of the app.

//    T E A M W O R K   A S S E S S M E N T    //

// -- MVP work - Project should incorporate all of the listed MVP features
// 2 ==> Student's work demonstrates that all MVP features were built
// 3 ==> Student's work demonstrates that all MVP features were built and the student went above and beyond 
//       the project.

// -- Team Work Score
// 2 ==> Team member was collaborative, able to work in a team environment
// 3 ==> Pair programmed with the Web UI and Back end Architect



