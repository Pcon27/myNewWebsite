import React from 'react';
import jamMapImg from '../../images/Jam-Map.png';
import weatherTracker from '../../images/Weather-Tracker.png';
import reciplease from '../../images/Reciplease.png';

export default function Home() {
  return (
<div>
  <h2 id="portfolio">Portfolio</h2>
  <section id="project1">
        <label>Jam Map Project <a href="https://github.com/PDPco/jam-map">Repo</a></label>
        <a href="https://pdpco.github.io/jam-map/">
            <img id="JMProject" src={jamMapImg} atl="JamMap"/>
        </a>
  </section>

  <section id="otherProjects">
        <div id="weatherTracker" class="SMLPJ">
            <label>Weather Tracker Project <a href="https://github.com/Pcon27/Weather_Tracker_Repo">Repo</a></label>
            <a href="https://pcon27.github.io/Weather_Tracker_Repo/">
                <img class="SMLIMG" src={weatherTracker} atl="Weather Tracker Project"/>
            </a>
        </div>

        <div id="PWGen" class="SMLPJ">
            <label>Reciplease <a href="https://github.com/Pcon27/Reciplease#deployed">Repo</a></label>
            <a href="https://pacific-caverns-03345.herokuapp.com">
                <img class="SMLIMG" src={reciplease} atl="Password-Generator Project"/>
            </a>
        </div>
    </section>

</div>
  );
}
