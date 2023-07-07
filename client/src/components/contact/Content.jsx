import { contactItems } from "../../constants/contact";
const Content = () => {
  const { title_1, title_2, desc, links } = contactItems;
  const CheckBox = ({ label }) => {
    return (
      <div className='flex items-center'>
        <input id={label} className='w-[20px] h-[20px] m-2 ' type='checkbox' />
        <label htmlFor={label}>{label}</label>
      </div>
    );
  };
  const RadioInput = ({ label }) => {
    return (
      <div className='flex items-center'>
        <input
          id={label}
          className='w-[20px] h-[20px] m-2'
          name='money'
          type='radio'
        />
        <label htmlFor={label}>{label}</label>
      </div>
    );
  };
  const Label = ({ title }) => {
    return (
      <label className='w-full block p-4 bg-gradient-to-tl from-zinc-900 via-zinc-900 to-zinc-950'>
        {title}
      </label>
    );
  };
  const Input = ({ placeholder }) => {
    return (
      <input
        className='p-2 bg-zinc-800 outline-none border-b  border-blue-500 focus:border focus:border-blue-500'
        placeholder={placeholder}
        type='text'
      />
    );
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 text-zinc-100 px-4 py-8'>
      <div className='flex flex-col space-y-4'>
        <h4 className='text-5xl font-bold text-zinc-100'>{title_1}</h4>
        <h3 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300'>
          {title_2}
        </h3>
        {desc.map((item) => (
          <p className='text-zinc-400 text-xl my-2' key={item.id}>
            {item.content}
          </p>
        ))}
        <ul>
          {links.map((item) => (
            <li className='flex flex-wrap justify-start items-baseline p-4 text-lg' key={item.id}>
              <i className='text-2xl me-2 text-zinc-500'>{item.icon}</i>
              <p className='me-2 '>
                {item.title}
                {":"}
              </p>
              {item.link ? (
                <a href={item.link}>{item.desc}</a>
              ) : (
                <p>{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='col-span-1 md:col-span-2  bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 shadow-lg shadow-zinc-700'>
        <form className='' action=''>
          <div className='space-y-2'>
            <Label title={"Your contact information"} />
            <fieldset className='grid grid-cols-1 md:grid-cols-3 gap-2 p-2 items-center'>
              <Input placeholder='FirstName' />
              <Input placeholder='LastName' />
              <Input placeholder='Email Address' />
              <Input placeholder='Company Name' />
              <Input placeholder='PhoneNumber' />
              <Input placeholder='Country' />
            </fieldset>
          </div>
          <div className='space-y-2'>
            <Label title={"What services do you need for your project?"} />
            <fieldset className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 items-center'>
              <CheckBox label={"Website Development"} />
              <CheckBox label={"App Development"} />
              <CheckBox label={"Design System"} />
              <CheckBox label={"Website Migration"} />
              <CheckBox label={"E-commerce Site"} />
              <CheckBox label={"Performance Evaluation"} />
            </fieldset>
          </div>
          <div className='space-y-2'>
            <Label title={"How much is the anticipated budget?"} />
            <fieldset className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 items-center'>
              <RadioInput label={"Less than $2,000"} />
              <RadioInput label={"$2,000 - $10,000"} />
              <RadioInput label={"More than $10,000"} />
            </fieldset>
          </div>
          <div>
            <Label title={"Tell me about your project"} />
            <fieldset className='p-4'>
              <textarea
                placeholder='Project Description'
                name=''
                id=''
                className='w-full h-[100px] p-4 text-zinc-200 bg-zinc-800 outline-none text-xl'
              />
            </fieldset>
          </div>
          <div className='flex justify-center p-4'>
            <div className='w-[50%] h-[70px]  relative bg-lime-500'>
              <button className='bg-white w-[100%] hover:inset-0 transition-all duration-300 h-[70px] text-gray-950 font-serif absolute bottom-2 right-2'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
