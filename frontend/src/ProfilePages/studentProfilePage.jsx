import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import NetworkAnimation from '../components/NetworkAnimation';
import { motion } from 'framer-motion';
import SessionTrack from '../Config/sessionTrack';

function StudentProfilePage() {
  const imageRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      const token =
        localStorage.getItem('token') ||
        new URLSearchParams(window.location.search).get('token');

      if (token) {
        localStorage.setItem('token', token);
        window.history.replaceState({}, document.title, '/profile/student');
      }

      if (!token) {
        alert('Unauthorized! Please log in.');
        navigate('/login/student');
        return;
      }

      const response = await fetch('http://localhost:5000/profile/student', {
        headers: { Authorization: token },
      });

      const res = await response.json();
  if (response.ok) {
    toast.success(res.message || 'Success!');
  } else {
    toast.error(
      res.message || `Error: ${response.status} ${response.statusText}`
    );
  }
    };
    fetchToken();
  }, [navigate]);

  const handlePfp = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = event.target.pfp.files[0];

    if (!fileInput) {
      console.error('No file selected!');
      return;
    }

    // if (fileInput) {
    //   const imageUrl = URL.createObjectURL(fileInput);
    //   imageRef.current.src = imageUrl;
    // }

    formData.append('pfp', fileInput);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'http://localhost:5000/profile/student/pfp',
        {
          method: 'PATCH',
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );
      const res = await response.json();
      imageRef.current.src = `${res.imageUrl}`;
      if (response.ok) {
        toast.success(res.message || 'Success!');
      } else {
        toast.error(
          res.message || `Error: ${response.status} ${response.statusText}`
        );
      }
      setTimeout(() => {
        window.location.href = res.redirect;
      }, 3000);
      console.log('Response:', res.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRes = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'http://localhost:5000/profile/student/res',
        {
          method: 'PATCH',
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );
      const res = await response.json();
      if (response.ok) {
        toast.success(res.message || 'Success!');
      } else {
        toast.error(
          res.message || `Error: ${response.status} ${response.statusText}`
        );
      }
      setTimeout(() => {
        window.location.href = res.redirect;
      }, 3000);
      console.log('Response:', res.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      skills_and_interests:{
        skills: formData.get('skills_and_interests.skills')?.split(',')||[],
        interests: formData.get('skills_and_interests.interests'),
      },
      portfolio: {
        github: formData.get('portfolio.github'),
        linkedIn: formData.get('portfolio.linkedIn'),
        personal_website: formData.get('portfolio.personal_website'),
      },
      looking_for: {
        internships: formData.get('looking_for.internships'),
        freelance_projects: formData.get('looking_for.freelance_projects'),
        startup: formData.get('looking_for.startup'),
        learning_teaching: formData.get('looking_for.learning_teaching'),
      },
      availability: formData.get('availability'),
    };

    // console.log('Sending login data:', data);
    console.log('handleclick invoked');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/profile/student', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (response.ok) {
        toast.success(res.message || 'Success!');
      } else {
        toast.error(
          res.message || `Error: ${response.status} ${response.statusText}`
        );
      }
      setTimeout(() => {
        window.location.href = res.redirect;
      }, 3000);
      console.log('Response:', res.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <NetworkAnimation />
      <SessionTrack page="student" />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6 bg-transparent">
        <div className="w-full max-w-6xl mx-auto  items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            {' '}
            <div className="flex justify-center ">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
                Complete your Student Profile
              </h1>
            </div>
            <div className="profileFormBox backdrop-blur-lg">
              <div className="flex flex-row w-full justify-centerbg-white/10 gap-40 max-w-5xl backdrop-blur-lg mb-8 p-8 rounded-2xl shadow-xl border border-white/20">
                <div className="flex flex-row gap-10 ">
                  <div className="profile-pic-wrapper mt-6 ">
                    <img
                      ref={imageRef}
                      src="default-avatar.jpg"
                      alt=""
                      className="profile-pic"
                    />
                  </div>

                  <form
                    // className="upload-form"
                    encType="multipart/form-data"
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
                    onSubmit={handlePfp}
                  >
                    <label className="block text-sm font-medium text-gray-300 custom-file-uploadres">
                      <input
                        type="file"
                        name="pfp"
                        accept="image/jpeg, image/jpg"
                      />
                      Choose File
                    </label>
                    <button
                      type="submit"
                      className="mt-1 w-full max-w-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-2 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                    >
                      Save
                    </button>
                  </form>
                </div>
                <div className="finalInnerBox2 z-10">
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-xl font-bold text-white mb-2 mt-2">
                      Resume Upload (PDF format)
                    </h3>
                    <form
                      // className="upload-form"
                      encType="multipart/form-data"
                      className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
                      onSubmit={handleRes}
                    >
                      <label className="custom-file-uploadres">
                        Choose File
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf"
                          className="z-10 absolute opacity-0 w-0 h-0"
                          required
                        />
                      </label>
                      <button
                        type="submit"
                        className="mt-1 w-full max-w-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-2 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <form
                method="PATCH"
                encType="multipart/form-data"
                // className="profileForm"
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
                onSubmit={handleSubmit}
              >
                <div className="skillsOuterBox">
                  <div className="skillsInnerBox">
                    <h3 className="text-xl lg:text-xl font-bold text-white mb-2 mt-2">
                      Skills & Interests
                    </h3>
                    <label className="text-sm font-medium text-gray-300">
                      Skills:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="skills_and_interests.skills"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      Interests:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="skills_and_interests.interests"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <br />
                  </div>
                  <div className="skillsInnerBox">
                    <h3 className="text-xl lg:text-xl font-bold text-white mb-2 mt-2">
                      Portfolio
                    </h3>
                    <label className="text-sm font-medium text-gray-300">
                      GitHub:
                    </label>
                    <br />
                    <input
                      type="url"
                      name="portfolio.github"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      LinkedIn:
                    </label>
                    <br />
                    <input
                      type="url"
                      name="portfolio.linkedIn"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      Personal Website:
                    </label>
                    <br />
                    <input
                      type="url"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="portfolio.personal_website"
                    />
                    <br />
                  </div>
                </div>
                <div className="finalOuterBox">
                  <div className="finalInnerBox1">
                    <h3 className="text-xl lg:text-xl font-bold text-white mb-2 mt-2">
                      Looking For Opportunities
                    </h3>
                    <label className="text-sm font-medium text-gray-300">
                      Internships:
                    </label>
                    <input
                      type="checkbox"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="looking_for.internships"
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      Freelance Projects:
                    </label>
                    <input
                      type="checkbox"
                      name="looking_for.freelance_projects"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      Startup:
                    </label>
                    <input
                      type="checkbox"
                      name="looking_for.startup"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <br />

                    <label className="text-sm font-medium text-gray-300">
                      Learning/Teaching:
                    </label>
                    <input
                      type="checkbox"
                      name="looking_for.learning_teaching"
                      className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <br />
                  </div>
                  <div className="finalInnerBox1">
                    <div className="finalInnerBox2">
                      <h3 className="text-xl lg:text-xl font-bold text-white mb-2 mt-2">
                        Employment Availability
                      </h3>
                      <label className="text-sm font-medium text-gray-300">
                        Availability:
                      </label>
                      <select
                        name="availability"
                        className="w-full z-10 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="Fulltime" className="text-black">
                          Fulltime
                        </option>
                        <option value="Part-time" className="text-black">
                          Part-time
                        </option>
                        <option value="Freelance" className="text-black">
                          Freelance
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-16 w-full max-w-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default StudentProfilePage;
