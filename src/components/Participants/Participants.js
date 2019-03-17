import React from 'react';

import ParticipantsTableHeader from '../ParticipantsTableHeader/ParticipantsTableHeader'
import ParticipantsTableRow from '../ParticipantsTableRow/ParticipantsTableRow'


const ParticipantsTable = (props) => {
    return(
    <div>
        <ParticipantsTableHeader />
          
          {props.participants.map( (participant, index) =>
              <ParticipantsTableRow 
                key= {index}
                id = {participant.id}
                name = {participant.name}
                email_address = {participant.email_address}
                phone_number = {participant.phone_number}
              />
            )}
      </div>
    )
}

export default ParticipantsTable;