"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import Profile from "./Profile";

import { calculatePawtyDate } from "./utils";

export default function Page() {
  const [dogBirthday, setDogBirthday] = useState();
  const [humanBirthday, setHumanBirthday] = useState();
  const [result, setResult] = useState();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl font-bold">Double Pawty 🐾</h2>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:w-full md:max-w-3xl">
        <Profile
          {...{
            birthday: dogBirthday,
            setBirthday: setDogBirthday,
            prompt: "Dog's birthday",
            imageUrl: "./double-pawty/dog.png",
          }}
        />
        <Profile
          {...{
            birthday: humanBirthday,
            setBirthday: setHumanBirthday,
            prompt: "Human's birthday",
            imageUrl: "./double-pawty/human.png",
          }}
        />
      </div>
      <Button
        onClick={() =>
          setResult(calculatePawtyDate(dogBirthday, humanBirthday))
        }
      >
        Reveal the date
      </Button>
      <div className="w-full max-w-md">
        {result ? resultContent(result) : seedContent()}
      </div>
    </div>
  );
}

const seedContent = () => {
  return (
    <>
      <p>
        {
          "You know the fact that a dog's age is roughly 7 times a human's age. Do you know though a very important date that comes with that?"
        }
      </p>
      <p>
        {
          "Learn the exact day you and your puppy will be the same age. Just enter your birthday and your dog's birthday, and we'll reveal the date of the Double Pawty!"
        }
      </p>
      <p>No data is stored anywhere.</p>
    </>
  );
};

const resultContent = (result) => {
  return <p>{`Date: ${result.sameAgeDate}`}</p>;
};
