import ServiceBox from "./serviceBox/ServiceBox";
import { serviceItems } from "../../constants/services";
import MyServices from "./myServices/MyServices";

const Content = () => {
  return (
    <div className='w-full h-full p-8 grid gap-4 grid-cols-1 md:grid-cols-3'>
      <MyServices />
      <div className='flex flex-col space-y-10'>
        {serviceItems.first.map((item) => (
          <ServiceBox key={item.id} item={item} />
        ))}
      </div>
      <div className='flex flex-col space-y-10'>
        {serviceItems.second.map((item) => (
          <ServiceBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
