'use client'
import { FC, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Course_Information: FC = () => {
  const [loading, setLoading] = useState(true)
  const [oldStudentInfo, setOldStudentInfo] = useState<any[]>([])
  const [cookie, setCookie] = useState<number>()
  const router = useRouter()
  const User_ID: number = Cookies.get('userID') as unknown as number
  useEffect(() => {
    if (User_ID) {
      setCookie(User_ID)
    }
  }, [User_ID])

  const getStudentInfo = async () => {
    const res = await fetch('http://localhost:3001/student/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userID: cookie }),
    })
    const data = await res.json()
    setOldStudentInfo(data[0])
  }

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
        setTimeout(() => {
          router.push('/profile')
        }, 500)
      })
    console.log(payloadData)
  }

  useEffect(() => {
    getStudentInfo()
  }, [cookie])

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
    <div>
      <form
        className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 drop-shadow-md animate-slowfade"
        onSubmit={handleSubmitInfo}
      >
        <h1 className="text-3xl font-semibold">Course Information</h1>
        <p className="font-medium text-xl text-gray-500 mt-4">
          Course ID: CPE241
        </p>
        <div className="mt-8 flex flex-col gap-y-3  ">
          <div className="flex justify-start gap-x-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-medium">
                Course Id
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2 "
                placeholder="Enter your course id"
                value={oldStudentInfo?.Name}
                onChange={(e) =>
                  setOldStudentInfo({ ...oldStudentInfo, Name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-medium">
                Course Name
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2 "
                placeholder="Enter your course name"
                value={oldStudentInfo?.Surname}
                onChange={(e) =>
                  setOldStudentInfo({
                    ...oldStudentInfo,
                    Surname: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex justify-start gap-x-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-medium">
                Instructor
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
                placeholder="Enter your instructor"
                value={oldStudentInfo?.Contact}
                onChange={(e) =>
                  setOldStudentInfo({
                    ...oldStudentInfo,
                    Contact: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-medium">
                Credit
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
                placeholder="Enter your credit"
                value={oldStudentInfo?.Email}
                onChange={(e) =>
                  setOldStudentInfo({
                    ...oldStudentInfo,
                    Email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex justify-start gap-x-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-base font-medium">
                Hours
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
                placeholder="Enter your hours"
                value={oldStudentInfo?.Email}
                onChange={(e) =>
                  setOldStudentInfo({
                    ...oldStudentInfo,
                    Email: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="year" className="text-base font-medium">
                Year
              </label>
              <select
                id="year"
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
                value={oldStudentInfo?.Year}
                onChange={(e) =>
                  setOldStudentInfo({ ...oldStudentInfo, Year: e.target.value })
                }
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
              <label htmlFor="" className="text-base font-medium">
                Image Link
              </label>
              <input
                id=""
                className="w-72 border-2 border-gray-100 rounded-xl px-4 py-3 mt-2"
                placeholder="Enter your image link"
                value={oldStudentInfo?.Email}
                onChange={(e) =>
                  setOldStudentInfo({
                    ...oldStudentInfo,
                    Email: e.target.value,
                  })
                }
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
    </div>
  )
}
export default Course_Information
