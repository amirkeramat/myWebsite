import { contactItems } from "../../constants/contact";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../../validator/schema";
import Swal from "sweetalert2";
import { ErrorMessage } from "@hookform/error-message";
import { useContext } from "react";
import {LangContext} from "../../contexts/LangContext"
const Content = () => {
  const {lang} = useContext(LangContext)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
    criteriaMode: "all",
  });
  const { title_1, title_2, desc, links } = contactItems;
  const ErrorComp = ({ reg }) => {
    return (
      <ErrorMessage
        errors={errors}
        name={reg}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-400' key={type}>
              {message}
            </p>
          ))
        }
      />
    );
  };
  const formSubmitHandler = (data) => {
    console.log(data);

    const services = data.checkbox.join(",");
    const formData = {
      services,
      user_email: data.user_email,
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company,
      country: data.country,
      description: data.description,
      money: data.radio,
      phone_number: data.phone_number,
    };
    emailjs
      .send(
        "portfolio-contact",
        "portfolio-contact",
        formData,
        "e7rAlN68iihiwL1EQ"
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "the email send successfully contact you soon",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          reset();
        } else {
          Swal.fire({
            title: "sorry the email dont send try again later thanks",
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const CheckBox = ({ label }) => {
    return (
      <div className='flex items-center'>
        <input
          id={label}
          className='w-[20px] h-[20px] m-2 '
          type='checkbox'
          value={label}
          {...register("checkbox")}
        />
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
          value={label}
          {...register("radio")}
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
  const Input = ({ placeholder, reg }) => {
    return (
      <div className='flex flex-col items-center'>
        <input
          {...register(reg)}
          className='w-full p-2 bg-zinc-800 outline-none border-b  border-blue-500 focus:border focus:border-blue-500'
          placeholder={placeholder}
          type='text'
        />
        <ErrorComp reg={reg} />
      </div>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-zinc-100 px-4 py-8">
      <div className="flex flex-col space-y-4">
        <h4 className="text-2xl font-bold text-zinc-100">{lang === "ENG" ?title_1.eng : title_1.per}</h4>
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300">
          {lang === "ENG" ?title_2.eng : title_2.per}
        </h3>
        {desc.map((item) => (
          <p className="text-zinc-400 text-xl my-2" key={item.id}>
            { lang === "ENG" ? item.content.eng : item.content.per}
          </p>
        ))}
        <ul>
          {links.map((item) => (
            <li
              className="flex flex-wrap justify-start items-baseline p-4 text-lg"
              key={item.id}
            >
              <i className="text-2xl me-2 text-zinc-500">{item.icon}</i>
              <p className="me-2 ">
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
      <div className="col-span-1 md:col-span-2  bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 shadow-lg shadow-zinc-700">
        <form onSubmit={handleSubmit(formSubmitHandler)} className="" action="">
          <div className="space-y-2">
            <Label title={lang === "ENG"?"Your contact information" : "اطلاعات ارتباطی شما"} />
            <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 items-center">
              <Input
                reg={"first_name"}
                placeholder={lang === "ENG" ? "FirstName" : "نام"}
              />
              <Input
                reg={"last_name"}
                placeholder={lang === "ENG" ? "LastName" : "نام خانوادگی"}
              />
              <Input
                reg={"user_email"}
                placeholder={lang === "ENG" ? "Email Address" : "ایمیل"}
              />
              <Input
                reg={"company"}
                placeholder={lang === "ENG" ? "Company Name" : "نام شرکت"}
              />
              <Input
                reg={"phone_number"}
                placeholder={lang === "ENG" ? "PhoneNumber" : "شماره تلفن"}
              />
              <Input
                reg={"country"}
                placeholder={lang === "ENG" ? "Country" : "کشور یا شهر"}
              />
            </fieldset>
          </div>
          <div className="space-y-2">
            <Label title={lang === "ENG"?"What services do you need for your project?" : "چه درخواست هایی برای پرژه خود دارید"} />
            <span className="text-center">
              <ErrorComp reg={"checkbox"} />
            </span>
            <fieldset className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 items-center">
              <CheckBox
                label={lang === "ENG" ? "Website Development" : "توسعه وب"}
              />
              <CheckBox
                label={lang === "ENG" ? "App Development" : "توسعه اپ"}
              />
              <CheckBox
                label={lang === "ENG" ? "Design System" : "سیستم طراحی"}
              />
              <CheckBox
                label={lang === "ENG" ? "Website Migration" : "تغییرات وب سایت"}
              />
              <CheckBox
                label={
                  lang === "ENG" ? "E-commerce Site" : "سایت تجارت الکترونیک"
                }
              />
              <CheckBox
                label={
                  lang === "ENG" ? "Performance Evaluation" : "افزایش پرفورمنس"
                }
              />
            </fieldset>
          </div>
          <div className="space-y-2">
            <Label title={ lang === "ENG" ?"How much is the anticipated budget?" : "بازه بودجه در نظر گرفته شده؟" } />
            <span className="text-center">
              <ErrorComp reg={"radio"} />
            </span>

            <fieldset className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 items-center">
              <RadioInput label={lang === "ENG" ?"Less than $2,000" : "کمتر از ۵ میلیون تومان"} />
              <RadioInput label={lang === "ENG" ?"$2,000 - $10,000" : "ما بین ۵ میلیون و ۲۰ میلیون"} />
              <RadioInput label={lang === "ENG" ?"More than $10,000" : "بیش از ۲۰ میلیون تومان"} />
            </fieldset>
          </div>
          <div>
            <Label title={ lang === "ENG" ? "Tell me about your project" : "توضیحات مختصری در مورد پروژه مد نظرتان بنویسید"} />
            <fieldset className="p-4">
              <textarea
                {...register("description")}
                placeholder={
                  lang === "ENG" ? "Project Description" : "توضیحات پروژه"
                }
                name="description"
                id="description"
                className="w-full h-[100px] p-4 text-zinc-200 bg-zinc-800 outline-none text-sm"
              />
              <ErrorComp reg={"description"} />
            </fieldset>
          </div>
          <div className="flex justify-center p-4">
            <div className="w-[50%] h-[70px]  relative bg-lime-500">
              <button
                type="submit"
                className="bg-white w-[100%] hover:inset-0 transition-all duration-300 h-[70px] text-gray-950 font-serif absolute bottom-2 right-2"
              >
                {lang === "ENG" ? "Submit" : "ثبت"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
