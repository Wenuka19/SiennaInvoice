import { useContext } from "react";
import { State } from "../context/stateContext";

export default function ClientDetails() {
  const { clientName, clientAddress,clientNIC} = useContext(State);

  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
        <p>{clientNIC}</p>
      </section>
    </>
  );
}
