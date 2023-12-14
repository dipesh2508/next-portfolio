"use client";

// Importing necessary hooks and components from react and tsparticles
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Define the ParticleBackground component
const ParticleBackground = () => {
  // State to track if particles engine is initialized
  const [init, setInit] = useState(false);

  // Use useEffect to initialize particles engine on component mount
  useEffect(() => {
    // Initialize particles engine
    initParticlesEngine(async (engine) => {
      // Load slim version of particles
      await loadSlim(engine);
    }).then(() => {
      // Set init state to true after particles engine is initialized
      setInit(true);
    });
  }, []); // Empty dependency array ensures this runs only on mount and not on updates

  // Function to be called when particles are loaded
  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Define the options for the particles
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#181616",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#66D7D1",
        },
        links: {
          color: "#66D7D1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  // If the particles engine is initialized, render the particles
  if (init) {
    return (
      // Create a div with absolute positioning and a z-index of -1 to place it behind other content
      <div className="-z-1 absolute">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  // If the particles engine is not initialized, render a div with a dark background
  return <div className="bg-dark-1"></div>;
};

export default ParticleBackground;
