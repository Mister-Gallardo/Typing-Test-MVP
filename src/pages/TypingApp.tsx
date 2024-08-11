import { useEffect, useRef, useState } from "react";
import {
  Container,
  Logo,
  Title,
  WordsContent,
  Typography,
  TextField,
  Timer,
  RestartIcon,
} from "../styles/StylesInJs";
import Debounce from "../helpers/Debounce";
import symbolInFourSentences from "../helpers/GetSymbolsCount";
import GetText from "../helpers/GetText";
import HandleRestart from "../helpers/HandleRestart";

const ArrayOfSentences = [
  "the quick brown fox jumps over the lazy dog and as it leaps into the air it feels a sense of freedom that is hard to describe the grass below is a vibrant green and the sun shines brightly illuminating the scene in a way that makes everything appear almost magical as the fox lands gracefully it looks around to see if anyone is watching it enjoys these moments of solitude where it can just be itself without any worries or concerns about the world around it the trees sway gently in the breeze and the birds chirp cheerfully creating a symphony of nature that is both calming and invigorating the fox takes a deep breath filling its lungs with the fresh air that smells of flowers and earth this is its favorite time of day when the world is quiet and peaceful allowing for reflection and contemplation about life and its many mysteries that often go unexplained the quick brown fox jumps over the lazy dog and while the sun sets in the horizon the colors of the sky change from blue to orange creating a beautiful canvas that captivates anyone who happens to glance at it as the day turns into night the stars begin to twinkle like diamonds scattered across a vast expanse of velvet darkness and in this moment of tranquility one can reflect on the events of the day the laughter shared with friends the challenges faced at work and the small victories that often go unnoticed yet they form the tapestry of our lives weaving together moments of joy sorrow and everything in between  that beauty exists even amidst chaos reminding everyone who gazed upon her work",
  "in a small town nestled between rolling hills there lived a young girl who dreamed of adventure she would often sit by her window gazing at the horizon imagining what lay beyond the mountains her heart was filled with wanderlust and a desire to explore every corner of the earth she would read books about faraway places filled with exotic cultures and breathtaking landscapes each page igniting her imagination and fueling her dreams she longed to experience the thrill of discovering new lands meeting new people and learning their stories she would often daydream about sailing across the ocean or hiking through dense forests where sunlight filtered through the leaves creating patterns on the ground these thoughts would carry her away from her mundane daily life into a world of possibilities where anything could happen and every day was an opportunity for something extraordinary in a small village nestled between rolling hills and lush green fields there lived a community of people who valued simplicity and togetherness every morning they would gather at the local market where farmers displayed their fresh produce artisans showcased their crafts and children ran freely playing games that filled the air with laughter it was a place where stories were exchanged friendships were formed and bonds were strengthened as the sun rose higher in the sky illuminating the vibrant colors of fruits vegetables and handmade goods the atmosphere buzzed with energy and excitement as everyone contributed to the lively exchange of goods and ideas",
  "on a rainy afternoon as the droplets pattered against the window a young man sat in his favorite armchair with a cup of steaming tea cradled in his hands he watched as the world outside transformed into a blur of colors and shapes the streets glistened with water reflecting the gray skies above he found comfort in these moments of solitude where he could escape into his thoughts and reflect on his life he pondered over his dreams aspirations and the paths he had chosen along the way sometimes he felt lost unsure of which direction to take next but in this quiet space he allowed himself to embrace uncertainty knowing that life was a journey filled with twists and turns every experience shaping him into who he was meant to be he savored each sip of tea letting its warmth spread through him as he contemplated the beauty of simply being present in this moment as winter approached the villagers prepared for the colder months by gathering supplies and ensuring their homes were warm and inviting they would spend evenings around crackling fires sharing tales of old traditions and legends passed down through generations while sipping hot cocoa and enjoying freshly baked bread the aroma of spices filled the air as families came together to create hearty meals that nourished not only their bodies but also their souls in this cozy setting they found comfort in each others company knowing that no matter how harsh the winter might be they would face it together united by love and resilience that would last a lifetime with those who sought guidance in times of uncertainty",
  "in a bustling city where skyscrapers reached for the clouds and life moved at a relentless pace one could easily feel lost amidst the chaos yet hidden within this urban jungle were pockets of serenity where nature thrived gardens adorned rooftops and parks provided a refuge from the concrete surroundings here people found solace in the simple act of being present taking a moment to breathe deeply and appreciate the beauty that existed even in the most unexpected places as they strolled along tree-lined paths or sat on benches watching the world go by they discovered that amidst the noise and hurry there was always room for peace if one chose to seek it beneath a starlit sky two friends sat around a crackling campfire sharing stories and laughter their faces illuminated by the warm glow of the flames they had spent countless nights like this under the vast expanse of the universe feeling small yet connected to something greater they spoke of their dreams fears and hopes for the future each word weaving a tapestry of friendship that would last a lifetime as they roasted marshmallows and made smores they reminisced about their childhood adventures exploring the woods climbing trees and building forts from fallen branches those innocent days were filled with joy and wonder and as they grew older they realized how precious those memories were they promised to always cherish their bond no matter where life took them knowing that true friendship could withstand any distance or challenge that came their way with fellow book lovers forming connections",
  "the ocean waves crashed rhythmically against the shore creating a soothing melody that echoed in the hearts of those who stood by its edge with each ebb and flow the water revealed treasures hidden beneath its surface shells smooth stones and sometimes even remnants of ships lost to time as children built sandcastles and chased after seagulls their laughter mingled with the sound of the waves creating a symphony of joy that resonated with everyone nearby adults too found themselves drawn to the waters edge feeling a sense of nostalgia wash over them as they recalled their own childhood adventures spent at the beach under the warm sun and gentle breeze n an ancient forest where sunlight barely penetrated through the thick canopy of leaves there lived a wise old owl who had seen many seasons come and go perched high on a sturdy branch it observed the world below with keen eyes witnessing the dance of life unfold every day was a new story filled with triumphs struggles and lessons learned the owl had watched as young animals took their first steps ventured out into the unknown and discovered their place in the grand tapesty of existence it understood that each creature had its own journey to embark upon filled with challenges that would shape their character and resilience it was not just about survival but also about growth transformation and finding joy in simple pleasures like the rustle of leaves in the wind or the sound of rain tapping against its feathers with each passing year the owl became a guardian of wisdom sharing its knowledge",
  "as spring arrived nature awakened from its slumber flowers bloomed in vibrant colors painting landscapes with hues of pink yellow and purple while trees donned fresh green leaves that danced in the wind like joyful spirits celebrating life everywhere one looked there were signs of renewal as animals emerged from hibernation birds returned from distant lands and the air filled with sweet fragrances of blossoms it was a time for growth reflection and new beginnings as people ventured outdoors to enjoy picnics hikes and leisurely strolls they embraced the warmth of the sun on their skin and felt invigorated by the beauty surrounding them the journey of self-discovery is often filled with twists and turns moments of doubt and clarity on a bustling city street where people hurried by lost in their thoughts there stood a small bookstore tucked away between towering buildings its weathered sign swayed gently in the breeze inviting passersby to step inside once someone crossed the threshold they were transported into a world filled with stories waiting to be discovered shelves lined with books of every genre beckoned readers to explore new worlds escape reality and ignite their imaginations in this cozy haven time seemed to stand still as individuals found solace among the pages surrounded by the scent of old paper and ink they could lose themselves for hours flipping through novels poetry collections and memoirs each book held a unique narrative ready to unfold revealing secrets adventures and wisdom that transcended time as customers browsed they exchanged smiles",
  "at shape who we are becoming along this path we encounter challenges that test our strength resilience and determination each obstacle serves as a lesson teaching us about ourselves our values and our capacity for growth while navigating this intricate web of experiences we learn to embrace vulnerability understanding that it is through our struggles that we find our greatest strengths as we rise from setbacks we become more compassionate towards ourselves and others recognizing that everyone is on their own unique journey filled with highs and lows at dawn when the first rays of sunlight broke through the darkness a farmer rose early to tend to his fields he relished these quiet moments before the world awoke feeling a deep connection to the land that had been passed down through generations as he walked among rows of crops he marveled at natures beauty watching as dew glistened on leaves like tiny diamonds reflecting light in every direction this was not just work for him it was a labor of love each seed planted represented hope for nourishment sustenance and life itself he understood that farming was not merely about growing food but also about cultivating relationships with the earth respecting its rhythms and nurturing its gifts with patience and care he believed in sustainable practices preserving biodiversity ensuring that future generations could enjoy the fruits of his labor while also honoring the legacy left by those who came before him to bring people together that reminded them of the power of storytelling  another through hardships forging friendships",
  "in a world driven by technology where screens dominate our attention it is easy to forget the importance of human connection yet when we take a step back and engage in meaningful conversations we rediscover the beauty of genuine interactions whether its sharing stories laughter or simply being present for one another these moments remind us of our shared humanity fostering empathy understanding and compassion as we connect with others we build bridges that transcend differences creating a sense of belonging that enriches our lives reminding us that despite our individual paths we are all part of a larger tapestry woven together by our experiences emotions and dreams in a quaint village by the sea fishermen cast their nets into calm waters hoping for a bountiful catch as dawn broke over the horizon painting the sky in hues of orange pink and gold they felt a sense of peace wash over them knowing that this was their way of life passed down through generations each wave lapping against their boats told stories of resilience hard work and community as they pulled in their nets filled with shimmering fish they shared laughter camaraderie and gratitude for natures abundance these moments forged bonds between them reminding them that they were part of something larger than themselves united by their love for the ocean its mysteries its challenges and its rewards after a long day at sea they would gather at the local tavern sharing tales of their adventures while savoring freshly cooked seafood celebrating not only their successes but also supporting one",
  "the power of creativity lies within each of us waiting to be unleashed through various forms such as art music writing or dance when we allow ourselves to express our thoughts feelings and ideas freely we tap into a wellspring of inspiration that fuels our passions creativity invites exploration experimentation and play encouraging us to step outside our comfort zones and embrace uncertainty as we create we discover new perspectives challenge existing norms and inspire others to do the same in this shared journey of imagination we find connection collaboration and an endless source of joy that nourishes our souls during a summer festival held in a vibrant town square children ran freely laughing joyfully as colorful balloons floated overhead vendors lined the streets selling homemade treats crafts and trinkets creating an atmosphere filled with excitement and anticipation families gathered together enjoying performances from musicians dancers and artists showcasing their talents under bright lights amidst laughter chatter and music everyone felt a sense of belonging as they celebrated life together this annual event brought people from all walks of life uniting them through shared experiences traditions stories laughter and love it was a time to reconnect with friends family neighbors creating memories that would linger long after summer faded into fall as night fell fireworks lit up the sky bursting into brilliant colors illuminating faces filled with awe wonderment joy reminding everyone present that despite lifes challenges there was always something beautiful worth celebrating",
  "as we navigate lifes complexities it is essential to cultivate gratitude recognizing the abundance that exists even in challenging times when we shift our focus from what is lacking to what we have we open ourselves up to a world filled with possibilities each day presents opportunities for appreciation whether its savoring a warm cup of coffee witnessing a breathtaking sunset or cherishing moments spent with loved ones by practicing gratitude we cultivate a mindset that fosters positivity resilience and contentment allowing us to navigate lifes ups and downs with grace while finding joy in even the simplest of things far away in a distant land where mountains kissed the sky rivers flowed like silver ribbons through valleys lush greenery surrounded every corner creating an oasis of tranquility here lived an artist who found inspiration in natures beauty each stroke of her brush captured vibrant landscapes filled with colors emotions stories waiting to be told she spent hours wandering through meadows climbing hills exploring hidden nooks where wildflowers bloomed creating masterpieces that reflected her soul art became her language allowing her to express feelings thoughts dreams fears without uttering a single word she understood that creativity was not just about technique but rather about connecting deeply with oneself embracing vulnerability letting go of perfectionism allowing inspiration to flow freely like water cascading down rocks she believed that every creation held significance contributing to an ever-evolving narrative celebrating life love loss hope resilience",
];

