import "./App.css";
import ReUsableForm from "./components/ReUsableForm/ReUsableForm";
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data',data)
  };

  const handleUpdateProfile = data => {
    console.log('update profile',data)
  };

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm
        formTitle={"Sign up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
        <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <ReUsableForm
        formTitle={"Profile Update"}
        submitBtnText="update"
        handleSubmit={handleUpdateProfile}
      >

<div>
  <h2>Update Profile</h2>
<p>Always keep your profile updated</p>
</div>

      </ReUsableForm>
    </>
  );
}

export default App;
