// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../redux/features/Auth/authSlice";
// import { useLogin } from "../redux/features/Auth/useLogin";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const loginMutation = useLogin();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginMutation.mutate(
//       { username, password },
//       {
//         onSuccess: (data) => {
//           dispatch(
//             setCredentials({
//               user: {
//                 id: data.id,
//                 username: data.username,
//                 email: data.email,
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 image: data.image,
//               },
//               token: data.accessToken,
//             })
//           );
//         },
//         onError: (err) => {
//           console.error("Login failed:", err);
//         },
//       }
//     );
//   };

//   return (
//     <form
//       className="
//     login-form "
//       onSubmit={handleSubmit}
//     >
//       <div className="h-[100vh] flex flex-col justify-center items-center bg-blue-400 p-4 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <p className="text-gray-600 mb-4">
//           Please enter your credentials to login.
//         </p>

//         <input
//           type="text"
//           placeholder="Username"
//           className="mb-2 p-2 border border-gray-300 rounded
//        "
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className="mb-2 p-2 border border-gray-300 rounded"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
//         >
//           {loginMutation.isPending ? "Logging in..." : "Login"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;
import React from 'react'

const LoginForm = () => {
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm