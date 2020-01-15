import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import CareSelectForm from './care_select/care_select_form';
import ScheduleContainer from './schedule/schedule_container';
import IndexContainer from './index/index_container';
import DocAvailabilityFormContainer from './doc_availability_form/doc_availability_form_container';
import MeetingConfirmContainer from './meeting_confirm/meeting_confirm_container';
import MeetingIndexContainer from './meeting_index/meeting_index_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* both logged in and loggout out users can access*/}
      <ProtectedRoute exact path="/care_select" component={CareSelectForm} />
      <ProtectedRoute exact path="/schedule" component={ScheduleContainer} />
      <ProtectedRoute exact path="/meeting_confirm/:meetingId" component={MeetingConfirmContainer} />
      <ProtectedRoute exact path="/meeting_index" component={MeetingIndexContainer} />
      <Route path="/doc_availability_form" component={DocAvailabilityFormContainer} />
      <ProtectedRoute exact path="" component={IndexContainer}/>
      

    </Switch>
    
    
  </div>
);

export default App;




