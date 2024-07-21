"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import Profile from "./Profile";

import { calculatePawtyDate } from "./utils";
import { format } from "date-fns";

export default function Page() {
  const [dogBirthday, setDogBirthday] = useState();
  const [humanBirthday, setHumanBirthday] = useState();
  const [result, setResult] = useState();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground">
        🐾 Double Pawty 🐾
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:w-full md:max-w-3xl">
        <Profile
          {...{
            birthday: dogBirthday,
            setBirthday: setDogBirthday,
            prompt: "Dog's birthday",
            imageUrl: "./double-pawty/dog.png",
            isFinished: result ? 1 : 0,
          }}
        />
        <Profile
          {...{
            birthday: humanBirthday,
            setBirthday: setHumanBirthday,
            prompt: "Human's birthday",
            imageUrl: "./double-pawty/human.png",
            isFinished: result ? 1 : 0,
          }}
        />
      </div>
      {result ? null : (
        <Button
          disabled={!dogBirthday || !humanBirthday}
          onClick={() =>
            setResult(calculatePawtyDate(dogBirthday, humanBirthday))
          }
        >
          Reveal the date
        </Button>
      )}

      <div className="w-full max-w-md text-center space-y-4">
        {result ? (
          <>
            <p className="text-xl font-semibold">{`You and your puppy are both ${`${Math.floor(
              result.age
            )} years ${Math.floor(
              (result.age % 1) * 12
            )} months`} old on ${format(result.sameAgeDate, "PPP")}`}</p>
          </>
        ) : (
          <>
            <p className="text-xl font-semibold">
              Learn the exact day you and your puppy will be the same age.
            </p>
            <p className="text-sm">
              PS: Of course, no data is stored or sent to anywhere.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
