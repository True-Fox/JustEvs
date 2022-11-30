import React from "react";

import "./bootstrap.css";
import "./Main.css";

export default function FAQ()
{
    return(
        <>
        
        <div style={{padding:"20px"}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style = {{color:"white"}}>Frequently Asked Questions (FAQs)</h2>
        <br/>
        <div className = "divscroll">
        
        <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse1">
                <b><h5>1. What is an Electric Vehicle?</h5></b>
              </a>
            </div>
            <div id="collapse1" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                    An electric vehicle (EV) is a mode of transport which is powered by electricity. 
                    Unlike conventional vehicles that use a gasoline (petrol) or diesel-powered engine, 
                    electric cars and trucks use an electric motor powered by electricity from batteries 
                    or a fuel cell. A key advantage of EVs over other forms of transport is that they hold 
                    the potential to significantly reduce pollution by having zero exhaust emissions.
                </p>
              </div>
            </div>
          </div>
        
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse2">
                <b><h5>2. What are the different types of Electric Vehicles available?</h5></b>
              </a>
            </div>
            <div id="collapse2" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                There are three types of Electric Vehicles available: <br/>
                i. BEV (Battery Electric Vehicles) which are 100% powered by electricity. <br/>
                ii. PHEVs (Plug-In Hybrid Electric Vehicles) which are cars with an internal combustion engine and a battery charged from an external socket;
                    in other words, they have a plug. <br/>
                iii. Hybrid cars are cars with an electric battery that is charged using the internal combustion engine (they don't have a plug).
                </p>
              </div>
            </div>
          </div>
        
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse3">
               <b><h5>3. Are Electric Vehicles environment friendly?</h5></b>
              </a>
            </div>
            <div id="collapse3" className="collapse">
              <div className="card-body">
                <p style={{fontSize: "larger"}}>
                Electric motors are simply more efficient than combustion engines, 
                so more of the energy put in the battery ends up being used to drive the car. 
                Especially when driving in cities, electric vehicles waste less energy. 
                Also, there are simply no tailpipe emissions of air pollutants such as nitrogen oxides and particles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse4">
               <b><h5>4. What kind of an engine does an electric vehicle have?</h5></b>
              </a>
            </div>
            <div id="collapse4" className="collapse">
              <div className="card-body">
                <p style={{fontSize: "larger"}}>
                Unlike internal combustion engine (ICE) vehicles which have fuel-fed engines, 
                electric vehicles (EVs) have electrical motors which turn the car’s wheels. 
                Depending on the type of vehicle, the electric motors may contain gears for additional efficiency.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse5">
                <b><h5>5. What are the types of batteries available? </h5></b>
              </a>
            </div>
            <div id="collapse5" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                The primary electric vehicle battery types are: <br/>
                i. Lead-acid: This is one of the oldest technologies being used in electric vehicles. 
                These kinds of batteries contain a mild sulfuric acid solution in a container, 
                while being easy to produce and charge, 
                these batteries slowly release noxious gasses and are therefore not placed within the passenger compartment. <br/>
                ii. Nickel metal hydride (NiMH): This battery technology too has been around for two decades. 
                NiMH batteries do not contain toxic metals so they’re better for the environment and can be safely recycled. 
                These batteries also provide a high energy density and have been successfully used by many large EV manufacturers. <br/>
                iii. Lithium-ion (Li-ion): This technology is far younger, at just a decade old. 
                Li-ion batteries tend to hold their charge longer when not being used. 
                They are also capable of holding a high charge and so make a great fit for electric vehicle use. 
                The consumer durables and electronics industries have relied on these benefits and the fact that these batteries are fairly lightweight, 
                the very requirements for EVs as well. <br/>
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse6">
                <b><h5>6. What are the best features of an EV?</h5></b>
              </a>
            </div>
            <div id="collapse6" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                One of the most evident features of an electric vehicle is space. 
                Without the need to accommodate an engine and large fuel tank, electric vehicles tend to have more passenger and storage space. 
                Besides this, being all-electric, most EVs come with state-of-the-art technologies like cruise control, lane-assist driving, blind spot warnings and other driver-enablement features. 
                The newer models across manufacturers also support rapid charging.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse7">
                <b><h5>7. Is hybrid a type of EV?</h5></b>
              </a>
            </div>
            <div id="collapse7" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                A hybrid vehicle is part electric and utilizes an internal combustion engine, 
                both of which work in tandem. An EV is generally completely electric and runs on one or more electric motors. 
                In fact, there are numerous combinations of electric motor supported vehicles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse8">
                <b><h5>8. Since EVs are considered green, can batteries be recycled?</h5></b>
              </a>
            </div>
            <div id="collapse8" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                Presently, since most electric vehicles haven’t aged much, the estimated rate of recycling is pegged at ~50%. 
                However, the EV battery recycling market is envisioned to see a massive surge in coming years, 
                and it is estimated that ~90% of EV batteries will be recycled. 
                This will continuously help mitigate environmental damage from waste.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse9">
                <b><h5>9. What kind of distance can an electric vehicle cover?</h5></b>
              </a>
            </div>
            <div id="collapse9" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                While there are numerous EVs that have been designed keeping short urban commutes in mind, 
                there are many electric vehicles capable of upward of 480 Kilometers (300 Miles). 
                A handful of consumer vehicles even provide distance between charges at around 640 Kilometers (400 Miles). 
                The range of vehicles that manufacturers produce is matched to consumer demand for their various uses and applications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card faq">
            <div className="card-header">
              <a className="collapsed btn" data-bs-toggle="collapse" href="#collapse10">
                <b><h5>10. Are electric vehicles better than diesel or petrol vehicles?</h5></b>
              </a>
            </div>
            <div id="collapse10" className="collapse">
              <div className="card-body">
                <p style = {{fontSize: "larger"}}>
                It depends on the usage, efficiency and maintenance of the vehicle. For the most part, 
                EVs provide better energy to milage than their ICE counterparts. 
                However, the ability to top up a fuel tank in a few minutes is still a huge draw in the perspective of much longer charge times. 
                However, for most urban commuting needs (and in many cases inter-city travel), 
                electric vehicles hold enough of a charge to allow worry-free driving.
                </p>
              </div>
            </div>
          </div>
                
          </div>
          </div>
          </>
   )
}