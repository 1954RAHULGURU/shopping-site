import "./style.css"
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Input, Select, Modal, Button, Drawer } from 'antd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// input antd comp
const { Search } = Input;
const onSearch = (value) => console.log(value);

// --------------------------------------------------------


const ShopPage = () => {
const [product, setProduct] = useState([]);

useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((response)=>{
    setProduct(response.data);
  })
},[]);

// --------------------modal----------------------------------

const [datas, setDatas] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false);

// passing data from map to modal
const showModal = (data) => {
  setIsModalOpen(true);
  setDatas(data);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};

// ---------------------------modal end----------------------------

// add to cart function

const [cart, setCart] = useState([]);

// Function to add a product to the cart
function addToCart(product) {
  // Check if the product is already in the cart
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    // Product already exists in the cart, update its quantity
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  } else {
    // Product doesn't exist in the cart, add it as a new item with quantity 1
    setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
  }

  console.log("Product added to cart:", product);
}

// ----------------drawer-------------------------------

const [open, setOpen] = useState(false);
const showDrawer = () => {
  setOpen(true);
};
const onClose = () => {
  setOpen(false);
};

// ---------------drawer end---------------------------------

  // price calculation

  let totalPrice = cart.reduce(function (accumulator, item) {
    return accumulator + (item.price * item.quantity);
  }, 0);


  // --------------------------------------------------------------------

  // category selection
  const [category, setCategory] = useState("all");


  return (
    <>
   
    <div className='head'>
      
          <img className='ebay'  src="https://img.icons8.com/color/48/ebay.png" alt="ebay"/>
          <Search className="ebayinput" placeholder="Search Products" onSearch={onSearch} enterButton />
          <div className="select">
          <Select defaultValue="all" style={{width: 120}} 
          onChange={(e) => setCategory(e)}
          options={[
        
        {
          value: "jewelery",
          label: 'Jwelleries',
        },
        {
          value: "electronics",
          label: 'Electronics',
        },
        {
          value: "men's clothing",
          label: 'Mens Wear',
        },
        {
          value: "women's clothing",
          label: 'Womens Wear',
        },
        {
          value: "all",
          label: 'All',
        },
      ]}
    />
          </div>
          <div className="miicons">
          <NotificationsIcon/>
          <ShoppingCartIcon onClick={()=>showDrawer()}/>
          {cart.length}
          </div>
        </div>
        {/* --------------------- head div ends ------------------------------- */}
        
        <div className="popdst">
          <h1>Popular Destinations</h1>
          </div>
        <div className="design">
        <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
        <img src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headset" />
        <img src="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="game" />
        <img src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mobile" />
        <img src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg" alt="watch" />
        <img src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="keyboard" />

        </div>

        <div className="design2">
        <h2>Have you been selling on eBay already? To pay your fees or ask questions</h2>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/arrow.png" alt="arrow"/>
        </div>

      {/* main mapping div */}
    <div className='product'>
        
        {product.map((data)=>{
          if (data.category === category || category === "all") {

          return(

            <div className='mapProduct'>

                <div onClick={()=>showModal(data)} className='image'>
                <img src={data.image} alt="error" />
              </div>
              <div className='title'>
              {data.title}
              </div>
              <div className='price'>
             <span>Price </span>  {data.price}
              </div> <br />
              <div>
              <Button onClick={()=>addToCart(data)} type="primary">Add to cart</Button>
              </div> <br /> <br />

            </div>
          )}
        })}
          
    </div>

    <div className="footer">
      <h3>Copyright © 2023 Ebay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice.</h3>
    </div>

    {/* ----------------modal----------------- */}
    <div>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='mapProduct'>

              <div className='title'>
              {datas?.title}
              </div> <br />
              <div className='price'>
             <span>Price - </span>  {datas?.price}
              </div> <br />
              <div className='category'>
                {datas?.category}
              </div> <br />
              <div className='description'>
                <span>Description: </span> {datas?.description}
              </div>
            
           
            </div>
      </Modal>
      {/* ----------Drawer----------- */}
      <div>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <div>
          <h2>Selected Items - {cart.length}</h2> <br />
          <h2>Total Price - {Math.round (totalPrice)}</h2> <br />
        </div>  <hr /> <br />
        <div>
          {cart.map((data)=>{
            return(
              <div>
              <div className='drawerimage'>
              <img src={data.image} alt="error" />
            </div> <br />
            <div className='title'>
            {data.title}
            </div> <br />
            <div>
              Quantity - <b>{data.quantity}</b>
            </div> <br />
            <div className='price'>
           <span>Price </span>  {data.price}
            </div> <br />  <hr /> <br />
            </div>
            )
          })}
        </div>
      </Drawer>
      </div>
    </div>
    </>

  )
}
export default ShopPage
