
import colorSharp from "../assets/img/color-sharp.png";
import TeamCard from "./team_card";


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
                <TeamCard />
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
