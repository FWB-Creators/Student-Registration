'use client'
import { FC, useState } from 'react'
import Cookies from 'js-cookie'

export default function Information() {
  const [loading, setLoading] = useState(true)
  const User_ID = Cookies.get('userID')
  const handleSubmitInfo = async (event: any) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      firstname: { value: string }
      lastname: { value: string }
      contactNumber: { value: string }
      email: { value: string }
      idCard: { value: string }
      dob: { value: string }
      gender: { value: string }
      year: { value: string }
      department: { value: string }
      address: { value: string }
    }

    const payloadData = {
      User_ID: User_ID,
      Name: target.firstname.value,
      Surname: target.lastname.value,
      Contact: target.contactNumber.value,
      Address: target.address.value,
      Email: target.email.value,
      Department_ID: target.department.value,
      Registration_ID: User_ID, // Assuming User_ID is used for Registration_ID
      DOB: target.dob.value,
      ID_card: target.idCard.value,
      Sex: target.gender.value,
      Year: target.year.value,
    }

    fetch('http://localhost:3001/student/editinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadData),
    })
      .then((res) => res.json())
      .then((status) => {
        console.log(status)
      })
    console.log(payloadData)
  }

  setTimeout(() => {
    setLoading(false)
  }, 500)
  if (loading)
    return (
      <div className="flex flex-row justify-center items-center animate-pulse h-[calc(100vh-4rem)]">
        Loading ...
      </div>
    )

  return (
    <form
      className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 drop-shadow-md animate-slowfade"
      onSubmit={handleSubmitInfo}
    >
      <h1 className="text-3xl font-semibold">Student Information</h1>
      <p className="font-medium text-xl text-gray-500 mt-4">Welcome!</p>
      <div className="mt-8 flex flex-col gap-y-3  ">
        <div className="flex justify-start gap-x-4">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-base font-medium">
              Firstname
            </label>
            <input
              id="firstname"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2 "
              placeholder="Enter your firstname"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-base font-medium">
              Lastname
            </label>
            <input
              id="lastname"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2 "
              placeholder="Enter your lastname"
            />
          </div>
        </div>
        <div className="flex justify-start gap-x-4">
          <div className="flex flex-col">
            <label htmlFor="contactNumber" className="text-base font-medium">
              Contact Number
            </label>
            <input
              id="contactNumber"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
              placeholder="000-000-0000"
              type="tel"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              id="email"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
              placeholder="username@gmail.com"
              type="email"
            />
          </div>
        </div>
        <div className="flex justify-start gap-x-4">
          <div className="flex flex-col">
            <label htmlFor="idCard" className="text-base font-medium">
              ID-Card
            </label>
            <input
              id="idCard"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
              placeholder="Enter your ID-Card"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="text-base font-medium">
              Date Of Birth
            </label>
            <input
              id="dob"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
              type="date"
            />
          </div>
        </div>
        <div className="flex justify-start gap-x-4">
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-base font-medium">
              Gender
            </label>
            <select
              id="gender"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-base font-medium">
              Year
            </label>
            <select
              id="year"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
            >
              <option value="">Select your year</option>
              <option value="bachelor1">Bachelor Year 1</option>
              <option value="bachelor2">Bachelor Year 2</option>
              <option value="bachelor3">Bachelor Year 3</option>
              <option value="bachelor4">Bachelor Year 4</option>
              <option value="master">Master's Degree</option>
              <option value="doctoral">Doctoral Degree</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start gap-x-4">
          <div className="flex flex-col">
            <label htmlFor="department" className="text-base font-medium">
              Department
            </label>
            <select
              id="department"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
            >
              <option value="">Select your department</option>
              <option value="engineering">Faculty of Engineering</option>
              <option value="science">Faculty of Science</option>
              <option value="industrial education">
                Faculty of Industrial Education and Technology
              </option>
              <option value="information technology">
                Faculty of Information Technology
              </option>
              <option value="robotics">Faculty of Field Robotics (FIBO)</option>
              <option value="liberal arts">Faculty of Liberal Arts</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-base font-medium">
              Address
            </label>
            <input
              id="address"
              className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <button
          type="submit"
          // onSubmit={handleSubmitInfo}
          className="mt-8 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-orange-500 text-white text-lg font-bold"
        >
          Confirm
        </button>
      </div>
    </form>
  )
}
