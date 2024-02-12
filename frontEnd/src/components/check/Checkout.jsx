import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout__container">
      <div className="color first__gradient"></div>
      <div className="color second__gradient"></div>
      <div className="headerAndCheckAway">
        <h1>Checkout</h1>
        <div className="checkAway">
          <form action="">
            <input type="text" placeholder="Full Name" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
