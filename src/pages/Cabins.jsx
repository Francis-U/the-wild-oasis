import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
// import Button from "../ui/Button";
// import { useState } from "react";
// import CreateCabinForm from "../features/cabins/cccccccccccccCreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import CabnTableOperations from "../features/cabins/CabnTableOperations";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabnTableOperations />
        {/* <img
        src="https://nbcsppxfqeuadulszrvi.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      /> */}
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
