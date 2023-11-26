//import React from 'react';
import './styles.css';
import React, { useState, useEffect } from 'react';

const Header = (props) => {
    return (
    <header>
	<h1>{props.name}'s React Komponenten</h1>
    </header>
    );
};

const Welcome = () => {
    return (
        <section>
  	<h2>Willkommen</h2>
  	<p>Herzlich willkommen auf meiner einfachen Webseite!</p>
	</section>
    );
};

const About = (props) => {
    return (
        <section>
  	<h2>Über mich</h2>
  	<p>
    	Hier ist eine kurze Beschreibung über mich und meine Interessen: {props.description}
  	</p>
	</section>
    );
};

const Contact = (props) => {
    return (
        <section>
  	<h2>Kontakt</h2>
  	<p>
    	Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
    	{props.email}
  	</p>
	</section>
    );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };

  return (
    <section>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increase by 2</button>
    </section>
  );
};

const TimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Function to format the time in HH:MM:SS format
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div>
      <h2>Time Widget</h2>
      <p>Current Time: {formatTime(currentTime)}</p>
    </div>
  );
};

const Footer = () => {
    return (
        <footer>
	<p>&copy; 2023 Meine Webseite</p>
  </footer>
    );
};

const App = (props) => {
    return (
      <div>
        <Header name={props.name}/>
        <main>
          <Welcome />
          <About description={props.description}/>
          <Contact email={props.email}/>
          <Counter />
          <TimeWidget />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default App;
