import "./PizzaComponent.css";

function PizzaComponent() {
  return (
    <div className="pizza__container">
      <div className="pizza__image__container">
        <img src="" alt="" />
      </div>
      <div className="title__and__price">
        <p>Quattro staggioni</p>
        <p className="price">$5</p>
      </div>
      <div className="description__and__radio">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper vivamus in lacus
          morbi. Pulvinar quam nunc vitae at aliquet. Magna vel diam nibh enim
          et eu. Habitant turpis nulla ultrices nisl nunc vulputate mi eu
          euismod. Feugiat risus netus suspendisse ultricies eu aliquam in
        </p>
        <input type="radio" />
      </div>
    </div>
  );
}

export default PizzaComponent;
