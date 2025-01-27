
import colorSharp from "../assets/img/color-sharp.png";

// Example team images (replace with your team member images)
import Alwin from "../assets/img/Alwin.png";
import Pursoth from "../assets/img/Pursoth.png";
import Kaviyaa from "../assets/img/Kaviyaa.png";
import Aravind from "../assets/img/Aravind.png";

export const Team = () => {
  return (
    <section className="team" id="team" style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="team-bx wow zoomIn">
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>Meet the Team</h2>
              <p style={{ color: "#777", marginBottom: "40px" }}>
                Here are the amazing individuals behind our success.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6">
                  <div className="team-member">
                    <img src={Aravind} alt="Team Member 1" className="team-image" />
                    <h5>Aravind</h5>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-member">
                    <img src={Alwin} alt="Team Member 2" className="team-image" />
                    <h5>Allwin</h5>
                    <p>Backend Developer</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-member">
                    <img src={Pursoth} alt="Team Member 3" className="team-image" />
                    <h5>Pursoth</h5>
                    <p>App Developer</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-member">
                    <img src={Kaviyaa} alt="Team Member 4" className="team-image" />
                    <h5>Kaviyaa</h5>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background Decoration"
        style={{ position: "absolute", left: 0, bottom: 0, zIndex: -1 }}
      />
    </section>
  );
};
