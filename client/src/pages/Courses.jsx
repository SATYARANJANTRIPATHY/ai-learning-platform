import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('/api/courses');
                setCourses(res.data);
            } catch (err) {
                console.error('Failed to fetch courses', err);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Our AI Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course._id} className="bg-white rounded shadow p-4">
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-gray-700 mb-4">{course.description}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
