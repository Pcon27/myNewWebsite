import React from 'react';
import jamMapImg from '../../images/Jam-Map.png';
import weatherTracker from '../../images/Weather-Tracker.png';
import reciplease from '../../images/Reciplease.png';
import budgetTracker from '../../images/budgetTracker.png'
import workoutTracker from '../../images/WorkoutTracker.png'
import passwordGenerator from '../../images/passwordGenerator.png'
import '../../stylesheets/portfolio.css'

export default function Home() {
  return (
<div>
  <h2 id="title">Portfolio</h2>


  <section id="otherProjects" className="SMLPJ">

        <div id="project1" className="SMLPJ">
                <label>Jam Map Project <a href="https://github.com/PDPco/jam-map">Repository</a></label>
                <a href="https://pdpco.github.io/jam-map/">
                    <img className="SMLIMG" src={jamMapImg} atl="JamMap"/>
                </a>
        </div>

        <div id="weatherTracker" className="SMLPJ">
            <label>Weather Tracker Project <a href="https://github.com/Pcon27/Weather_Tracker_Repo">Repository</a></label>
            <a href="https://pcon27.github.io/Weather_Tracker_Repo/">
                <img className="SMLIMG" src={weatherTracker} atl="Weather Tracker Project"/>
            </a>
        </div>

        <div id="Reciplease" className="SMLPJ">
            <label>Reciplease <a href="https://github.com/Pcon27/Reciplease#deployed">Repository</a></label>
            <a href="https://pacific-caverns-03345.herokuapp.com">
                <img className="SMLIMG" src={reciplease} atl="Password-Generator Project"/>
            </a>
        </div>

        <div id="BudgetTracker" className="SMLPJ">
            <label>Budget Tracker Project <a href="https://github.com/Pcon27/BudgetTracker">Repository</a></label>
            <a href="https://quiet-wildwood-99872.herokuapp.com/">
                <img className="SMLIMG" src={budgetTracker} atl="Weather Tracker Project"/>
            </a>
        </div>

        <div id="PWGen" className="SMLPJ">
            <label>Password Generator Project <a href="https://github.com/Pcon27/Generate-a-password-repo">Repository</a></label>
            <a href="https://pcon27.github.io/Generate-a-password-repo/">
                <img className="SMLIMG" src={passwordGenerator} atl="Weather Tracker Project"/>
            </a>
        </div>

        <div id="workoutTracker" className="SMLPJ">
            <label>Workout Tracker Project <a href="https://github.com/Pcon27/Fitness_Tracker">Repository</a></label>
            <a href="https://quiet-bayou-47430.herokuapp.com">
                <img className="SMLIMG" src={workoutTracker} atl="Weather Tracker Project"/>
            </a>
        </div>
    </section>

</div>
  );
}
