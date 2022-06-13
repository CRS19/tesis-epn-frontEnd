import React from "react";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { useLinkDevice } from "./state/useLinkDevice";

export const LinkDevice = () => {
  const { isLoggedIn } = useLinkDevice();

  return (
    <>
      {isLoggedIn && (
        <>
          <TopBar />

          <div>LinkDevice</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            debitis? Impedit doloremque quisquam voluptas nobis tempora sed
            possimus omnis maiores excepturi, eius fuga nam voluptate nulla ab
            necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ratione, debitis? Impedit doloremque quisquam voluptas nobis tempora
            sed possimus omnis maiores excepturi, eius fuga nam voluptate nulla
            ab necessitatibus, culpa eligendi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ratione, debitis? Impedit doloremque
            quisquam voluptas nobis tempora sed possimus omnis maiores
            excepturi, eius fuga nam voluptate nulla ab necessitatibus, culpa
            eligendi!
          </p>
        </>
      )}
    </>
  );
};
