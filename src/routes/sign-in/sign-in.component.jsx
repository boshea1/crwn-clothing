import {
    signInWithGooglePopup,
    createUserProfileDocument,
} from '../../utils/firebase/firebase.utils.ts';
import './sign-in.styles.scss'

const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      createUserProfileDocument(response);
    };
  
return (
    <div className='container'>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;