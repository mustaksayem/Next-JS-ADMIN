import MyLayout from "@/pages/AdminNEW/component/layout";
import ProductLayout from "@/pages/AdminNEW/allproductdata";
import axios from "axios";
import { useRouter } from "next/router";

export default function AgencyProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Budgets" />
      <ProductLayout data={data} />

      <button
        class="btn btn-success"
        type="button"
        onClick={() => router.back()}
      >
        Click here to go back
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/Admin/getProductById/view/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
