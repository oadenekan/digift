import React from "react";
import "../App.css";
import FeedbackLayout from "./FeedbackLayout";

const Testimony = () => {
  const info = [
    {
      text:
        "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.",
      name: "Osemwengie Benjamin",
      role: "Product Designer at Digift"
    },
    {
      text:
        "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria. Digift stood out from the crowd with an impressive team and even more impressive mission",
      name: "Osemwengie Benjamin",
      role: "Product Designer at Digift"
    },
    {
      text:
        "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.",
      name: "Osemwengie Benjamin",
      role: "Product Designer at Digift"
    }
  ];

  return (
    <React.Fragment>
      {info.map((items, key) => {
        return (
          <div>
            <FeedbackLayout
              text={items.text}
              name={items.name}
              role={items.role}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Testimony;
