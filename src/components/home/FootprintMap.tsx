import { FootprintGlobe } from "./FootprintGlobe";

export function FootprintMap() {
  return (
    <div className="footprint">
      <div className="container footprint__intro">
        <p className="eyebrow on-dark">Where we operate</p>
        <h2>International footprint</h2>
        <p>
          Two operating centers - Warsaw for European coordination, Baku for
          regional delivery - one partner for electrical infrastructure.
        </p>
      </div>

      <div className="footprint__stage">
        <FootprintGlobe />
        <ul className="footprint__legend container">
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Poland</strong>
              <span>Warsaw - European center</span>
            </div>
          </li>
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Azerbaijan</strong>
              <span>Baku - Regional operations</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
