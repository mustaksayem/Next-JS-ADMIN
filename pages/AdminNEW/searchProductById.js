
import MyLayout from "@/pages/AdminNEW/component/layout"
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>Agency Profile</h1>

      <h3>Name : {data.Name}</h3>
      <h3>Price : {data.Price}</h3>
      <h3>Category: {data.Category}</h3>
      <h3>Description : {data.Description}</h3>
      {/* <h3>Category: {data.Category}</h3> */}
    
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
  
    "http://localhost:3000/Admin/searchProductById/2"
  );
  const data = await response.data;
  return { props: { data } };
}

