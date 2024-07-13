
import Mumbai from "../assets/mumbai.logo.png";


const Education = () => {
    return (
        <section id="education" className="md:w-[1000px] md:mx-auto px-5 py-0 sm:py-12">

            <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start mb-3 text-yellow-300">
                Education
            </p>

            <div className="flex flex-row items-center">

                {/* Waterloo Icon */}
                <div className="flex-shrink-0 my-4">
                    <img src={Mumbai} alt="University of Waterloo" className="w-[3.1rem] xs:w-[3.6rem] rounded-[0.32rem]" />
                </div>

                {/* Text */}
                <div className="ml-5 w-full">
                    <div className="flex justify-between w-full mb-2">
                        <p className="text-md sm:text-xl font-helvetica tracking-wide text-left">University of Mumbai</p>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-xs xs:text-sm sm:text-[1rem] font-helvetica tracking-wide text-left text-lightgrey">BE, Computer Engineering</p>
                        <p className="text-xs xs:text-sm font-helvetica tracking-wide text-right text-lightgrey">2021 &mdash; 2024</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
