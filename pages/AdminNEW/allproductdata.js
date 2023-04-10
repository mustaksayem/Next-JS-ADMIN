export default function ProductLayout({ data }) {
    return (
      <>
        <h1>id: {data.id}</h1>
        <h1>Name: {data.Name}</h1>
        <h1>Price: {data.Price}</h1>
        <h1>Category: {data.Category}</h1>
        <h1>Description: {data.Description}</h1>
        {/* <h1>Image: {data.Image}</h1> */}
      </>
    );
  }
  