import { useEffect, useMemo, useRef, useState } from "react";
// import TypingArea from "./components/TypingArea";
// import Results from "./components/Results";
import styled from "styled-components";
import {
  Container,
  CorrectChar,
  DefaultChar,
  IncorrectChar,
  Logo,
  Title,
  WordsContent,
} from "./styles/StylesInJs";
import "./App.css";

const ArrayOfSentences = [
  "the quick brown fox jumps over the lazy dog and as it leaps into the air it feels a sense of freedom that is hard to describe the grass below is a vibrant green and the sun shines brightly illuminating the scene in a way that makes everything appear almost magical as the fox lands gracefully it looks around to see if anyone is watching it enjoys these moments of solitude where it can just be itself without any worries or concerns about the world around it the trees sway gently in the breeze and the birds chirp cheerfully creating a symphony of nature that is both calming and invigorating the fox takes a deep breath filling its lungs with the fresh air that smells of flowers and earth this is its favorite time of day when the world is quiet and peaceful allowing for reflection and contemplation about life and its many mysteries that often go unexplained",

  "in a small town nestled between rolling hills there lived a young girl who dreamed of adventure she would often sit by her window gazing at the horizon imagining what lay beyond the mountains her heart was filled with wanderlust and a desire to explore every corner of the earth she would read books about faraway places filled with exotic cultures and breathtaking landscapes each page igniting her imagination and fueling her dreams she longed to experience the thrill of discovering new lands meeting new people and learning their stories she would often daydream about sailing across the ocean or hiking through dense forests where sunlight filtered through the leaves creating patterns on the ground these thoughts would carry her away from her mundane daily life into a world of possibilities where anything could happen and every day was an opportunity for something extraordinary",

  "on a rainy afternoon as the droplets pattered against the window a young man sat in his favorite armchair with a cup of steaming tea cradled in his hands he watched as the world outside transformed into a blur of colors and shapes the streets glistened with water reflecting the gray skies above he found comfort in these moments of solitude where he could escape into his thoughts and reflect on his life he pondered over his dreams aspirations and the paths he had chosen along the way sometimes he felt lost unsure of which direction to take next but in this quiet space he allowed himself to embrace uncertainty knowing that life was a journey filled with twists and turns every experience shaping him into who he was meant to be he savored each sip of tea letting its warmth spread through him as he contemplated the beauty of simply being present in this moment",

  "beneath a starlit sky two friends sat around a crackling campfire sharing stories and laughter their faces illuminated by the warm glow of the flames they had spent countless nights like this under the vast expanse of the universe feeling small yet connected to something greater they spoke of their dreams fears and hopes for the future each word weaving a tapestry of friendship that would last a lifetime as they roasted marshmallows and made smores they reminisced about their childhood adventures exploring the woods climbing trees and building forts from fallen branches those innocent days were filled with joy and wonder and as they grew older they realized how precious those memories were they promised to always cherish their bond no matter where life took them knowing that true friendship could withstand any distance or challenge that came their way",

  "in an ancient forest where sunlight barely penetrated through the thick canopy of leaves there lived a wise old owl who had seen many seasons come and go perched high on a sturdy branch it observed the world below with keen eyes witnessing the dance of life unfold every day was a new story filled with triumphs struggles and lessons learned the owl had watched as young animals took their first steps ventured out into the unknown and discovered their place in the grand tapestry of existence it understood that each creature had its own journey to embark upon filled with challenges that would shape their character and resilience it was not just about survival but also about growth transformation and finding joy in simple pleasures like the rustle of leaves in the wind or the sound of rain tapping against its feathers with each passing year the owl became a guardian of wisdom sharing its knowledge with those who sought guidance in times of uncertainty",

  "on a bustling city street where people hurried by lost in their thoughts there stood a small bookstore tucked away between towering buildings its weathered sign swayed gently in the breeze inviting passersby to step inside once someone crossed the threshold they were transported into a world filled with stories waiting to be discovered shelves lined with books of every genre beckoned readers to explore new worlds escape reality and ignite their imaginations in this cozy haven time seemed to stand still as individuals found solace among the pages surrounded by the scent of old paper and ink they could lose themselves for hours flipping through novels poetry collections and memoirs each book held a unique narrative ready to unfold revealing secrets adventures and wisdom that transcended time as customers browsed they exchanged smiles with fellow book lovers forming connections that reminded them of the power of storytelling to bring people together",

  "at dawn when the first rays of sunlight broke through the darkness a farmer rose early to tend to his fields he relished these quiet moments before the world awoke feeling a deep connection to the land that had been passed down through generations as he walked among rows of crops he marveled at natures beauty watching as dew glistened on leaves like tiny diamonds reflecting light in every direction this was not just work for him it was a labor of love each seed planted represented hope for nourishment sustenance and life itself he understood that farming was not merely about growing food but also about cultivating relationships with the earth respecting its rhythms and nurturing its gifts with patience and care he believed in sustainable practices preserving biodiversity ensuring that future generations could enjoy the fruits of his labor while also honoring the legacy left by those who came before him",

  "in a quaint village by the sea fishermen cast their nets into calm waters hoping for a bountiful catch as dawn broke over the horizon painting the sky in hues of orange pink and gold they felt a sense of peace wash over them knowing that this was their way of life passed down through generations each wave lapping against their boats told stories of resilience hard work and community as they pulled in their nets filled with shimmering fish they shared laughter camaraderie and gratitude for natures abundance these moments forged bonds between them reminding them that they were part of something larger than themselves united by their love for the ocean its mysteries its challenges and its rewards after a long day at sea they would gather at the local tavern sharing tales of their adventures while savoring freshly cooked seafood celebrating not only their successes but also supporting one another through hardships forging friendships that would last a lifetime",

  "during a summer festival held in a vibrant town square children ran freely laughing joyfully as colorful balloons floated overhead vendors lined the streets selling homemade treats crafts and trinkets creating an atmosphere filled with excitement and anticipation families gathered together enjoying performances from musicians dancers and artists showcasing their talents under bright lights amidst laughter chatter and music everyone felt a sense of belonging as they celebrated life together this annual event brought people from all walks of life uniting them through shared experiences traditions stories laughter and love it was a time to reconnect with friends family neighbors creating memories that would linger long after summer faded into fall as night fell fireworks lit up the sky bursting into brilliant colors illuminating faces filled with awe wonderment joy reminding everyone present that despite lifes challenges there was always something beautiful worth celebrating",

  "far away in a distant land where mountains kissed the sky rivers flowed like silver ribbons through valleys lush greenery surrounded every corner creating an oasis of tranquility here lived an artist who found inspiration in natures beauty each stroke of her brush captured vibrant landscapes filled with colors emotions stories waiting to be told she spent hours wandering through meadows climbing hills exploring hidden nooks where wildflowers bloomed creating masterpieces that reflected her soul art became her language allowing her to express feelings thoughts dreams fears without uttering a single word she understood that creativity was not just about technique but rather about connecting deeply with oneself embracing vulnerability letting go of perfectionism allowing inspiration to flow freely like water cascading down rocks she believed that every creation held significance contributing to an ever-evolving narrative celebrating life love loss hope resilience reminding everyone who gazed upon her work that beauty exists even amidst chaos",
];

