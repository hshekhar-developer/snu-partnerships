import React, { useRef, useState, useEffect } from 'react'
import './Partnerships.css'
import { useForm } from "react-hook-form";
import axios from "axios";





const Partnerships = () => {
    const [internshipVisible, setInternshipVisible] = useState(false)
    const [liveProjectsVisible, setLiveProjectsVisible] = useState(false)
    const [consultancyVisible, setConsultancyVisible] = useState(false)
    const [customisedVisible, setCustomisedVisible] = useState(false)
    const internshipRef = useRef(false)
    const liveProjectsRef = useRef(false)
    const consultancyRef = useRef(false)
    const customisedRef = useRef(false)

    const PARTNERSHIP_FORM_TYPE = {
        INTERNSHIP: 'internship',
        LIVE_PROJECTS: 'live_projects',
        CONSULTANCY: 'consultancy',
        CUSTOMISED: 'customised_programs',
        DIALOG: 'dialog'

    }

    const FORM_SUBMIT_URL = {
        INTERNSHIP: 'http://api.snu-poc.in/ace_api/ace_resource/internship?_format=json',
        LIVE_PROJECTS: 'http://api.snu-poc.in//ace_api/ace_resource/projects?_format=json',
        CONSULTANCY: 'http://api.snu-poc.in/ace_api/ace_resource/consultancy?_format=json',
        CUSTOMISED: 'http://api.snu-poc.in/ace_api/ace_resource/lastform?_format=json',
        DIALOG: 'http://api.snu-poc.in/ace_api/ace_resource/enquiry?_format=json'
    }

    const visibleFunction = (formType) => {

        if (formType === PARTNERSHIP_FORM_TYPE.INTERNSHIP) {
            setInternshipVisible(!internshipVisible);
            internshipRef.current = internshipVisible;
        }
        else if (formType === PARTNERSHIP_FORM_TYPE.LIVE_PROJECTS) {
            setLiveProjectsVisible(!liveProjectsVisible);
            liveProjectsRef.current = liveProjectsVisible;
        }
        else if (formType === PARTNERSHIP_FORM_TYPE.CONSULTANCY) {
            setConsultancyVisible(!consultancyVisible);
            consultancyRef.current = consultancyVisible;
        }

        else if (formType === PARTNERSHIP_FORM_TYPE.CUSTOMISED) {
            setCustomisedVisible(!customisedVisible);
            customisedRef.current = customisedVisible;
        }

        return null
    }

    const [contactUsDialogVisibility, setContactUsDialogVisibility] = useState(false)






    useEffect(() => {
        setContactUsDialogVisibility(true)
    }, [])




    const FormWithCTC = () => {
        const { register, handleSubmit, formState: { errors }, watch } = useForm();


        const sendData = async (data) => {
            console.log("🚀😛😛😛😛 ~ file: Partnerships.js:285 ~ sendData ~ data:", data);

            try {
                const url = FORM_SUBMIT_URL.INTERNSHIP;
                console.log("🚀 ~🛑🛑🛑🛑:", url);

                const payload = {
                    ...data
                };

                console.log("🚀 ~🛑:", payload);


                const response = await axios.post(url, payload);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };


        const onSubmit = (data) => {
            console.log(data);
            sendData(data)
        };



        const selectedArea = watch('areas');
        console.log("🚀 ~ file: Partnerships.js:85 ~ MyForm ~ watchAreas:", selectedArea);
        return (

            <div className="form__container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__field__container">
                        <div className='option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Mode :</strong></label>

                            <div className='value__section'>
                                <div className='value__container'>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="In Person" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label' >In Person</span>
                                    </label>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="Virtual" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label' >Virtual</span>
                                    </label>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="Hybrid" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label'>Hybrid</span>
                                    </label>
                                </div>
                                <div>
                                    {errors.mode && <p className='error__message'>{errors.mode.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className='option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span> Honorarium :</strong></label>
                            <div className='value__section'>
                                <div className='value__container'>

                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="None" {...register("honor", { required: 'Please select an honor option' })} />
                                        <span className='radio__label' >
                                            None
                                        </span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Applicable" {...register("honor", { required: 'Please select an honor option' })} />
                                        <span className='radio__label'>Applicable</span>
                                    </label>
                                </div>
                                <div>
                                    {errors.honor && <p className='error__message'>{errors.honor.message}</p>}

                                </div>
                            </div>
                        </div>

                        <div className='option__container'>
                            <label className='label__heading'><strong>Areas :</strong></label>
                            <div className='value__section'>
                                <div className='value__container'>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Data Science & analytics" {...register("areas", { required: 'Please select an area' })} />
                                        <span className='radio__label'>Data Science & analytics</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Marketing" {...register("areas", { required: 'Please select an area' })} />
                                        <span className='radio__label'>Marketing</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Human Resources" {...register("areas", { required: 'Please select an area' })} />
                                        <span className='radio__label'>Human Resources</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Digital Finance" {...register("areas", { required: 'Please select an area' })} />
                                        <span className='radio__label'>Digital Finance</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Others" {...register("areas", { required: 'Please select an area' })} />
                                        <span className='radio__label'>Others</span>
                                    </label>
                                    {selectedArea === 'Others' && (
                                        <div className='option__container'>
                                            <div className='value__section'>
                                                <div className='value__container'>
                                                    <input type="text" {...register("Other", { required: 'Please enter the other area' })} />
                                                    <div>
                                                        {errors.Other && <p className='error__message'>{errors.Other.message}</p>}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {errors.areas && <p className='error__message'>{errors.areas.message}</p>}

                                </div>
                            </div>
                        </div>

                        <div className='option__container'>
                            <label className='label__heading'><strong> CTC :</strong></label>
                            <div className='value__section'>
                                <div className='value__container'>

                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="20-25L" {...register("ctc", { required: 'Please select CTC' })} />
                                        <span className='radio__label' >
                                            20-25L
                                        </span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="25-30L" {...register("ctc", { required: 'Please select CTC' })} />
                                        <span className='radio__label'>25-30L</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="30-60L" {...register("ctc", { required: 'Please select CTC' })} />
                                        <span className='radio__label'>30-60L</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="60L & Above" {...register("ctc", { required: 'Please select CTC' })} />
                                        <span className='radio__label'>60L & Above</span>
                                    </label>
                                </div>
                                <div>
                                    {errors.ctc && <p className='error__message'>{errors.ctc.message}</p>}

                                </div>
                            </div>
                        </div>

                        <div className='option__container'>

                            <label className='label__heading label__heading__alt'><strong> Description :</strong> <span style={{
                                fontSize: '12px'
                            }}>

                                (Maximum in
                                150 words)
                            </span></label>

                            <div >

                                <textarea className='form_input_box' rows="4" cols="50"   {...register("description", {
                                    required: "Description is required",
                                    maxLength: { value: 150, message: "Description must be 150 characters or less" }
                                })} />
                                {errors.description && <p className='error__message'>{errors.description.message}</p>}
                            </div>
                        </div>
                        <div className='option__container'>

                            <label className='label__heading label__heading__alt'><strong> Scope :</strong> <span style={{
                                fontSize: '12px'
                            }}>

                                (Maximum in
                                150 words)
                            </span></label>

                            <div >

                                <textarea className='form_input_box' rows="4" cols="50"   {...register("scope", {
                                    required: "Scope is required",
                                    maxLength: { value: 150, message: "Scope must be 150 characters or less" }
                                })} />
                                {errors.scope && <p className='error__message'>{errors.scope.message}</p>}

                            </div>
                        </div>
                    </div>

                    <div className="form__btn__container">
                        <button className='form__reset__btn' type='reset' >Reset</button>
                        <button className='form__submit__btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>

        );
    };
    const FormWithoutCTC = ({ identifier }) => {
        const { register, handleSubmit, formState: { errors }, watch } = useForm();


        const getFormSubmitURL = (formType) => {
            const key = Object.keys(PARTNERSHIP_FORM_TYPE).find(key => PARTNERSHIP_FORM_TYPE[key] === formType);
            if (key && key in FORM_SUBMIT_URL) {
                return FORM_SUBMIT_URL[key];
            }

            return null; // Return null or handle invalid formType as per your requirement
        };

        const sendData = async (data) => {
            console.log("🚀😛😛😛😛 ~ file: Partnerships.js:285 ~ sendData ~ data:", data);

            try {
                const url = getFormSubmitURL(identifier);
                console.log("🚀 ~🛑🛑🛑🛑:", url);

                const payload = {
                    ...data
                };

                console.log("🚀 ~🛑:", payload);


                const response = await axios.post(url, payload);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };


        const onSubmit = (data) => {
            sendData(data)
        };

        const selectedArea = watch('areas');
        return (

            <div className="form__container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__field__container">
                        <div className='option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Mode :</strong></label>

                            <div className='value__section'>
                                <div className='value__container'>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="In Person" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label' >In Person</span>
                                    </label>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="Virtual" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label' >Virtual</span>
                                    </label>
                                    <label className='label__center' >
                                        <input className='radio__btn' type="radio" value="Hybrid" {...register("mode", { required: 'Please select a mode' })} />
                                        <span className='radio__label'>Hybrid</span>
                                    </label>
                                </div>
                                <div>
                                    {errors.mode && <p className='error__message'>{errors.mode.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className='option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span> Honorarium :</strong></label>
                            <div className='value__section'>
                                <div className='value__container'>

                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="None" {...register("honorarium", { required: 'Please select a Honorarium option' })} />
                                        <span className='radio__label' >
                                            None
                                        </span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Applicable" {...register("honorarium",

                                            { required: 'Please select a Honorarium option' })} />
                                        <span className='radio__label'>Applicable</span>
                                    </label>
                                </div>
                                <div>
                                    {errors.honorarium && <p className='error__message'>{errors.honorarium.message}</p>}

                                </div>
                            </div>
                        </div>

                        <div className='option__container'>
                            <label className='label__heading'><strong>Areas :</strong></label>
                            <div className='value__section'>
                                <div className='value__container'>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Data Science & analytics" {...register("areas",

                                            // { required: 'Please select an area' }

                                        )} />
                                        <span className='radio__label'>Data Science & analytics</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Marketing" {...register("areas",

                                            // { required: 'Please select an area' }

                                        )} />
                                        <span className='radio__label'>Marketing</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Human Resources" {...register("areas",

                                            // { required: 'Please select an area' }

                                        )} />
                                        <span className='radio__label'>Human Resources</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Digital Finance" {...register("areas",
                                            //  { required: 'Please select an area' }

                                        )} />
                                        <span className='radio__label'>Digital Finance</span>
                                    </label>
                                    <label className='label__center'>
                                        <input className='radio__btn' type="radio" value="Others" {...register("areas",

                                            // { required: 'Please select an area' }

                                        )} />
                                        <span className='radio__label'>Others</span>
                                    </label>
                                    {selectedArea === 'Others' && (
                                        <div className='option__container'>
                                            <div className='value__section'>
                                                <div className='value__container'>
                                                    <input type="text" {...register("Other", { required: 'Please enter the other area' })} />
                                                    <div>
                                                        {errors.Other && <p className='error__message'>{errors.Other.message}</p>}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {errors.areas && <p className='error__message'>{errors.areas.message}</p>}

                                </div>
                            </div>
                        </div>


                        <div className='option__container'>

                            <label className='label__heading label__heading__alt'><strong> Description :</strong> <span style={{
                                fontSize: '12px'
                            }}>

                                (Maximum in
                                150 words)
                            </span></label>

                            <div >

                                <textarea className='form_input_box' rows="4" cols="50"   {...register("description",
                                    {
                                        // required: "Description is required",
                                        maxLength: { value: 150, message: "Description must be 150 characters or less" }
                                    })} />
                                {errors.description && <p className='error__message'>{errors.description.message}</p>}
                            </div>
                        </div>
                        <div className='option__container'>

                            <label className='label__heading label__heading__alt'><strong> Scope :</strong> <span style={{
                                fontSize: '12px'
                            }}>

                                (Maximum in
                                150 words)
                            </span></label>

                            <div >

                                <textarea className='form_input_box' rows="4" cols="50"   {...register("scope", {
                                    // required: "Scope is required",
                                    maxLength: { value: 150, message: "Scope must be 150 characters or less" }
                                })} />
                                {errors.scope && <p className='error__message'>{errors.scope.message}</p>}

                            </div>
                        </div>
                    </div>

                    <div className="form__btn__container">
                        <button className='form__reset__btn' type='reset' >Reset</button>
                        <button className='form__submit__btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>

        );
    };


    const ContactUsDialog = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();




        const postSubmitData = async (data) => {

            try {
                const url = FORM_SUBMIT_URL.DIALOG

                console.log("🚀 ~🛑🛑🛑🛑:", url);

                const payload = {
                    ...data
                };

                console.log("🚀 ~🛑:", payload);


                const response = await axios.post(url, payload);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };


        const onSubmit = (data) => {
            postSubmitData(data)
        };


        const closeDialog = () => {
            setContactUsDialogVisibility(false)
        }
        return (

            <div className='dialog__bg' >
                <div className='dialog__form'>


                    <form className='form__dialog__container' onSubmit={handleSubmit(onSubmit)}>

                        <div className="dialog__title__container">
                            <div className="title__container ">
                                Basic Information
                            </div>
                            <div className="sub__title ">Help us know you better</div>
                            <div className="privacy__container text_p">
                                * We value your privacy. We will never share your information with anyone else.
                            </div>
                        </div>


                        <button onClick={() => closeDialog()} className='dialog__cross'>X</button>


                        <div className='dialog__option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Name :</strong></label>
                            <div className='input__section'>
                                <div className='input__container'>
                                    <label className=''>

                                        <input className='input__box'
                                            {...register("name", { required: 'Please enter your name' })} />
                                    </label>
                                    <div>
                                        {errors.name && <p className='error__message'>{errors.name.message}</p>}

                                    </div>

                                </div>

                            </div>
                        </div>




                        <div className='dialog__option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Email :</strong></label>
                            <div className='input__section'>
                                <div className='input__container'>
                                    <label className=''>

                                        <input className='input__box'
                                            {...register("email", {
                                                required: 'Please enter your Email',
                                                pattern: {
                                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                                    message: 'Please enter a valid email address'
                                                }
                                            })}
                                        />
                                    </label>
                                    <div>
                                        {errors.email && <p className='error__message'>{errors.email.message}</p>}

                                    </div>

                                </div>

                            </div>
                        </div>



                        <div className='dialog__option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Mobile No. :</strong></label>
                            <div className='input__section'>
                                <div className='input__container'>
                                    <label className=''>

                                        <input className='input__box'
                                            {...register("mobile", { required: 'Please enter your Mobile No.' })}

                                            {...register("mobile", {
                                                required: 'Please enter your Mobile No.',
                                                pattern: {
                                                    value: /^[6-9]\d{9}$/i,
                                                    message: 'Please enter a valid Mobile No.'
                                                }
                                            })}


                                        />
                                    </label>
                                    <div>
                                        {errors.mobile && <p className='error__message'>{errors.mobile.message}</p>}

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className='dialog__option__container'>
                            <label className='label__heading'><strong><span className='important__mark'>* </span>Company :</strong></label>
                            <div className='input__section'>
                                <div className='input__container'>
                                    <label className=''>

                                        <input className='input__box'
                                            {...register("company", { required: 'Please enter your Company Name' })} />
                                    </label>
                                    <div>
                                        {errors.company && <p className='error__message'>{errors.company.message}</p>}

                                    </div>

                                </div>

                            </div>
                        </div>







                        <div>
                            <input
                                type='checkbox'
                                {...register('checked', { required: true })}

                            />
                            <label > {' '}Accept Terms & Conditions</label>
                        </div>
                        {errors.checked && <span className='error__message'>Please check the checkbox</span>}


                        <br />

                        {/* {errors.checked && <span className='error__message'>Mandatory  field is required</span>} */}

                        <div className="form__btn__container">
                            <button className='form__submit__btn' type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        );
    };




    return (
        <div className='partnership__container'>

            {contactUsDialogVisibility ? <ContactUsDialog /> : ""}

            <div className="container">
                <div className='text_container' >
                    <h1>ACE Industry Partnership</h1>
                    <p>The Academy of Continuing Education (ACE) serves as a conduit for the exchange of pertinent, real-world issues, insights, and solutions between the academic and corporate worlds. At ACE, we highly value our partnerships with businesses and organizations. Our team diligently endeavors to discern your company's specific needs and aims in order to identify mutually advantageous prospects.
                        <br />
                        <br />
                        Our range of partnership options can add tremendous value to your organization. From consulting relations to recruiting the next generation of leaders, collaborating on cutting-edge research, to developing existing talent through executive education and beyond. We are here to help you navigate these opportunities and unlock their true potential. Let us help you inspire change and transform your organization's journey toward success.
                    </p>

                </div>
                <div className='text_container'>
                    <h1>Internship & Recruitments</h1>
                    <p>At the Academy of Continuing Education, we recognize the dynamic nature of recruitment and strive to assist companies in identifying top-notch talent that will foster long-lasting relationships and drive mutual growth. Our primary objective is to facilitate a connection between recruiters and our outstanding pool of ACE talent by implementing personalized strategies that best suit the company's requirements, whether for conventional or on-demand roles or internship-based projects. Let us help you discover your company's next set of leaders.</p>
                    <button
                        onClick={() => visibleFunction(PARTNERSHIP_FORM_TYPE.INTERNSHIP)}
                        className='contact__button'>
                        Connect with us
                    </button>

                    {internshipVisible ? <FormWithCTC identifier={PARTNERSHIP_FORM_TYPE.INTERNSHIP} /> : ''}
                </div>
                <div className='text_container'>
                    <h1>Live Projects & Industry Immersion</h1>
                    <p>Elevate the student experience and expand their horizons beyond the four walls of the classroom by offering them a chance to tackle real-world business challenges. With the Live Projects & Industry Immersion partnership, ACE is thrilled to provide hands-on learning opportunities for students and foster mutually beneficial relationships with our esteemed corporate partners. From industry-specific projects to multifaceted programs, these experiential learning opportunities enable students to gain practical insights and valuable skills while our partners reap the benefits of fresh perspectives and innovative solutions.</p>
                    <button
                        onClick={() => visibleFunction(PARTNERSHIP_FORM_TYPE.LIVE_PROJECTS)}
                        className='contact__button'>
                        Connect with us
                    </button>

                    {liveProjectsVisible ? <FormWithoutCTC identifier={PARTNERSHIP_FORM_TYPE.LIVE_PROJECTS} /> : ''}
                </div>
                <div className='text_container'>
                    <h1>Consultancy & Research</h1>
                    <p>Our focus is on building strong connections between Shiv Nadar's academic experts and private sector. The goal is to cultivate partnerships that promote consulting and research collaboration to bring your organizational vision to life. We strive to work with you as co-designers and collaborators on research projects that cater to your unique needs. By doing so, we create a shared expertise on relevant topics, while industry partners gain new perspectives on innovative ways of working. We continuously improve our research methods as we collaborate with you towards achieving better results.</p>
                    <button
                        onClick={() => visibleFunction(PARTNERSHIP_FORM_TYPE.CONSULTANCY)}
                        className='contact__button'>
                        Connect with us
                    </button>

                    {consultancyVisible ? <FormWithoutCTC identifier={PARTNERSHIP_FORM_TYPE.CONSULTANCY} /> : ''}

                </div>
                <div className='text_container'>
                    <h1>Customized Programs</h1>
                    <p>Academy of Continuing Education specializes in custom-made executive programs that enable both individuals and organizations to revolutionize themselves. Whether you are interested in group registrations, comprehensive custom courses, or something in between, we collaborate closely with you to create educational experiences that align with your specific learning objectives and desired results. Connect with us to elevate and empower your executives with our talent-nurturing solutions and move your organization’s strategy from vision to action.</p>
                    <button
                        onClick={() => visibleFunction(PARTNERSHIP_FORM_TYPE.CUSTOMISED)}
                        className='contact__button'>
                        Connect with us
                    </button>
                    {customisedVisible ? <FormWithoutCTC identifier={PARTNERSHIP_FORM_TYPE.CUSTOMISED} /> : ''}

                </div>
            </div>



        </div>

    )

}


export default Partnerships