'use client'
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation'
import { Stats } from "./componets/stats";


export default function Home() {
  return (
    <>
  <h1 className="bg-black">

<div className="hero bg-base-200 min-h-screen bg-black">
  <div className="hero-content ">
    <img
      src="self.png"
      className="max-w-sm rounded-3xl shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold  text-slate-200"> <TypeAnimation
    sequence={[
      'Hello...',
      1000,
      "I see you have stumbled onto my website... My name is Saisrikar Surisetti, but you can call me Sai. ",
      300,
    ]}
    /></h1>
    
    <div role="alert" className="alert bg-black border-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-info h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>Keep on Scrolling Down!</span>
</div>
    </div>
  </div>
  
</div>
    
    

  </h1>
  <div>
  <h1 id="about" className="text-5xl font-bold  text-slate-200 text-center"> 
  About me</h1>
    
    <Stats>

    </Stats>
  </div>
<div>
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2016</time>
      <div className="text-lg font-black">Hockey</div>
      Hockey was my first "thing." I pretty much dedicated my whole life to it growing up. It was hockey before school, after school, or sometimes during school. It started of just being skating lessons as a kid. Then it progressed into trying figure skating. Strangly enough I actually really enjoyed figure skating but eventaully I moved onto hockey. I started off playing recreationally then played my first year competativly in teir 2, then played AA and AAA ever since. The two main teams I played on were the Calgary Northstars and U18 Prep Bandits. 
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2020</time>
      <div className="text-lg font-black">Gaming</div>
      As Covid started, hockey shut down. Nothing to do but sit in my room...play some games...and play even more games. I started getting addicted to the feeling of getting better at these games. Then Fornite came out with their cash cups and "wagers" started to pick up. I challanged a pro to a wager as a joke and won 1 round and lost 9. Frustrated that I just lost $20, I played religously everyday to be able to earn my money back. Fast foward a couple months and I played on 3 different Esports teams, and was 10,000 in the green.  
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2022</time>
      <div className="text-lg font-black">Robotics</div>
      Around this time, Hockey was being started again. As before I made the AA team and as soon as I thought I would finally get to play again, I got a concussion... and a knee injury.
       I was out for a large portion of the season. Then next year came and... another back injury came with it. These two years unfortuantly killed my love for hockey and I chose not to play my final year.
        Instead, I found intrest in the robotics club that was at my highschool. 
        Since I was never technical before in terms of my hobbies, it was difficult at first. But for some reason, I started having the same feeling I did while gaming when I was at these robotics tournements.
         I ended up soley dedicating my time to Robotics and ended qualifying to the World Championship that year and placing first in the province. The next year it kept snow balling and we won most of our tournments with 2-3 awards each and again quailfied for the World Championship but this time we were specificly chosen to be the Canada Represetative. 
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Now</time>
      <div className="text-lg font-black">My Current Intrests</div>
      Currently I am a student at the University of Waterloo, pursuing a degree in Pure Math, CO, or Statistics. Although they are completely differnt from my previous intrests in high school, I choose this major because of its career capabilities, flexibility, but more importantly because of a book I read. "The Nothing That is O" by Robert Kaplan. 
      This book follows the story of how the number 0 came into existence and its importance. This influenced me into reading a bundle of random book in math and eventaully lead me to the decision of pusing a degree in math.

      Im I am planning to persue a future in anything quantatative and analytical, with a focus on how we can use data to make game changing decisions for buisness or people.   
    </div>
    <hr />
  </li>

</ul>
</div>
  
  </>
  
  );
}
