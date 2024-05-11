import React from 'react';
import Image from 'next/image';

const CourseColumn = ({ title, data }) => (
    <div>
        <p className="text-base font-semibold py-3 text-gray-500">
            {title}
        </p>
        {data.map((item, index) => (
            <p key={index} className="text-base font-semibold py-3">
                {item}
            </p>
        ))}
    </div>
);

const YearSection = ({ year }) => (
    <section>
        <h1 className="w-10/12 mx-auto text-3xl font-semibold my-10">
            Year {year}
        </h1>
        <div className="flex justify-center my-5">
            <div className="bg-white w-10/12 px-16 py-10 rounded-3xl drop-shadow border-2 border-orange-primary">
                <div className="grid grid-cols-5 gap-x-5">
                    <CourseColumn
                        title="Course ID"
                        data={["CPE112", "CPE132", "CPE222", "CPE232"]}
                    />
                    <CourseColumn
                        title="Course Name"
                        data={["DATA MODELS", "COMPUTER", "ALGORITHM", "DATABASE"]}
                    />
                    <CourseColumn
                        title="Instructor"
                        data={["AJ.Bie", "AJ.Cherry", "AJ.Tumtum", "AJ.Kung"]}
                    />
                    <CourseColumn
                        title="Credit"
                        data={["3", "3", "3", "3"]}
                    />
                    <CourseColumn
                        title="Hours"
                        data={["98", "80", "90", "70"]}
                    />
                </div>
            </div>
        </div>
    </section>
);

const CourseSelect = () => {
    return (
        <div className="bg-gray-50 py-8 animate-slowfade h-full">
            <section>
                <div className="flex justify-center">
                    <div className="bg-orange-primary w-10/12 px-16 py-10 rounded-3xl flex items-center justify-between">
                        <div>
                            <h1 className="text-white text-[100px] font-semibold">CPE</h1>
                            <h1 className="text-white text-4xl font-semibold">
                                Computer Engineering
                            </h1>
                        </div>
                        <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out mr-20">
                            <Image
                                src="/static/Fox1.png"
                                alt="Fox"
                                width={220}
                                height={220}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {[1, 2, 3, 4].map(year => (
                <YearSection key={year} year={year} />
            ))}
        </div>
    );
};

export default CourseSelect;