const RestartIcon = styled.img`
  margin: -50px auto 15px;
  width: 30px;
  border-radius: 25px;
  padding: 1px 2px 4px;
`;

function Debounce(func: (newVal: string) => void, delay: number) {
  let id: number;
  return (newVal: string) => {
    clearTimeout(id);
    id = setTimeout(() => func(newVal), delay);
  };
}

const App = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [textToType, setTextToType] = useState(
    ArrayOfSentences[Math.floor(Math.random() * 10)]
  );
  const [visibleCharsCount, setVisibleCharsCount] = useState(195);
  const [isFocused, setIsFocused] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedFunc = useRef(Debounce(setInputValue, 15)).current;

  const getDisplayedText = useMemo(() => {
    return [...textToType]
      .slice(0, visibleCharsCount)
      .map((char, charIndex) => {
        if (inputValue[charIndex] === char) {
          return <CorrectChar key={charIndex}>{char}</CorrectChar>;
        } else if (inputValue[charIndex]) {
          return <IncorrectChar key={charIndex}>{char}</IncorrectChar>;
        } else {
          return (
            <DefaultChar
              className={
                charIndex === inputValue.length ? "blinking-border" : ""
              }
              key={charIndex}
            >
              {char}
            </DefaultChar>
          );
        }
      });
  }, [textToType, inputValue]);

  function handleRestart() {
    setTextToType(ArrayOfSentences[Math.floor(Math.random() * 10)]);
    debouncedFunc("");
  }

  function FocusInput() {
    if (!isFocused) {
      setIsFocused(true);
    }
    inputRef.current && inputRef.current.focus();
  }

  function BlurInput() {
    setIsFocused(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", FocusInput);

    return () => {
      window.removeEventListener("keydown", FocusInput);
    };
  });

  // console.log(textToType);
  return (
    <Container>
      <Logo>
        <img src="./keyboard-icon.svg"></img>
        <Title>gallardotype</Title>
      </Logo>
      <WordsContent>
        <div
          style={{
            filter: isFocused ? "none" : "blur(8px)",
            height: "170px",
            overflow: "hidden",
          }}
        >
          {getDisplayedText}
          <input
            autoFocus
            disabled={!isFocused}
            ref={inputRef}
            onFocus={() => FocusInput()}
            onBlur={() => BlurInput()}
            style={{
              opacity: "0",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            value={inputValue}
            onChange={(e) => debouncedFunc(e.target.value)}
          ></input>
        </div>
        <div
          onClick={() => FocusInput()}
          style={{
            display: isFocused ? "none" : "flex",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./cursor-icon.svg"></img>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "600",
              color: "rgb(220, 220, 220)",
              fontFamily: "Roboto mono, sans-serif",
            }}
          >
            Click here or press any key to focus
          </p>
        </div>
      </WordsContent>
      <RestartIcon
        onClick={handleRestart}
        className="restartIcon"
        src="./restart-icon.svg"
      ></RestartIcon>
    </Container>
  );
};

export default App;
