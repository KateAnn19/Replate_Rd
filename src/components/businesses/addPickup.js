//this is a form that will allow the business to add a pickup to their profile when the business creates 
// a new pickup it will also display on the pickup list it will also display on the business profile

import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, TextField } from '@material-ui/core'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const AddPickup = () => {
  // Set the default values for the form
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      "amount": '',
      "pickup-date": '',
      "type": ''
    }
  })

  // register attaches our fields to the state by use of the 'ref' attribute of the field
  // Because I we are using Material UI, inputRef replaces the ref attribute when using
  // the useForm hook to manage the form

  // Create the callback for the handleSubmit function. The parameter (whatever I name it)
  // will contain all the form's data.
  const onSubmit = (formData) => {

    //   e.preventDefault()
    axiosWithAuth()
      .post("pickups", formData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err.response))
  }

  // Keep track of routing history
  let history = useHistory()

  // Go back to calling page
  const goBack = () => history.goBack()
  const typeErrMessage = 'Please describe what is to be picked up'
  const amountErrMessage = 'Please provide a quantity'

  return (
    <div>
      <h2>Add a Pickup</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='amount'>Amount: </label>&nbsp;
        <TextField
          type='text'
          name='amount'
          placeholder='amount'
          inputRef={register({ required: { amountErrMessage }, minLength: 5 })} />
        <br />
        {errors.amount && <p>{errors.amount.message}</p>}
        <br />

        <label htmlFor='pickup-date'>Pickup Date: </label>&nbsp;
        <TextField
          type='text'
          name='pickup-date'
          placeholder='yyyy-mm-dd'
          inputRef={register} />
        <br />

        <label htmlFor='type'>Type: </label>&nbsp;
        <TextField
          type='text'
          name='type'
          placeholder='type of pickup'
          inputRef={register({ required: { typeErrMessage }, minLength: 5 })} />
        <br />
        {errors.type && <p>{errors.type.message}</p>}
        <br /><br />

        <ButtonGroup
          variant='text'
          color='primary'
          aria-label='text primary button group'
        >
          <Button>Add Pickup</Button>
          <Button type='button' onClick={goBack}>Go Back</Button>
        </ButtonGroup>
      </form>
      {/*      
      <button onClick={() => push("/business-profile")}>
        Return To Profile
      </button>
*/}
    </div>
  );
};

export default AddPickup;
