import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav>
        {/* <Link href="/"> Home</Link> <br></br> */}
        <Link href="/AdminNEW/profile">Profile</Link><br></br>
        <Link href="/AdminNEW/addCustomer">add Customer</Link><br></br>
        <Link href="/AdminNEW/AddProduct">Add Product</Link><br></br>

        <Link href="/AdminNEW/deleteProduct">Delete Product</Link><br></br>
        <Link href="/AdminNEW/getallCustomer">View All Customer</Link><br></br>
        
        <Link href="/AdminNEW/Allproduct">All Product</Link><br></br>
        <Link href="/AdminNEW/viewSingleProduct">view Single Product</Link><br></br>
        {/* <Link href="/AdminNEW/searchProduct">Search Product</Link><br></br> */}
        <Link href="/AdminNEW/searchProductById">Search Product By ID</Link><br></br>
        <Link href="/AdminNEW/deleteProduct">Delete Product</Link><br></br>


        <Link href="/AdminNEW/seeAllCustomer">See All Customer</Link><br></br>
        <Link href="/AdminNEW/updateProduct">Update Productr</Link><br></br>
        
        </nav>
        {/* <Image src="/ico.png" alt="me" width="64" height="64" /> */}
        <main>

        </main>
        {/* <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            Abc Ecommerce @copyright</div> */}
        </>
    )
}