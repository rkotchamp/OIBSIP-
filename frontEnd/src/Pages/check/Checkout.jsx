import { loadStripe } from "@stripe/stripe-js";

import "./Checkout.css";

function Checkout() {
  const loadPromise = loadStripe(
    "pk_live_51OqINqDdMJ6nFPGif881OxctXJllPJbSK3SmXy3pOk2wo8Q0I5isiDLs8gbBJRoIMYF4y9UNhuAsggLHmdSlJLvB00U4VZ8lzE"
  );
  return (
    <div className="checkout__container">
      <div className="color first__gradient"></div>
      <div className="color second__gradient"></div>
      <div className="headerAndCheckAway">
        <h1>Checkout</h1>
        <div className="checkAway">
          <form action="" className="checkForm">
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
