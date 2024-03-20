type Car = {
  brand: string;
  color: string;
  model: string;
  name: string;
  horsePower: number;
  wheels: number;
  towbar: boolean;
};
type Boat = {
  brand: string;
  color: string;
  model: string;
  name: string;
  horsePower: number;
  engineIn: boolean;
};
type Motorcycle = {
  brand: string;
  color: string;
  model: string;
  name: string;
  horsePower: number;
  wheels: number;
};
type Bus = {
    brand: string;
    color: string;
    model: string;
    name: string;
    horsePower: number;
    wheels: 6;
    fuelType: 'diesel';
}

type Vehicles = Car | Boat | Motorcycle | Bus;

interface VehicleProps {
  vehicles: Vehicles[];
}

function Vehicle(props: VehicleProps) {
  return (
    <div>
      <h2>List of Vehicles</h2>
      <ul>
        {props.vehicles.map((vehicle, index) => (
          <li key={index}>
            Vehicle {index + 1}
            <ul>
            {('towbar' in vehicle) && (
                <>
                <li>Type: Car</li>
                <li>Towbar: {vehicle.towbar ? 'Yes' : 'No'}</li>
                </>
            )}
            {('engineIn' in vehicle) && (
                <>
                <li>Type: Boat</li>
                <li>Engine inside? {vehicle.engineIn ? 'Yes' : 'No'}</li>
                </>
            )}
                <li>Brand: {vehicle.brand}</li>
                <li>Color: {vehicle.color}</li>
                <li>Model: {vehicle.model}</li>
                <li>Name: {vehicle.name}</li>
                <li>Horsepower: {vehicle.horsePower}</li>
            {('wheels' in vehicle) && (
                <>
                <li>Wheels: {vehicle.wheels}</li>
                </>
            )}
            </ul>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicle;
