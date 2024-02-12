import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout__container">
      <div className="color first__gradient"></div>
      <div className="color second__gradient"></div>
      <div className="headerAndCheckAway">
        <h1>Checkout</h1>
        <div className="checkAway">
          <form action="" className="form">
            <div className=" input__container">
              <input type="text" placeholder="Full Name" className="input" />
            </div>
            <div className="cardAndAddress input__container">
              <input type="text" placeholder="Card Number" className="input" />
              <input type="text" placeholder="Address" className="input" />
            </div>
            <div className="cvcAndExpiration input__container">
              <input type="text" placeholder="CVC" className="input" />
              <input type="text" placeholder="Expiration" className="input" />
            </div>
            <button className="checkout__btn">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
