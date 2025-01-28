
import React from "react";
import Aravind from "../assets/img/Aravind.png";
import Alwin from "../assets/img/Alwin.png";
import Pursoth from "../assets/img/Pursoth.png";
import Kaviyaa from "../assets/img/Kaviyaa.png";
import Surya from "../assets/img/Surya.png";

const teamData = [
    {
        name: "Aravind",
        position: "Full Stack Developer",
        image: Aravind,
    },
    {
        name: "Allwin",
        position: "Back-End Developer",
        image: Alwin,
    },
    {
        name: "Pursoth",
        position: "Full Stack Developer",
        image: Pursoth,
    },
    {
        name: "Kaviyaa",
        position: "Front-End Developer",
        image: Kaviyaa,
    },
    {
        name: "Surya",
        position: "App Developer",
        image: Surya,
    },
];

const TeamCard = () => {
    return (
        <div className="team-container">
            <div className="row justify-content-center">
                {teamData.map((member, index) => (
                    <div className="col-md-3 col-sm-6">
                        <div className="team-member">
                            <img src={member.image} alt="Team Member 1" className="team-image" />
                            <h5>{member.name}</h5>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCard;
