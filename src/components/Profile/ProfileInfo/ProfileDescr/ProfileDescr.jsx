import React from 'react';
import stl from './profileDescr.module.css';


const ProfileDescr = () => {
    return(
        <div className = {stl.profileDescr}>
            <div>
                <h2>Ariel Fishborn</h2>
                <div>
                    Age: <span>25</span>
                </div>
                <div>
                    Region: <span>Australia, Sidney</span>
                </div>
                <div>
                    Occupation: <span>Frontend developer</span> 
                </div>
            </div>

        </div>
    )
}
export default ProfileDescr;
