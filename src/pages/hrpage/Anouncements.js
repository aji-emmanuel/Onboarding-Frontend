import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import NoContent from '../../components/announcement/NoContent';
import AddAnnoucement from '../../components/modals/AddAnnoucement';
import MeetingModal from '../../components/modals/MeetingModal';
import Button from '../../components/Button';

const Anouncements = () => {

    useEffect(()=>{
        // Initailizes Materialize javascript
        M.AutoInit();
    });

    return (
        <>
            <div className='announcement-button'>
                <div>
                    <Button href="#add-annoucement-modal" icon="fas fa-plus" text="Add Announcement" />
                </div>
                <div>
                    <Button href="#meeting-modal" icon="fas fa-calendar-alt" text="Schedule Meeting" />
                </div>
            </div>

            <NoContent />

            <AddAnnoucement />
            <MeetingModal />
        </>
    );
};

export default Anouncements;
