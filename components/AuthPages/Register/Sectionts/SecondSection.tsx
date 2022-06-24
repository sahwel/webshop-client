import { faFlag } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationDot,
  faCity,
  faRoad,
  faHome,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../../common/Form/Input/Input';

const SecondSection = () => {
  return (
    <>
      <p>
        Please enter your address and select where you’d like to get you
        packages delivered!
      </p>
      <Input type="text" placeholder="Country" icon={faFlag} />
      <Input type="text" placeholder="Zip Code" icon={faLocationDot} />
      <Input type="text" placeholder="City" icon={faCity} />
      <Input type="text" placeholder="Street" icon={faRoad} />
      <Input type="text" placeholder="House" icon={faHome} />
      <Input type="text" placeholder="Other" icon={faPlus} />
      <div className="flex justify-between">
        <label
          htmlFor="is-billing-same-as-normal-address"
          className="cursor-pointer"
        >
          Billing address equals with your address.
        </label>
        <Input
          type="checkbox"
          id="is-billing-same-as-normal-address"
          value="is-billing-same-as-normal-address"
          name="is-billing-same-as-normal-address"
        />
      </div>
    </>
  );
};

export default SecondSection;
