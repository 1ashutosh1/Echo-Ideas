import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleGoogleClick = async() => {
    provider.setCustomParameters({prompt: 'select_account'})
    try {
      const resultsFromGoogle = await signInWithPopup(auth,provider);
      const res = await fetch(`${backendUrl}/api/auth/google`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
        credentials: "include",
      })
      const data = await res.json();
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button type="button" gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2"/>
      Continue with Google
    </Button>
  )
}