let visibleCharsCount = symbolInFourSentences;

const TypingApp = () => {
  const [textToType, setTextToType] = useState(
    () => ArrayOfSentences[Math.floor(Math.random() * 10)]
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  const isFocusedRef = useRef(isFocused);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedFunc = useRef(Debounce(setInputValue, 12)).current;

  useEffect(() => {
    let idInterval: number;
    if (isTimerRunning) {
      idInterval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(idInterval);
    };
  }, [isTimerRunning]);

  useEffect(() => {
    if (timer === 0) {
      // alert("Время вышло!");
      HandleRestart(
        setIsFocused,
        setTextToType,
        setTimer,
        setIsTimerRunning,
        debouncedFunc,
        ArrayOfSentences,
        visibleCharsCount
      );
    }
  }, [timer]);

  useEffect(() => {
    const handleKeyDown = () => {
      !isFocusedRef.current && setIsFocused(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    isFocusedRef.current = isFocused;
    if (isFocused) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  }, [isFocused]);

  return (
    <Container>
      <Logo>
        <img src="./keyboard-icon.svg"></img>
        <Title>gallardotype</Title>
      </Logo>
      <WordsContent>
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            gap: "10px",
            transition: ".4s",
            filter: isFocused ? "none" : "blur(5px)",
          }}
        >
          <img src="./clock-icon.svg"></img>
          <Timer
            style={{
              color: isTimerRunning ? "#E2B714" : "rgb(160, 160, 160)",
            }}
          >
            {timer}
          </Timer>
        </div>
        <div
          style={{
            transition: ".4s",
            filter: isFocused ? "none" : "blur(8px)",
            height: "170px",
            overflow: "hidden",
          }}
        >
          {GetText(inputValue, setInputValue, textToType, visibleCharsCount)}
          <TextField
            type="text"
            autoFocus
            autoComplete="off"
            disabled={!isFocused}
            ref={inputRef}
            onBlur={() => setIsFocused(false)}
            value={inputValue}
            onChange={(e) => {
              setIsTimerRunning(true);
              debouncedFunc(e.target.value);
            }}
          ></TextField>
        </div>
        <div
          onClick={() => {
            !isFocused && setIsFocused(true);
          }}
          style={{
            display: isFocused ? "none" : "flex",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 30,
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./cursor-icon.svg"></img>
          <Typography>Click here or press any key to focus</Typography>
        </div>
      </WordsContent>
      <RestartIcon
        onClick={() =>
          HandleRestart(
            setIsFocused,
            setTextToType,
            setTimer,
            setIsTimerRunning,
            debouncedFunc,
            ArrayOfSentences,
            visibleCharsCount
          )
        }
        className="restartIcon"
        src="./restart-icon.svg"
      ></RestartIcon>
    </Container>
  );
};

export default TypingApp;
