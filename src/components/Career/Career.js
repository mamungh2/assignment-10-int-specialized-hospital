import React from 'react';
import career from '../../images/career.jpg';

const Career = () => {
    return (
        <div className=" container mt-5">
            <div>
                <h1>Today’s Talent. Tomorrow’s Success.</h1>
            </div>
            <div className="row mt-3 align-items-center">
                <div className="col-md-4">
                    <img className="img-fluid" src={career} alt="" />
                </div>
                <div className="col-md-8 text-start">
                    <div>
                        <p>Making a difference in the health of our community starts with hiring the best people to care for it. At White Plains Hospital, we pride ourselves on finding the very best candidates to join our team to deliver exceptional patient care.</p>
                        <p>Whether you are a novice or an expert, Our hospital career possibilities are endless. In addition to an outstanding and supportive work environment, we offer a comprehensive benefits program.</p>
                    </div>
                    <div>
                        <h5>Transition to Practice Program</h5>
                        <p>The International Specialized Hospital Transition to Practice Program is designed to instill confidence and help new nurses develop competence as they transition to the practice setting, as well as standardize orientation and stabilize retention.</p>
                        <p>The White Plains Hospital Transition to Practice Nurse Residency Program is accredited with distinction as a Practice Transition Program by the American Nurses Credentialing Center’s Commission on Accreditation in Practice Transition Programs. </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Career;