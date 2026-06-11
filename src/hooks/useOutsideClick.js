import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);
      // ///// the true is required to make sure that the event is [icked at the capturing face , if not, when we click on the addnewcabin button, the modal will open but sice the click happened outside the modal, it will close immediately]/// the true makes sure the event is captured as it moves down the dom tree and not up the dpm tree
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );
  return ref;
}
