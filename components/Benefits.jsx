import React from 'react';
import { benefits } from "../constants"; // Assuming this still holds the necessary data
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Work Smarter, Not Harder with Webcoinlabs"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.8 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
               
                {/* Custom Heading and Content for Each Benefit */}
                <h5 className="h5 mb-5">
                  {index === 0 ? "Content and Social Media Management" :
                   index === 1 ? "Token Launch Services" :
                   index === 2 ? "Exclusive Alpha Group" :
                   index === 3 ? "Deal Flow Exchange" :
                   index === 4 ? "Technial support" :
                   index === 5 ? "Big Collaborative Giveaway" : "Feature"}
                </h5>
                <p className="body-2 mb-6 text-n-3">
                  {index === 0 ? "Providing Full team of content writers including social media manager (Currently We are overbooked ) ." :
                   index === 1 ? "Offering exclusive services for launching a memecoin,RWA, or other tokens. Also providing team to handle every aspect of the token launch." :
                   index === 2 ? "Providing access to an exclusive alpha group for privileged insights and early information.(More details available upon private discussion)." :
                   index === 3 ? "Partner with a deal flow exchange platform to promote within their community.Offer exclusive entries for their members or co-host the giveaway." :
                   index === 4 ? "Collaboration with market makers, alsokeep close with technical experts for project development." :
                   index === 5 ? "Organizing a massive giveaway on our 100k+ Twitter and Telegram channels using Gleam including fun quiz to boost user interaction and engagement." : "Description"}
                </p>
                {/* End of custom content */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;