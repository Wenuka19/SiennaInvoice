import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Name:</span> Sienna Retreat
          </li>
          <li>
            <span className="font-bold">Email:</span> siennaretreat@gmail.com
          </li>
          <li>
            <span className="font-bold">Phone number:</span> +94767654321
          </li>
          <li>
            <span className="font-bold">Bank:</span> Bank of Ceylon
          </li>
          <li>
            <span className="font-bold">Account holder:</span> Sienna Retreat
          </li>
          <li>
            <span className="font-bold">Account number:</span> 8906890504
          </li>
          <li>
            <span className="font-bold">Branch:</span> Kandy
          </li>
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        Invoicer is built by{" "}
        <a
          href="https://tsbsankara.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Thomas Sankara
        </a>
      </p>
    </>
  );
}
