import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/App.css'

const PickupCard = ({pickupList}) => {
  const history = useHistory()
  return (
    <div className='pickup-list-container' >

      {pickupList.map(item => {
        return (
          <div key={item['pickup-id']}>

            <section className='pickup-list-card' >
              <h1 className='pickup-list-heading'>{item['type']}</h1>

              <p className='pickup-list-details'>
                <span id='amount'>{item['amount']}</span>
                <span id='date'>{item['pickup-date'].slice(0, 10)}</span>
                <span id='name'>{item['business-name']}</span>
                <span id='address'>{item['business-address']}</span>
                <span id='phone'>{item['business-phone']}</span>
              </p>

              <button
                onClick={() => console.log('Pickup accepted')}>
                Accept pickup
              </button>

              <button
                onClick={() => history.push("/volunteer-profile")}>
                Back to Profile
            </button>

            </section>
          </div>)
      })}
    </div>
  )
}


export default PickupCard